import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { User } from "lucide-react";

const avatarProps = [
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for custom sizing, border, or rounded shape.",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "Change the default rendered element for the one passed as a child.",
  },
];

const avatarImageProps = [
  {
    name: "src",
    type: "string",
    description: "The image source URL to display.",
  },
  {
    name: "alt",
    type: "string",
    description: "Accessible text description of the avatar image.",
  },
  {
    name: "onLoadingStatusChange",
    type: '(status: "idle" | "loading" | "loaded" | "error") => void',
    description: "Callback invoked whenever the image loading status changes.",
  },
];

const avatarFallbackProps = [
  {
    name: "delayMs",
    type: "number",
    description: "A delay in milliseconds to wait before rendering fallback content (prevents flickering).",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for styling the fallback container.",
  },
];

const importCode = `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@farhod_dev/super-ui";`;

const basicUsageCode = `<Avatar>
  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="@farhod" />
  <AvatarFallback>FD</AvatarFallback>
</Avatar>`;

export const AvatarDocs: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <LibraryBadge variant="outline">Display</LibraryBadge>
          <LibraryBadge variant="secondary">Radix UI</LibraryBadge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Avatar</h1>
        <p className="text-lg text-muted-foreground">
          An image element with a smooth fallback mechanism for representing users, organizations, or bot entities.
        </p>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Examples</h2>

        {/* 1. Basic & Fallback Mechanisms */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Images & Fallbacks</h3>
          <div className="flex flex-wrap gap-6 items-center">
            {/* Valid Image */}
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
                  alt="Sophia Miller"
                />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">With Photo</p>
                <p className="text-xs text-muted-foreground">Sophia Miller</p>
              </div>
            </div>

            {/* Initials Fallback */}
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="broken-link-example" alt="Farhod Dev" />
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  FD
                </AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">Initials Fallback</p>
                <p className="text-xs text-muted-foreground">Farhod Dev</p>
              </div>
            </div>

            {/* Icon Fallback */}
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>
                  <User className="h-5 w-5 text-muted-foreground" />
                </AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">Generic Icon</p>
                <p className="text-xs text-muted-foreground">Guest User</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Sizes and Shapes */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Sizes & Shapes</h3>
          <div className="flex flex-wrap items-end gap-6">
            {/* XS */}
            <div className="flex flex-col items-center gap-1.5">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" />
                <AvatarFallback className="text-[10px]">XS</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">XS (24px)</span>
            </div>

            {/* SM */}
            <div className="flex flex-col items-center gap-1.5">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" />
                <AvatarFallback className="text-xs">SM</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">SM (32px)</span>
            </div>

            {/* MD (Default) */}
            <div className="flex flex-col items-center gap-1.5">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100" />
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">MD (40px)</span>
            </div>

            {/* LG */}
            <div className="flex flex-col items-center gap-1.5">
              <Avatar className="h-14 w-14">
                <AvatarImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150" />
                <AvatarFallback>LG</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">LG (56px)</span>
            </div>

            {/* Rounded Squircle */}
            <div className="flex flex-col items-center gap-1.5">
              <Avatar className="h-14 w-14 rounded-xl">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
                  className="rounded-xl"
                />
                <AvatarFallback className="rounded-xl">SQ</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">Squircle</span>
            </div>
          </div>
        </div>

        {/* 3. Status Badges & Stacked Group */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Presence Badges & Avatar Group</h3>
          <div className="flex flex-wrap gap-8 items-center">
            {/* Online Status */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" />
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
                <span
                  className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-background ring-1 ring-emerald-400/20"
                  title="Online"
                />
              </div>

              <div className="relative">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span
                  className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-amber-500 border-2 border-background"
                  title="Away"
                />
              </div>

              <div className="relative">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100" />
                  <AvatarFallback>RK</AvatarFallback>
                </Avatar>
                <span
                  className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-destructive border-2 border-background"
                  title="Busy"
                />
              </div>
            </div>

            {/* Stacked Avatar Group */}
            <div className="flex items-center">
              <div className="flex -space-x-3 overflow-hidden p-1">
                <Avatar className="inline-block border-2 border-background ring-1 ring-border">
                  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="inline-block border-2 border-background ring-1 ring-border">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar className="inline-block border-2 border-background ring-1 ring-border">
                  <AvatarImage src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100" />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-semibold text-muted-foreground ring-1 ring-border">
                  +4
                </div>
              </div>
              <span className="ml-3 text-xs text-muted-foreground">Engineering Team</span>
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
          <h3 className="text-lg font-medium mb-3">Avatar Props</h3>
          <APIReferenceTable props={avatarProps} />
        </div>
        <div className="pt-4">
          <h3 className="text-lg font-medium mb-3">AvatarImage Props</h3>
          <APIReferenceTable props={avatarImageProps} />
        </div>
        <div className="pt-4">
          <h3 className="text-lg font-medium mb-3">AvatarFallback Props</h3>
          <APIReferenceTable props={avatarFallbackProps} />
        </div>
      </div>
    </div>
  );
};
