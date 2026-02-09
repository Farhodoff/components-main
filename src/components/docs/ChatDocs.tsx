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

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeExample);
        // You could add a toast here for better UX
    };

    return (
        <div className="w-full max-w-[1400px] mx-auto p-6 space-y-10">
            {/* Header Section */}
            <div>
                <h1 className="text-3xl font-bold mb-4">Chat Interface Template</h1>
                <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                    A modern, responsive chat application layout with contact list and message area.
                    Perfect for building messaging apps or support chat tools.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Button size="lg" asChild>
                        <a href="/templates/chat" target="_blank">View Live Demo (Full Screen)</a>
                    </Button>
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
                                    <strong className="text-foreground">Sidebar Contact List:</strong> Searchable user list with online status indicators.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">2</span>
                                <div>
                                    <strong className="text-foreground">Message Area:</strong> Distinct styles for incoming and outgoing messages.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">3</span>
                                <div>
                                    <strong className="text-foreground">ScrollArea Integration:</strong> Uses custom scrollbars for a native app feel.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">4</span>
                                <div>
                                    <strong className="text-foreground">Responsive:</strong> Sidebar adapts to mobile screens.
                                </div>
                            </li>
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
};
