#!/bin/bash
# filepath: /Users/rajesh/Desktop/CougarExpress/express-app/build.sh

# Exit on any error
set -e

# Install dependencies
npm install --production

# Create production env file if it doesn't exist
if [ ! -f .env.production ]; then
  echo "# filepath: /Users/rajesh/Desktop/CougarExpress/express-app/.env.production" > .env.production
  echo "PORT=3000" >> .env.production
  echo "MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/cougarexpress" >> .env.production
  echo "ACCESS_TOKEN_SECRET=your_jwt_secret_key_replace_in_production" >> .env.production
  echo "NODE_ENV=production" >> .env.production
  echo ".env.production file created. Please update with production values."
fi

# Run tests (if we had any)
# npm test

echo "Build completed successfully!"
