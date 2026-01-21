# Production Deployment Guide

## Current Status

✅ **Staging deployed**: https://coalex.carlos-ribeiro.me
⏳ **Production pending**: coalex.ai (currently on GitHub Pages)

## Architecture

```
DNS → Load Balancer (34.54.143.30) → Backend Service → Auth-Proxy → GCS Bucket
```

- **Load Balancer**: `coalex-collector-urlmap` (shared with docs/traces/creator)
- **Backend Service**: `coalex-collector-backend`
- **Auth-Proxy**: Cloud Run service in `europe-west1`
- **Staging Bucket**: `gs://coalex-staging-website`
- **Production Bucket**: `gs://coalex-prod-website`

## How It Works

The auth-proxy (`/Users/carlosribeiro/Documents/GitHub/coalex-otlp-collector/auth-proxy/main.go`) detects the hostname and serves static files from the appropriate GCS bucket:

- `docs.coalex.ai` → serves from `coalex-ai-docs`
- `coalex.carlos-ribeiro.me` → serves from `coalex-staging-website`
- `coalex.ai` → will serve from `coalex-prod-website` (after production deployment)

## Steps to Deploy Production

### 1. Update auth-proxy code

Edit `/Users/carlosribeiro/Documents/GitHub/coalex-otlp-collector/auth-proxy/main.go`:

```go
// Add after line 71 (after staging check):
if strings.Contains(host, "coalex.ai") && !strings.Contains(host, "docs.") && !strings.Contains(host, "traces.") && !strings.Contains(host, "creator.") {
    serveFromGCS(w, r, "coalex-prod-website")
    return
}
```

Commit and push:
```bash
cd /Users/carlosribeiro/Documents/GitHub/coalex-otlp-collector
git add auth-proxy/main.go
git commit -m "Add production website support (coalex.ai)"
git push origin main
```

### 2. Grant bucket permissions

```bash
gsutil iam ch serviceAccount:coalex-auth-proxy-sa@coalex-ai.iam.gserviceaccount.com:objectViewer gs://coalex-prod-website
```

### 3. Deploy auth-proxy

```bash
cd /Users/carlosribeiro/Documents/GitHub/coalex-otlp-collector/auth-proxy
gcloud builds submit --tag gcr.io/coalex-ai/coalex-auth-proxy:latest .

AUTH_URL=$(gcloud run services describe coalex-auth-service --region=europe-west1 --format="value(status.url)")
COLLECTOR_URL=$(gcloud run services describe coalex-otlp-collector --region=europe-west1 --format="value(status.url)")

gcloud run deploy coalex-auth-proxy \
  --image gcr.io/coalex-ai/coalex-auth-proxy:latest \
  --platform managed \
  --region=europe-west1 \
  --allow-unauthenticated \
  --set-env-vars AUTH_SERVICE_URL=$AUTH_URL,COLLECTOR_URL=$COLLECTOR_URL,CREATOR_URL=https://creator.coalex.ai \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 1 \
  --max-instances 10 \
  --concurrency 100
```

### 4. Create SSL certificate for production

```bash
gcloud compute ssl-certificates create coalex-prod-ssl \
  --domains=coalex.ai,www.coalex.ai \
  --global
```

### 5. Add certificate to HTTPS proxy

Get current certificates:
```bash
gcloud compute target-https-proxies describe coalex-collector-https-proxy --global --format="value(sslCertificates[])"
```

Add production cert to the list:
```bash
gcloud compute target-https-proxies update coalex-collector-https-proxy \
  --ssl-certificates=traces-coalex-ai-ssl,creator-only-ssl,docs-coalex-ai-ssl,coalex-staging-ssl,coalex-prod-ssl \
  --global
```

### 6. Update load balancer URL map

**IMPORTANT**: Backup first!
```bash
gcloud compute url-maps export coalex-collector-urlmap \
  --destination=~/lb-backups/urlmap-backup-before-prod-$(date +%Y%m%d-%H%M%S).yaml \
  --global
```

