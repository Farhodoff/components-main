import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { Button } from "@/components/ui/button";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import {
  LibraryCard,
  LibraryCardHeader,
  LibraryCardTitle,
  LibraryCardDescription,
  LibraryCardContent,
  LibraryCardFooter,
} from "@/components/library/LibraryCard";

const cardProps = [
  {
    name: "variant",
    type: '"default" | "elevated" | "interactive" | "outlined" | "ghost"',
    default: '"default"',
    description: "The visual style variant of the card.",
  },
  {
    name: "padding",
    type: '"none" | "sm" | "default" | "lg"',
    default: '"default"',
    description: "The internal padding of the card.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes to apply.",
  },
];

const subComponentProps = [
  {
    name: "LibraryCardHeader",
    type: "component",
    description: "Container for the card title and description.",
  },
  {
    name: "LibraryCardTitle",
    type: "component",
    description: "The title element of the card (renders as h3).",
  },
  {
    name: "LibraryCardDescription",
    type: "component",
    description: "The description text below the title.",
  },
  {
    name: "LibraryCardContent",
    type: "component",
    description: "The main content area of the card.",
  },
  {
    name: "LibraryCardFooter",
    type: "component",
    description: "Footer area typically used for actions.",
  },
];

const importCode = `import {
  LibraryCard,
  LibraryCardHeader,
  LibraryCardTitle,
  LibraryCardDescription,
  LibraryCardContent,
  LibraryCardFooter,
} from "@/components/library/LibraryCard";`;

const basicUsageCode = `<LibraryCard>
  <LibraryCardHeader>
    <LibraryCardTitle>Card Title</LibraryCardTitle>
    <LibraryCardDescription>
      A brief description of the card content.
    </LibraryCardDescription>
  </LibraryCardHeader>
  <LibraryCardContent>
    <p>Card content goes here.</p>
  </LibraryCardContent>
</LibraryCard>`;

const withFooterCode = `<LibraryCard variant="elevated">
  <LibraryCardHeader>
    <LibraryCardTitle>Card with Actions</LibraryCardTitle>
    <LibraryCardDescription>
      This card includes footer actions.
    </LibraryCardDescription>
  </LibraryCardHeader>
  <LibraryCardContent>
    <p>Card content goes here.</p>
  </LibraryCardContent>
  <LibraryCardFooter className="gap-2">
    <Button variant="outline" size="sm">Cancel</Button>
    <Button size="sm">Save</Button>
  </LibraryCardFooter>
</LibraryCard>`;

export const CardDocs: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Card</h1>
          <LibraryBadge variant="success">Stable</LibraryBadge>
        </div>
        <p className="text-lg text-muted-foreground">
          A versatile container component for displaying content in a contained
          format. Supports multiple variants and composable sub-components.
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
          <LibraryCard className="max-w-sm">
            <LibraryCardHeader>
              <LibraryCardTitle>Card Title</LibraryCardTitle>
              <LibraryCardDescription>
                A brief description of the card content.
              </LibraryCardDescription>
            </LibraryCardHeader>
            <LibraryCardContent>
              <p className="text-sm text-muted-foreground">
                Card content goes here.
              </p>
            </LibraryCardContent>
          </LibraryCard>
        </div>
        <CodeBlock code={basicUsageCode} language="tsx" />
      </section>

      {/* Variants */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Variants</h2>
        <div className="p-6 rounded-lg border border-border bg-muted/20 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <LibraryCard variant="default">
              <LibraryCardHeader>
                <LibraryCardTitle>Default</LibraryCardTitle>
              </LibraryCardHeader>
              <LibraryCardContent>
                <p className="text-sm text-muted-foreground">Basic bordered card</p>
              </LibraryCardContent>
            </LibraryCard>

            <LibraryCard variant="elevated">
              <LibraryCardHeader>
                <LibraryCardTitle>Elevated</LibraryCardTitle>
              </LibraryCardHeader>
              <LibraryCardContent>
                <p className="text-sm text-muted-foreground">Card with shadow</p>
              </LibraryCardContent>
            </LibraryCard>

            <LibraryCard variant="interactive">
              <LibraryCardHeader>
                <LibraryCardTitle>Interactive</LibraryCardTitle>
              </LibraryCardHeader>
              <LibraryCardContent>
                <p className="text-sm text-muted-foreground">Hover to see effect</p>
              </LibraryCardContent>
            </LibraryCard>
          </div>
        </div>
      </section>

      {/* With Footer */}
      <section>
        <h2 className="text-xl font-semibold mb-4">With Footer Actions</h2>
        <div className="p-6 rounded-lg border border-border bg-muted/20 mb-4">
          <LibraryCard variant="elevated" className="max-w-sm">
            <LibraryCardHeader>
              <LibraryCardTitle>Card with Actions</LibraryCardTitle>
              <LibraryCardDescription>
                This card includes footer actions.
              </LibraryCardDescription>
            </LibraryCardHeader>
            <LibraryCardContent>
              <p className="text-sm text-muted-foreground">
                Cards can include footer sections with buttons and actions.
              </p>
            </LibraryCardContent>
            <LibraryCardFooter className="gap-2">
              <Button variant="outline" size="sm">
                Cancel
              </Button>
              <Button size="sm">Save</Button>
            </LibraryCardFooter>
          </LibraryCard>
        </div>
        <CodeBlock code={withFooterCode} language="tsx" />
      </section>

      {/* Padding Options */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Padding Options</h2>
        <div className="p-6 rounded-lg border border-border bg-muted/20 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <LibraryCard padding="none" variant="elevated">
              <div className="p-4 border-b border-border">
                <p className="font-medium">None</p>
              </div>
              <div className="p-4">Content</div>
            </LibraryCard>
            <LibraryCard padding="sm" variant="elevated">
              <p className="font-medium">Small</p>
              <p className="text-sm text-muted-foreground mt-1">Content</p>
            </LibraryCard>
            <LibraryCard padding="default" variant="elevated">
              <p className="font-medium">Default</p>
              <p className="text-sm text-muted-foreground mt-1">Content</p>
            </LibraryCard>
            <LibraryCard padding="lg" variant="elevated">
              <p className="font-medium">Large</p>
              <p className="text-sm text-muted-foreground mt-1">Content</p>
            </LibraryCard>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section>
        <h2 className="text-xl font-semibold mb-4">API Reference</h2>
        <h3 className="text-lg font-medium mb-3">LibraryCard Props</h3>
        <APIReferenceTable props={cardProps} />
        
        <h3 className="text-lg font-medium mt-8 mb-3">Sub-Components</h3>
        <APIReferenceTable props={subComponentProps} />
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Accessibility</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Cards use semantic HTML structure with heading hierarchy.</li>
          <li>Interactive cards are keyboard focusable when clickable.</li>
          <li>Proper contrast ratios maintained across all variants.</li>
        </ul>
      </section>
    </div>
  );
};
