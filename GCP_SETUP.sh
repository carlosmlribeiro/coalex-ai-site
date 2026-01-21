#!/bin/bash
# Coalex.ai Website - GCP Infrastructure Setup Script
# Run this script to set up staging and production environments

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== Coalex.ai Website - GCP Setup ===${NC}\n"

# Configuration
PROJECT_ID="coalex-ai"  # Update with your GCP project ID
REGION="us-central1"
STAGING_BUCKET="coalex-staging-website"
PROD_BUCKET="coalex-prod-website"
BACKUP_BUCKET="coalex-prod-backups"

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}Error: gcloud CLI is not installed${NC}"
    echo "Install from: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

echo -e "${YELLOW}Setting GCP project to: $PROJECT_ID${NC}"
gcloud config set project $PROJECT_ID

# Step 1: Create Storage Buckets
echo -e "\n${GREEN}Step 1: Creating Storage Buckets${NC}"

echo "Creating staging bucket..."
gsutil mb -p $PROJECT_ID -c STANDARD -l $REGION gs://$STAGING_BUCKET || echo "Staging bucket already exists"

echo "Creating production bucket..."
gsutil mb -p $PROJECT_ID -c STANDARD -l $REGION gs://$PROD_BUCKET || echo "Production bucket already exists"

echo "Creating backup bucket..."
gsutil mb -p $PROJECT_ID -c STANDARD -l $REGION gs://$BACKUP_BUCKET || echo "Backup bucket already exists"

# Step 2: Configure buckets for website hosting
echo -e "\n${GREEN}Step 2: Configuring Buckets for Website Hosting${NC}"

echo "Configuring staging bucket..."
gsutil web set -m index.html -e 404.html gs://$STAGING_BUCKET

echo "Configuring production bucket..."
gsutil web set -m index.html -e 404.html gs://$PROD_BUCKET

# Step 3: Enable public access
echo -e "\n${GREEN}Step 3: Enabling Public Access${NC}"

echo "Making staging bucket public..."
gsutil iam ch allUsers:objectViewer gs://$STAGING_BUCKET

echo "Making production bucket public..."
gsutil iam ch allUsers:objectViewer gs://$PROD_BUCKET

# Step 4: Enable CORS (if needed for APIs)
echo -e "\n${GREEN}Step 4: Configuring CORS${NC}"

cat > cors.json <<EOF
[
  {
    "origin": ["https://coalex.ai", "https://staging.coalex.ai", "https://storage.googleapis.com"],
    "method": ["GET", "HEAD"],
    "responseHeader": ["Content-Type", "Cache-Control"],
    "maxAgeSeconds": 3600
  }
]
EOF

gsutil cors set cors.json gs://$STAGING_BUCKET
gsutil cors set cors.json gs://$PROD_BUCKET
rm cors.json

# Step 5: Create Service Accounts
echo -e "\n${GREEN}Step 5: Creating Service Accounts${NC}"

echo "Creating staging deployer service account..."
gcloud iam service-accounts create coalex-staging-deployer \
  --display-name="Coalex Staging Deployer" \
  --description="Service account for deploying to staging environment" \
  || echo "Staging service account already exists"

echo "Creating production deployer service account..."
gcloud iam service-accounts create coalex-prod-deployer \
  --display-name="Coalex Production Deployer" \
  --description="Service account for deploying to production environment" \
  || echo "Production service account already exists"

# Step 6: Grant IAM permissions
echo -e "\n${GREEN}Step 6: Granting IAM Permissions${NC}"

echo "Granting staging permissions..."
gsutil iam ch serviceAccount:coalex-staging-deployer@$PROJECT_ID.iam.gserviceaccount.com:objectAdmin gs://$STAGING_BUCKET

echo "Granting production permissions..."
gsutil iam ch serviceAccount:coalex-prod-deployer@$PROJECT_ID.iam.gserviceaccount.com:objectAdmin gs://$PROD_BUCKET
gsutil iam ch serviceAccount:coalex-prod-deployer@$PROJECT_ID.iam.gserviceaccount.com:objectAdmin gs://$BACKUP_BUCKET

# Step 7: Create Service Account Keys
echo -e "\n${GREEN}Step 7: Creating Service Account Keys${NC}"

echo "Creating staging key..."
gcloud iam service-accounts keys create staging-key.json \
  --iam-account=coalex-staging-deployer@$PROJECT_ID.iam.gserviceaccount.com \
  || echo "Could not create staging key (may already exist)"

echo "Creating production key..."
gcloud iam service-accounts keys create prod-key.json \
  --iam-account=coalex-prod-deployer@$PROJECT_ID.iam.gserviceaccount.com \
  || echo "Could not create production key (may already exist)"

# Step 8: Display URLs and next steps
echo -e "\n${GREEN}=== Setup Complete! ===${NC}\n"

echo -e "${YELLOW}Staging URL:${NC}"
echo "https://storage.googleapis.com/$STAGING_BUCKET/index.html"

echo -e "\n${YELLOW}Production URL (after DNS configuration):${NC}"
echo "https://coalex.ai"

echo -e "\n${YELLOW}Next Steps:${NC}"
echo "1. Add the following secrets to GitHub:"
echo "   - GCP_SA_KEY_STAGING (contents of staging-key.json)"
echo "   - GCP_SA_KEY_PROD (contents of prod-key.json)"
echo ""
echo "   GitHub Repo → Settings → Secrets and variables → Actions → New repository secret"
echo ""
echo "2. To view the service account keys:"
echo "   cat staging-key.json"
echo "   cat prod-key.json"
echo ""
echo "3. After adding secrets, commit and push to main branch to trigger staging deployment"
echo ""
echo "4. For production deployment:"
echo "   - Go to GitHub Actions → Deploy to Production → Run workflow"
echo "   - Type 'deploy-to-production' to confirm"
echo ""
echo "5. ${RED}IMPORTANT:${NC} Delete the key files after adding to GitHub:"
echo "   rm staging-key.json prod-key.json"
echo ""
echo "6. Optional: Set up custom domain and CDN (see DEPLOYMENT_PLAN.md)"

echo -e "\n${GREEN}Service Account Emails:${NC}"
echo "Staging: coalex-staging-deployer@$PROJECT_ID.iam.gserviceaccount.com"
echo "Production: coalex-prod-deployer@$PROJECT_ID.iam.gserviceaccount.com"

echo -e "\n${YELLOW}Bucket URLs:${NC}"
echo "Staging: gs://$STAGING_BUCKET"
echo "Production: gs://$PROD_BUCKET"
echo "Backups: gs://$BACKUP_BUCKET"

echo -e "\n${GREEN}All done! 🚀${NC}"
