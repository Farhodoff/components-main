import React, { useState, useEffect } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Play, RotateCcw, CheckCircle2, Circle } from "lucide-react";

const progressProps = [
  {
    name: "value",
    type: "number",
    default: "0",
    description: "The current progress value (between 0 and 100).",
  },
  {
    name: "max",
    type: "number",
    default: "100",
    description: "The maximum progress value.",
  },
  {
    name: "getValueLabel",
    type: "(value: number, max: number) => string",
    description: "A function to get the accessible label text for the current value.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes to adjust height, rounded corners, or background.",
  },
];

const importCode = `import { Progress } from "@farhod_dev/super-ui";`;

const basicUsageCode = `<Progress value={65} />`;

export const ProgressDocs: React.FC = () => {
  const [progressVal, setProgressVal] = useState(45);
  const [isSimulating, setIsSimulating] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSimulating) {
      timer = setInterval(() => {
        setProgressVal((prev) => {
          if (prev >= 100) {
            setIsSimulating(false);
            return 100;
          }
          return prev + 5;
        });
      }, 150);
    }
    return () => clearInterval(timer);
  }, [isSimulating]);

  const startSimulation = () => {
    setProgressVal(0);
    setIsSimulating(true);
  };

  const resetProgress = () => {
    setIsSimulating(false);
    setProgressVal(45);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <LibraryBadge variant="outline">Feedback & Loading</LibraryBadge>
          <LibraryBadge variant="secondary">Radix UI</LibraryBadge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Progress</h1>
        <p className="text-lg text-muted-foreground">
          Displays an animated progress bar showing the completion status of a task, file upload, or multi-step workflow.
        </p>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Examples</h2>

        {/* 1. Interactive Progress Controller */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-muted-foreground">Interactive Simulation</h3>
            <span className="text-sm font-semibold tabular-nums">{progressVal}%</span>
          </div>

          <Progress value={progressVal} className="h-3" />

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              size="sm"
              onClick={startSimulation}
              disabled={isSimulating}
              className="gap-2"
            >
              <Play className="h-3.5 w-3.5" />
              Simulate Process
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={resetProgress}
              className="gap-2"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset
            </Button>
            <div className="flex items-center gap-1.5 ml-auto">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setProgressVal((v) => Math.max(0, v - 10))}
              >
                -10%
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setProgressVal((v) => Math.min(100, v + 10))}
              >
                +10%
              </Button>
            </div>
          </div>
        </div>

        {/* 2. Thickness & Color Variants */}
        <div className="rounded-lg border border-border p-6 space-y-6">
          <h3 className="text-sm font-medium text-muted-foreground">Thickness & Contextual States</h3>

          {/* Thin default */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Slim / Minimalist (6px)</span>
              <span>30%</span>
            </div>
            <Progress value={30} className="h-1.5" />
          </div>

          {/* Success / Green */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                Storage Optimization (Complete)
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">100%</span>
            </div>
            <Progress
              value={100}
              className="h-2.5 [&>div]:bg-emerald-500"
            />
          </div>

          {/* Warning / Amber */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span className="text-amber-600 dark:text-amber-400 font-medium">
                High Bandwidth Utilization
              </span>
              <span className="text-amber-600 dark:text-amber-400 font-medium">78%</span>
            </div>
            <Progress
              value={78}
              className="h-2.5 [&>div]:bg-amber-500"
            />
          </div>

          {/* Error / Destructive */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span className="text-destructive font-medium">
                Memory Quota Critical
              </span>
              <span className="text-destructive font-medium">92%</span>
            </div>
            <Progress
              value={92}
              className="h-2.5 [&>div]:bg-destructive"
            />
          </div>
        </div>

        {/* 3. Multi-Step Onboarding Flow */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium">Account Onboarding</h3>
              <p className="text-xs text-muted-foreground">Step 3 of 4 completed</p>
            </div>
            <span className="text-sm font-bold text-primary">75%</span>
          </div>

          <Progress value={75} className="h-2" />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>Verify Email</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>Personal Info</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>Workspace Setup</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Circle className="h-3.5 w-3.5 opacity-40" />
              <span>Invite Team</span>
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
          <h3 className="text-lg font-medium mb-3">Progress Props</h3>
          <APIReferenceTable props={progressProps} />
        </div>
      </div>
    </div>
  );
};
