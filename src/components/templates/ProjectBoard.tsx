import React from "react";
import { KanbanBoard } from "@/components/library/KanbanBoard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const ProjectBoard: React.FC = () => {
    return (
        <div className="h-full flex flex-col space-y-4 p-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Project Board</h2>
                    <p className="text-muted-foreground">
                        Manage your tasks and track progress.
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> New Issue
                    </Button>
                </div>
            </div>
            <div className="flex-1 overflow-hidden">
                <KanbanBoard />
            </div>
        </div>
    );
};
