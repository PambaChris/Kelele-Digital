# Kelele Digital

A modern TanStack Start web application.

## Development

To run the project locally:

```bash
bun install
bun run dev
```

## Deployment

This project is configured to be deployed to both **Vercel** and **cPanel**.

### 1. Deploying to Vercel (Recommended)

The project has been made Vercel-ready with zero-config support.

1. **Push your code** to a Git repository (GitHub, GitLab, or Bitbucket).
2. **Import the repository** into Vercel.
3. Vercel will automatically:
   - Detect the build settings (using `bun` and the `build` script).
   - Recognize the universal server framework (Nitro / TanStack Start).
   - Generate the deployment using Vercel Serverless Functions.

> [!TIP]
> The build configuration in [vite.config.ts](file:///home/jegi/Kelele%20Digital/vite.config.ts) dynamically detects the Vercel build environment and uses the `vercel` preset when compiling.

### 2. Deploying to cPanel

For deploying to standard cPanel Node.js environments, please see the [CPANEL_DEPLOY.md](file:///home/jegi/Kelele%20Digital/CPANEL_DEPLOY.md) file.
