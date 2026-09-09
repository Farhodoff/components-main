import React, { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const selectProps = [
  {
    name: "value",
    type: "string",
    description: "The controlled value of the selected item.",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    description: "Event handler called when the selected value changes.",
  },
  {
    name: "defaultValue",
    type: "string",
    description: "The default value of the select when initially rendered (uncontrolled).",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "When true, prevents user interaction with the select component.",
  },
];

const selectItemProps = [
  {
    name: "value",
    type: "string",
    required: true,
    description: "The unique string value of the select option.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "When true, disables this specific option in the dropdown list.",
  },
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "The text or element displayed for this item.",
  },
];

const importCode = `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@farhod_dev/super-ui";`;

const basicUsageCode = `<Select defaultValue="system">
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>`;

export const SelectDocs: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState("developer");

  const handleRoleChange = (value: string) => {
    setSelectedRole(value);
    toast.info(`Selected role: ${value}`);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <LibraryBadge variant="outline">Form Controls</LibraryBadge>
          <LibraryBadge variant="secondary">Radix UI</LibraryBadge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Select</h1>
        <p className="text-lg text-muted-foreground">
          Displays a list of options for the user to pick from—triggered by a button with accessible keyboard navigation.
        </p>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Examples</h2>

        {/* 1. Basic Select */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Basic Select</h3>
          <div className="max-w-xs space-y-2">
            <Label htmlFor="theme-select">Theme</Label>
            <Select defaultValue="system">
              <SelectTrigger id="theme-select" className="w-[220px]">
                <SelectValue placeholder="Select a theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light Mode</SelectItem>
                <SelectItem value="dark">Dark Mode</SelectItem>
                <SelectItem value="system">System Default</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* 2. Grouped Select with Separator */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Grouped Options with Labels</h3>
          <div className="max-w-xs space-y-2">
            <Label htmlFor="tech-select">Technology Stack</Label>
            <Select defaultValue="react">
              <SelectTrigger id="tech-select" className="w-[260px]">
                <SelectValue placeholder="Select framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Frontend</SelectLabel>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="vue">Vue.js</SelectItem>
                  <SelectItem value="svelte">Svelte</SelectItem>
                  <SelectItem value="nextjs">Next.js</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Backend & Cloud</SelectLabel>
                  <SelectItem value="nodejs">Node.js</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="supabase">Supabase</SelectItem>
                  <SelectItem value="postgres">PostgreSQL</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* 3. Controlled Select */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Controlled State with Feedback</h3>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Select value={selectedRole} onValueChange={handleRoleChange}>
              <SelectTrigger className="w-[220px]">
                <SelectValue placeholder="Select user role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="developer">Software Engineer</SelectItem>
                <SelectItem value="designer">UI/UX Designer</SelectItem>
                <SelectItem value="product">Product Manager</SelectItem>
                <SelectItem value="qa">QA Specialist</SelectItem>
                <SelectItem value="admin" disabled>
                  Super Administrator (Disabled)
                </SelectItem>
              </SelectContent>
            </Select>
            <span className="text-sm text-muted-foreground">
              Current state: <strong className="text-foreground">{selectedRole}</strong>
            </span>
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
          <h3 className="text-lg font-medium mb-3">Select Props</h3>
          <APIReferenceTable props={selectProps} />
        </div>
        <div className="pt-4">
          <h3 className="text-lg font-medium mb-3">SelectItem Props</h3>
          <APIReferenceTable props={selectItemProps} />
        </div>
      </div>
    </div>
  );
};
