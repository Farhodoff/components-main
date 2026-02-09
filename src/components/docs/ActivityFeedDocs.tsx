import React from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const ActivityFeedDocs: React.FC = () => {
    const codeExample = `import { ActivityFeed } from '@farhod_dev/super-ui';

function App() {
  return (
    <div className="container py-8">
      <ActivityFeed />
    </div>
  );
}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeExample);
    };

    return (
        <div className="w-full max-w-[1600px] mx-auto space-y-8">
            {/* Full Screen Demo via Iframe */}
            <div className="w-full h-[85vh] border-b border-border relative bg-background">
                <iframe
                    src="/templates/activity-feed"
                    className="w-full h-full"
                    title="Activity Feed Demo"
                />
                <div className="absolute top-4 right-4">
                    <Button asChild variant="secondary" size="sm">
                        <a href="/templates/activity-feed" target="_blank">Open in New Tab</a>
                    </Button>
                </div>
            </div>

            <div className="p-6 max-w-5xl mx-auto space-y-10">
                {/* Header Section */}
                <div>
                    <h1 className="text-3xl font-bold mb-4">Activity Feed Template</h1>
                    <p className="text-lg text-muted-foreground mb-6">
                        A responsive timeline and activity feed template. Ideal for displaying user history, changelogs, or system notifications.
                    </p>
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
                                        <strong className="text-foreground">Timeline Layout:</strong> Vertical timeline with connected dots and lines.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">2</span>
                                    <div>
                                        <strong className="text-foreground">Rich Content:</strong> Support for icons, titles, dates, descriptions, and call-to-action buttons.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">3</span>
                                    <div>
                                        <strong className="text-foreground">Filters:</strong> Sidebar with filter options (All Activity, Mentions, etc.).
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">4</span>
                                    <div>
                                        <strong className="text-foreground">Responsive:</strong> Adapts to different screen sizes.
                                    </div>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
