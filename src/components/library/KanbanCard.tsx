import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { GripVertical } from "lucide-react";

export interface KanbanTask {
    id: string;
    title: string;
    description?: string;
    tag?: string;
}

interface KanbanCardProps {
    task: KanbanTask;
}

export const KanbanCard: React.FC<KanbanCardProps> = ({ task }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: task.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={cn("touch-none", isDragging && "opacity-50 z-50")}
            {...attributes}
            {...listeners}
        >
            <Card className="hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing border-border/60">
                <CardHeader className="p-3 pb-2 flex flex-row items-center justify-between space-y-0">
                    <CardTitle className="text-sm font-medium leading-none">
                        {task.title}
                    </CardTitle>
                    <GripVertical className="h-4 w-4 text-muted-foreground/50" />
                </CardHeader>
                <CardContent className="p-3 pt-0">
                    {task.description && (
                        <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                            {task.description}
                        </p>
                    )}
                    {task.tag && (
                        <Badge variant="secondary" className="text-[10px] h-5 px-1.5">
                            {task.tag}
                        </Badge>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};
