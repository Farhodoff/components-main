import React, { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, ShieldCheck, Zap, Sparkles } from "lucide-react";

const accordionProps = [
  {
    name: "type",
    type: '"single" | "multiple"',
    required: true,
    description: "Determines whether one or multiple items can be opened at the same time.",
  },
  {
    name: "collapsible",
    type: "boolean",
    default: "false",
    description: "When type is 'single', allows closing an open item by clicking its trigger again.",
  },
  {
    name: "defaultValue",
    type: "string | string[]",
    description: "The value of the item(s) to expand by default when initially rendered.",
  },
  {
    name: "value",
    type: "string | string[]",
    description: "The controlled value of the item(s) to expand.",
  },
  {
    name: "onValueChange",
    type: "(value: string | string[]) => void",
    description: "Event handler called when the expanded state changes.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "When true, prevents the user from interacting with all accordion items.",
  },
];

const accordionItemProps = [
  {
    name: "value",
    type: "string",
    required: true,
    description: "A unique value for the item.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "When true, prevents the user from interacting with this specific item.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for custom styling.",
  },
];

const importCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@farhod_dev/super-ui";`;

const basicUsageCode = `<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern with keyboard navigation support.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it customizable?</AccordionTrigger>
    <AccordionContent>
      Yes. Fully stylized with Tailwind CSS utility classes and customizable design tokens.
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

export const AccordionDocs: React.FC = () => {
  const [controlledValue, setControlledValue] = useState<string>("faq-1");

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <LibraryBadge variant="outline">Navigation & Disclosure</LibraryBadge>
          <LibraryBadge variant="secondary">Radix UI</LibraryBadge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Accordion</h1>
        <p className="text-lg text-muted-foreground">
          A vertically stacked set of interactive headings that each reveal a section of content.
        </p>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Examples</h2>

        {/* 1. Basic Single Collapsible Accordion (FAQ) */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Single Collapsible (FAQ Style)</h3>
          <div className="max-w-xl">
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base">
                  <span className="flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-primary" />
                    Is it accessible according to WAI-ARIA?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. It strictly adheres to the WAI-ARIA accordion pattern. It supports full keyboard navigation (Up/Down arrows, Home/End, Enter, Space) and appropriate screen reader ARIA roles.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base">
                  <span className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    Can I customize component colors and tokens?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. All styles are crafted with Tailwind CSS and CSS custom properties (variables). You can override theme tokens in your stylesheet or pass custom utility classes via className.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    Does it support server-side rendering (SSR)?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. All components are built to be compatible with Next.js App Router, Vite SSR, Remix, and standard React hydration workflows.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* 2. Multiple Open Items Accordion */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Multiple Expandable Sections</h3>
          <div className="max-w-xl">
            <Accordion type="multiple" defaultValue={["sec-1", "sec-2"]} className="w-full">
              <AccordionItem value="sec-1">
                <AccordionTrigger className="text-base">
                  <span className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-amber-500" />
                    Design System Highlights
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Built-in dark mode support, fluid typography, smooth micro-interactions, and harmonic HSL palettes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sec-2">
                <AccordionTrigger className="text-base">
                  TypeScript First Experience
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Comprehensive TypeScript declarations (.d.ts) shipped out-of-the-box for IDE autocomplete and compile-time validation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* 3. Controlled Accordion */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Controlled State</h3>
          <div className="max-w-xl space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Active Item:</span>
              <LibraryBadge variant="secondary">{controlledValue || "None"}</LibraryBadge>
            </div>
            <Accordion
              type="single"
              collapsible
              value={controlledValue}
              onValueChange={(val) => setControlledValue(val)}
              className="w-full"
            >
              <AccordionItem value="faq-1">
                <AccordionTrigger>How do I install Super UI in my app?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Run <code className="px-1.5 py-0.5 rounded bg-muted text-xs">npm install @farhod_dev/super-ui</code> and wrap your app with the ThemeProvider.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>Where can I report bugs or submit feature requests?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Open an issue or pull request on our GitHub repository: <a href="https://github.com/Farhodoff/components-main" target="_blank" rel="noreferrer" className="text-primary hover:underline">Farhodoff/components-main</a>.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Installation & Import */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock code={importCode} language="tsx" />
      </div>

      {/* Usage Code */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Usage</h2>
        <CodeBlock code={basicUsageCode} language="tsx" />
      </div>

      {/* API Reference */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">API Reference</h2>
        <div>
          <h3 className="text-lg font-medium mb-3">Accordion Props</h3>
          <APIReferenceTable props={accordionProps} />
        </div>
        <div className="pt-4">
          <h3 className="text-lg font-medium mb-3">AccordionItem Props</h3>
          <APIReferenceTable props={accordionItemProps} />
        </div>
      </div>
    </div>
  );
};
