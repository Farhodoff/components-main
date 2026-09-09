import React, { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { Combobox } from "@/components/library/Combobox";
import { LibraryBadge } from "@/components/library/LibraryBadge";

const comboboxProps = [
  {
    name: "options",
    type: "ComboboxOption[]",
    required: true,
    description: "Array of { value: string, label: string } options to select from.",
  },
  {
    name: "value",
    type: "string",
    description: "Currently selected option value.",
  },
  {
    name: "onSelect",
    type: "(value: string) => void",
    required: true,
    description: "Callback fired when an option is selected.",
  },
  {
    name: "placeholder",
    type: "string",
    default: '"Select option..."',
    description: "Placeholder text when no option is selected.",
  },
  {
    name: "searchPlaceholder",
    type: "string",
    default: '"Search..."',
    description: "Placeholder for the search input.",
  },
  {
    name: "emptyText",
    type: "string",
    default: '"No option found."',
    description: "Message shown when no matching option is found.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for the trigger button.",
  },
];

const frameworks = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue.js" },
  { value: "next", label: "Next.js" },
  { value: "svelte", label: "Svelte" },
  { value: "angular", label: "Angular" },
];

const importCode = `import { Combobox } from "@/components/library/Combobox";`;

const usageCode = `const frameworks = [
  { value: "react", label: "React" },
  { value: "next", label: "Next.js" },
  { value: "vue", label: "Vue.js" },
];

export default function Example() {
  const [value, setValue] = useState("");

  return (
    <Combobox
      options={frameworks}
      value={value}
      onSelect={setValue}
      placeholder="Select framework..."
    />
  );
}`;

export const ComboboxDocs: React.FC = () => {
  const [framework, setFramework] = useState("react");

  return (
    <div className="space-y-12">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Combobox</h1>
          <LibraryBadge variant="secondary">Library</LibraryBadge>
        </div>
        <p className="text-lg text-muted-foreground">
          Autocomplete input and command palette with searchable dropdown list, built on Radix Popover and Command primitives.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-4">Interactive Demo</h2>
        <div className="p-8 rounded-lg border border-border bg-card">
          <div className="max-w-sm space-y-3">
            <Combobox
              options={frameworks}
              value={framework}
              onSelect={setFramework}
              placeholder="Select a framework..."
            />
            {framework && (
              <p className="text-xs text-muted-foreground">
                Selected: <span className="font-semibold text-foreground">{framework}</span>
              </p>
            )}
          </div>
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
        <APIReferenceTable props={comboboxProps} />
      </section>
    </div>
  );
};
