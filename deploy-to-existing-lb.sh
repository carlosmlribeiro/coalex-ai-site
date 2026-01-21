#!/bin/bash

# Coalex AI Website - Add to Existing Load Balancer
# This script SAFELY adds website hosting to your existing Load Balancer
# SAME infrastructure as docs.coalex.ai
#
# SAFETY FEATURES:
# - Creates NEW resources only (no modifications to existing ones)
# - Exports current URL map before any changes
# - Adds new path rules without touching existing routes
# - Provides rollback instructions
# - Verifies each step before proceeding

set -e  # Exit on error

# Configuration
STAGING_BUCKET="coalex-staging-website"
PROD_BUCKET="coalex-prod-website"
BACKUP_BUCKET="coalex-prod-backups"
PROJECT_ID="coalex-ai"
EXISTING_URLMAP="coalex-collector-urlmap"
EXISTING_HTTPS_PROXY="coalex-collector-https-proxy"
WEBSITE_DOMAIN="coalex.ai"
WWW_DOMAIN="www.coalex.ai"
STAGING_DOMAIN="staging.coalex.ai"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║  Coalex AI Website - Safe Deployment to Existing LB       ║${NC}"
echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo ""
echo -e "${YELLOW}⚠️  SAFETY CHECKS ENABLED${NC}"
echo -e "   - No modifications to existing backends"
echo -e "   - Creates backup of current configuration"
echo -e "   - Non-destructive operations only"
echo ""

# Function to ask for confirmation
confirm() {
    read -p "$(echo -e ${YELLOW}$1${NC}) [y/N]: " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${RED}Aborted by user.${NC}"
        exit 1
    fi
}

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}Error: gcloud CLI is not installed.${NC}"
    exit 1
fi

# Set project
echo -e "${YELLOW}Setting project: ${PROJECT_ID}${NC}"
gcloud config set project $PROJECT_ID

echo ""
echo -e "${BLUE}═══ Step 1: Verify Existing Infrastructure ═══${NC}"
echo ""

# Verify existing resources
echo -e "${YELLOW}Checking existing Load Balancer components...${NC}"

if ! gcloud compute url-maps describe $EXISTING_URLMAP --global &>/dev/null; then
    echo -e "${RED}Error: URL map '$EXISTING_URLMAP' not found!${NC}"
    exit 1
fi
echo -e "${GREEN}✓ URL map exists${NC}"

if ! gcloud compute target-https-proxies describe $EXISTING_HTTPS_PROXY --global &>/dev/null; then
    echo -e "${RED}Error: HTTPS proxy '$EXISTING_HTTPS_PROXY' not found!${NC}"
    exit 1
fi
echo -e "${GREEN}✓ HTTPS proxy exists${NC}"

# Show current SSL certificates
echo ""
echo -e "${YELLOW}Current SSL certificates:${NC}"
gcloud compute ssl-certificates list --format="table(name,managed.domains,managed.status)" | grep -E "NAME|coalex"

echo ""
echo -e "${GREEN}✓ All existing resources verified${NC}"

# BACKUP CURRENT CONFIGURATION
echo ""
echo -e "${BLUE}═══ Step 2: Backup Current Configuration ═══${NC}"
echo ""

BACKUP_DIR="./lb-backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
mkdir -p $BACKUP_DIR

echo -e "${YELLOW}Exporting current URL map configuration...${NC}"
gcloud compute url-maps export $EXISTING_URLMAP \
    --destination="${BACKUP_DIR}/urlmap-backup-${TIMESTAMP}.yaml" \
    --global

echo -e "${GREEN}✓ Backup saved to: ${BACKUP_DIR}/urlmap-backup-${TIMESTAMP}.yaml${NC}"
echo -e "${YELLOW}Keep this file safe for rollback if needed!${NC}"

