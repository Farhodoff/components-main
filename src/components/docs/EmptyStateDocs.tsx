import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { EmptyState } from "@/components/library/EmptyState";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import { FileSearch, Inbox } from "lucide-react";

const emptyStateProps = [
  {
    name: "title",
    type: "string",
    required: true,
    description: "Primary headline for the empty state.",
  },
  {
    name: "description",
    type: "string",
    description: "Supporting text explaining the empty condition.",
  },
  {
    name: "icon",
    type: "React.ReactNode",
    description: "Custom icon element displayed in the circle badge.",
  },
  {
    name: "action",
    type: "{ label: string; onClick: () => void }",
    description: "Call to action button configuration.",
  },
  {
    name: "children",
    type: "React.ReactNode",
    description: "Additional custom elements or controls.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for styling.",
  },
];

const importCode = `import { EmptyState } from "@/components/library/EmptyState";`;

const usageCode = `import { Inbox, Plus } from "lucide-react";

<EmptyState
  icon={<Inbox className="h-10 w-10 text-muted-foreground" />}
  title="No items found"
  description="You haven't created any items yet. Start by creating your first item."
  action={{
    label: "Create Item",
    onClick: () => console.log("Create clicked"),
  }}
/>`;

export const EmptyStateDocs: React.FC = () => {
  return (
    <div className="space-y-12">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Empty State</h1>
          <LibraryBadge variant="secondary">Library</LibraryBadge>
        </div>
        <p className="text-lg text-muted-foreground">
          A placeholder component to display when lists, search queries, or dashboards have no data to show.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-4">Interactive Demo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EmptyState
            icon={<Inbox className="h-10 w-10 text-muted-foreground" />}
            title="No messages yet"
            description="Your inbox is currently empty. New notifications and updates will appear here."
            action={{
              label: "Refresh Inbox",
              onClick: () => alert("Refreshed!"),
            }}
          />

          <EmptyState
            icon={<FileSearch className="h-10 w-10 text-muted-foreground" />}
            title="No search results"
            description="We couldn't find any documents matching your criteria. Try different keywords."
            action={{
              label: "Clear Search",
              onClick: () => alert("Cleared!"),
            }}
          />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Installation & Import</h2>
        <CodeBlock code={importCode} language="typescript" />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Usage</h2>
        <CodeBlock code={usageCode} language="tsx" />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">API Reference</h2>
        <APIReferenceTable props={emptyStateProps} />
      </section>
    </div>
  );
};