Create new URL map with production:
```yaml
# File: urlmap-with-production.yaml
name: coalex-collector-urlmap
defaultService: https://www.googleapis.com/compute/v1/projects/coalex-ai/global/backendServices/coalex-collector-backend
hostRules:
- hosts:
  - coalex.ai
  - www.coalex.ai
  pathMatcher: production-matcher
- hosts:
  - coalex.carlos-ribeiro.me
  pathMatcher: staging-matcher
- hosts:
  - docs.coalex.ai
  pathMatcher: docs-matcher
- hosts:
  - traces.coalex.ai
  - creator.coalex.ai
  pathMatcher: default-matcher
pathMatchers:
- name: production-matcher
  defaultService: https://www.googleapis.com/compute/v1/projects/coalex-ai/global/backendServices/coalex-collector-backend
- name: staging-matcher
  defaultService: https://www.googleapis.com/compute/v1/projects/coalex-ai/global/backendServices/coalex-collector-backend
- name: docs-matcher
  defaultService: https://www.googleapis.com/compute/v1/projects/coalex-ai/global/backendServices/coalex-collector-backend
- name: default-matcher
  defaultService: https://www.googleapis.com/compute/v1/projects/coalex-ai/global/backendServices/coalex-collector-backend
```

Apply:
```bash
gcloud compute url-maps import coalex-collector-urlmap \
  --source=urlmap-with-production.yaml \
  --global
```

### 7. Update DNS

**Current DNS** (GitHub Pages):
```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

**New DNS** (Load Balancer):
```
A    @      34.54.143.30
A    www    34.54.143.30
```

**DNS Strategy**:
1. Lower TTL to 300 (5 minutes) 24 hours before
2. Test with hosts file: `34.54.143.30 coalex.ai`
3. Update DNS A records
4. Wait 15-60 minutes for SSL cert to provision
5. Monitor: `gcloud compute ssl-certificates describe coalex-prod-ssl --global`
6. Test: `https://coalex.ai`
7. Raise TTL back to 3600 after 24 hours

### 8. Verify deployment

```bash
# Check SSL cert status
gcloud compute ssl-certificates describe coalex-prod-ssl --global

# Test production site
curl -I https://coalex.ai
curl -I https://www.coalex.ai

# Check auth-proxy logs
gcloud run services logs read coalex-auth-proxy --region=europe-west1 --limit=50
```

## Rollback Procedure

### Quick DNS rollback (5-10 minutes):
```bash
# Change DNS A records back to GitHub Pages IPs
A    @    185.199.108.153
```

### Load balancer rollback (immediate):
```bash
# Restore previous URL map
gcloud compute url-maps import coalex-collector-urlmap \
  --source=~/lb-backups/urlmap-backup-before-prod-TIMESTAMP.yaml \
  --global
```

### Auth-proxy rollback:
```bash
# Revert code changes
cd /Users/carlosribeiro/Documents/GitHub/coalex-otlp-collector
git revert HEAD
git push origin main

# Rebuild and redeploy
cd auth-proxy
gcloud builds submit --tag gcr.io/coalex-ai/coalex-auth-proxy:latest .
# ... (same deploy command as step 3)
```

## Testing Checklist

Before DNS cutover:
- [ ] Staging site works: https://coalex.carlos-ribeiro.me
- [ ] All pages load correctly
- [ ] Forms submit (HubSpot integration)
- [ ] Analytics tracking (Clarity)
- [ ] Mobile responsive
- [ ] Policy pages work (/privacy-policy, /cookie-policy)

After DNS cutover:
- [ ] https://coalex.ai loads
- [ ] https://www.coalex.ai redirects or loads
- [ ] SSL certificate valid (no browser warnings)
- [ ] All existing hosts still work: docs.coalex.ai, traces.coalex.ai, creator.coalex.ai
- [ ] GitHub Pages can be deprecated

## Cost Impact

- **Current**: GitHub Pages (free)
- **New**:
  - Cloud Run (auth-proxy): ~$0-5/month (shared, already running)
  - Cloud Storage: ~$0.10-0.20/month
  - Cloud CDN: $0 (uses existing load balancer)
  - Load Balancer: $0 (shared with traces/docs/creator)
  - SSL certs: Free (Google-managed)
  - **Total additional**: ~$0.10-5/month

## Important Files

- Auth-proxy code: `/Users/carlosribeiro/Documents/GitHub/coalex-otlp-collector/auth-proxy/main.go`
- Deploy script: `/Users/carlosribeiro/Documents/GitHub/coalex-otlp-collector/deploy/deploy.sh`
- URL map backups: `/Users/carlosribeiro/Documents/GitHub/coalex-ai-site/lb-backups/`
- Production bucket: `gs://coalex-prod-website`
- GitHub Actions workflow: `.github/workflows/2-deploy.yml` (deploys on push to redesign-staging)

## Current URLs

- **Staging**: https://coalex.carlos-ribeiro.me (live)
- **Production (GitHub Pages)**: https://coalex.ai (current live site)
- **Production (GCP, future)**: https://coalex.ai (after DNS cutover)
