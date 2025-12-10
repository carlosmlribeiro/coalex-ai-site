# Website Deployment to GCP

Simple 3-step deployment process using existing load balancer infrastructure.

## Overview

1. **Step 1**: Create GCS buckets and service accounts
2. **Step 2**: Auto-deploy via GitHub Actions
3. **Step 3**: Migrate to load balancer (after approval)

## Step 1: Setup Workload Identity

Run this once to set up infrastructure:

```bash
./1-create-buckets.sh
./1-setup-workload-identity.sh
```

This creates:
- `gs://coalex-staging-website` - Staging bucket
- `gs://coalex-prod-website` - Production bucket
- `gs://coalex-prod-backups` - Backup bucket
- Service accounts for GitHub Actions
- Workload Identity Federation (secure, keyless authentication)

After running, add these GitHub Secrets (values printed by script):
- `GCP_WORKLOAD_IDENTITY_PROVIDER`
- `GCP_STAGING_SA`
- `GCP_PROD_SA`

## Step 2: Auto-Deploy

Once GitHub Secrets are configured:

**Staging** (automatic):
- Push to `main` branch → auto-deploys to staging
- Access at: `https://storage.googleapis.com/coalex-staging-website/index.html`

**Production** (manual):
- Go to GitHub Actions → Deploy Website → Run workflow
- Select `production` from dropdown
- Creates backup, then deploys
- Access at: `https://storage.googleapis.com/coalex-prod-website/index.html`

## Step 3: Migrate to Load Balancer

**Only run after staging is approved!**

```bash
./3-migrate-to-load-balancer.sh
```

This will:
1. Create backend buckets with CDN enabled
2. Create SSL certificates for `coalex.ai`, `www.coalex.ai`, `staging.coalex.ai`
3. Add certificates to existing HTTPS proxy (`coalex-collector-https-proxy`)
4. Update URL map (`coalex-collector-urlmap`) to route:
   - `coalex.ai` → production bucket
   - `www.coalex.ai` → production bucket
   - `staging.coalex.ai` → staging bucket
5. Export backup of URL map to `./lb-backups/`

After running:
1. Update DNS A records (script will show the IP)
2. Wait 15-60 minutes for SSL certificates to provision
3. Test:
   - `https://staging.coalex.ai`
   - `https://coalex.ai`

## Architecture

```
GitHub Push → GitHub Actions Build → GCS Bucket → Load Balancer → coalex.ai
                                                          ↓
                                        (shares LB with docs.coalex.ai,
                                         traces.coalex.ai, creator.coalex.ai)
```

## Rollback

**DNS Rollback** (immediate):
- Change A records back to GitHub Pages: `185.199.108.153`

**URL Map Rollback**:
```bash
gcloud compute url-maps import coalex-collector-urlmap \
  --source=./lb-backups/urlmap-backup-TIMESTAMP.yaml \
  --global
```

## Cost Estimate

- Storage: ~$0.10-0.20/month (site is small)
- Bandwidth: ~$5-10/month (1000 visitors)
- CDN: $0 (shared with existing load balancer)
- **Total**: ~$5-15/month

## Files

- `1-create-buckets.sh` - Initial setup (run once)
- `2-deploy.yml` - GitHub Actions workflow (auto-deploy)
- `3-migrate-to-load-balancer.sh` - Load balancer integration (run after approval)
- Old files (can be deleted after migration):
  - `DEPLOYMENT_PLAN.md` (superseded)
  - `DEPLOYMENT_PLAN_V2.md` (superseded)
  - `DEPLOYMENT_QUICKSTART.md` (superseded)
  - `GCP_SETUP.sh` (superseded)
  - `GCP_SETUP_SIMPLE.sh` (superseded)
  - `.github/workflows/deploy-staging.yml` (superseded)
  - `.github/workflows/deploy-production.yml` (superseded)
