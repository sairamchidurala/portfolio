#!/bin/bash
# deploy.sh - Build & deploy Vite static site to EC2
# Usage: ./deploy.sh <ec2-user> <ec2-ip> <remote-path>
# Example: ./deploy.sh ubuntu 3.14.15.16 /var/www/sairam-bytes

EC2_USER=killer
REMOTE_PATH=/var/www/sairam-bytes

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
echo "You can now open your site at https://iamsairam.in/"