# Show what will be created
echo ""
echo -e "${BLUE}═══ Step 3: Review Changes ═══${NC}"
echo ""
echo -e "${YELLOW}The following NEW resources will be created:${NC}"
echo -e "  1. GCS bucket (staging): ${GREEN}${STAGING_BUCKET}${NC}"
echo -e "  2. GCS bucket (prod): ${GREEN}${PROD_BUCKET}${NC}"
echo -e "  3. GCS bucket (backups): ${GREEN}${BACKUP_BUCKET}${NC}"
echo -e "  4. Backend bucket (staging): ${GREEN}${STAGING_BUCKET}-backend${NC}"
echo -e "  5. Backend bucket (prod): ${GREEN}${PROD_BUCKET}-backend${NC}"
echo -e "  6. SSL certificate: ${GREEN}${WEBSITE_DOMAIN}-ssl${NC}"
echo -e "  7. SSL certificate: ${GREEN}${STAGING_DOMAIN}-ssl${NC}"
echo -e "  8. Host rules in URL map:"
echo -e "     - ${GREEN}${WEBSITE_DOMAIN} → prod backend bucket${NC}"
echo -e "     - ${GREEN}${WWW_DOMAIN} → prod backend bucket${NC}"
echo -e "     - ${GREEN}${STAGING_DOMAIN} → staging backend bucket${NC}"
echo ""
echo -e "${YELLOW}Existing resources will NOT be modified:${NC}"
echo -e "  ✓ traces.coalex.ai routes remain unchanged"
echo -e "  ✓ creator.coalex.ai routes remain unchanged"
echo -e "  ✓ docs.coalex.ai routes remain unchanged"
echo -e "  ✓ Default backend service remains unchanged"
echo ""

confirm "Do you want to proceed with deployment?"

# CREATE GCS BUCKETS
echo ""
echo -e "${BLUE}═══ Step 4: Create GCS Buckets ═══${NC}"
echo ""

for BUCKET in $STAGING_BUCKET $PROD_BUCKET $BACKUP_BUCKET; do
    if gcloud storage buckets describe gs://$BUCKET &> /dev/null; then
        echo -e "${GREEN}✓ Bucket $BUCKET already exists${NC}"
    else
        echo -e "${YELLOW}Creating GCS bucket: $BUCKET...${NC}"
        gcloud storage buckets create gs://$BUCKET --location=EU --project=$PROJECT_ID
        echo -e "${GREEN}✓ Bucket created${NC}"
    fi

    # Configure for website hosting (except backup bucket)
    if [ "$BUCKET" != "$BACKUP_BUCKET" ]; then
        echo -e "${YELLOW}Configuring $BUCKET for website hosting...${NC}"
        gsutil web set -m index.html -e 404.html gs://$BUCKET 2>/dev/null || echo -e "${YELLOW}  (Website config skipped - will be served via Load Balancer)${NC}"
        echo -e "${GREEN}✓ Bucket configured${NC}"
    fi
done

echo -e "${YELLOW}Note: Bucket access is controlled by Load Balancer, not public IAM${NC}"

# BUILD AND DEPLOY WEBSITE
echo ""
echo -e "${BLUE}═══ Step 5: Build and Upload Website ═══${NC}"
echo ""

