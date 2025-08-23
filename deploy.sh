#!/bin/bash
# Usage: ./deploy.sh dev|prod

EC2_USER=killer
REMOTE_BASE=/var/www/sairam-bytes

# 1️⃣ Check env
if [ -z "$1" ]; then
  echo "❌ Please provide environment (dev|prod)"
  exit 1
fi

ENV=$1
if [ "$ENV" = "dev" ]; then
  REMOTE_PATH="${REMOTE_BASE}-dev"
  SITE="https://dev.iamsairam.in/"
elif [ "$ENV" = "prod" ]; then
  REMOTE_PATH="${REMOTE_BASE}"
  SITE="https://iamsairam.in/"
else
  echo "❌ Unknown environment: $ENV (use dev or prod)"
  exit 1
fi

# 2️⃣ Check if path exists on server
if ! ssh $EC2_USER "test -d $REMOTE_PATH"; then
  echo "❌ Remote path $REMOTE_PATH does not exist!"
  exit 1
fi

# 3️⃣ Install deps & build
echo "Installing dependencies..."
npm ci
echo "Building project..."
npm run build

# 4️⃣ Deploy
echo "Deploying to $ENV..."
rsync -avz --rsync-path="sudo rsync" dist/ $EC2_USER:$REMOTE_PATH

# 5️⃣ Done
echo "✅ Deployment complete!"
echo "🌍 $SITE"

