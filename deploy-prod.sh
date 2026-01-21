#!/bin/bash

# Coalex AI Website - Production Deployment
# This script builds the site with production analytics and deploys to Google Cloud Storage

set -e  # Exit on error

# Configuration
BUCKET_NAME="coalex-prod-website"
PROJECT_ID=""  # Will be set from gcloud config or override here

# Analytics Configuration (Production)
export VITE_CLARITY_PROJECT_ID="v4dfcnmuu0"
export VITE_GA_MEASUREMENT_ID="G-XDNZEE144Y"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== Coalex AI Website - Production Deployment ===${NC}\n"

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}Error: gcloud CLI is not installed.${NC}"
    echo "Install it from: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}Error: npm is not installed.${NC}"
    exit 1
fi

# Get project ID if not set
if [ -z "$PROJECT_ID" ]; then
    PROJECT_ID=$(gcloud config get-value project 2>/dev/null)
    if [ -z "$PROJECT_ID" ]; then
        echo -e "${RED}Error: No GCP project set.${NC}"
        echo "Set it with: gcloud config set project YOUR_PROJECT_ID"
        exit 1
    fi
fi

echo -e "${YELLOW}Project ID:${NC} $PROJECT_ID"
echo -e "${YELLOW}Bucket Name:${NC} $BUCKET_NAME"
echo -e "${YELLOW}Clarity ID:${NC} $VITE_CLARITY_PROJECT_ID"
echo -e "${YELLOW}GA4 ID:${NC} $VITE_GA_MEASUREMENT_ID"
echo ""

# Check if bucket exists
echo -e "${YELLOW}Checking if bucket exists...${NC}"
if ! gsutil ls -b gs://$BUCKET_NAME &> /dev/null; then
    echo -e "${RED}Error: Bucket gs://$BUCKET_NAME does not exist.${NC}"
    exit 1
fi
echo -e "${GREEN}Bucket exists.${NC}"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo -e "\n${YELLOW}Installing dependencies...${NC}"
    npm ci
fi

# Build the site
echo -e "\n${YELLOW}Building site for production...${NC}"
npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}Error: Build failed. 'dist' directory not found.${NC}"
    exit 1
fi

echo -e "${GREEN}Build completed successfully!${NC}"

# Confirm deployment
echo -e "\n${YELLOW}Ready to deploy to PRODUCTION (coalex.ai)${NC}"
read -p "Are you sure you want to continue? (y/N) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${RED}Deployment cancelled.${NC}"
    exit 1
fi

# Deploy to GCS with rsync (only uploads changed files)
echo -e "\n${YELLOW}Syncing changed files to Google Cloud Storage...${NC}"
echo -e "${BLUE}Using checksums to detect changes...${NC}\n"

gsutil -m rsync -c -r -d dist/ gs://$BUCKET_NAME/

echo -e "\n${YELLOW}Setting optimal cache headers...${NC}"

# Set cache control for static assets (1 year cache for hashed files)
gsutil -m setmeta -h "Cache-Control:public, max-age=31536000, immutable" \
    "gs://$BUCKET_NAME/assets/**" 2>/dev/null || true

# Set shorter cache for HTML files (5 minutes) so content updates appear faster
gsutil -m setmeta -h "Cache-Control:public, max-age=300" \
    "gs://$BUCKET_NAME/*.html" 2>/dev/null || true

# Set cache for other root files
gsutil -m setmeta -h "Cache-Control:public, max-age=3600" \
    "gs://$BUCKET_NAME/*.ico" 2>/dev/null || true
gsutil -m setmeta -h "Cache-Control:public, max-age=3600" \
    "gs://$BUCKET_NAME/*.png" 2>/dev/null || true

echo -e "\n${GREEN}=== Production Deployment Complete! ===${NC}"
echo -e "\n${YELLOW}Your site is live at:${NC}"
echo -e "  • https://coalex.ai"
echo -e "  • https://storage.googleapis.com/$BUCKET_NAME/index.html"

echo -e "\n${BLUE}Deployment Summary:${NC}"
echo -e "  • Only changed files were uploaded (based on checksums)"
echo -e "  • Static assets: 1 year cache (immutable)"
echo -e "  • HTML files: 5 minute cache"
echo -e "  • Analytics: Clarity ($VITE_CLARITY_PROJECT_ID) + GA4 ($VITE_GA_MEASUREMENT_ID)"
echo -e "\n${GREEN}Done!${NC}"
