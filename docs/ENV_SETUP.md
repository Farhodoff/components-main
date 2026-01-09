# Environment Variables Setup Guide

## Quick Start

1. **Copy the example file:**
   ```bash
   cp .env.example .env
   ```

2. **Update values in `.env` as needed for your local development**

## Available Variables

### Required Variables

- **`VITE_APP_NAME`** - Application name (default: `@farhod_dev/super-ui`)
- **`VITE_APP_VERSION`** - Application version (default: `0.0.1`)
- **`VITE_API_URL`** - API base URL (default: `http://localhost:3000`)

### Optional Variables

- **`STORYBOOK_PORT`** - Storybook development server port (default: `6006`)

## Usage in Code

Import the typed environment configuration:

```typescript
import { env } from '@/lib/env';

console.log(env.appName);    // @farhod_dev/super-ui
console.log(env.apiUrl);     // http://localhost:3000
console.log(env.isDev);      // true in development
console.log(env.isProd);     // true in production
```

## Important Notes

⚠️ **Security:**
- Never commit `.env` to version control
- `.env` is already in `.gitignore`
- Only commit `.env.example` with dummy/default values

⚠️ **Vite Environment Variables:**
- All variables must be prefixed with `VITE_` to be exposed to client
- Variables are replaced at build time (not runtime)
- Restart dev server after changing `.env`

## Production Deployment

For production deployments, set these environment variables in your hosting platform:

- **Vercel:** Project Settings → Environment Variables
- **Netlify:** Site Settings → Build & Deploy → Environment
- **GitHub Actions:** Repository Settings → Secrets and Variables

## Example Use Cases

### API Calls
```typescript
import { env } from '@/lib/env';

const response = await fetch(`${env.apiUrl}/api/components`);
```

### Feature Flags
```typescript
// Add to .env
VITE_ENABLE_BETA_FEATURES=true

// Use in code
import { env } from '@/lib/env';

if (env.enableBetaFeatures) {
  // Show beta features
}
```

### Analytics
```typescript
// Add to .env
VITE_ANALYTICS_ID=G-XXXXXXXXXX

// Use in code
import { env } from '@/lib/env';

if (env.analyticsId && env.isProd) {
  initAnalytics(env.analyticsId);
}
```
