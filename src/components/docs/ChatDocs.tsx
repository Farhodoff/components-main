import React from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const ChatDocs: React.FC = () => {
    const codeExample = `import { ChatInterface } from '@farhod_dev/super-ui';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <ChatInterface />
    </div>
  );
}`;

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold mb-4">Chat Interface Template</h1>
                <p className="text-lg text-muted-foreground mb-4">
                    A modern, responsive chat application layout with contact list and message area.
                </p>
                <div className="flex gap-4">
                    <Button asChild>
                        <a href="/templates/chat" target="_blank">View Live Demo</a>
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
                    <li>Sidebar with searchable contact list</li>
                    <li>Main chat area with message bubbles (incoming/outgoing)</li>
                    <li>Scrollable areas using <code>ScrollArea</code> component</li>
                    <li>Responsive design (sidebar collapses on mobile - logic extensible)</li>
                </ul>
            </div>
        </div>
    );
};
