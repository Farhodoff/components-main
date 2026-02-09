import React from "react";
import { Timeline } from "@/components/library/Timeline";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Activity, GitCommit, UserPlus, FileUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const activityData = [
    {
        date: "Today, 10:23 AM",
        title: "New Release v1.0.0",
        description: "Deployed to production server.",
        icon: <Activity className="h-4 w-4 text-primary" />,
    },
    {
        date: "Yesterday, 4:00 PM",
        title: "Code Commit",
        description: "Refactored authentication logic.",
        icon: <GitCommit className="h-4 w-4 text-blue-500" />,
    },
    {
        date: "Yesterday, 2:15 PM",
        title: "New Team Member",
        description: "Alex joined the Design Team.",
        icon: <UserPlus className="h-4 w-4 text-green-500" />,
    },
    {
        date: "Oct 24, 2023",
        title: "File Uploaded",
        description: "project-specs.pdf was uploaded to Drive.",
        icon: <FileUp className="h-4 w-4 text-orange-500" />,
    },
    {
        date: "Oct 22, 2023",
        title: "System Update",
        description: "Server maintenance completed successfully.",
    },
];

export const ActivityFeed: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="p-8 space-y-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">{t("templates.activityFeed.title")}</h2>
                <p className="text-muted-foreground">{t("templates.activityFeed.subtitle")}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle>{t("templates.activityFeed.recentActivity")}</CardTitle>
                        <CardDescription>{t("templates.activityFeed.unread", { count: 3 })}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Timeline items={activityData} />
                    </CardContent>
                </Card>

                <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>{t("templates.activityFeed.filters")}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <div className="text-sm font-medium">{t("templates.activityFeed.type")}</div>
                                <div className="flex flex-wrap gap-2">
                                    <div className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs cursor-pointer">{t("templates.activityFeed.all")}</div>
                                    <div className="px-2 py-1 hover:bg-muted rounded-md text-xs cursor-pointer">{t("templates.activityFeed.commits")}</div>
                                    <div className="px-2 py-1 hover:bg-muted rounded-md text-xs cursor-pointer">{t("templates.activityFeed.releases")}</div>
                                    <div className="px-2 py-1 hover:bg-muted rounded-md text-xs cursor-pointer">{t("templates.activityFeed.users")}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};
