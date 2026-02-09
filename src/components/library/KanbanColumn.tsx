import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { KanbanCard, KanbanTask } from "./KanbanCard";
import { cn } from "@/lib/utils";

interface KanbanColumnProps {
    id: string;
    title: string;
    tasks: KanbanTask[];
}

export const KanbanColumn: React.FC<KanbanColumnProps> = ({ id, title, tasks }) => {
    const { setNodeRef } = useDroppable({ id });

    return (
        <div className="flex flex-col w-80 shrink-0 gap-4">
            <div className="flex items-center justify-between px-2">
                <h3 className="font-semibold text-foreground">{title}</h3>
                <span className="flex items-center justify-center w-6 h-6 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                    {tasks.length}
                </span>
            </div>

            <div
                ref={setNodeRef}
                className={cn(
                    "flex flex-col gap-3 p-2 bg-muted/40 rounded-xl min-h-[500px] border border-transparent transition-colors",
                    // Add visual cue when dragging over if needed via active drag state context
                )}
            >
                <SortableContext items={tasks.map((t) => t.id)} strategy={verticalListSortingStrategy}>
                    {tasks.map((task) => (
                        <KanbanCard key={task.id} task={task} />
                    ))}
                </SortableContext>

                {tasks.length === 0 && (
                    <div className="flex items-center justify-center h-24 text-sm text-muted-foreground border-2 border-dashed rounded-lg border-muted/50">
                        Drop items here
                    </div>
                )}
            </div>
        </div>
    );
};
