import React from "react";
import { LibraryCard, LibraryCardContent, LibraryCardHeader, LibraryCardTitle } from "./library/LibraryCard";
import { CodeBlock } from "./CodeBlock";
import { cn } from "@/lib/utils";

interface ComponentShowcaseProps {
  title: string;
  description?: string;
  code: string;
  children: React.ReactNode;
  className?: string;
}

export const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({
  title,
  description,
  code,
  children,
  className,
}) => {
  const [showCode, setShowCode] = React.useState(false);

  return (
    <LibraryCard variant="elevated" padding="none" className={cn("overflow-hidden", className)}>
      <LibraryCardHeader className="p-6 pb-0">
        <div className="flex items-center justify-between">
          <div>
            <LibraryCardTitle>{title}</LibraryCardTitle>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            )}
          </div>
          <button
            onClick={() => setShowCode(!showCode)}
            className="text-xs font-mono px-3 py-1.5 rounded-md bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
          >
            {showCode ? "Preview" : "Code"}
          </button>
        </div>
      </LibraryCardHeader>
      <LibraryCardContent className="p-6">
        {showCode ? (
          <CodeBlock code={code} language="tsx" />
        ) : (
          <div className="p-6 bg-muted/30 rounded-lg border border-border/50 flex items-center justify-center min-h-[120px]">
            {children}
          </div>
        )}
      </LibraryCardContent>
    </LibraryCard>
  );
};
