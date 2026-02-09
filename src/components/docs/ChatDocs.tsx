import React from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChatInterface } from "@/components/templates/ChatInterface";

export const ChatDocs: React.FC = () => {
    const codeExample = `import { ChatInterface } from '@farhod_dev/super-ui';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <ChatInterface />
    </div>
  );
}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeExample);
        // You could add a toast here for better UX
    };

    return (
        <div className="w-full max-w-[1400px] mx-auto p-6 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Live Component */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Interactive Demo</h2>
                    <div className="border rounded-xl overflow-hidden h-[700px] shadow-sm flex flex-col bg-background">
                        <ChatInterface />
                    </div>
                </div>

                {/* Right Column: Documentation & Code */}
                <div className="space-y-8">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">Chat Interface Template</h1>
                        <p className="text-lg text-muted-foreground mb-6">
                            A modern, responsive chat application layout with contact list and message area.
                            Perfect for building messaging apps or support chat tools.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button asChild variant="outline">
                                <a href="/templates/chat" target="_blank">Open Full Screen</a>
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
                                    <strong>Sidebar Contact List:</strong> Searchable user list with online status indicators.
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="bg-primary/10 text-primary p-1 rounded mt-0.5">✓</span>
                                <div>
                                    <strong>Message Area:</strong> Distinct styles for incoming and outgoing messages.
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="bg-primary/10 text-primary p-1 rounded mt-0.5">✓</span>
                                <div>
                                    <strong>ScrollArea Integration:</strong> Uses custom scrollbars for a native app feel.
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="bg-primary/10 text-primary p-1 rounded mt-0.5">✓</span>
                                <div>
                                    <strong>Responsive:</strong> Sidebar adapts to mobile screens (collapsible logic ready).
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
