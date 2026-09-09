import React, { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Shield, Bell, CheckCircle2 } from "lucide-react";

const checkboxProps = [
  {
    name: "checked",
    type: 'boolean | "indeterminate"',
    description: "The controlled checked state of the checkbox.",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    description: "The default checked state when initially rendered (uncontrolled).",
  },
  {
    name: "onCheckedChange",
    type: '(checked: boolean | "indeterminate") => void',
    description: "Event handler called when the checked state changes.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "When true, prevents user interaction with the checkbox.",
  },
  {
    name: "required",
    type: "boolean",
    default: "false",
    description: "When true, indicates that the user must check the checkbox before submitting a form.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for custom styling.",
  },
];

const importCode = `import { Checkbox } from "@farhod_dev/super-ui";
import { Label } from "@farhod_dev/super-ui";`;

const basicUsageCode = `<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`;

export const CheckboxDocs: React.FC = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [selectedNotifications, setSelectedNotifications] = useState<string[]>([
    "security",
  ]);

  const toggleNotification = (id: string) => {
    setSelectedNotifications((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      toast.error("Please accept the terms and conditions to proceed.");
      return;
    }
    toast.success("Account created successfully!");
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <LibraryBadge variant="outline">Form Controls</LibraryBadge>
          <LibraryBadge variant="secondary">Radix UI</LibraryBadge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Checkbox</h1>
        <p className="text-lg text-muted-foreground">
          A control that allows the user to toggle between checked and not checked states, fully accessible with keyboard navigation.
        </p>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Examples</h2>

        {/* 1. Basic Checkbox with Label & Subtext */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">With Label & Description</h3>
          <div className="items-top flex space-x-3">
            <Checkbox id="marketing-emails" defaultChecked />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="marketing-emails"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                Marketing emails
              </Label>
              <p className="text-xs text-muted-foreground">
                Receive weekly product updates, new component releases, and engineering tips.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Form Submission with Terms & Conditions */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Controlled Agreement Form</h3>
          <form onSubmit={handleRegisterSubmit} className="max-w-md space-y-4">
            <div className="items-top flex space-x-3 p-3.5 rounded-md border border-border/60 bg-muted/20">
              <Checkbox
                id="terms-cond"
                checked={termsAccepted}
                onCheckedChange={(checked) => setTermsAccepted(checked === true)}
              />
              <div className="grid gap-1 leading-none">
                <Label
                  htmlFor="terms-cond"
                  className="text-sm font-medium cursor-pointer"
                >
                  I accept the Terms of Service & Privacy Policy
                </Label>
                <p className="text-xs text-muted-foreground">
                  You agree to our automated verification protocols and telemetry guidelines.
                </p>
              </div>
            </div>

            <Button type="submit" size="sm" disabled={!termsAccepted} className="gap-1.5">
              <CheckCircle2 className="h-4 w-4" />
              Complete Registration
            </Button>
          </form>
        </div>

        {/* 3. Multiple Options Checklist */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Multiple Selection Checklist</h3>
          <div className="max-w-md space-y-3">
            <div className="flex items-center justify-between p-3 rounded-md border border-border bg-card">
              <div className="flex items-center space-x-3">
                <Shield className="h-4 w-4 text-primary" />
                <Label htmlFor="chk-security" className="text-sm font-medium cursor-pointer">
                  Security Alerts (Required)
                </Label>
              </div>
              <Checkbox
                id="chk-security"
                checked={selectedNotifications.includes("security")}
                onCheckedChange={() => toggleNotification("security")}
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-md border border-border bg-card">
              <div className="flex items-center space-x-3">
                <Bell className="h-4 w-4 text-primary" />
                <Label htmlFor="chk-product" className="text-sm font-medium cursor-pointer">
                  Product Announcements
                </Label>
              </div>
              <Checkbox
                id="chk-product"
                checked={selectedNotifications.includes("product")}
                onCheckedChange={() => toggleNotification("product")}
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-md border border-border bg-muted/40 opacity-70">
              <div className="flex items-center space-x-3">
                <span className="text-sm text-muted-foreground">Third-party Offers</span>
                <LibraryBadge variant="outline" className="text-[10px]">Disabled</LibraryBadge>
              </div>
              <Checkbox id="chk-disabled" disabled />
            </div>
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
          <h3 className="text-lg font-medium mb-3">Checkbox Props</h3>
          <APIReferenceTable props={checkboxProps} />
        </div>
      </div>
    </div>
  );
};
