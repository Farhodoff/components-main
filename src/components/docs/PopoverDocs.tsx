import React, { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings2, User, SlidersHorizontal, Check } from "lucide-react";

const popoverProps = [
  {
    name: "open",
    type: "boolean",
    description: "The controlled open state of the popover.",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    description: "The open state of the popover when it is initially rendered.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Event handler called when the open state of the popover changes.",
  },
  {
    name: "modal",
    type: "boolean",
    default: "false",
    description: "The modality of the popover. When true, interaction with outside elements is disabled.",
  },
];

const popoverContentProps = [
  {
    name: "align",
    type: '"start" | "center" | "end"',
    default: '"center"',
    description: "The preferred alignment against the trigger.",
  },
  {
    name: "side",
    type: '"top" | "right" | "bottom" | "left"',
    default: '"bottom"',
    description: "The preferred side of the trigger to render against when open.",
  },
  {
    name: "sideOffset",
    type: "number",
    default: "4",
    description: "The distance in pixels from the trigger.",
  },
  {
    name: "alignOffset",
    type: "number",
    default: "0",
    description: "An offset in pixels from the 'start' or 'end' alignment options.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for custom styling.",
  },
];

const importCode = `import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@farhod_dev/super-ui";`;

const basicUsageCode = `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4 className="font-medium leading-none">Dimensions</h4>
      <p className="text-sm text-muted-foreground">
        Set the dimensions for the layer.
      </p>
    </div>
  </PopoverContent>
</Popover>`;

export const PopoverDocs: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState("#3b82f6");
  const [filterTags, setFilterTags] = useState<string[]>(["Active", "Frontend"]);

  const colorOptions = [
    { label: "Blue", hex: "#3b82f6" },
    { label: "Violet", hex: "#8b5cf6" },
    { label: "Emerald", hex: "#10b981" },
    { label: "Rose", hex: "#f43f5e" },
    { label: "Amber", hex: "#f59e0b" },
  ];

  const availableTags = ["Active", "Pending", "Frontend", "Backend", "Design", "DevOps"];

  const toggleTag = (tag: string) => {
    setFilterTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <LibraryBadge variant="outline">Feedback & Overlays</LibraryBadge>
          <LibraryBadge variant="secondary">Radix UI</LibraryBadge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Popover</h1>
        <p className="text-lg text-muted-foreground">
          Displays rich interactive content in a portal triggered by an element, ideal for drop-down panels, mini forms, and filters.
        </p>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Examples</h2>

        {/* 1. Form Popover (Dimensions) */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Settings / Form Panel</h3>
          <div className="flex items-center">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Settings2 className="h-4 w-4" />
                  Dimensions
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Dimensions</h4>
                    <p className="text-sm text-muted-foreground">
                      Set the dimensions for the selected container layer.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="popover-width">Width</Label>
                      <Input
                        id="popover-width"
                        defaultValue="100%"
                        className="col-span-2 h-8"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="popover-max-width">Max. width</Label>
                      <Input
                        id="popover-max-width"
                        defaultValue="300px"
                        className="col-span-2 h-8"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="popover-height">Height</Label>
                      <Input
                        id="popover-height"
                        defaultValue="25px"
                        className="col-span-2 h-8"
                      />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* 2. User Profile Popover */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">User Profile Quick Card</h3>
          <div className="flex items-center">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="secondary" className="gap-2">
                  <User className="h-4 w-4" />
                  Profile Preview
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-72">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                      FD
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-tight">Farhod Developer</p>
                      <p className="text-xs text-muted-foreground">farhod@superui.dev</p>
                    </div>
                  </div>
                  <div className="border-t border-border pt-3 space-y-2 text-xs text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Role:</span>
                      <span className="font-medium text-foreground">Lead Architect</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <span className="text-emerald-500 font-medium">Available</span>
                    </div>
                  </div>
                  <div className="pt-2 flex gap-2">
                    <Button size="sm" className="w-full">
                      View Profile
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* 3. Filter & Palette Popover */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Filter & Color Picker</h3>
          <div className="flex flex-wrap gap-4 items-center">
            {/* Color Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-border"
                    style={{ backgroundColor: selectedColor }}
                  />
                  Theme Color
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Select Accent Color</h4>
                  <div className="flex gap-2">
                    {colorOptions.map((c) => (
                      <button
                        key={c.hex}
                        type="button"
                        onClick={() => setSelectedColor(c.hex)}
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring"
                        style={{ backgroundColor: c.hex }}
                        aria-label={c.label}
                      >
                        {selectedColor === c.hex && (
                          <Check className="h-4 w-4 text-white drop-shadow-sm" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            {/* Filter Tags Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  Filter ({filterTags.length})
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-72">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">Filter by Tag</h4>
                    {filterTags.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setFilterTags([])}
                        className="text-xs text-muted-foreground hover:text-foreground"
                      >
                        Clear all
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {availableTags.map((tag) => {
                      const active = filterTags.includes(tag);
                      return (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => toggleTag(tag)}
                          className={`px-2.5 py-1 text-xs rounded-md border transition-colors ${
                            active
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-muted/50 hover:bg-muted text-muted-foreground border-border"
                          }`}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
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
          <h3 className="text-lg font-medium mb-3">Popover Props</h3>
          <APIReferenceTable props={popoverProps} />
        </div>
        <div className="pt-4">
          <h3 className="text-lg font-medium mb-3">PopoverContent Props</h3>
          <APIReferenceTable props={popoverContentProps} />
        </div>
      </div>
    </div>
  );
};
