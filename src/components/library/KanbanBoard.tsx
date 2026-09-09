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
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { KanbanColumn } from "./KanbanColumn";
import { KanbanCard, KanbanTask } from "./KanbanCard";
import { api, Task } from "@/services/api";

const defaultCols = [
    { id: "todo", title: "To Do" },
    { id: "in-progress", title: "In Progress" },
    { id: "done", title: "Done" },
];

const DEFAULT_TASKS: Task[] = [
    { id: "task-1", title: "Design system audit", description: "Review existing color tokens and typography", tag: "Design", status: "todo", created_at: new Date().toISOString() },
    { id: "task-2", title: "Implement Combobox component", description: "Create accessible popover with search filter", tag: "Feature", status: "in-progress", created_at: new Date().toISOString() },
    { id: "task-3", title: "Release v0.0.3", description: "Publish updated package to npm", tag: "DevOps", status: "done", created_at: new Date().toISOString() },
];

export const KanbanBoard: React.FC = () => {
    const [activeTask, setActiveTask] = useState<KanbanTask | null>(null);
    const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS);
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
            if (data && data.length > 0) {
                setTasks(data);
            } else {
                setTasks(DEFAULT_TASKS);
            }
        } catch {
            // Graceful fallback to demo tasks when backend/Supabase is unconfigured
            setTasks(DEFAULT_TASKS);
        } finally {
            setLoading(false);
        }
    };

    const handleDragStart = (event: DragStartEvent) => {
        const { active } = event;
        const id = active.id as string;
        const task = tasks.find((t) => t.id === id);
        if (task) setActiveTask(task);
    };

    const handleDragOver = (_event: DragOverEvent) => {
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
            } catch {
                // Keep local state for interactive demo if backend is offline/unconfigured
                console.warn("Could not sync task to Supabase backend; updated locally.");
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
