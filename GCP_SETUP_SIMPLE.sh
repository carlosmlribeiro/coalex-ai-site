#!/bin/bash
# Coalex.ai Website - Simple GCP Setup (Using Existing Load Balancer)
# This script ONLY creates buckets and service accounts
# No CDN, no new load balancers - reuses existing infrastructure

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}=== Coalex.ai Website - Simple GCP Setup ===${NC}\n"

# Configuration
PROJECT_ID="coalex-ai"  # Update if needed
REGION="us-central1"
STAGING_BUCKET="coalex-staging-website"
PROD_BUCKET="coalex-prod-website"
BACKUP_BUCKET="coalex-prod-backups"

echo -e "${YELLOW}Setting GCP project to: $PROJECT_ID${NC}"
gcloud config set project $PROJECT_ID

# Step 1: Create Storage Buckets
echo -e "\n${GREEN}Step 1: Creating Storage Buckets${NC}"

echo "Creating staging bucket..."
gsutil mb -p $PROJECT_ID -c STANDARD -l $REGION gs://$STAGING_BUCKET 2>/dev/null || echo "✓ Staging bucket already exists"

echo "Creating production bucket..."
gsutil mb -p $PROJECT_ID -c STANDARD -l $REGION gs://$PROD_BUCKET 2>/dev/null || echo "✓ Production bucket already exists"

echo "Creating backup bucket..."
gsutil mb -p $PROJECT_ID -c STANDARD -l $REGION gs://$BACKUP_BUCKET 2>/dev/null || echo "✓ Backup bucket already exists"

# Step 2: Configure for website hosting
echo -e "\n${GREEN}Step 2: Configuring Buckets for Website Hosting${NC}"

gsutil web set -m index.html -e 404.html gs://$STAGING_BUCKET
gsutil web set -m index.html -e 404.html gs://$PROD_BUCKET

# Step 3: Make public
echo -e "\n${GREEN}Step 3: Making Buckets Public${NC}"

gsutil iam ch allUsers:objectViewer gs://$STAGING_BUCKET
gsutil iam ch allUsers:objectViewer gs://$PROD_BUCKET

# Step 4: Create Service Accounts
echo -e "\n${GREEN}Step 4: Creating Service Accounts${NC}"

gcloud iam service-accounts create coalex-staging-deployer \
  --display-name="Coalex Staging Deployer" 2>/dev/null || echo "✓ Staging SA exists"

gcloud iam service-accounts create coalex-prod-deployer \
  --display-name="Coalex Production Deployer" 2>/dev/null || echo "✓ Production SA exists"

# Step 5: Grant permissions
echo -e "\n${GREEN}Step 5: Granting Permissions${NC}"

gsutil iam ch serviceAccount:coalex-staging-deployer@$PROJECT_ID.iam.gserviceaccount.com:objectAdmin gs://$STAGING_BUCKET
gsutil iam ch serviceAccount:coalex-prod-deployer@$PROJECT_ID.iam.gserviceaccount.com:objectAdmin gs://$PROD_BUCKET
gsutil iam ch serviceAccount:coalex-prod-deployer@$PROJECT_ID.iam.gserviceaccount.com:objectAdmin gs://$BACKUP_BUCKET

# Step 6: Create keys
echo -e "\n${GREEN}Step 6: Creating Service Account Keys${NC}"

gcloud iam service-accounts keys create staging-key.json \
  --iam-account=coalex-staging-deployer@$PROJECT_ID.iam.gserviceaccount.com 2>/dev/null || echo "! Could not create key (may exist)"

gcloud iam service-accounts keys create prod-key.json \
  --iam-account=coalex-prod-deployer@$PROJECT_ID.iam.gserviceaccount.com 2>/dev/null || echo "! Could not create key (may exist)"

# Display summary
echo -e "\n${GREEN}=== Setup Complete! ===${NC}\n"

echo -e "${YELLOW}Staging URL (direct GCS):${NC}"
echo "https://storage.googleapis.com/$STAGING_BUCKET/index.html"

echo -e "\n${YELLOW}GitHub Secrets Needed:${NC}"
echo "1. GCP_SA_KEY_STAGING (contents of staging-key.json)"
echo "2. GCP_SA_KEY_PROD (contents of prod-key.json)"

echo -e "\n${YELLOW}Next: Add to Existing Load Balancer${NC}"
echo "Run these commands to see your current setup:"
echo ""
echo "  gcloud compute url-maps list"
echo "  gcloud compute backend-buckets list"
echo "  gcloud compute url-maps describe [YOUR_LB_NAME]"
echo ""
echo "Share the output so we can integrate with existing infrastructure."

echo -e "\n${YELLOW}Test Deployment:${NC}"
echo "  npm run build"
echo "  gsutil -m rsync -r dist/ gs://$STAGING_BUCKET"
echo "  open https://storage.googleapis.com/$STAGING_BUCKET/index.html"

echo -e "\n${GREEN}Done! 🚀${NC}"
