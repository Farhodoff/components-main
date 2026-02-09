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
        <div className="w-full max-w-[1400px] mx-auto p-6 space-y-10">
            {/* Header Section */}
            <div>
                <h1 className="text-3xl font-bold mb-4">Project Board Template</h1>
                <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                    A fully functional Kanban board for task management.
                    Drag and drop tasks, organize your workflow, and manage project progress effortlessly.
                </p>
            </div>

            {/* Interactive Demo Section - Full Width */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Interactive Demo</h2>
                <div className="border rounded-xl overflow-hidden h-[700px] shadow-lg flex flex-col bg-background ring-1 ring-slate-200 dark:ring-slate-800">
                    <ProjectBoard />
                </div>
            </div>

            {/* Documentation & Code Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Usage Code */}
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
                        <pre className="text-sm overflow-x-auto font-mono scrollbar-hide">
                            <code>{codeExample}</code>
                        </pre>
                    </Card>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Key Features</h2>
                    <Card className="p-6">
                        <ul className="grid grid-cols-1 gap-4 text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">1</span>
                                <div>
                                    <strong className="text-foreground">Drag & Drop:</strong> Built with <code>@dnd-kit</code> for smooth accessible drag-and-drop interactions.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">2</span>
                                <div>
                                    <strong className="text-foreground">Optimistic UI:</strong> Instant state updates for better user experience.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">3</span>
                                <div>
                                    <strong className="text-foreground">Column Management:</strong> Pre-configured statuses (ToDo, In Progress, Done) that can be extended.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">4</span>
                                <div>
                                    <strong className="text-foreground">Responsive:</strong> Works on desktop and tablet devices.
                                </div>
                            </li>
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
};
