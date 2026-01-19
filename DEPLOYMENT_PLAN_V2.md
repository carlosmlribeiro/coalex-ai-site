# Coalex.ai Website - GCP Deployment Plan V2
## Using Existing Load Balancer Infrastructure

## Overview
Deploy coalex.ai website using **existing GCP load balancer infrastructure** (same setup as docs.coalex.ai).

---

## Architecture (Simplified)

```
GitHub → GitHub Actions → GCS Buckets → Existing Load Balancer → coalex.ai
                                                              → docs.coalex.ai
```

**Key Point:** We add new backend buckets to your existing load balancer, no new infrastructure needed.

---

## Phase 1: Staging Setup

### What We Need to Know First

1. **Existing Load Balancer Details:**
   - Load balancer name?
   - URL map name?
   - Current backend buckets?

2. **docs.coalex.ai Setup:**
   - Which bucket does it use?
   - How is it configured in the load balancer?

3. **Domain Configuration:**
   - Do you manage DNS, or is it through a provider?
   - SSL certificate setup?

### 1.1 Create Storage Buckets Only

```bash
# Create staging bucket
gsutil mb -p coalex-ai -c STANDARD -l us-central1 gs://coalex-staging-website

# Create production bucket
gsutil mb -p coalex-ai -c STANDARD -l us-central1 gs://coalex-prod-website

# Create backup bucket
gsutil mb -p coalex-ai -c STANDARD -l us-central1 gs://coalex-prod-backups

# Configure for website hosting
gsutil web set -m index.html -e 404.html gs://coalex-staging-website
gsutil web set -m index.html -e 404.html gs://coalex-prod-website

# Make public
gsutil iam ch allUsers:objectViewer gs://coalex-staging-website
gsutil iam ch allUsers:objectViewer gs://coalex-prod-website
```

### 1.2 Add Backend Buckets to Existing Load Balancer

**Option A: Separate Path (Recommended for Phase 1)**
Route `/preview/*` or `/staging/*` to staging bucket

```bash
# Add staging backend bucket to existing LB
gcloud compute backend-buckets create coalex-staging-backend \
  --gcs-bucket-name=coalex-staging-website \
  --enable-cdn  # Or --no-enable-cdn based on your preference

# Add to existing URL map
gcloud compute url-maps add-path-matcher [YOUR_LB_NAME] \
  --path-matcher-name=staging-matcher \
  --default-service=coalex-staging-backend \
  --new-hosts=staging.coalex.ai
```

**Option B: Direct GCS URL (Simplest for Phase 1)**
Just use the GCS bucket URL directly:
```
https://storage.googleapis.com/coalex-staging-website/index.html
```
No load balancer changes needed initially!

### 1.3 Service Accounts (Same as Before)

```bash
# Reuse existing service accounts or create new ones
gcloud iam service-accounts create coalex-staging-deployer \
  --display-name="Coalex Staging Deployer"

gcloud iam service-accounts create coalex-prod-deployer \
  --display-name="Coalex Production Deployer"

# Grant permissions
gsutil iam ch serviceAccount:coalex-staging-deployer@coalex-ai.iam.gserviceaccount.com:objectAdmin \
  gs://coalex-staging-website

gsutil iam ch serviceAccount:coalex-prod-deployer@coalex-ai.iam.gserviceaccount.com:objectAdmin \
  gs://coalex-prod-website

gsutil iam ch serviceAccount:coalex-prod-deployer@coalex-ai.iam.gserviceaccount.com:objectAdmin \
  gs://coalex-prod-backups
```

---

## Phase 2: Production - Add to Existing Load Balancer

### 2.1 Add Production Backend

```bash
# Create backend bucket for production
gcloud compute backend-buckets create coalex-prod-backend \
  --gcs-bucket-name=coalex-prod-website

# Get your existing URL map name
gcloud compute url-maps list

# Add production backend to existing URL map
# This depends on your current setup - we'll need to see it first
```

### 2.2 DNS Configuration

**Assuming you already have:**
- Load balancer with static IP
- SSL certificate for coalex.ai
- coalex.ai pointing to load balancer

**What we need to do:**
- Just add new backend to existing host rules
- Update URL map to route coalex.ai to new bucket

```bash
# Example (adjust based on your setup):
gcloud compute url-maps add-host-rule [YOUR_LB_NAME] \
  --hosts=coalex.ai,www.coalex.ai \
  --path-matcher-name=main-site \
  --default-service=coalex-prod-backend
```

### 2.3 Migration Strategy

