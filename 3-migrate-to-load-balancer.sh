#!/bin/bash
# Step 3: Migrate Website to Load Balancer
# Run this AFTER staging approval
# This will:
# 1. Add backend buckets to existing load balancer (coalex-collector-urlmap)
# 2. Create SSL certificates
# 3. Update URL map to serve coalex.ai from GCS
# 4. Provide DNS configuration instructions

set -e

PROJECT_ID="coalex-ai"
STAGING_BUCKET="coalex-staging-website"
PROD_BUCKET="coalex-prod-website"
EXISTING_URLMAP="coalex-collector-urlmap"
EXISTING_HTTPS_PROXY="coalex-collector-https-proxy"
WEBSITE_DOMAIN="coalex.ai"
WWW_DOMAIN="www.coalex.ai"
STAGING_DOMAIN="staging.coalex.ai"

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}=== Migrate Website to Load Balancer ===${NC}"
echo ""

# Confirmation
read -p "$(echo -e ${YELLOW}Have you tested staging and approved for production? [y/N]:${NC}) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Aborted."
    exit 1
fi

gcloud config set project $PROJECT_ID

# Backup current URL map
echo -e "${YELLOW}Backing up current URL map...${NC}"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
mkdir -p ./lb-backups
gcloud compute url-maps export $EXISTING_URLMAP \
    --destination="./lb-backups/urlmap-backup-${TIMESTAMP}.yaml" \
    --global
echo -e "${GREEN}✓ Backup saved${NC}"

# Create backend buckets
echo ""
echo -e "${YELLOW}Creating backend buckets...${NC}"

for ENV in "staging" "prod"; do
    if [ "$ENV" = "staging" ]; then
        BUCKET=$STAGING_BUCKET
    else
        BUCKET=$PROD_BUCKET
    fi

    BACKEND="${BUCKET}-backend"

    if gcloud compute backend-buckets describe $BACKEND &>/dev/null; then
        echo -e "${GREEN}✓ Backend $BACKEND exists${NC}"
    else
        gcloud compute backend-buckets create $BACKEND \
            --gcs-bucket-name=$BUCKET \
            --enable-cdn
        echo -e "${GREEN}✓ Created backend $BACKEND${NC}"
    fi
done

# Create SSL certificates
echo ""
echo -e "${YELLOW}Creating SSL certificates...${NC}"

# Production cert (coalex.ai + www)
PROD_CERT="coalex-ai-ssl"
if gcloud compute ssl-certificates describe $PROD_CERT --global &>/dev/null; then
    echo -e "${GREEN}✓ Production cert exists${NC}"
else
    gcloud compute ssl-certificates create $PROD_CERT \
        --domains=$WEBSITE_DOMAIN,$WWW_DOMAIN \
        --global
    echo -e "${GREEN}✓ Created production cert${NC}"
fi

# Staging cert
STAGING_CERT="staging-coalex-ai-ssl"
if gcloud compute ssl-certificates describe $STAGING_CERT --global &>/dev/null; then
    echo -e "${GREEN}✓ Staging cert exists${NC}"
else
    gcloud compute ssl-certificates create $STAGING_CERT \
        --domains=$STAGING_DOMAIN \
        --global
    echo -e "${GREEN}✓ Created staging cert${NC}"
fi

# Add certs to HTTPS proxy
echo ""
echo -e "${YELLOW}Adding SSL certificates to HTTPS proxy...${NC}"

CURRENT_CERTS=$(gcloud compute target-https-proxies describe $EXISTING_HTTPS_PROXY --global --format="value(sslCertificates[])" | tr ';' ',' | tr '\n' ',' | sed 's/,$//')

PROD_CERT_URL="https://www.googleapis.com/compute/v1/projects/${PROJECT_ID}/global/sslCertificates/${PROD_CERT}"
STAGING_CERT_URL="https://www.googleapis.com/compute/v1/projects/${PROJECT_ID}/global/sslCertificates/${STAGING_CERT}"

if echo "$CURRENT_CERTS" | grep -q "$PROD_CERT"; then
    echo -e "${GREEN}✓ Certificates already attached${NC}"
else
    ALL_CERTS="${CURRENT_CERTS},${PROD_CERT_URL},${STAGING_CERT_URL}"
    gcloud compute target-https-proxies update $EXISTING_HTTPS_PROXY \
        --ssl-certificates=$ALL_CERTS \
        --global
    echo -e "${GREEN}✓ Certificates attached${NC}"
fi

# Update URL map
echo ""
echo -e "${YELLOW}Updating URL map...${NC}"

cat > /tmp/urlmap-with-website.yaml <<EOF
name: ${EXISTING_URLMAP}
defaultService: https://www.googleapis.com/compute/v1/projects/${PROJECT_ID}/global/backendServices/coalex-collector-backend
hostRules:
- hosts:
  - ${WEBSITE_DOMAIN}
  - ${WWW_DOMAIN}
  pathMatcher: website-prod
- hosts:
  - ${STAGING_DOMAIN}
  pathMatcher: website-staging
- hosts:
  - docs.coalex.ai
  pathMatcher: docs
- hosts:
  - traces.coalex.ai
  - creator.coalex.ai
  pathMatcher: default
pathMatchers:
- name: website-prod
  defaultService: https://www.googleapis.com/compute/v1/projects/${PROJECT_ID}/global/backendBuckets/${PROD_BUCKET}-backend
- name: website-staging
  defaultService: https://www.googleapis.com/compute/v1/projects/${PROJECT_ID}/global/backendBuckets/${STAGING_BUCKET}-backend
- name: docs
  defaultService: https://www.googleapis.com/compute/v1/projects/${PROJECT_ID}/global/backendBuckets/coalex-ai-docs-backend
- name: default
  defaultService: https://www.googleapis.com/compute/v1/projects/${PROJECT_ID}/global/backendServices/coalex-collector-backend
EOF

gcloud compute url-maps import $EXISTING_URLMAP \
    --source=/tmp/urlmap-with-website.yaml \
    --global

echo -e "${GREEN}✓ URL map updated${NC}"

# Get LB IP
LB_IP=$(gcloud compute forwarding-rules describe coalex-collector-https-rule --global --format="get(IPAddress)")

echo ""
echo -e "${GREEN}=== Migration Complete ===${NC}"
echo ""
echo -e "${YELLOW}Load Balancer IP:${NC} ${LB_IP}"
echo ""
echo -e "${BLUE}DNS Configuration Needed:${NC}"
echo ""
echo "Update your DNS records:"
echo "  A    @        ${LB_IP}   (for coalex.ai)"
echo "  A    www      ${LB_IP}   (for www.coalex.ai)"
echo "  A    staging  ${LB_IP}   (for staging.coalex.ai)"
echo ""
echo -e "${YELLOW}Wait 15-60 minutes for SSL certificates to provision${NC}"
echo ""
echo "Check SSL cert status:"
echo "  gcloud compute ssl-certificates describe $PROD_CERT --global"
echo "  gcloud compute ssl-certificates describe $STAGING_CERT --global"
echo ""
echo -e "${YELLOW}After DNS propagates and SSL is ready:${NC}"
echo "  Staging: https://staging.coalex.ai"
echo "  Production: https://coalex.ai"
echo ""
echo -e "${GREEN}Rollback (if needed):${NC}"
echo "  gcloud compute url-maps import $EXISTING_URLMAP --source=./lb-backups/urlmap-backup-${TIMESTAMP}.yaml --global"
echo ""
