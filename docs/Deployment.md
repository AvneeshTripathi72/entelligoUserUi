# Deployment Guide

This application is fully optimized to run on **Vercel**, the creators of Next.js.

## Deployment via Vercel CLI
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Run the deployment command from the project root:
   ```bash
   vercel
   ```
3. Follow the CLI prompts to link and deploy your project.

## Deployment via Git (Recommended)
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Go to the [Vercel Dashboard](https://vercel.com/dashboard) and click "Add New... > Project".
3. Import your repository.
4. Leave all settings (Build Command, Output Directory) as their defaults for Next.js.
5. Click **Deploy**.

## Continuous Integration
Vercel automatically triggers a build and deployment on every push to your repository's main branch. Pull Requests will automatically generate a Preview URL.
