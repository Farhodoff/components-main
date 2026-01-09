---
layout: home

hero:
  name: "@farhod_dev/super-ui"
  text: "Beautiful UI Components"
  tagline: Accessible, themeable React components built with Radix UI and Tailwind CSS
  image:
    src: /logo.svg
    alt: Super UI Logo
  actions:
    - theme: brand
      text: Get Started
      link: /guide/
    - theme: alt
      text: View on GitHub
      link: https://github.com/YOUR_USERNAME/components-main
    - theme: alt
      text: View Components
      link: /components/

features:
  - icon: ♿
    title: Accessible by Default
    details: Built on Radix UI primitives with WCAG 2.1 AA compliance. Keyboard navigation, screen reader support, and proper ARIA attributes out of the box.
  
  - icon: 🎨
    title: Fully Themeable
    details: Dynamic primary colors, border radius, and comprehensive dark/light mode support. Customize to match your brand with ease.
  
  - icon: 🌍
    title: Internationalization
    details: Built-in i18n support with English and Uzbek languages. Easy to extend with additional locales using i18next.
  
  - icon: 📦
    title: 50+ Components
    details: Comprehensive collection of UI components for modern web applications. From basic buttons to complex data tables.
  
  - icon: ⚡
    title: TypeScript First
    details: Full type safety with TypeScript. Excellent IntelliSense support and catch errors before runtime.
  
  - icon: 🧪
    title: Well Tested
    details: Comprehensive test coverage with Vitest and Playwright. Ensuring reliability and quality for production use.
  
  - icon: 📱
    title: Responsive Design
    details: All components are mobile-first and fully responsive. Works beautifully on all screen sizes.
  
  - icon: 🚀
    title: Performance Optimized
    details: Tree-shakeable, optimized bundle sizes, and lazy loading support. Fast page loads guaranteed.
  
  - icon: 🎓
    title: Great DX
    details: Excellent developer experience with detailed documentation, live examples, and helpful error messages.
---

## Quick Start

Install the package:

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

Use components in your app:

```tsx
import { Button, Card, Input } from '@farhod_dev/super-ui'

function App() {
  return (
    <Card>
      <h1>Welcome!</h1>
      <Input placeholder="Enter your name..." />
      <Button>Get Started</Button>
    </Card>
  )
}
```

## Why Super UI?

### 🎯 Production Ready

Thoroughly tested and used in production applications. Battle-tested components you can rely on.

### 🛠️ Developer Friendly

Intuitive API, comprehensive documentation, and great TypeScript support make development a breeze.

### 🎨 Design System Ready

Built-in theming system and design tokens make it easy to create consistent user interfaces.

### 🌟 Modern Stack

Built with the latest technologies: React 18, TypeScript 5, Tailwind CSS 3, and Radix UI.

---

<div style="text-align: center; margin-top: 3rem;">
  <a href="/guide/" style="font-size: 1.2rem; font-weight: 600;">
    Get Started →
  </a>
</div>
