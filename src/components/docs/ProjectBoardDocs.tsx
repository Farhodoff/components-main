import React from "react";
import { Copy } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectBoard } from "@/components/templates/ProjectBoard";

export const ProjectBoardDocs: React.FC = () => {
    const { t } = useTranslation();
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
                <h1 className="text-3xl font-bold mb-4">{t("docs.projectBoard.title")}</h1>
                <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                    {t("docs.projectBoard.description")}
                </p>
            </div>

            {/* Interactive Demo Section - Full Width */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">{t("docs.interactiveDemo")}</h2>
                <div className="border rounded-xl overflow-hidden h-[700px] shadow-lg flex flex-col bg-background ring-1 ring-slate-200 dark:ring-slate-800">
                    <ProjectBoard />
                </div>
            </div>

            {/* Documentation & Code Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Usage Code */}
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
                        <pre className="text-sm overflow-x-auto font-mono scrollbar-hide">
                            <code>{codeExample}</code>
                        </pre>
                    </Card>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">{t("docs.keyFeatures")}</h2>
                    <Card className="p-6">
                        <ul className="grid grid-cols-1 gap-4 text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">1</span>
                                <div>
                                    {t("docs.projectBoard.features.dragDrop")}
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">2</span>
                                <div>
                                    {t("docs.projectBoard.features.optimisticUi")}
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">3</span>
                                <div>
                                    {t("docs.projectBoard.features.columns")}
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">4</span>
                                <div>
                                    {t("docs.projectBoard.features.responsive")}
                                </div>
                            </li>
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
};
