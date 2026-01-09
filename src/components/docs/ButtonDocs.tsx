import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { Button } from "@/components/ui/button";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import { ArrowRight, Mail, Loader2 } from "lucide-react";

const buttonProps = [
  {
    name: "variant",
    type: '"default" | "secondary" | "outline" | "ghost" | "link" | "gradient" | "glow" | "destructive" | "success" | "warning"',
    default: '"default"',
    description: "The visual style variant of the button.",
  },
  {
    name: "size",
    type: '"default" | "sm" | "lg" | "xl" | "icon"',
    default: '"default"',
    description: "The size of the button.",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "Merge props onto child element instead of rendering a button.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the button is disabled.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes to apply.",
  },
];

const importCode = `import { Button } from "@/components/ui/button";`;

const basicUsageCode = `<Button>Click me</Button>

<Button variant="secondary">Secondary</Button>

<Button variant="outline">Outline</Button>

<Button variant="gradient">Gradient</Button>`;

const withIconCode = `<Button>
  <Mail className="h-4 w-4" />
  Login with Email
</Button>

<Button variant="gradient">
  Continue
  <ArrowRight className="h-4 w-4" />
</Button>`;

const loadingCode = `<Button disabled>
  <Loader2 className="h-4 w-4 animate-spin" />
  Please wait
</Button>`;

export const ButtonDocs: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Button</h1>
          <LibraryBadge variant="success">Stable</LibraryBadge>
        </div>
        <p className="text-lg text-muted-foreground">
          Displays a button or a component that looks like a button. Supports
          multiple variants, sizes, and states with full keyboard accessibility.
        </p>
      </div>

      {/* Installation */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Import</h2>
        <CodeBlock code={importCode} language="tsx" />
      </section>

      {/* Basic Usage */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Basic Usage</h2>
        <div className="p-6 rounded-lg border border-border bg-muted/20 mb-4">
          <div className="flex flex-wrap gap-3">
            <Button>Click me</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="gradient">Gradient</Button>
          </div>
        </div>
        <CodeBlock code={basicUsageCode} language="tsx" />
      </section>

      {/* Variants */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Variants</h2>
        <div className="p-6 rounded-lg border border-border bg-muted/20 mb-4">
          <div className="flex flex-wrap gap-3">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="gradient">Gradient</Button>
            <Button variant="glow">Glow</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Sizes</h2>
        <div className="p-6 rounded-lg border border-border bg-muted/20 mb-4">
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        </div>
      </section>

      {/* With Icons */}
      <section>
        <h2 className="text-xl font-semibold mb-4">With Icons</h2>
        <div className="p-6 rounded-lg border border-border bg-muted/20 mb-4">
          <div className="flex flex-wrap gap-3">
            <Button>
              <Mail className="h-4 w-4" />
              Login with Email
            </Button>
            <Button variant="gradient">
              Continue
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <CodeBlock code={withIconCode} language="tsx" />
      </section>

      {/* Loading State */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Loading State</h2>
        <div className="p-6 rounded-lg border border-border bg-muted/20 mb-4">
          <Button disabled>
            <Loader2 className="h-4 w-4 animate-spin" />
            Please wait
          </Button>
        </div>
        <CodeBlock code={loadingCode} language="tsx" />
      </section>

      {/* API Reference */}
      <section>
        <h2 className="text-xl font-semibold mb-4">API Reference</h2>
        <APIReferenceTable props={buttonProps} />
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Accessibility</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Buttons are focusable and can be activated with Enter or Space keys.</li>
          <li>Disabled buttons are not focusable and announce their disabled state.</li>
          <li>Focus states are clearly visible with ring indicators.</li>
          <li>Minimum touch target of 44x44px on all sizes.</li>
        </ul>
      </section>
    </div>
  );
};
