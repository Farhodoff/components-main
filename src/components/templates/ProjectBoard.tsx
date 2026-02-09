import React from "react";
import { KanbanBoard } from "@/components/library/KanbanBoard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ProjectBoard: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="h-full flex flex-col space-y-4 p-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">{t("templates.projectBoard.title")}</h2>
                    <p className="text-muted-foreground">
                        {t("templates.projectBoard.subtitle")}
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> {t("templates.projectBoard.newIssue")}
                    </Button>
                </div>
            </div>
            <div className="flex-1 overflow-hidden">
                <KanbanBoard />
            </div>
        </div>
    );
};
