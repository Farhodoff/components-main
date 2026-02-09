import React from "react";
import { Copy } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ActivityFeed } from "@/components/templates/ActivityFeed";

export const ActivityFeedDocs: React.FC = () => {
    const { t } = useTranslation();
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
                    <h2 className="text-2xl font-bold">{t("docs.interactiveDemo")}</h2>
                    <div className="border rounded-xl overflow-hidden h-[700px] shadow-sm bg-background p-4 overflow-y-auto">
                        <ActivityFeed />
                    </div>
                </div>

                {/* Right Column: Documentation & Code */}
                <div className="space-y-8">
                    {/* Header Section */}
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{t("docs.activityFeed.title")}</h1>
                        <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                            {t("docs.activityFeed.description")}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold">{t("docs.usageCode")}</h2>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={copyToClipboard}
                                className="gap-2"
                            >
                                <Copy className="h-4 w-4" />
                                {t("docs.copyCode")}
                            </Button>
                        </div>
                        <Card className="bg-slate-950 text-slate-50 p-6 relative overflow-hidden rounded-xl">
                            <pre className="text-sm overflow-x-auto font-mono">
                                <code>{codeExample}</code>
                            </pre>
                        </Card>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">{t("docs.keyFeatures")}</h2>
                        <ul className="grid grid-cols-1 gap-3 text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="bg-primary/10 text-primary p-1 rounded mt-0.5">✓</span>
                                <div>
                                    <strong>Timeline Layout:</strong> {t("docs.activityFeed.features.timeline").split(":")[1]}
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="bg-primary/10 text-primary p-1 rounded mt-0.5">✓</span>
                                <div>
                                    <strong>Rich Content:</strong> {t("docs.activityFeed.features.richContent").split(":")[1]}
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="bg-primary/10 text-primary p-1 rounded mt-0.5">✓</span>
                                <div>
                                    <strong>Filters:</strong> {t("docs.activityFeed.features.filters").split(":")[1]}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
