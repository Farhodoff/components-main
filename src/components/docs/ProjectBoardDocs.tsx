import React from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectBoard } from "@/components/templates/ProjectBoard";

export const ProjectBoardDocs: React.FC = () => {
    const codeExample = `import { ProjectBoard } from '@farhod_dev/super-ui';

function App() {
  return (
    <div className="h-screen w-full">
      <ProjectBoard />
    </div>
  );
}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeExample);
    };

    return (
        <div className="w-full max-w-[1400px] mx-auto p-6 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Live Component */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Interactive Demo</h2>
                    <div className="border rounded-xl overflow-hidden h-[700px] shadow-sm flex flex-col bg-background">
                        <ProjectBoard />
                    </div>
                </div>

                {/* Right Column: Documentation & Code */}
                <div className="space-y-8">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">Project Board Template</h1>
                        <p className="text-lg text-muted-foreground mb-6">
                            A fully functional Kanban board for task management.
                            Drag and drop tasks, organize your workflow, and manage project progress effortlessly.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button asChild variant="outline">
                                <a href="/templates/project-board" target="_blank">Open Full Screen</a>
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold">Usage Code</h2>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={copyToClipboard}
                                className="gap-2"
                            >
                                <Copy className="h-4 w-4" />
                                Copy Code
                            </Button>
                        </div>
                        <Card className="bg-slate-950 text-slate-50 p-6 relative overflow-hidden rounded-xl">
                            <pre className="text-sm overflow-x-auto font-mono">
                                <code>{codeExample}</code>
                            </pre>
                        </Card>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Key Features</h2>
                        <ul className="grid grid-cols-1 gap-3 text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="bg-primary/10 text-primary p-1 rounded mt-0.5">✓</span>
                                <div>
                                    <strong>Drag & Drop:</strong> Built with <code>@dnd-kit</code> for smooth accessible drag-and-drop interactions.
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="bg-primary/10 text-primary p-1 rounded mt-0.5">✓</span>
                                <div>
                                    <strong>Optimistic UI:</strong> Instant state updates for better user experience.
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="bg-primary/10 text-primary p-1 rounded mt-0.5">✓</span>
                                <div>
                                    <strong>Column Management:</strong> Pre-configured statuses (ToDo, In Progress, Done) that can be extended.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
