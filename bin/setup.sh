#!/bin/bash

echo "Setting up backend"
cd backend
rm -rf node_modules
npm install

echo "Running Prisma commands"
npx prisma generate
npx prisma db push
npx prisma db seed
cd ..

echo "Setting up frontend"
cd frontend
rm -rf node_modules
npm install
