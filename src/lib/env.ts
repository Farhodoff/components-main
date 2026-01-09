// Environment Variables Configuration
// This file provides typed access to environment variables

export const env = {
    // App Configuration
    appName: import.meta.env.VITE_APP_NAME || '@farhod_dev/super-ui',
    appVersion: import.meta.env.VITE_APP_VERSION || '0.0.1',

    // API Configuration
    apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',

    // Development
    isDev: import.meta.env.DEV,
    isProd: import.meta.env.PROD,
    mode: import.meta.env.MODE,
} as const;

// Type-safe environment variable access
export type Env = typeof env;
