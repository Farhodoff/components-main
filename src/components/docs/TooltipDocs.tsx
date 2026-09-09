import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Plus, Bookmark, Share2, HelpCircle, Save } from "lucide-react";

const tooltipProps = [
  {
    name: "delayDuration",
    type: "number",
    default: "700",
    description: "The duration from when the mouse enters the trigger until the tooltip opens (in milliseconds).",
  },
  {
    name: "skipDelayDuration",
    type: "number",
    default: "300",
    description: "How much time a user has to enter another trigger without re-triggering the delay.",
  },
  {
    name: "open",
    type: "boolean",
    description: "The controlled open state of the tooltip.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Event handler called when the open state changes.",
  },
];

const tooltipContentProps = [
  {
    name: "side",
    type: '"top" | "right" | "bottom" | "left"',
    default: '"top"',
    description: "The preferred side of the trigger to render against when open.",
  },
  {
    name: "sideOffset",
    type: "number",
    default: "4",
    description: "The distance in pixels from the trigger.",
  },
  {
    name: "align",
    type: '"start" | "center" | "end"',
    default: '"center"',
    description: "The preferred alignment against the trigger.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for custom styling.",
  },
];

const importCode = `import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@farhod_dev/super-ui";`;

const basicUsageCode = `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover over me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`;

export const TooltipDocs: React.FC = () => {
  return (
    <TooltipProvider delayDuration={150}>
      <div className="space-y-12">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <LibraryBadge variant="outline">Feedback & Overlays</LibraryBadge>
            <LibraryBadge variant="secondary">Radix UI</LibraryBadge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Tooltip</h1>
          <p className="text-lg text-muted-foreground">
            A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
          </p>
        </div>

        {/* Interactive Examples */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Examples</h2>

          {/* 1. Basic Icon Buttons with Tooltips */}
          <div className="rounded-lg border border-border p-6 space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">Action Tooltips</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Add new item">
                    <Plus className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add new project</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Bookmark repository">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Bookmark repository</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Share package">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share package link</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* 2. Four Directions */}
          <div className="rounded-lg border border-border p-6 space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">Placement Directions</h3>
            <div className="flex flex-wrap gap-4 items-center justify-start">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary" size="sm">Top</Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Tooltip on top</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary" size="sm">Right</Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Tooltip on right</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary" size="sm">Bottom</Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Tooltip on bottom</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary" size="sm">Left</Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>Tooltip on left</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* 3. With Keyboard Shortcut & Icon */}
          <div className="rounded-lg border border-border p-6 space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">With Shortcut & Helper Text</h3>
            <div className="flex flex-wrap gap-6 items-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="gap-2">
                    <Save className="h-4 w-4" />
                    Save Draft
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="flex items-center gap-2">
                  <span>Save file</span>
                  <kbd className="px-1.5 py-0.5 text-[10px] font-semibold bg-muted text-muted-foreground rounded border border-border">
                    ⌘S
                  </kbd>
                </TooltipContent>
              </Tooltip>

              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <span>Enterprise encryption</span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button type="button" className="text-muted-foreground hover:text-foreground">
                      <HelpCircle className="h-4 w-4" />
                      <span className="sr-only">More info about encryption</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[220px] text-xs">
                    <p>All data is encrypted in-transit using TLS 1.3 and at-rest with AES-256 GCM.</p>
                  </TooltipContent>
                </Tooltip>
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
            <h3 className="text-lg font-medium mb-3">Tooltip Props</h3>
            <APIReferenceTable props={tooltipProps} />
          </div>
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-3">TooltipContent Props</h3>
            <APIReferenceTable props={tooltipContentProps} />
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};
