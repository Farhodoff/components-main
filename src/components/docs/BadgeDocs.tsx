import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import { Star, Check, AlertCircle, Zap } from "lucide-react";

const badgeProps = [
  {
    name: "variant",
    type: '"default" | "secondary" | "destructive" | "success" | "warning" | "outline" | "ghost"',
    default: '"default"',
    description: "The visual style variant of the badge.",
  },
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    default: '"default"',
    description: "The size of the badge.",
  },
  {
    name: "icon",
    type: "ReactNode",
    description: "Optional icon displayed before the badge text.",
  },
  {
    name: "removable",
    type: "boolean",
    default: "false",
    description: "Shows a remove button on the badge.",
  },
  {
    name: "onRemove",
    type: "() => void",
    description: "Callback when the remove button is clicked.",
  },
];

const importCode = `import { LibraryBadge } from "@/components/library/LibraryBadge";`;

const basicUsageCode = `<LibraryBadge>Default</LibraryBadge>
<LibraryBadge variant="secondary">Secondary</LibraryBadge>
<LibraryBadge variant="success">Success</LibraryBadge>
<LibraryBadge variant="warning">Warning</LibraryBadge>
<LibraryBadge variant="destructive">Error</LibraryBadge>`;

const withIconCode = `<LibraryBadge icon={<Star className="h-3 w-3" />}>
  Featured
</LibraryBadge>

<LibraryBadge 
  variant="success" 
  icon={<Check className="h-3 w-3" />}
>
  Completed
</LibraryBadge>`;

const removableCode = `<LibraryBadge 
  removable 
  onRemove={() => console.log("Removed!")}
>
  Removable Tag
</LibraryBadge>`;

export const BadgeDocs: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Badge</h1>
          <LibraryBadge variant="success">Stable</LibraryBadge>
        </div>
        <p className="text-lg text-muted-foreground">
          Displays a badge or label for status indicators, categories, or tags.
          Supports icons and removable functionality.
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
            <LibraryBadge>Default</LibraryBadge>
            <LibraryBadge variant="secondary">Secondary</LibraryBadge>
            <LibraryBadge variant="success">Success</LibraryBadge>
            <LibraryBadge variant="warning">Warning</LibraryBadge>
            <LibraryBadge variant="destructive">Error</LibraryBadge>
          </div>
        </div>
        <CodeBlock code={basicUsageCode} language="tsx" />
      </section>

      {/* All Variants */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Variants</h2>
        <div className="p-6 rounded-lg border border-border bg-muted/20 mb-4">
          <div className="flex flex-wrap gap-3">
            <LibraryBadge variant="default">Default</LibraryBadge>
            <LibraryBadge variant="secondary">Secondary</LibraryBadge>
            <LibraryBadge variant="success">Success</LibraryBadge>
            <LibraryBadge variant="warning">Warning</LibraryBadge>
            <LibraryBadge variant="destructive">Destructive</LibraryBadge>
            <LibraryBadge variant="outline">Outline</LibraryBadge>
            <LibraryBadge variant="ghost">Ghost</LibraryBadge>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Sizes</h2>
        <div className="p-6 rounded-lg border border-border bg-muted/20 mb-4">
          <div className="flex flex-wrap items-center gap-3">
            <LibraryBadge size="sm">Small</LibraryBadge>
            <LibraryBadge size="default">Default</LibraryBadge>
            <LibraryBadge size="lg">Large</LibraryBadge>
          </div>
        </div>
      </section>

      {/* With Icons */}
      <section>
        <h2 className="text-xl font-semibold mb-4">With Icons</h2>
        <div className="p-6 rounded-lg border border-border bg-muted/20 mb-4">
          <div className="flex flex-wrap gap-3">
            <LibraryBadge icon={<Star className="h-3 w-3" />} variant="secondary">
              Featured
            </LibraryBadge>
            <LibraryBadge icon={<Check className="h-3 w-3" />} variant="success">
              Completed
            </LibraryBadge>
            <LibraryBadge icon={<AlertCircle className="h-3 w-3" />} variant="warning">
              Pending
            </LibraryBadge>
            <LibraryBadge icon={<Zap className="h-3 w-3" />}>
              Active
            </LibraryBadge>
          </div>
        </div>
        <CodeBlock code={withIconCode} language="tsx" />
      </section>

      {/* Removable */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Removable</h2>
        <div className="p-6 rounded-lg border border-border bg-muted/20 mb-4">
          <div className="flex flex-wrap gap-3">
            <LibraryBadge removable onRemove={() => {}}>
              React
            </LibraryBadge>
            <LibraryBadge removable onRemove={() => {}} variant="secondary">
              TypeScript
            </LibraryBadge>
            <LibraryBadge removable onRemove={() => {}} variant="success">
              Tailwind
            </LibraryBadge>
          </div>
        </div>
        <CodeBlock code={removableCode} language="tsx" />
      </section>

      {/* API Reference */}
      <section>
        <h2 className="text-xl font-semibold mb-4">API Reference</h2>
        <APIReferenceTable props={badgeProps} />
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Accessibility</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Badges use semantic span elements with appropriate roles.</li>
          <li>Removable badges have accessible button labels.</li>
          <li>Color is not the only indicator - icons and text provide context.</li>
        </ul>
      </section>
    </div>
  );
};
