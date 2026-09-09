import React, { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { AlertTriangle, UserPlus, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const dialogProps = [
  {
    name: "open",
    type: "boolean",
    description: "The controlled open state of the dialog.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Event handler called when the open state of the dialog changes.",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    description: "The open state of the dialog when initially rendered in uncontrolled mode.",
  },
  {
    name: "modal",
    type: "boolean",
    default: "true",
    description: "The modality of the dialog. When set to true, interaction with outside elements will be disabled and only dialog content will be visible to screen readers.",
  },
];

const dialogContentProps = [
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for custom styling and animations.",
  },
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "The content to be rendered inside the modal container.",
  },
];

const importCode = `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@farhod_dev/super-ui";`;

const basicUsageCode = `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">Name</Label>
        <Input id="name" defaultValue="Farhod Soyilov" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">Username</Label>
        <Input id="username" defaultValue="@farhod_dev" className="col-span-3" />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`;

export const DialogDocs: React.FC = () => {
  const [controlledOpen, setControlledOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleSaveProfile = () => {
    toast.success("Profile updated successfully!");
  };

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      setIsDeleting(false);
      setControlledOpen(false);
      toast.success("Project deleted successfully");
    }, 800);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <LibraryBadge variant="outline">Feedback & Overlays</LibraryBadge>
          <LibraryBadge variant="secondary">Radix UI</LibraryBadge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Dialog</h1>
        <p className="text-lg text-muted-foreground">
          A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
        </p>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Examples</h2>

        {/* 1. Basic Dialog */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Standard Form Dialog</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" className="gap-2">
                  <UserPlus className="h-4 w-4" />
                  Edit Profile
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="demo-name" className="text-right">
                      Name
                    </Label>
                    <Input id="demo-name" defaultValue="Farhod Soyilov" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="demo-username" className="text-right">
                      Username
                    </Label>
                    <Input id="demo-username" defaultValue="@farhod_dev" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button onClick={handleSaveProfile} className="gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      Save changes
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* 2. Destructive Confirmation Dialog */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Confirmation / Destructive Dialog</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <Dialog open={controlledOpen} onOpenChange={setControlledOpen}>
              <DialogTrigger asChild>
                <Button variant="destructive" className="gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Delete Repository
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[440px]">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2 text-destructive">
                    <AlertTriangle className="h-5 w-5" />
                    Are you absolutely sure?
                  </DialogTitle>
                  <DialogDescription className="pt-1">
                    This action cannot be undone. This will permanently delete your repository and remove all collaborators.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mt-4 gap-2 sm:gap-0">
                  <Button
                    variant="outline"
                    onClick={() => setControlledOpen(false)}
                    disabled={isDeleting}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={handleDelete}
                    disabled={isDeleting}
                  >
                    {isDeleting ? "Deleting..." : "Yes, delete repository"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
          <h3 className="text-lg font-medium mb-3">Dialog Props</h3>
          <APIReferenceTable props={dialogProps} />
        </div>
        <div className="pt-4">
          <h3 className="text-lg font-medium mb-3">DialogContent Props</h3>
          <APIReferenceTable props={dialogContentProps} />
        </div>
      </div>
    </div>
  );
};
