import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { Timeline } from "@/components/library/Timeline";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import { CheckCircle2, Clock, GitCommit, Sparkles } from "lucide-react";

const timelineProps = [
  {
    name: "items",
    type: "Array<{ date: string; title: string; description?: string; icon?: ReactNode }>",
    required: true,
    description: "Ordered list of event checkpoints.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for container.",
  },
];

const timelineDemoItems = [
  {
    date: "September 2026",
    title: "Version 1.0 Milestone Reached",
    description: "Complete overhaul with full i18n support, documentation showcase, and accessible components.",
    icon: <Sparkles className="h-4 w-4 text-primary" />,
  },
  {
    date: "August 2026",
    title: "Core Library Decoupling",
    description: "Decoupled database logic from UI primitives, ensuring high-performance tree-shaking.",
    icon: <CheckCircle2 className="h-4 w-4 text-emerald-500" />,
  },
  {
    date: "June 2026",
    title: "Initial Component Primitives",
    description: "Established base Radix UI primitives and Tailwind CSS design token architecture.",
    icon: <GitCommit className="h-4 w-4 text-muted-foreground" />,
  },
  {
    date: "May 2026",
    title: "Project Initialization",
    description: "Repository created with TypeScript and Vite development environment.",
    icon: <Clock className="h-4 w-4 text-muted-foreground" />,
  },
];

const importCode = `import { Timeline } from "@/components/library/Timeline";`;

const usageCode = `const events = [
  {
    date: "2026-09-08",
    title: "Release v0.0.3",
    description: "Published library components to npm.",
  },
  {
    date: "2026-09-01",
    title: "Added i18n Support",
    description: "Enabled English and Uzbek localization.",
  },
];

export default function TimelineDemo() {
  return <Timeline items={events} />;
}`;

export const TimelineDocs: React.FC = () => {
  return (
    <div className="space-y-12">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Timeline</h1>
          <LibraryBadge variant="secondary">Library</LibraryBadge>
        </div>
        <p className="text-lg text-muted-foreground">
          Vertical chronology component with connecting lines, status indicators, and flexible content for changelogs, roadmaps, and activity tracking.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-4">Interactive Demo</h2>
        <div className="p-8 rounded-lg border border-border bg-card max-w-2xl">
          <Timeline items={timelineDemoItems} />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Installation & Import</h2>
        <CodeBlock code={importCode} language="typescript" />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Usage</h2>
        <CodeBlock code={usageCode} language="tsx" />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">API Reference</h2>
        <APIReferenceTable props={timelineProps} />
      </section>
    </div>
  );
};
