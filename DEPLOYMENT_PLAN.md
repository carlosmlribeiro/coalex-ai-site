# Coalex.ai Website - GCP Deployment Plan

## Overview
Migrate from GitHub Pages to GCP with staging/production environments, similar to docs.coalex.ai deployment.

---

## Phase 1: Setup Staging Environment (Keep Existing Site)

### Goals
- Deploy new website to GCP staging environment
- Internal testing and approval
- Zero disruption to existing coalex.ai website
- Learn GCP deployment workflow

### 1.1 GCP Infrastructure Setup

#### Option A: Cloud Storage + Cloud CDN (Recommended for Static Sites)
**Pros:** Cost-effective, simple, fast global CDN, similar to GitHub Pages
**Cons:** Static only (but your site is static)

**Setup:**
```bash
# Create GCP buckets
gsutil mb -p coalex-ai gs://coalex-staging-website
gsutil mb -p coalex-ai gs://coalex-prod-website

# Enable public access
gsutil iam ch allUsers:objectViewer gs://coalex-staging-website
gsutil iam ch allUsers:objectViewer gs://coalex-prod-website

# Configure as website
gsutil web set -m index.html -e 404.html gs://coalex-staging-website
gsutil web set -m index.html -e 404.html gs://coalex-prod-website

# Enable Cloud CDN (recommended)
gcloud compute backend-buckets create coalex-staging-backend --gcs-bucket-name=coalex-staging-website
gcloud compute backend-buckets create coalex-prod-backend --gcs-bucket-name=coalex-prod-website
```

#### Option B: Cloud Run (Alternative - More Flexible)
**Pros:** Can add server-side logic later, easy rollbacks, traffic splitting
**Cons:** Slightly more complex, higher cost

**Setup:**
```bash
# Deploy with Cloud Run
gcloud run deploy coalex-staging \
  --source . \
  --region us-central1 \
  --allow-unauthenticated

gcloud run deploy coalex-prod \
  --source . \
  --region us-central1 \
  --allow-unauthenticated
```

### 1.2 Staging URL Configuration

**Staging URL Options:**
1. **GCP Generated URL** (Easiest - no DNS needed)
   - Cloud Storage: `https://storage.googleapis.com/coalex-staging-website/index.html`
   - Cloud Run: `https://coalex-staging-[hash]-uc.a.run.app`
   - **Recommendation:** Use this for Phase 1

2. **Custom Subdomain** (Better UX)
   - `staging.coalex.ai` or `preview.coalex.ai`
   - Requires DNS setup (see below)

3. **Internal GCP URL** (Most secure)
   - Use Cloud IAP (Identity-Aware Proxy)
   - Only accessible to team members
   ```bash
   gcloud iap web enable --resource-type=backend-services
   ```

### 1.3 CI/CD Pipeline - GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GCP

on:
  push:
    branches:
      - main        # Deploy to staging on every commit
  workflow_dispatch:
    inputs:
      environment:
        description: 'Deployment environment'
        required: true
        default: 'staging'
        type: choice
        options:
          - staging
          - production

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist/

  deploy-staging:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    environment: staging
    steps:
      - uses: actions/download-artifact@v3
        with:
          name: dist
          path: dist

      - name: Authenticate to Google Cloud
        uses: google-github-actions/auth@v1
        with:
          credentials_json: ${{ secrets.GCP_SA_KEY_STAGING }}

      - name: Deploy to Cloud Storage (Staging)
        run: |
          gsutil -m rsync -r -d dist/ gs://coalex-staging-website
          gsutil -m setmeta -h "Cache-Control:public, max-age=300" gs://coalex-staging-website/**

      - name: Invalidate CDN Cache
        run: |
          gcloud compute url-maps invalidate-cdn-cache coalex-staging-lb \
            --path "/*" \
            --async

  deploy-production:
    needs: build
    runs-on: ubuntu-latest
    if: github.event_name == 'workflow_dispatch' && github.event.inputs.environment == 'production'
    environment: production
    steps:
      - uses: actions/download-artifact@v3
        with:
          name: dist
          path: dist

      - name: Authenticate to Google Cloud
        uses: google-github-actions/auth@v1
        with:
          credentials_json: ${{ secrets.GCP_SA_KEY_PROD }}

      - name: Deploy to Cloud Storage (Production)
        run: |
          gsutil -m rsync -r -d dist/ gs://coalex-prod-website
          gsutil -m setmeta -h "Cache-Control:public, max-age=3600" gs://coalex-prod-website/**

      - name: Invalidate CDN Cache
        run: |
          gcloud compute url-maps invalidate-cdn-cache coalex-prod-lb \
            --path "/*" \
            --async

      - name: Create deployment tag
        run: |
          git tag -a "v$(date +'%Y%m%d-%H%M%S')" -m "Production deployment"
          git push origin --tags
```

### 1.4 Service Account Setup

```bash
# Create service accounts
gcloud iam service-accounts create coalex-staging-deployer \
  --display-name="Coalex Staging Deployer"

