import React from "react";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import { CodeBlock } from "@/components/CodeBlock";
import {
  LibraryCard,
  LibraryCardContent,
  LibraryCardHeader,
  LibraryCardTitle,
} from "@/components/library/LibraryCard";
import { Package, Zap, Accessibility, Palette, Code2 } from "lucide-react";

const installCode = `npm install @componentlib/react

# or with yarn
yarn add @componentlib/react

# or with pnpm
pnpm add @componentlib/react`;

const importCode = `import { Button } from "@componentlib/react";
import { Input } from "@componentlib/react";
import { Card } from "@componentlib/react";

// Or import all components
import * as ComponentLib from "@componentlib/react";`;

export const DocsIntroduction: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Introduction</h1>
          <LibraryBadge variant="success">v1.0.0</LibraryBadge>
        </div>
        <p className="text-lg text-muted-foreground">
          ComponentLib is a comprehensive, accessible React component library
          built with TypeScript and Tailwind CSS. Every component is designed
          with accessibility in mind and follows WCAG 2.1 AA standards.
        </p>
      </div>

      {/* Features */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LibraryCard variant="elevated">
            <LibraryCardHeader className="flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Accessibility className="h-5 w-5 text-primary" />
              </div>
              <div>
                <LibraryCardTitle className="text-base">Fully Accessible</LibraryCardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  WCAG 2.1 AA compliant with keyboard navigation and screen
                  reader support.
                </p>
              </div>
            </LibraryCardHeader>
          </LibraryCard>

          <LibraryCard variant="elevated">
            <LibraryCardHeader className="flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <LibraryCardTitle className="text-base">TypeScript First</LibraryCardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Built with TypeScript for excellent developer experience and
                  type safety.
                </p>
              </div>
            </LibraryCardHeader>
          </LibraryCard>

          <LibraryCard variant="elevated">
            <LibraryCardHeader className="flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Palette className="h-5 w-5 text-primary" />
              </div>
              <div>
                <LibraryCardTitle className="text-base">Themeable</LibraryCardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Fully customizable with CSS variables and Tailwind CSS
                  integration.
                </p>
              </div>
            </LibraryCardHeader>
          </LibraryCard>

          <LibraryCard variant="elevated">
            <LibraryCardHeader className="flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <LibraryCardTitle className="text-base">Tree-Shakeable</LibraryCardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Import only what you need. Optimized for minimal bundle size.
                </p>
              </div>
            </LibraryCardHeader>
          </LibraryCard>
        </div>
      </section>

      {/* Quick Start */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Quick Start</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">1. Installation</h3>
            <CodeBlock code={installCode} language="bash" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">2. Import Components</h3>
            <CodeBlock code={importCode} language="tsx" />
          </div>
        </div>
      </section>

      {/* Components Overview */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Components</h2>
        <p className="text-muted-foreground mb-6">
          Browse our collection of accessible, customizable components:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {["Button", "Input", "Badge", "Alert", "Card"].map((name) => (
            <LibraryCard
              key={name}
              variant="interactive"
              padding="sm"
              className="text-center"
            >
              <span className="font-medium text-sm">{name}</span>
            </LibraryCard>
          ))}
        </div>
      </section>

      {/* Browser Support */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Browser Support</h2>
        <p className="text-muted-foreground">
          ComponentLib supports all modern browsers including Chrome, Firefox,
          Safari, and Edge. We recommend using the latest version of your
          preferred browser for the best experience.
        </p>
      </section>
    </div>
  );
};
