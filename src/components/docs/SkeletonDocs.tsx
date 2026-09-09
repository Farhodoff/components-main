import React, { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { RefreshCw, Heart, MessageSquare } from "lucide-react";

const skeletonProps = [
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for custom width, height, and border-radius.",
  },
  {
    name: "...props",
    type: "React.HTMLAttributes<HTMLDivElement>",
    description: "Standard HTML div attributes.",
  },
];

const importCode = `import { Skeleton } from "@farhod_dev/super-ui";`;

const basicUsageCode = `<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`;

export const SkeletonDocs: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <LibraryBadge variant="outline">Feedback & Loading</LibraryBadge>
          <LibraryBadge variant="secondary">Micro-animation</LibraryBadge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Skeleton</h1>
        <p className="text-lg text-muted-foreground">
          A lightweight pulsing placeholder used while content is loading, significantly reducing perceived latency and layout shifts.
        </p>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Examples</h2>

        {/* 1. Interactive Profile Card with Toggle */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-muted-foreground">
              Interactive Loading Simulation
            </h3>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsLoading(!isLoading)}
              className="gap-2"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              {isLoading ? "Show Loaded State" : "Show Loading State"}
            </Button>
          </div>

          <div className="p-4 rounded-lg border border-border/60 bg-card max-w-sm">
            {isLoading ? (
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
                  alt="Avatar"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">Sophia Martinez</p>
                  <p className="text-xs text-muted-foreground truncate">Lead Systems Designer</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 2. Article / Post Card Skeleton */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Article & Post Skeleton</h3>
          <div className="max-w-md rounded-xl border border-border p-4 space-y-4 bg-card">
            <Skeleton className="h-44 w-full rounded-lg" />
            <div className="flex items-center gap-3">
              <Skeleton className="h-9 w-9 rounded-full" />
              <div className="space-y-1.5 flex-1">
                <Skeleton className="h-3.5 w-1/3" />
                <Skeleton className="h-3 w-1/4" />
              </div>
            </div>
            <div className="space-y-2 pt-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-border">
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                  <Heart className="h-4 w-4 opacity-40" />
                  <Skeleton className="h-3 w-6" />
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                  <MessageSquare className="h-4 w-4 opacity-40" />
                  <Skeleton className="h-3 w-6" />
                </div>
              </div>
              <Skeleton className="h-8 w-20 rounded-md" />
            </div>
          </div>
        </div>

        {/* 3. Table Rows Skeleton */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Table Data Loading Rows</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((row) => (
              <div
                key={row}
                className="flex items-center justify-between p-3 rounded-md border border-border/50 bg-muted/20"
              >
                <div className="flex items-center gap-3 flex-1">
                  <Skeleton className="h-4 w-4 rounded" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <div className="space-y-1.5 flex-1 max-w-xs">
                    <Skeleton className="h-3.5 w-3/4" />
                    <Skeleton className="h-2.5 w-1/2" />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-8 w-8 rounded-md" />
                </div>
              </div>
            ))}
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
          <h3 className="text-lg font-medium mb-3">Skeleton Props</h3>
          <APIReferenceTable props={skeletonProps} />
        </div>
      </div>
    </div>
  );
};