gcloud iam service-accounts create coalex-prod-deployer \
  --display-name="Coalex Production Deployer"

# Grant permissions
gcloud projects add-iam-policy-binding coalex-ai \
  --member="serviceAccount:coalex-staging-deployer@coalex-ai.iam.gserviceaccount.com" \
  --role="roles/storage.objectAdmin"

gcloud projects add-iam-policy-binding coalex-ai \
  --member="serviceAccount:coalex-prod-deployer@coalex-ai.iam.gserviceaccount.com" \
  --role="roles/storage.objectAdmin"

# Create keys
gcloud iam service-accounts keys create staging-key.json \
  --iam-account=coalex-staging-deployer@coalex-ai.iam.gserviceaccount.com

gcloud iam service-accounts keys create prod-key.json \
  --iam-account=coalex-prod-deployer@coalex-ai.iam.gserviceaccount.com

# Add to GitHub Secrets:
# GCP_SA_KEY_STAGING = contents of staging-key.json
# GCP_SA_KEY_PROD = contents of prod-key.json
```

### 1.5 DNS Configuration (Optional for Phase 1)

If you want `staging.coalex.ai` instead of GCP URL:

```bash
# Get load balancer IP
gcloud compute addresses create coalex-staging-ip --global
gcloud compute addresses describe coalex-staging-ip --global

# Add DNS record in your DNS provider:
# staging.coalex.ai A [STAGING_IP]
# OR
# staging.coalex.ai CNAME c.storage.googleapis.com
```

### 1.6 Phase 1 Testing Checklist

- [ ] Deploy to staging automatically on commit
- [ ] Verify staging URL is accessible
- [ ] Test all pages (Home, Privacy Policy, Cookie Policy)
- [ ] Test all CTAs (Book Demo, Join Waitlist)
- [ ] Test LinkedIn links
- [ ] Test email links (founders@coalex.ai)
- [ ] Test HubSpot form integration
- [ ] Test Microsoft Clarity tracking
- [ ] Mobile responsive testing
- [ ] Performance testing (Lighthouse)
- [ ] Get stakeholder approval

---

## Phase 2: Production Deployment & Migration

### Goals
- Switch coalex.ai to new GCP-hosted site
- Deprecate GitHub Pages
- Zero downtime migration

### 2.1 Pre-Migration Checklist

- [ ] All Phase 1 testing complete
- [ ] Stakeholder sign-off on staging
- [ ] SSL certificate configured
- [ ] CDN properly configured
- [ ] Monitoring and alerts set up
- [ ] Rollback plan documented
- [ ] Communication plan for team

### 2.2 SSL/TLS Certificate Setup

```bash
# Create SSL certificate
gcloud compute ssl-certificates create coalex-cert \
  --domains=coalex.ai,www.coalex.ai \
  --global

# Verify certificate status
gcloud compute ssl-certificates describe coalex-cert --global

# Configure HTTPS load balancer
gcloud compute url-maps create coalex-prod-lb \
  --default-backend-bucket=coalex-prod-backend

gcloud compute target-https-proxies create coalex-https-proxy \
  --url-map=coalex-prod-lb \
  --ssl-certificates=coalex-cert

gcloud compute forwarding-rules create coalex-https-rule \
  --global \
  --target-https-proxy=coalex-https-proxy \
  --address=coalex-prod-ip \
  --ports=443
```

### 2.3 DNS Cutover Strategy

**Option A: Gradual Migration (Recommended)**
1. Lower TTL on existing DNS records (24 hours before)
   ```
   coalex.ai A [OLD_IP] TTL 300
   ```

2. Deploy production site to GCP
   ```bash
   # Trigger manual production deployment
   gh workflow run deploy.yml -f environment=production
   ```

3. Test using hosts file first
   ```bash
   # Add to /etc/hosts
   [NEW_IP] coalex.ai
   ```

4. Update DNS to point to GCP
   ```
   coalex.ai A [NEW_GCP_IP] TTL 300
   www.coalex.ai CNAME coalex.ai TTL 300
   ```

5. Monitor for 24-48 hours

6. Increase TTL after verification
   ```
   coalex.ai A [NEW_GCP_IP] TTL 3600
   ```

**Option B: Instant Cutover**
- Only if you're confident in testing
- Higher risk but faster

### 2.4 Monitoring & Observability

```bash
# Set up uptime checks
gcloud monitoring uptime-checks create https coalex-prod-uptime \
  --resource-labels=host=coalex.ai \
  --protocol=HTTPS

# Set up alerts
gcloud alpha monitoring policies create \
  --notification-channels=[YOUR_CHANNEL] \
  --display-name="Coalex Website Down" \
  --condition-display-name="Site Unavailable" \
  --condition-threshold-value=0.9 \
  --condition-threshold-duration=300s
```

### 2.5 Rollback Plan

If issues occur during migration:

```bash
# Quick DNS rollback
# Change DNS back to GitHub Pages IP: 185.199.108.153

