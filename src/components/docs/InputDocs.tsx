import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryInput } from "@/components/library/LibraryInput";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import { Mail, Search, User } from "lucide-react";

const inputProps = [
  {
    name: "variant",
    type: '"default" | "error" | "success"',
    default: '"default"',
    description: "The visual style variant of the input.",
  },
  {
    name: "inputSize",
    type: '"sm" | "default" | "lg"',
    default: '"default"',
    description: "The size of the input field.",
  },
  {
    name: "label",
    type: "string",
    description: "Label text displayed above the input.",
  },
  {
    name: "description",
    type: "string",
    description: "Helper text displayed below the label.",
  },
  {
    name: "error",
    type: "string",
    description: "Error message. Sets variant to error automatically.",
  },
  {
    name: "success",
    type: "string",
    description: "Success message. Sets variant to success automatically.",
  },
  {
    name: "leftIcon",
    type: "ReactNode",
    description: "Icon displayed on the left side of the input.",
  },
  {
    name: "rightIcon",
    type: "ReactNode",
    description: "Icon displayed on the right side of the input.",
  },
  {
    name: "type",
    type: "string",
    default: '"text"',
    description: 'Input type. Use "password" for automatic show/hide toggle.',
  },
];

const importCode = `import { LibraryInput } from "@/components/library/LibraryInput";`;

const basicUsageCode = `<LibraryInput placeholder="Enter text..." />

<LibraryInput
  label="Email Address"
  placeholder="you@example.com"
/>

<LibraryInput
  label="Username"
  description="This will be your public display name."
  placeholder="johndoe"
/>`;

const withIconsCode = `<LibraryInput
  label="Email"
  placeholder="you@example.com"
  leftIcon={<Mail className="h-4 w-4" />}
/>

<LibraryInput
  label="Search"
  placeholder="Search..."
  leftIcon={<Search className="h-4 w-4" />}
/>`;

const validationCode = `<LibraryInput
  label="Email"
  error="Please enter a valid email address."
  leftIcon={<Mail className="h-4 w-4" />}
/>

<LibraryInput
  label="Username"
  success="Username is available!"
  leftIcon={<User className="h-4 w-4" />}
  defaultValue="johndoe"
/>`;

export const InputDocs: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Input</h1>
          <LibraryBadge variant="success">Stable</LibraryBadge>
        </div>
        <p className="text-lg text-muted-foreground">
          A fully accessible input field with support for labels, descriptions,
          icons, validation states, and password visibility toggle.
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
          <div className="flex flex-col gap-4 max-w-sm">
            <LibraryInput placeholder="Enter text..." />
            <LibraryInput label="Email Address" placeholder="you@example.com" />
            <LibraryInput
              label="Username"
              description="This will be your public display name."
              placeholder="johndoe"
            />
          </div>
        </div>
        <CodeBlock code={basicUsageCode} language="tsx" />
      </section>

      {/* With Icons */}
      <section>
        <h2 className="text-xl font-semibold mb-4">With Icons</h2>
        <div className="p-6 rounded-lg border border-border bg-muted/20 mb-4">
          <div className="flex flex-col gap-4 max-w-sm">
            <LibraryInput
              label="Email"
              placeholder="you@example.com"
              leftIcon={<Mail className="h-4 w-4" />}
            />
            <LibraryInput
              label="Search"
              placeholder="Search..."
              leftIcon={<Search className="h-4 w-4" />}
            />
          </div>
        </div>
        <CodeBlock code={withIconsCode} language="tsx" />
      </section>

      {/* Password */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Password Input</h2>
        <div className="p-6 rounded-lg border border-border bg-muted/20 mb-4">
          <div className="max-w-sm">
            <LibraryInput
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Password inputs automatically include a show/hide toggle button.
        </p>
      </section>

      {/* Validation States */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Validation States</h2>
        <div className="p-6 rounded-lg border border-border bg-muted/20 mb-4">
          <div className="flex flex-col gap-4 max-w-sm">
            <LibraryInput
              label="Email"
              error="Please enter a valid email address."
              leftIcon={<Mail className="h-4 w-4" />}
            />
            <LibraryInput
              label="Username"
              success="Username is available!"
              leftIcon={<User className="h-4 w-4" />}
              defaultValue="johndoe"
            />
          </div>
        </div>
        <CodeBlock code={validationCode} language="tsx" />
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Sizes</h2>
        <div className="p-6 rounded-lg border border-border bg-muted/20 mb-4">
          <div className="flex flex-col gap-4 max-w-sm">
            <LibraryInput inputSize="sm" placeholder="Small input" />
            <LibraryInput inputSize="default" placeholder="Default input" />
            <LibraryInput inputSize="lg" placeholder="Large input" />
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section>
        <h2 className="text-xl font-semibold mb-4">API Reference</h2>
        <APIReferenceTable props={inputProps} />
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Accessibility</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Labels are properly associated with inputs via htmlFor/id.</li>
          <li>Error messages are announced via aria-describedby and role="alert".</li>
          <li>Invalid inputs have aria-invalid="true" for screen readers.</li>
          <li>Password toggle buttons have proper aria-labels.</li>
        </ul>
      </section>
    </div>
  );
};