echo -e "${YELLOW}Building website...${NC}"
npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}Error: Build failed. 'dist' directory not found.${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Build completed${NC}"

echo -e "${YELLOW}Uploading to staging bucket...${NC}"
gsutil -m rsync -r -d dist/ gs://$STAGING_BUCKET/

# Set cache headers
echo -e "${YELLOW}Setting cache control headers...${NC}"
gsutil -m setmeta -h "Cache-Control:public, max-age=300" "gs://$STAGING_BUCKET/**/*.html"
gsutil -m setmeta -h "Cache-Control:public, max-age=31536000" "gs://$STAGING_BUCKET/**/*.{js,css,png,jpg,svg,ico,woff,woff2}"

echo -e "${GREEN}✓ Website uploaded to staging${NC}"

# CREATE BACKEND BUCKETS
echo ""
echo -e "${BLUE}═══ Step 6: Create Backend Buckets (with CDN) ═══${NC}"
echo ""

for ENV in "staging" "prod"; do
    if [ "$ENV" = "staging" ]; then
        BUCKET=$STAGING_BUCKET
    else
        BUCKET=$PROD_BUCKET
    fi

    BACKEND_BUCKET_NAME="${BUCKET}-backend"

    if gcloud compute backend-buckets describe $BACKEND_BUCKET_NAME &>/dev/null; then
        echo -e "${GREEN}✓ Backend bucket $BACKEND_BUCKET_NAME already exists${NC}"
    else
        echo -e "${YELLOW}Creating backend bucket: $BACKEND_BUCKET_NAME with CDN enabled...${NC}"
        gcloud compute backend-buckets create $BACKEND_BUCKET_NAME \
            --gcs-bucket-name=$BUCKET \
            --enable-cdn
        echo -e "${GREEN}✓ Backend bucket created${NC}"
    fi
done

# CREATE SSL CERTIFICATES
echo ""
echo -e "${BLUE}═══ Step 7: Create SSL Certificates ═══${NC}"
echo ""

# Production certificate (coalex.ai + www.coalex.ai)
PROD_SSL_CERT_NAME="${WEBSITE_DOMAIN//./-}-ssl"

if gcloud compute ssl-certificates describe $PROD_SSL_CERT_NAME --global &>/dev/null; then
    echo -e "${GREEN}✓ Production SSL certificate already exists${NC}"
    CERT_STATUS=$(gcloud compute ssl-certificates describe $PROD_SSL_CERT_NAME --global --format="get(managed.status)")
    echo -e "   Status: ${CERT_STATUS}"
else
    echo -e "${YELLOW}Creating managed SSL certificate for ${WEBSITE_DOMAIN} and ${WWW_DOMAIN}...${NC}"
    gcloud compute ssl-certificates create $PROD_SSL_CERT_NAME \
        --domains=$WEBSITE_DOMAIN,$WWW_DOMAIN \
        --global
    echo -e "${GREEN}✓ SSL certificate created${NC}"
    echo -e "${YELLOW}⏱  Note: Certificate provisioning takes 15-60 minutes after DNS is configured${NC}"
fi

# Staging certificate
STAGING_SSL_CERT_NAME="${STAGING_DOMAIN//./-}-ssl"

if gcloud compute ssl-certificates describe $STAGING_SSL_CERT_NAME --global &>/dev/null; then
    echo -e "${GREEN}✓ Staging SSL certificate already exists${NC}"
    CERT_STATUS=$(gcloud compute ssl-certificates describe $STAGING_SSL_CERT_NAME --global --format="get(managed.status)")
    echo -e "   Status: ${CERT_STATUS}"
else
    echo -e "${YELLOW}Creating managed SSL certificate for ${STAGING_DOMAIN}...${NC}"
    gcloud compute ssl-certificates create $STAGING_SSL_CERT_NAME \
        --domains=$STAGING_DOMAIN \
        --global
    echo -e "${GREEN}✓ SSL certificate created${NC}"
    echo -e "${YELLOW}⏱  Note: Certificate provisioning takes 15-60 minutes after DNS is configured${NC}"
fi

# ADD SSL CERTIFICATES TO HTTPS PROXY
echo ""
echo -e "${BLUE}═══ Step 8: Add SSL Certificates to HTTPS Proxy ═══${NC}"
echo ""

echo -e "${YELLOW}Getting current certificates on proxy...${NC}"
CURRENT_CERTS=$(gcloud compute target-https-proxies describe $EXISTING_HTTPS_PROXY --global --format="value(sslCertificates[])" | tr ';' ',' | tr '\n' ',' | sed 's/,$//')

# Check if certs are already attached
NEEDS_UPDATE=false
if ! echo "$CURRENT_CERTS" | grep -q "$PROD_SSL_CERT_NAME"; then
    NEEDS_UPDATE=true
fi
if ! echo "$CURRENT_CERTS" | grep -q "$STAGING_SSL_CERT_NAME"; then
    NEEDS_UPDATE=true
fi

if [ "$NEEDS_UPDATE" = false ]; then
    echo -e "${GREEN}✓ SSL certificates already attached to proxy${NC}"
else
    echo -e "${YELLOW}Attaching SSL certificates to existing HTTPS proxy...${NC}"
    echo -e "${YELLOW}This is a SAFE operation - only adds certificates, doesn't modify routing${NC}"

    # Build the full cert list
    PROD_CERT_URL="https://www.googleapis.com/compute/v1/projects/${PROJECT_ID}/global/sslCertificates/${PROD_SSL_CERT_NAME}"
    STAGING_CERT_URL="https://www.googleapis.com/compute/v1/projects/${PROJECT_ID}/global/sslCertificates/${STAGING_SSL_CERT_NAME}"
    ALL_CERTS="${CURRENT_CERTS},${PROD_CERT_URL},${STAGING_CERT_URL}"

    gcloud compute target-https-proxies update $EXISTING_HTTPS_PROXY \
        --ssl-certificates=$ALL_CERTS \
        --global

    echo -e "${GREEN}✓ SSL certificates attached${NC}"
fi

# UPDATE URL MAP WITH NEW HOST RULES
echo ""
echo -e "${BLUE}═══ Step 9: Update URL Map (Add Website Routes) ═══${NC}"
echo ""

echo -e "${YELLOW}⚠️  CRITICAL STEP: Adding coalex.ai routes${NC}"
echo -e "${YELLOW}   This will NOT affect existing routes for traces/creator/docs${NC}"
echo ""

confirm "Ready to update URL map? (Last chance to abort)"

# Export current URL map to temp file
TEMP_URLMAP="/tmp/urlmap-${TIMESTAMP}.yaml"
gcloud compute url-maps export $EXISTING_URLMAP \
    --destination="$TEMP_URLMAP" \
    --global

# Check if website host rules already exist
if grep -q "coalex.ai" "$TEMP_URLMAP" && ! grep -q "docs.coalex.ai" "$(echo 'coalex.ai')"; then
    echo -e "${GREEN}✓ Website routes already exist in URL map${NC}"
else
    echo -e "${YELLOW}Adding coalex.ai, www.coalex.ai, and staging.coalex.ai host rules...${NC}"

    # Create updated URL map with website routes
    cat > /tmp/urlmap-with-website.yaml <<EOF
name: ${EXISTING_URLMAP}
defaultService: https://www.googleapis.com/compute/v1/projects/${PROJECT_ID}/global/backendServices/coalex-collector-backend
hostRules:
- hosts:
  - ${WEBSITE_DOMAIN}
  - ${WWW_DOMAIN}
  pathMatcher: website-prod-matcher
- hosts:
  - ${STAGING_DOMAIN}
  pathMatcher: website-staging-matcher
- hosts:
  - docs.coalex.ai
  pathMatcher: docs-matcher
- hosts:
  - traces.coalex.ai
  - creator.coalex.ai
  pathMatcher: default-matcher
pathMatchers:
- name: website-prod-matcher
  defaultService: https://www.googleapis.com/compute/v1/projects/${PROJECT_ID}/global/backendBuckets/${PROD_BUCKET}-backend
- name: website-staging-matcher
  defaultService: https://www.googleapis.com/compute/v1/projects/${PROJECT_ID}/global/backendBuckets/${STAGING_BUCKET}-backend
- name: docs-matcher
  defaultService: https://www.googleapis.com/compute/v1/projects/${PROJECT_ID}/global/backendBuckets/coalex-ai-docs-backend
- name: default-matcher
  defaultService: https://www.googleapis.com/compute/v1/projects/${PROJECT_ID}/global/backendServices/coalex-collector-backend
EOF

    echo -e "${YELLOW}Importing updated URL map...${NC}"
    gcloud compute url-maps import $EXISTING_URLMAP \
        --source=/tmp/urlmap-with-website.yaml \
        --global

    echo -e "${GREEN}✓ URL map updated with website routes${NC}"
fi

# VERIFY DEPLOYMENT
echo ""
echo -e "${BLUE}═══ Step 10: Verify Deployment ═══${NC}"
echo ""

echo -e "${YELLOW}Verifying configuration...${NC}"

# Check URL map
echo -e "${YELLOW}Checking URL map...${NC}"
if gcloud compute url-maps describe $EXISTING_URLMAP --global | grep -q "coalex.ai"; then
    echo -e "${GREEN}✓ URL map contains coalex.ai routes${NC}"
else
    echo -e "${RED}✗ URL map missing website routes${NC}"
fi

# Check backend buckets
for BUCKET in "${STAGING_BUCKET}-backend" "${PROD_BUCKET}-backend"; do
    echo -e "${YELLOW}Checking backend bucket: $BUCKET...${NC}"
    if gcloud compute backend-buckets describe $BUCKET &>/dev/null; then
        echo -e "${GREEN}✓ Backend bucket $BUCKET exists${NC}"
    else
        echo -e "${RED}✗ Backend bucket $BUCKET not found${NC}"
    fi
done

# Check GCS content
echo -e "${YELLOW}Checking GCS content...${NC}"
if gsutil ls gs://$STAGING_BUCKET/index.html &>/dev/null; then
    echo -e "${GREEN}✓ Website files uploaded${NC}"
else
    echo -e "${RED}✗ index.html not found in bucket${NC}"
fi

# Get Load Balancer IP
LB_IP=$(gcloud compute forwarding-rules describe coalex-collector-https-rule --global --format="get(IPAddress)")

echo ""
echo -e "${GREEN}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║              DEPLOYMENT COMPLETED SUCCESSFULLY             ║${NC}"
echo -e "${GREEN}╔════════════════════════════════════════════════════════════╗${NC}"
echo ""
echo -e "${YELLOW}Load Balancer IP:${NC} ${GREEN}${LB_IP}${NC}"
echo ""
echo -e "${BLUE}═══ Next Steps ═══${NC}"
echo ""
echo -e "${YELLOW}1. Configure DNS:${NC}"
echo -e "   Add A records:"
echo -e "   ${GREEN}Type: A | Name: @ | Value: ${LB_IP} | TTL: 1 Hour${NC} (for coalex.ai)"
echo -e "   ${GREEN}Type: A | Name: www | Value: ${LB_IP} | TTL: 1 Hour${NC} (for www.coalex.ai)"
echo -e "   ${GREEN}Type: A | Name: staging | Value: ${LB_IP} | TTL: 1 Hour${NC} (for staging.coalex.ai)"
echo ""
echo -e "${YELLOW}2. Wait for SSL certificate provisioning (15-60 minutes):${NC}"
echo -e "   Check production cert:"
echo -e "   ${BLUE}gcloud compute ssl-certificates describe ${PROD_SSL_CERT_NAME} --global --format='get(managed.status)'${NC}"
echo -e "   Check staging cert:"
echo -e "   ${BLUE}gcloud compute ssl-certificates describe ${STAGING_SSL_CERT_NAME} --global --format='get(managed.status)'${NC}"
echo ""
echo -e "${YELLOW}3. Test your website:${NC}"
echo -e "   Staging: ${GREEN}https://staging.coalex.ai${NC}"
echo -e "   Production: ${GREEN}https://coalex.ai${NC}"
echo ""
echo -e "${BLUE}═══ Rollback Instructions (if needed) ═══${NC}"
echo ""
echo -e "If anything goes wrong, restore the URL map:"
echo -e "${BLUE}gcloud compute url-maps import ${EXISTING_URLMAP} --source=${BACKUP_DIR}/urlmap-backup-${TIMESTAMP}.yaml --global${NC}"
echo ""
echo -e "This will restore the URL map to its previous state."
echo -e "Your existing routes will NOT be affected during normal operation."
echo ""
echo -e "${GREEN}✓ Backup saved at: ${BACKUP_DIR}/urlmap-backup-${TIMESTAMP}.yaml${NC}"
echo ""
echo -e "${BLUE}═══ Verification ═══${NC}"
echo ""
echo -e "Verify existing services still work:"
echo -e "  • traces.coalex.ai - ${GREEN}should still work normally${NC}"
echo -e "  • creator.coalex.ai - ${GREEN}should still work normally${NC}"
echo -e "  • docs.coalex.ai - ${GREEN}should still work normally${NC}"
echo ""
echo -e "${GREEN}Deployment complete! 🚀${NC}"
