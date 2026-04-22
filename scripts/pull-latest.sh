#!/bin/bash

# Pull latest changes from GitHub
echo "Fetching latest changes from GitHub..."
git fetch origin

echo "Pulling latest commits from main branch..."
git pull origin main

echo "✓ Successfully synced with GitHub!"
git log --oneline -5
