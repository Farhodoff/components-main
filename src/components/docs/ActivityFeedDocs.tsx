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
        <div className="w-full max-w-[1400px] mx-auto p-6 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Live Component */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Interactive Demo</h2>
                    <div className="border rounded-xl overflow-hidden h-[700px] shadow-sm bg-background p-4 overflow-y-auto">
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
                                <strong>Timeline Layout:</strong> Vertical timeline with connected dots and lines.
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="bg-primary/10 text-primary p-1 rounded mt-0.5">✓</span>
                            <div>
                                <strong>Rich Content:</strong> Support for icons, titles, dates, descriptions, and call-to-action buttons.
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="bg-primary/10 text-primary p-1 rounded mt-0.5">✓</span>
                            <div>
                                <strong>Filters:</strong> Sidebar with filter options (All Activity, Mentions, etc.).
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div >
    );
};
