import React, { useState, useEffect } from "react";
import {
    DndContext,
    closestCorners,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragOverlay,
    defaultDropAnimationSideEffects,
    DragStartEvent,
    DragOverEvent,
    DragEndEvent,
    DropAnimation,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { KanbanColumn } from "./KanbanColumn";
import { KanbanCard, KanbanTask } from "./KanbanCard";
import { api, Task } from "@/services/api";
import { toast } from "sonner";

const defaultCols = [
    { id: "todo", title: "To Do" },
    { id: "in-progress", title: "In Progress" },
    { id: "done", title: "Done" },
];

export const KanbanBoard: React.FC = () => {
    const [activeTask, setActiveTask] = useState<KanbanTask | null>(null);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const dropAnimation: DropAnimation = {
        sideEffects: defaultDropAnimationSideEffects({
            styles: {
                active: {
                    opacity: "0.5",
                },
            },
        }),
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const data = await api.getTasks();
            setTasks(data);
        } catch (error) {
            console.error("Failed to fetch tasks:", error);
            toast.error("Failed to load tasks");
        } finally {
            setLoading(false);
        }
    };

    // Helper to find column for a task
    const findContainer = (id: string) => {
        const task = tasks.find(t => t.id === id);
        return task ? task.status : "todo";
    };

    const handleDragStart = (event: DragStartEvent) => {
        const { active } = event;
        const id = active.id as string;
        const task = tasks.find((t) => t.id === id);
        if (task) setActiveTask(task);
    };

    const handleDragOver = (event: DragOverEvent) => {
        // In this implementation, we handle logical updates in DragEnd
        // Visual updates during DragOver can be added for smoother UX
        // but for now we rely on DragEnd for the actual state change.
    };

    const handleDragEnd = async (event: DragEndEvent) => {
        const { active, over } = event;
        const activeId = active.id as string;
        const overId = over?.id;

        if (!overId) {
            setActiveTask(null);
            return;
        }

        const activeTask = tasks.find(t => t.id === activeId);
        if (!activeTask) return;

        // Determine destination column
        let newStatus = activeTask.status;

        // If dropped over a column directly
        if (defaultCols.find(c => c.id === overId)) {
            newStatus = overId as Task['status'];
        } else {
            // Dropped over another task
            const overTask = tasks.find(t => t.id === overId);
            if (overTask) {
                newStatus = overTask.status;
            }
        }

        // Optimistic update
        const oldStatus = activeTask.status;

        if (newStatus !== oldStatus) {
            setTasks(prev => prev.map(t =>
                t.id === activeId ? { ...t, status: newStatus } : t
            ));

            try {
                await api.updateTaskStatus(activeId, newStatus);
            } catch (error) {
                console.error("Failed to update task status:", error);
                toast.error("Failed to save changes");
                // Revert
                setTasks(prev => prev.map(t =>
                    t.id === activeId ? { ...t, status: oldStatus } : t
                ));
            }
        }

        setActiveTask(null);
    };

    // Group tasks by column
    const tasksByColumn: { [key: string]: Task[] } = {
        "todo": [],
        "in-progress": [],
        "done": []
    };

    tasks.forEach(task => {
        if (tasksByColumn[task.status]) {
            tasksByColumn[task.status].push(task);
        } else {
            // Fallback for unknown status
            tasksByColumn["todo"].push(task);
        }
    });

    if (loading) {
        return <div className="p-4">Loading tasks...</div>;
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
        >
            <div className="flex h-full w-full gap-6 overflow-x-auto pb-4">
                {defaultCols.map((col) => (
                    <KanbanColumn
                        key={col.id}
                        id={col.id}
                        title={col.title}
                        tasks={tasksByColumn[col.id]}
                    />
                ))}
            </div>
            <DragOverlay dropAnimation={dropAnimation}>
                {activeTask ? <KanbanCard task={activeTask} /> : null}
            </DragOverlay>
        </DndContext>
    );
};
