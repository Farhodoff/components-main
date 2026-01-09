import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryAlert } from "@/components/library/LibraryAlert";
import { LibraryBadge } from "@/components/library/LibraryBadge";

const alertProps = [
  {
    name: "variant",
    type: '"default" | "info" | "success" | "warning" | "destructive"',
    default: '"default"',
    description: "The visual style variant of the alert.",
  },
  {
    name: "title",
    type: "string",
    description: "Optional title displayed at the top of the alert.",
  },
  {
    name: "dismissible",
    type: "boolean",
    default: "false",
    description: "Shows a dismiss button on the alert.",
  },
  {
    name: "onDismiss",
    type: "() => void",
    description: "Callback when the dismiss button is clicked.",
  },
  {
    name: "icon",
    type: "ReactNode",
    description: "Custom icon. Defaults to variant-appropriate icon.",
  },
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "The content of the alert message.",
  },
];

const importCode = `import { LibraryAlert } from "@/components/library/LibraryAlert";`;

const basicUsageCode = `<LibraryAlert title="Information">
  This is an informational message for the user.
</LibraryAlert>

<LibraryAlert variant="success" title="Success!">
  Your changes have been saved successfully.
</LibraryAlert>

<LibraryAlert variant="warning" title="Warning">
  Please review before proceeding.
</LibraryAlert>

<LibraryAlert variant="destructive" title="Error">
  There was a problem with your request.
</LibraryAlert>`;

const dismissibleCode = `<LibraryAlert 
  variant="info" 
  title="Dismissible Alert" 
  dismissible
  onDismiss={() => console.log("Dismissed!")}
>
  Click the X button to dismiss this alert.
</LibraryAlert>`;

export const AlertDocs: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Alert</h1>
          <LibraryBadge variant="success">Stable</LibraryBadge>
        </div>
        <p className="text-lg text-muted-foreground">
          Displays a callout for user attention. Supports different severity
          levels and optional dismissible functionality.
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
          <div className="flex flex-col gap-4 max-w-xl">
            <LibraryAlert variant="info" title="Information">
              This is an informational message for the user.
            </LibraryAlert>
            <LibraryAlert variant="success" title="Success!">
              Your changes have been saved successfully.
            </LibraryAlert>
            <LibraryAlert variant="warning" title="Warning">
              Please review before proceeding.
            </LibraryAlert>
            <LibraryAlert variant="destructive" title="Error">
              There was a problem with your request.
            </LibraryAlert>
          </div>
        </div>
        <CodeBlock code={basicUsageCode} language="tsx" />
      </section>

      {/* All Variants */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Variants</h2>
        <div className="p-6 rounded-lg border border-border bg-muted/20 mb-4">
          <div className="flex flex-col gap-4 max-w-xl">
            <LibraryAlert variant="default" title="Default">
              This is a default alert without specific severity.
            </LibraryAlert>
            <LibraryAlert variant="info" title="Info">
              Provides helpful information to the user.
            </LibraryAlert>
            <LibraryAlert variant="success" title="Success">
              Confirms a successful action or operation.
            </LibraryAlert>
            <LibraryAlert variant="warning" title="Warning">
              Warns about potential issues or requires attention.
            </LibraryAlert>
            <LibraryAlert variant="destructive" title="Destructive">
              Indicates an error or destructive action.
            </LibraryAlert>
          </div>
        </div>
      </section>

      {/* Without Title */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Without Title</h2>
        <div className="p-6 rounded-lg border border-border bg-muted/20 mb-4">
          <div className="flex flex-col gap-4 max-w-xl">
            <LibraryAlert variant="info">
              This alert has no title, just a message.
            </LibraryAlert>
            <LibraryAlert variant="success">
              Operation completed successfully.
            </LibraryAlert>
          </div>
        </div>
      </section>

      {/* Dismissible */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Dismissible</h2>
        <div className="p-6 rounded-lg border border-border bg-muted/20 mb-4">
          <div className="flex flex-col gap-4 max-w-xl">
            <LibraryAlert variant="info" title="Dismissible Alert" dismissible>
              Click the X button to dismiss this alert.
            </LibraryAlert>
            <LibraryAlert variant="warning" dismissible>
              This is a warning that can be dismissed.
            </LibraryAlert>
          </div>
        </div>
        <CodeBlock code={dismissibleCode} language="tsx" />
      </section>

      {/* API Reference */}
      <section>
        <h2 className="text-xl font-semibold mb-4">API Reference</h2>
        <APIReferenceTable props={alertProps} />
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Accessibility</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Alerts use role="alert" for screen reader announcements.</li>
          <li>Icons provide visual reinforcement alongside colors.</li>
          <li>Dismiss buttons have accessible labels.</li>
          <li>Focus is managed appropriately for dismissible alerts.</li>
        </ul>
      </section>
    </div>
  );
};
