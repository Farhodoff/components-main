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

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold mb-4">Activity Feed Template</h1>
                <p className="text-lg text-muted-foreground mb-4">
                    A responsive timeline and activity feed template to show user history or system logs.
                </p>
                <div className="flex gap-4">
                    <Button asChild>
                        <a href="/templates/activity-feed" target="_blank">View Live Demo</a>
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
                    <li>Vertical timeline visualization</li>
                    <li>Support for icons, titles, dates, and descriptions</li>
                    <li>Responsive grid layout with sidebar filters</li>
                    <li>Customizable styling using Tailwind CSS</li>
                </ul>
            </div>
        </div>
    );
};