# Or if using Cloud CDN:
gcloud compute url-maps set-default-service coalex-prod-lb \
  --default-backend-bucket=[OLD_BACKEND]
```

### 2.6 Deprecate GitHub Pages

After successful migration (wait 1-2 weeks):

```bash
# In GitHub repo settings:
# Settings → Pages → Source → None

# Keep repo but disable GitHub Pages
# Update README to point to new deployment method
```

---

## Cost Estimates

### Cloud Storage + CDN (Recommended)
- **Staging:** ~$1-5/month
  - Storage: $0.020/GB
  - Bandwidth: $0.08-0.12/GB
  - Operations: Minimal

- **Production:** ~$10-30/month
  - Storage: $0.020/GB
  - Bandwidth: $0.08-0.12/GB (depends on traffic)
  - Cloud CDN: $0.04-0.08/GB
  - SSL Certificate: Free (managed)

### Cloud Run (Alternative)
- **Staging:** ~$5-10/month
- **Production:** ~$20-50/month
  - Depends on traffic
  - Pay per request

---

## Comparison with docs.coalex.ai

Assuming docs.coalex.ai uses similar setup:

| Feature | docs.coalex.ai | New coalex.ai |
|---------|---------------|---------------|
| Hosting | GCP (likely Cloud Storage) | GCP Cloud Storage + CDN |
| SSL | Managed Certificate | Managed Certificate |
| CDN | Cloud CDN | Cloud CDN |
| CI/CD | Probably GitHub Actions | GitHub Actions |
| Staging | Unknown | Yes (auto-deploy) |
| Cost | ~$5-20/month | ~$10-30/month |

**Recommendation:** Use the same infrastructure as docs.coalex.ai for consistency.

---

## Timeline

### Phase 1: Staging Setup (1-2 weeks)
- **Week 1:**
  - Day 1-2: GCP infrastructure setup
  - Day 3-4: CI/CD pipeline configuration
  - Day 5: Deploy to staging and test

- **Week 2:**
  - Day 1-3: Internal testing and bug fixes
  - Day 4-5: Stakeholder review and approval

### Phase 2: Production Migration (1 week)
- **Week 3:**
  - Day 1-2: SSL certificate setup
  - Day 3: DNS preparation (lower TTL)
  - Day 4: Production deployment
  - Day 5: DNS cutover

- **Week 4:**
  - Monitoring and validation
  - Deprecate GitHub Pages

**Total Timeline:** 3-4 weeks

---

## Security Considerations

1. **Service Account Keys:** Store securely in GitHub Secrets, rotate regularly
2. **IAM Permissions:** Use least-privilege principle
3. **HTTPS Only:** Force HTTPS redirects
4. **CORS Headers:** Configure if needed for API calls
5. **CSP Headers:** Add Content Security Policy
6. **Rate Limiting:** Configure on Cloud CDN
7. **DDoS Protection:** Included with Cloud Armor (optional)

---

## Recommended Tools

- **Infrastructure as Code:** Terraform (optional, for reproducibility)
- **Secret Management:** Google Secret Manager
- **Monitoring:** Google Cloud Monitoring + Cloud Logging
- **Performance:** Google Lighthouse CI
- **Error Tracking:** Sentry (optional)

---

## Next Steps

1. **Immediate:**
   - [ ] Review and approve this plan
   - [ ] Set up GCP project billing
   - [ ] Create staging bucket
   - [ ] Configure GitHub Actions secrets

2. **This Week:**
   - [ ] Implement CI/CD pipeline
   - [ ] Deploy to staging
   - [ ] Begin internal testing

3. **Next Week:**
   - [ ] Stakeholder approval
   - [ ] Plan production cutover date
   - [ ] Set up monitoring

4. **Future:**
   - [ ] Consider Terraform for infrastructure
   - [ ] Add automated testing in CI/CD
   - [ ] Set up preview deployments for PRs

---

## Questions to Answer

1. **GCP Project:** Do you have an existing GCP project, or should we create a new one?
2. **Domain Management:** Who manages DNS for coalex.ai?
3. **Staging URL:** Preference for GCP-generated URL vs. staging.coalex.ai?
4. **Budget:** What's the monthly budget for hosting?
5. **Team Access:** Who needs access to GCP console?
6. **Docs Setup:** Can we review docs.coalex.ai infrastructure to match?

---

## Support & Documentation

- [GCP Storage Website Hosting](https://cloud.google.com/storage/docs/hosting-static-website)
- [Cloud CDN Setup](https://cloud.google.com/cdn/docs/setting-up-cdn)
- [GitHub Actions GCP Auth](https://github.com/google-github-actions/auth)
- [SSL Certificate Management](https://cloud.google.com/load-balancing/docs/ssl-certificates)

---

**Document Version:** 1.0
**Last Updated:** 2025-12-10
**Owner:** Coalex.ai DevOps Team
