# Deployment Quick Start Guide

## Overview
This guide will help you set up the new GCP-based deployment pipeline in **under 30 minutes**.

---

## Prerequisites

- [ ] GCP account with billing enabled
- [ ] `gcloud` CLI installed ([install guide](https://cloud.google.com/sdk/docs/install))
- [ ] GitHub repository admin access
- [ ] Basic terminal/command line knowledge

---

## Quick Setup (Phase 1 - Staging)

### Step 1: Run the Setup Script (5 minutes)

```bash
# Make sure you're in the project directory
cd /Users/carlosribeiro/Documents/GitHub/coalex-ai-site

# Run the GCP setup script
./GCP_SETUP.sh

# If you get permission denied:
chmod +x GCP_SETUP.sh
./GCP_SETUP.sh
```

This script will:
- ✅ Create staging and production storage buckets
- ✅ Configure website hosting
- ✅ Create service accounts with proper permissions
- ✅ Generate service account keys

### Step 2: Add GitHub Secrets (5 minutes)

1. Copy the service account keys:
   ```bash
   cat staging-key.json | pbcopy  # macOS
   # or
   cat staging-key.json  # Copy manually
   ```

2. Go to GitHub:
   - Navigate to: `https://github.com/carlosmlribeiro/coalex-ai-site/settings/secrets/actions`
   - Click "New repository secret"
   - Name: `GCP_SA_KEY_STAGING`
   - Value: Paste the staging-key.json contents
   - Click "Add secret"

3. Repeat for production:
   ```bash
   cat prod-key.json | pbcopy
   ```
   - Name: `GCP_SA_KEY_PROD`
   - Value: Paste the prod-key.json contents

4. **IMPORTANT:** Delete the key files:
   ```bash
   rm staging-key.json prod-key.json
   ```

### Step 3: Deploy to Staging (2 minutes)

```bash
# Commit the new workflow files
git add .github/workflows/
git commit -m "Add GCP deployment workflows"
git push origin main
```

GitHub Actions will automatically:
1. Build the website
2. Deploy to staging bucket
3. Comment on your commit with the staging URL

### Step 4: Verify Staging Deployment (5 minutes)

1. Check GitHub Actions:
   - Go to: `https://github.com/carlosmlribeiro/coalex-ai-site/actions`
   - Look for "Deploy to Staging" workflow
   - Wait for green checkmark ✅

2. Visit staging URL:
   ```
   https://storage.googleapis.com/coalex-staging-website/index.html
   ```

3. Test checklist:
   - [ ] Homepage loads
   - [ ] All sections visible
   - [ ] LinkedIn link works
   - [ ] Email links work (founders@coalex.ai)
   - [ ] Book Demo / Join Waitlist buttons work
   - [ ] Privacy Policy page loads
   - [ ] Cookie Policy page loads

---

## Production Deployment (Phase 2)

### When to Deploy to Production

Only after:
- ✅ Staging fully tested
- ✅ Stakeholder approval
- ✅ DNS ready (if switching from GitHub Pages)

### How to Deploy

1. Go to GitHub Actions
2. Click "Deploy to Production"
3. Click "Run workflow"
4. Type: `deploy-to-production`
5. Click "Run workflow"

### After Production Deployment

1. Verify at: https://coalex.ai (after DNS update)
2. Monitor for issues
3. Keep GitHub Pages running initially (fallback)

---

## Common Commands

### View Staging Site
```bash
open "https://storage.googleapis.com/coalex-staging-website/index.html"
```

### Manual Deploy to Staging
```bash
npm run build
gsutil -m rsync -r dist/ gs://coalex-staging-website
```

### View GCP Buckets
```bash
gsutil ls gs://coalex-staging-website
gsutil ls gs://coalex-prod-website
```

### Check Deployment Logs
```bash
# In GitHub: Actions → Select workflow → View logs
```

---

## Troubleshooting

### Error: "Permission denied"
- **Solution:** Make sure you ran `gcloud auth login` and set the correct project
  ```bash
  gcloud auth login
  gcloud config set project coalex-ai
  ```

### Error: "Bucket already exists"
- **Solution:** This is fine! The bucket already exists, script will continue

### Error: "Service account already exists"
- **Solution:** This is fine! The service account was created previously

### Staging deployment fails on GitHub Actions
- **Check:** GitHub secrets are correctly set (GCP_SA_KEY_STAGING)
- **Check:** Service account has permissions on the bucket
- **Fix:** Re-run the GCP_SETUP.sh script

### Website loads but images are missing
- **Check:** Build completed successfully
- **Check:** dist/ folder contains all assets
- **Fix:** Rebuild and redeploy
  ```bash
  npm run build
  gsutil -m rsync -r dist/ gs://coalex-staging-website
  ```

---

## Architecture Diagram

```
┌─────────────────┐
│   GitHub Repo   │
│  (main branch)  │
└────────┬────────┘
         │
         │ Push Commit
         ▼
┌─────────────────┐
│ GitHub Actions  │
│  Build & Test   │
└────────┬────────┘
         │
         ├──────────────────────┐
         │                      │
         ▼                      ▼
┌─────────────────┐    ┌──────────────────┐
│  GCS Staging    │    │  GCS Production  │
│   Auto Deploy   │    │ Manual Approval  │
└────────┬────────┘    └────────┬─────────┘
         │                      │
         ▼                      ▼
  staging-url.gcs       coalex.ai (via CDN)
```

---

## Cost Breakdown

### Expected Monthly Costs

**Staging Environment:**
- Storage: ~$0.10 (small site)
- Bandwidth: ~$1-2 (low traffic)
- Operations: ~$0.10
- **Total: ~$1-3/month**

**Production Environment:**
- Storage: ~$0.10
- Bandwidth: ~$5-10 (moderate traffic)
- CDN: ~$2-5 (after setup)
- Operations: ~$0.50
- **Total: ~$8-15/month**

**Combined: ~$10-20/month** (much cheaper than alternatives!)

---

## Next Steps

### Immediate (Today)
1. ✅ Run GCP_SETUP.sh
2. ✅ Add GitHub secrets
3. ✅ Deploy to staging
4. ✅ Test staging URL

### This Week
1. ⏳ Internal review of staging
2. ⏳ Get stakeholder approval
3. ⏳ Plan production cutover date

### Next Week
1. ⏳ Set up custom domain (staging.coalex.ai)
2. ⏳ Configure Cloud CDN
3. ⏳ Deploy to production
4. ⏳ Update DNS to point to GCP

### Future Enhancements
1. ⏳ Add Terraform for infrastructure as code
2. ⏳ Set up preview deployments for PRs
3. ⏳ Add automated Lighthouse tests
4. ⏳ Configure monitoring and alerts

---

## Support

- **Full Plan:** See `DEPLOYMENT_PLAN.md`
- **Issues:** Create a GitHub issue
- **Questions:** Contact DevOps team

---

## Rollback Procedures

### If staging breaks:
```bash
# Roll back to previous commit
git revert HEAD
git push origin main
# GitHub Actions will auto-deploy the previous version
```

### If production breaks:
```bash
# Option 1: Restore from backup
BACKUP_DATE="20251210-120000"  # Use actual backup timestamp
gsutil -m rsync -r gs://coalex-prod-backups/backup-$BACKUP_DATE/ gs://coalex-prod-website

# Option 2: Redeploy previous tag
git checkout v2024-12-09-42  # Use actual tag
# Trigger production workflow manually
```

---

**Last Updated:** 2025-12-10
**Status:** Phase 1 Ready ✅
**Phase 2 Status:** Pending stakeholder approval
