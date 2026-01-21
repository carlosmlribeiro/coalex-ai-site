#!/bin/bash
# Setup Workload Identity Federation for GitHub Actions
# This is more secure than service account keys

set -e

PROJECT_ID="coalex-ai"
PROJECT_NUMBER=$(gcloud projects describe $PROJECT_ID --format="value(projectNumber)")
POOL_NAME="github-actions-pool"
PROVIDER_NAME="github-provider"
REPO="carlosribeiro/coalex-ai-site"  # Change if different

echo "Project ID: $PROJECT_ID"
echo "Project Number: $PROJECT_NUMBER"
echo "GitHub Repo: $REPO"
echo ""

# Create Workload Identity Pool
echo "Creating Workload Identity Pool..."
gcloud iam workload-identity-pools create $POOL_NAME \
    --project=$PROJECT_ID \
    --location=global \
    --display-name="GitHub Actions Pool" 2>/dev/null || echo "✓ Pool exists"

# Get pool ID
POOL_ID=$(gcloud iam workload-identity-pools describe $POOL_NAME \
    --project=$PROJECT_ID \
    --location=global \
    --format="value(name)")

echo "Pool ID: $POOL_ID"

# Create OIDC provider for GitHub
echo ""
echo "Creating GitHub OIDC Provider..."
gcloud iam workload-identity-pools providers create-oidc $PROVIDER_NAME \
    --project=$PROJECT_ID \
    --location=global \
    --workload-identity-pool=$POOL_NAME \
    --display-name="GitHub Provider" \
    --attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.repository=assertion.repository,attribute.repository_owner=assertion.repository_owner" \
    --attribute-condition="assertion.repository_owner=='$(echo $REPO | cut -d'/' -f1)'" \
    --issuer-uri="https://token.actions.githubusercontent.com" 2>/dev/null || echo "✓ Provider exists"

# Get provider ID
WORKLOAD_IDENTITY_PROVIDER="projects/$PROJECT_NUMBER/locations/global/workloadIdentityPools/$POOL_NAME/providers/$PROVIDER_NAME"

echo "Provider ID: $WORKLOAD_IDENTITY_PROVIDER"

# Allow GitHub Actions to impersonate service accounts
echo ""
echo "Granting permissions..."

# Staging
gcloud iam service-accounts add-iam-policy-binding coalex-staging-deployer@$PROJECT_ID.iam.gserviceaccount.com \
    --project=$PROJECT_ID \
    --role="roles/iam.workloadIdentityUser" \
    --member="principalSet://iam.googleapis.com/$POOL_ID/attribute.repository/$REPO"

# Production
gcloud iam service-accounts add-iam-policy-binding coalex-prod-deployer@$PROJECT_ID.iam.gserviceaccount.com \
    --project=$PROJECT_ID \
    --role="roles/iam.workloadIdentityUser" \
    --member="principalSet://iam.googleapis.com/$POOL_ID/attribute.repository/$REPO"

echo ""
echo "=== ✓ Workload Identity Federation Setup Complete ==="
echo ""
echo "Add this to GitHub Secrets:"
echo ""
echo "GCP_WORKLOAD_IDENTITY_PROVIDER:"
echo "$WORKLOAD_IDENTITY_PROVIDER"
echo ""
echo "GCP_STAGING_SA:"
echo "coalex-staging-deployer@$PROJECT_ID.iam.gserviceaccount.com"
echo ""
echo "GCP_PROD_SA:"
echo "coalex-prod-deployer@$PROJECT_ID.iam.gserviceaccount.com"
echo ""