**Low-Risk Approach:**
1. Keep GitHub Pages running on coalex.ai
2. Add `preview.coalex.ai` or `new.coalex.ai` to load balancer
3. Test thoroughly at new subdomain
4. When ready: update existing load balancer rule to point to new bucket
5. Instant switch (no DNS propagation delay!)

---

## Simplified GitHub Actions (No CDN Invalidation)

### Staging Workflow

```yaml
# .github/workflows/deploy-staging.yml
name: Deploy to Staging

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'

      - run: npm ci
      - run: npm run build

      - uses: google-github-actions/auth@v2
        with:
          credentials_json: ${{ secrets.GCP_SA_KEY_STAGING }}

      - uses: google-github-actions/setup-gcloud@v2

      - name: Deploy to GCS
        run: |
          gsutil -m rsync -r -d dist/ gs://coalex-staging-website
          gsutil -m setmeta -h "Cache-Control:public, max-age=300" \
            "gs://coalex-staging-website/**"
```

**That's it!** No CDN invalidation, no complex URL map updates.

### Production Workflow

Same as staging, just different bucket:

```yaml
- name: Deploy to GCS
  run: |
    # Backup first
    gsutil -m cp -r gs://coalex-prod-website gs://coalex-prod-backups/backup-$(date +%Y%m%d-%H%M%S)

    # Deploy
    gsutil -m rsync -r -d dist/ gs://coalex-prod-website
    gsutil -m setmeta -h "Cache-Control:public, max-age=3600" \
      "gs://coalex-prod-website/**"
```

---

## Questions to Answer

Before we proceed, I need to know:

1. **Load Balancer Name:**
   ```bash
   gcloud compute url-maps list
   # What's the output?
   ```

2. **Current Backend Configuration:**
   ```bash
   gcloud compute backend-buckets list
   # What does docs.coalex.ai use?
   ```

3. **URL Map Configuration:**
   ```bash
   gcloud compute url-maps describe [YOUR_LB_NAME]
   # Can you share the output?
   ```

4. **Preferred Staging URL:**
   - Option A: `https://storage.googleapis.com/coalex-staging-website/index.html` (no changes needed)
   - Option B: `staging.coalex.ai` (requires DNS + LB update)
   - Option C: `preview.coalex.ai` (requires DNS + LB update)

5. **SSL Certificate:**
   - Do you use Google-managed certificates?
   - Can we add staging.coalex.ai to existing cert?

---

## Recommended Immediate Steps

**Today:**
```bash
# 1. Create buckets only (safe, no infrastructure changes)
gsutil mb gs://coalex-staging-website
gsutil mb gs://coalex-prod-website
gsutil mb gs://coalex-prod-backups

# 2. Configure as websites
gsutil web set -m index.html -e 404.html gs://coalex-staging-website
gsutil web set -m index.html -e 404.html gs://coalex-prod-website

# 3. Make public
gsutil iam ch allUsers:objectViewer gs://coalex-staging-website
gsutil iam ch allUsers:objectViewer gs://coalex-prod-website

# 4. Deploy to staging (test)
npm run build
gsutil -m rsync -r dist/ gs://coalex-staging-website

# 5. Access at:
# https://storage.googleapis.com/coalex-staging-website/index.html
```

**This Week (after we understand your LB setup):**
- Add backend buckets to existing load balancer
- Configure host rules
- Test staging at proper URL

**Next Week:**
- Production cutover (just update URL map, instant!)

---

## Cost Comparison

### Without CDN (Your Preference)
- Storage: ~$0.20/month
- Bandwidth from GCS: ~$0.12/GB (instead of $0.04-0.08/GB with CDN)
- Operations: ~$0.10/month
- **Total: ~$5-15/month** (depending on traffic)

### With Existing Load Balancer
- **Additional cost: ~$0** (just storage and bandwidth)
- Load balancer already paid for (shared with docs.coalex.ai)

Much simpler and still cost-effective!

---

## Next Actions Required

Please run these commands and share the output:

```bash
# 1. List load balancers
gcloud compute url-maps list

# 2. List backend buckets
gcloud compute backend-buckets list

# 3. Describe your URL map (replace with actual name)
gcloud compute url-maps describe [YOUR_LB_NAME]

# 4. List SSL certificates
gcloud compute ssl-certificates list
```

Once I see your existing setup, I can provide exact commands to integrate the website.

---

**Status:** Waiting for infrastructure details
**Estimated Time to Production:** 1 week (once we have the info)
**Risk Level:** Very Low (just adding buckets to existing LB)
