import React from "react";
import { KanbanBoard } from "@/components/library/KanbanBoard";

export const KanbanDocs: React.FC = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-4">Kanban Board</h1>
                <p className="text-lg text-muted-foreground">
                    A drag-and-drop task management board built with <code>@dnd-kit</code>.
                </p>
            </div>

            <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Interactive Demo</h2>
                    <p className="text-sm text-muted-foreground">
                        Try dragging tasks between columns.
                    </p>
                </div>
                <div className="h-[600px] w-full bg-muted/20 p-4 rounded-md border">
                    <KanbanBoard />
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Usage</h2>
                <div className="rounded-lg bg-muted p-4">
                    <pre className="text-sm">
                        <code>{`import { KanbanBoard } from "@/components/library/KanbanBoard";

export default function App() {
  return <KanbanBoard />;
}`}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};
