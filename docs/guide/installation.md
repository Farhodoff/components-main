# Installation

## Package Manager

Install **@farhod_dev/super-ui** using your preferred package manager:

::: code-group

```bash [pnpm]
pnpm add @farhod_dev/super-ui
```

```bash [npm]
npm install @farhod_dev/super-ui
```

```bash [yarn]
yarn add @farhod_dev/super-ui
```

:::

## Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
pnpm add react react-dom tailwindcss
```

## Tailwind CSS Setup

Super UI uses Tailwind CSS for styling. You need to configure Tailwind in your project.

### 1. Install Tailwind CSS

If you haven't already, install Tailwind CSS:

```bash
pnpm add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Configure Tailwind

Update your `tailwind.config.js` to use our preset:

```js
module.exports = {
  presets: [
    require('@farhod_dev/super-ui/tailwind.preset.js')
  ],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@farhod_dev/super-ui/dist/**/*.js'
  ],
}
```

### 3. Add Tailwind Directives

Add Tailwind directives to your CSS file (e.g., `src/index.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Import Styles

Import the component styles in your main entry file:

```tsx
// src/main.tsx or src/index.tsx
import '@farhod_dev/super-ui/styles.css'
```

## TypeScript Configuration

For the best TypeScript experience, ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

## Verification

Verify your installation by creating a simple component:

```tsx
import { Button } from '@farhod_dev/super-ui'

function App() {
  return <Button>Hello Super UI!</Button>
}
```

If you see a styled button, you're all set! 🎉

## Next Steps

- [Quick Start Guide](/guide/quick-start) - Build your first app
- [Theming](/guide/theming) - Customize the appearance
- [Components](/components/) - Explore all components
