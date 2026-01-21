#!/bin/bash
# Step 1: Create GCS Buckets for Staging and Production
# After this, GitHub Actions will deploy to these buckets
# Access at: https://storage.googleapis.com/[BUCKET_NAME]/index.html

set -e

PROJECT_ID="coalex-ai"
STAGING_BUCKET="coalex-staging-website"
PROD_BUCKET="coalex-prod-website"
BACKUP_BUCKET="coalex-prod-backups"
REGION="us-central1"

echo "=== Creating GCS Buckets ==="
echo ""

# Set project
gcloud config set project $PROJECT_ID

# Create buckets
echo "Creating staging bucket..."
gsutil mb -p $PROJECT_ID -c STANDARD -l $REGION gs://$STAGING_BUCKET 2>/dev/null || echo "✓ Already exists"

echo "Creating production bucket..."
gsutil mb -p $PROJECT_ID -c STANDARD -l $REGION gs://$PROD_BUCKET 2>/dev/null || echo "✓ Already exists"

echo "Creating backup bucket..."
gsutil mb -p $PROJECT_ID -c STANDARD -l $REGION gs://$BACKUP_BUCKET 2>/dev/null || echo "✓ Already exists"

# Configure for web hosting
echo ""
echo "Configuring for website hosting..."
gsutil web set -m index.html -e 404.html gs://$STAGING_BUCKET
gsutil web set -m index.html -e 404.html gs://$PROD_BUCKET

# Make public (using defacl to avoid org policy conflicts)
echo ""
echo "Making buckets public..."
gsutil defacl set public-read gs://$STAGING_BUCKET 2>/dev/null || echo "⚠ Could not set public ACL (will work via load balancer)"
gsutil defacl set public-read gs://$PROD_BUCKET 2>/dev/null || echo "⚠ Could not set public ACL (will work via load balancer)"

# Try to disable uniform bucket-level access if set
gsutil uniformbucketlevelaccess set off gs://$STAGING_BUCKET 2>/dev/null || true
gsutil uniformbucketlevelaccess set off gs://$PROD_BUCKET 2>/dev/null || true

# Set ACL on buckets
gsutil acl ch -u AllUsers:R gs://$STAGING_BUCKET 2>/dev/null || echo "⚠ Could not set bucket ACL (will work via load balancer)"
gsutil acl ch -u AllUsers:R gs://$PROD_BUCKET 2>/dev/null || echo "⚠ Could not set bucket ACL (will work via load balancer)"

# Create service accounts for GitHub Actions
echo ""
echo "Creating service accounts for GitHub Actions..."

gcloud iam service-accounts create coalex-staging-deployer \
  --display-name="Coalex Staging Deployer" 2>/dev/null || echo "✓ Staging SA exists"

gcloud iam service-accounts create coalex-prod-deployer \
  --display-name="Coalex Production Deployer" 2>/dev/null || echo "✓ Production SA exists"

# Grant permissions
echo ""
echo "Granting permissions..."
gsutil iam ch serviceAccount:coalex-staging-deployer@$PROJECT_ID.iam.gserviceaccount.com:objectAdmin gs://$STAGING_BUCKET
gsutil iam ch serviceAccount:coalex-prod-deployer@$PROJECT_ID.iam.gserviceaccount.com:objectAdmin gs://$PROD_BUCKET
gsutil iam ch serviceAccount:coalex-prod-deployer@$PROJECT_ID.iam.gserviceaccount.com:objectAdmin gs://$BACKUP_BUCKET

# Create keys
echo ""
echo "Creating service account keys..."
gcloud iam service-accounts keys create staging-key.json \
  --iam-account=coalex-staging-deployer@$PROJECT_ID.iam.gserviceaccount.com 2>/dev/null || echo "! Key may already exist"

gcloud iam service-accounts keys create prod-key.json \
  --iam-account=coalex-prod-deployer@$PROJECT_ID.iam.gserviceaccount.com 2>/dev/null || echo "! Key may already exist"

echo ""
echo "=== ✓ Buckets Created Successfully ==="
echo ""
echo "Staging Bucket: gs://$STAGING_BUCKET"
echo "Production Bucket: gs://$PROD_BUCKET"
echo ""
echo "Next Steps:"
echo "1. Add these secrets to GitHub:"
echo "   - GCP_SA_KEY_STAGING (contents of staging-key.json)"
echo "   - GCP_SA_KEY_PROD (contents of prod-key.json)"
echo ""
echo "2. View keys:"
echo "   cat staging-key.json"
echo "   cat prod-key.json"
echo ""
echo "3. After adding to GitHub, DELETE the key files:"
echo "   rm staging-key.json prod-key.json"
echo ""
echo "4. Push to GitHub to trigger deployment"
echo ""
echo "5. Access staging at:"
echo "   https://storage.googleapis.com/$STAGING_BUCKET/index.html"
echo ""
