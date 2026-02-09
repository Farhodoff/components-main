import React from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const ProjectBoardDocs: React.FC = () => {
    const codeExample = `import { ProjectBoard } from '@farhod_dev/super-ui';

function App() {
  return (
    <div className="h-screen w-full">
      <ProjectBoard />
    </div>
  );
}`;

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold mb-4">Project Board Template</h1>
                <p className="text-lg text-muted-foreground mb-4">
                    A full-featured Kanban board template with drag-and-drop capabilities, using <code>@dnd-kit</code>.
                </p>
                <div className="flex gap-4">
                    <Button asChild>
                        <a href="/templates/project-board" target="_blank">View Live Demo</a>
                    </Button>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Usage</h2>
                <Card className="bg-muted p-4 relative overflow-hidden">
                    <pre className="text-sm overflow-x-auto">
                        <code>{codeExample}</code>
                    </pre>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => navigator.clipboard.writeText(codeExample)}
                    >
                        <Copy className="h-4 w-4" />
                    </Button>
                </Card>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Features</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Drag and drop tasks between columns</li>
                    <li>Responsive container layout</li>
                    <li>Built-in task management (mock data by default, extensible)</li>
                    <li>Optimistic UI updates</li>
                </ul>
            </div>
        </div>
    );
};
