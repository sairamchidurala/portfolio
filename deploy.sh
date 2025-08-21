#!/bin/bash
# deploy.sh [env]
# Example: ./deploy.sh dev   → https://dev.iamsairam.in/
#          ./deploy.sh       → https://iamsairam.in/

EC2_USER=killer
REMOTE_PATH=/var/www/sairam-bytes
DOMAIN=iamsairam.in

ENVIRONMENT=$1

if [ "$ENVIRONMENT" == "dev" ]; then
  REMOTE_PATH="${REMOTE_PATH}-dev"
  DOMAIN="dev.${DOMAIN}"
fi

# 1️⃣ Install dependencies (if new packages)
echo "Installing dependencies..."
npm ci

# 2️⃣ Build project
echo "Building project..."
npm run build

# 3️⃣ Deploy dist to EC2 using rsync
echo "Deploying to server..."
rsync -avz --rsync-path="sudo rsync" dist/ $EC2_USER:$REMOTE_PATH

# 4️⃣ Done
echo "✅ Deployment complete!"
echo "You can now open your site at https://$DOMAIN/"

