import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  AlertTriangle,
  Info,
  XCircle,
  Bell,
  RefreshCw,
} from "lucide-react";

const toasterProps = [
  {
    name: "position",
    type: '"top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"',
    default: '"bottom-right"',
    description: "Position of the toast container on screen.",
  },
  {
    name: "theme",
    type: '"light" | "dark" | "system"',
    default: '"system"',
    description: "Theme styling for toast cards.",
  },
  {
    name: "richColors",
    type: "boolean",
    default: "false",
    description: "Render rich pastel background colors for success, info, warning, and error types.",
  },
  {
    name: "expand",
    type: "boolean",
    default: "false",
    description: "Whether toast stack expands on hover.",
  },
  {
    name: "duration",
    type: "number",
    default: "4000",
    description: "Default display duration for toasts in milliseconds.",
  },
  {
    name: "closeButton",
    type: "boolean",
    default: "false",
    description: "Display an explicit close 'x' icon on each toast.",
  },
];

const toastMethodProps = [
  {
    name: "toast(message, options)",
    type: "(message: string, options?: ToastOptions) => string | number",
    description: "Trigger a standard default neutral toast notification.",
  },
  {
    name: "toast.success(message, options)",
    type: "(message: string, options?: ToastOptions) => string | number",
    description: "Trigger a success notification with green checkmark.",
  },
  {
    name: "toast.info(message, options)",
    type: "(message: string, options?: ToastOptions) => string | number",
    description: "Trigger an informational notification with blue badge.",
  },
  {
    name: "toast.warning(message, options)",
    type: "(message: string, options?: ToastOptions) => string | number",
    description: "Trigger a cautionary warning notification.",
  },
  {
    name: "toast.error(message, options)",
    type: "(message: string, options?: ToastOptions) => string | number",
    description: "Trigger an error notification with red cross icon.",
  },
  {
    name: "toast.promise(promise, options)",
    type: "<T>(promise: Promise<T>, options: PromiseData<T>) => string | number",
    description: "Automatically render loading, success, and error states for an async operation.",
  },
];

const importCode = `import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

// In your root layout or App.tsx:
export function RootLayout({ children }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}`;

const basicUsageCode = `// Basic notification
toast("Your profile has been updated.");

// Success notification with description
toast.success("Changes saved successfully", {
  description: "Sunday, December 03, 2026 at 9:00 AM",
});

// Notification with an interactive action button
toast("File moved to trash", {
  action: {
    label: "Undo",
    onClick: () => console.log("Undo file deletion"),
  },
});`;

export const ToastDocs: React.FC = () => {
  const triggerPromiseToast = () => {
    const fakeAsyncAction = () =>
      new Promise<{ name: string }>((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.3) {
            resolve({ name: "super-ui-components.zip" });
          } else {
            reject(new Error("Network timeout"));
          }
        }, 2000);
      });

    toast.promise(fakeAsyncAction(), {
      loading: "Archiving component assets...",
      success: (data) => `${data.name} created successfully!`,
      error: "Archive failed. Please check network connection.",
    });
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <LibraryBadge variant="outline">Feedback & Overlays</LibraryBadge>
          <LibraryBadge variant="secondary">Sonner</LibraryBadge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Toast (Sonner)</h1>
        <p className="text-lg text-muted-foreground">
          An opinionated, silky-smooth toast notification library with multi-state promises, actionable triggers, and rich accessibility.
        </p>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Examples</h2>

        {/* 1. Standard Notification Variants */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Notification Variants</h3>
          <div className="flex flex-wrap gap-3 items-center">
            <Button
              variant="outline"
              onClick={() =>
                toast("Event notification", {
                  description: "Your team calendar has been synchronized.",
                })
              }
              className="gap-2"
            >
              <Bell className="h-4 w-4" />
              Default Toast
            </Button>

            <Button
              variant="secondary"
              className="gap-2 text-emerald-600 dark:text-emerald-400"
              onClick={() =>
                toast.success("Payment received", {
                  description: "Invoice #INV-2026-89 has been paid in full.",
                })
              }
            >
              <CheckCircle2 className="h-4 w-4" />
              Success
            </Button>

            <Button
              variant="secondary"
              className="gap-2 text-blue-600 dark:text-blue-400"
              onClick={() =>
                toast.info("Update available", {
                  description: "Version 2.4.0 is now ready to download.",
                })
              }
            >
              <Info className="h-4 w-4" />
              Info
            </Button>

            <Button
              variant="secondary"
              className="gap-2 text-amber-600 dark:text-amber-400"
              onClick={() =>
                toast.warning("High memory usage", {
                  description: "Server CPU utilization is above 85%.",
                })
              }
            >
              <AlertTriangle className="h-4 w-4" />
              Warning
            </Button>

            <Button
              variant="secondary"
              className="gap-2 text-destructive"
              onClick={() =>
                toast.error("Database connection lost", {
                  description: "Retrying connection attempt 3 of 5...",
                })
              }
            >
              <XCircle className="h-4 w-4" />
              Error
            </Button>
          </div>
        </div>

        {/* 2. Action & Undo Notifications */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Interactive Action & Undo</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <Button
              variant="outline"
              onClick={() =>
                toast("Email moved to Archive", {
                  description: "Discussion on quarterly roadmap archived.",
                  action: {
                    label: "Undo",
                    onClick: () => toast.info("Email restored to Inbox"),
                  },
                })
              }
            >
              Action Toast (Undo)
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                toast("Deploying staging instance", {
                  description: "Cluster us-east-1 initiating container boot.",
                  cancel: {
                    label: "Cancel",
                    onClick: () => toast.warning("Deployment aborted"),
                  },
                })
              }
            >
              Cancelable Toast
            </Button>
          </div>
        </div>

        {/* 3. Async Promise Toasts */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Async Operation with Promise</h3>
          <p className="text-sm text-muted-foreground">
            Handles loading state automatically and resolves to either a success or error notification.
          </p>
          <div>
            <Button onClick={triggerPromiseToast} className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Trigger Async Promise
            </Button>
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
          <h3 className="text-lg font-medium mb-3">Toaster Props</h3>
          <APIReferenceTable props={toasterProps} />
        </div>
        <div className="pt-4">
          <h3 className="text-lg font-medium mb-3">Toast Methods</h3>
          <APIReferenceTable props={toastMethodProps} />
        </div>
      </div>
    </div>
  );
};
