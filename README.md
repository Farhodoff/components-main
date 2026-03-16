
## 🛠 Stack & Technologies

### Core
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### Styling & UI
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radix-ui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-F7B93E?style=for-the-badge&logo=lucide&logoColor=black)

### State & Forms
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![TanStack Table](https://img.shields.io/badge/TanStack_Table-2563EB?style=for-the-badge&logo=google-sheets&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=react-hook-form&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)

### Testing & Quality
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

### Documentation
![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![VitePress](https://img.shields.io/badge/VitePress-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### Data & Extras
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![i18next](https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-22B5BF?style=for-the-badge&logo=recharts&logoColor=white)
# @farhod_dev/super-ui (Super UI Components)

[![CI](https://github.com/Farhodoff/components-main/workflows/CI/badge.svg)](https://github.com/Farhodoff/components-main/actions)
[![Storybook](https://github.com/Farhodoff/components-main/workflows/Deploy%20Storybook/badge.svg)](https://Farhodoff.github.io/components-main/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-success)](#-accessibility)

> **The premier Central Asia-focused accessible UI component library.**

A comprehensive, production-ready React component library built with **Radix UI** and **Tailwind CSS**. Designed for high performance, strict type safety, and seamless integration.

## 🚀 Key Benefits

- **Accessible Components:** Built on Radix UI primitives with WCAG 2.1 AA compliance. Extensively tested via Playwright and Storybook a11y addons.
- **Internationalization (i18n):** Deeply integrated English and Uzbek language support out of the box.
- **Performant & Tree-Shakeable:** Modular ES Module exports ensure you only bundle the components you use.
- **Type-Safe:** Compiled in strict TypeScript mode (`noImplicitAny: true`).
- **Zero Database Coupling:** The core library handles UI only; database integrations are strictly relegated to optional example templates.
- **Themeable:** Dynamic primary colors, border radii, and Dark/Light mode support.

## 🛠 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

#### As NPM Package (Recommended)

```bash
# Install via npm
npm install @farhod_dev/super-ui

# Or via pnpm
pnpm add @farhod_dev/super-ui
```

*Note: The GitHub repository is named `components-main` but the published package is `@farhod_dev/super-ui`.*

#### For Local Development

Clone this repository and install dependencies:

```bash
git clone https://github.com/Farhodoff/components-main.git
cd components-main
pnpm install
```

### Development

```bash
# Start the development playground (runs on http://localhost:5173)
pnpm dev

# Start Storybook documentation (runs on http://localhost:6006)
pnpm storybook

# Run unit tests
pnpm test

# Run E2E tests
pnpm exec playwright test

# Build for production
pnpm build
```

## 📄 Using Templates

The library comes with pre-built page templates. **These templates are entirely optional and demonstrate how to compose apps using the library.**

Some advanced templates (like the Dashboard and Auth templates) may include examples of database integrations using Supabase. These require setting up a `.env` file and running the SQL schema found in [`src/templates/SCHEMA.md`](./src/templates/SCHEMA.md). **The core `@farhod_dev/super-ui` components themselves have zero database dependencies.**

```tsx
import { AnalyticsDashboard } from '@farhod_dev/super-ui';
import { HeroSection } from '@farhod_dev/super-ui';

function MyPage() {
    return (
        <div>
           <HeroSection title="My Awesome App" />
           <AnalyticsDashboard />
        </div>
    )
}
```

### Available Templates
- **Landing Page**: `/templates/landing`
- **Dashboard**: `/templates/dashboard`
- **Settings**: `/templates/settings`
- **Auth**: `/templates/auth`

See `src/pages/templates` for full implementation examples.

## 📦 Using as a Library

This project is configured to be published as an NPM package.

### Build the Library

```bash
pnpm build:lib
```

This creates a distributable package in the `dist/` directory with:
- CommonJS bundle (`dist/index.cjs`)
- ES Module bundle (`dist/index.js`)
- TypeScript definitions (`dist/index.d.ts`)

### Usage Example

After installation, import components in your React application:

```tsx
import { Button, Card, Input, Badge } from '@farhod_dev/super-ui';
import '@farhod_dev/super-ui/styles.css'; // Import styles

function App() {
  return (
    <Card>
      <h1>Hello World</h1>
      <Input placeholder="Enter text..." />
      <Button>Click me</Button>
      <Badge variant="secondary">New</Badge>
    </Card>
  );
}
```

### Tailwind Configuration

To use this library with Tailwind CSS in your project, extend your `tailwind.config.ts` (or `.js`):

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

## 🏗️ Project Monorepo Structure

We use a workspace-style structure to separate responsibilities:

```
├── cli/                 # Optional CLI tools for scaffolding components
├── docs/                # Documentation site (VitePress)
├── examples/            # Example playground apps 
├── e2e/                 # End-to-End browser tests (Playwright)
├── src/                 # The core component library source code
    ├── components/
    │   ├── ui/              # 50+ Core UI primitives
    │   └── templates/       # Auth and Dashboard examples (DB coupled examples)
    ├── hooks/               # Custom React hooks
    ├── lib/                 # Utility functions
    └── locales/             # i18n translations (en, uz)
```

## 📖 Documentation & Accessibility

- **[Storybook](http://localhost:6006)**: Run `pnpm storybook` to view interactive component documentation.
- **Accessibility:** We utilize `@storybook/addon-a11y` to continuously monitor WCAG compliance within our documentation. Validate accessibility locally via `pnpm storybook`.

## 🧪 Testing

```bash
# Run unit tests with Vitest
pnpm test

# Run unit tests in watch mode
pnpm test -- --watch

# Run E2E tests with Playwright
pnpm exec playwright test

# View test coverage
pnpm test -- --coverage
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/              # 50+ Core UI components
│   ├── library/         # Advanced components (Timeline, FileUpload, etc.)
│   ├── templates/       # Auth and Dashboard templates
│   └── docs/            # Documentation components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── locales/             # i18n translations (en, uz)
```

## 🚀 NPM Avtomatlashtirish
Bu loyihada NPM ga avtomatik yuklash uchun GitHub Action sozlangan.

### Sozlash
1. **NPM Token olish:**
    - [npmjs.com](https://www.npmjs.com/) ga kiring va profilingizga bosing.
    - **Access Tokens** bo'limini tanlang.
    - **Generate New Token** tugmasini bosing.
    - **Classic Token** ni tanlang (Automation uchun).
    - Nom bering (masalan: `github-action`) va **Automation** turini tanlang.
    - Tokenni nusxalab oling (bu faqat bir marta ko'rinadi!).

2. **GitHub ga joylash:**
    - GitHub repozitoriysingizdagi **Settings -> Secrets and variables -> Actions** bo'limiga kiring.
    - `NPM_TOKEN` nomli yangi secret yarating va nusxalangan tokenni joylang.

3. O'zgarishlarni yuklang (Push).
4. "Release" jarayoni avtomatik ishga tushadi:
    - Versiyani yangilash uchun Pull Request (PR) yaratadi.
    - Agar PR qabul qilinsa (Merge), yangi versiya avtomatik NPM ga yuklanadi.

## 🌍 Internationalization

The library includes built-in support for multiple languages using i18next:

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t, i18n } = useTranslation();
  
  return (
    <div>
      <p>{t('welcome')}</p>
      <button onClick={() => i18n.changeLanguage('uz')}>
        O'zbek
      </button>
    </div>
  );
}
```

Supported languages:
- 🇬🇧 English (en)
- 🇺🇿 Uzbek (uz)

## 🤝 Contributing

Contributions are highly welcome! We maintain an active Code Review process.

Please read our [Contributing Guidelines](CONTRIBUTING.md) to get started. Be aware that inactive Pull Requests (14+ days) will be automatically marked as stale to keep our backlog clean. 

## 📄 License & Branding

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
- **Component Naming:** Derivative works are welcome, but we ask that you do not use the `@farhod_dev/` npm scope.
- **Trademarks:** The "Super UI" branding remains the property of the author.

## 👤 Author

**Farhod Soyilov**

- GitHub: [@Farhodoff](https://github.com/Farhodoff)
- NPM: [@farhod_dev](https://www.npmjs.com/~farhod_dev)

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Design inspiration

