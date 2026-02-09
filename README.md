# @farhod_dev/super-ui

[![CI](https://github.com/Farhodoff/components-main/workflows/CI/badge.svg)](https://github.com/Farhodoff/components-main/actions)
[![Storybook](https://github.com/Farhodoff/components-main/workflows/Deploy%20Storybook/badge.svg)](https://Farhodoff.github.io/components-main/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)

A comprehensive, accessible React component library built with **Radix UI** and **Tailwind CSS**. 
Featuring a dynamic **Theme Customizer**, **Internationalization (i18n)**, and ready for production use.

## 🚀 Features

- **Accessible Components**: Built on top of Radix UI primitives with WCAG 2.1 AA compliance
- **Themeable**: Dynamic primary colors and border radius with Dark/Light mode support
- **Internationalization**: English and Uzbek language support out of the box
- **50+ Components**: Comprehensive UI components for modern web applications
- **Form Primitives**: Advanced inputs, date pickers, and file uploads
- **Data Display**: Tables, charts, timelines, and empty states
- **Templates**: Ready-to-use Auth and Dashboard layouts
- **TypeScript**: Full type safety with TypeScript support
- **Storybook**: Interactive component documentation

## 🛠 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

#### For Development

Clone this repository and install dependencies:

```bash
git clone <your-repository-url>
cd components-main
pnpm install
```

#### As NPM Package (When Published)

```bash
# Install via npm
npm install @farhod_dev/super-ui

# Or via pnpm
pnpm add @farhod_dev/super-ui

# Or via yarn
yarn add @farhod_dev/super-ui
```

### Configuration
Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Database Setup
This project requires Supabase tables. Run the SQL commands provided in [SCHEMA.md](./SCHEMA.md) to set up your database.

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

The library comes with pre-built page templates. You can import them directly:

```tsx
import { AnalyticsDashboard } from '@farhod_dev/super-ui/templates';
import { HeroSection } from '@farhod_dev/super-ui/templates';

function MyPage() {
    return (
        <div>
           <HeroSection title="My Awesome App" />
           <AnalyticsDashboard />
        </div>
    )
}
```

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

To use this library with Tailwind CSS in your project, extend your `tailwind.config.js`:

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

## 📖 Documentation

- **[Storybook](http://localhost:6006)**: Run `pnpm storybook` to view interactive component documentation
- **TypeScript Definitions**: Full IntelliSense support with TypeScript definitions included

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
1. GitHub repozitoriysingizdagi **Settings -> Secrets and variables -> Actions** bo'limiga kiring.
2. `NPM_TOKEN` nomli yangi secret yarating va unga NPM tokeningizni joylang.
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

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Farhod Soyilov**

- GitHub: [@Farhodoff](https://github.com/Farhodoff)
- NPM: [@farhod_dev](https://www.npmjs.com/~farhod_dev)

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Design inspiration

