import React, { useState } from "react";
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

// Mock Data
const initialTasks: KanbanTask[] = [
    { id: "1", title: "Research Competitors", description: "Analyze top 3 competitors in the market.", tag: "Research" },
    { id: "2", title: "Design System", description: "Create atom components for the UI library.", tag: "Design" },
    { id: "3", title: "API Integration", description: "Connect frontend with backend services.", tag: "Dev" },
    { id: "4", title: "User Testing", description: "Conduct interviews with 5 potential users.", tag: "QA" },
];

const defaultCols = [
    { id: "todo", title: "To Do" },
    { id: "in-progress", title: "In Progress" },
    { id: "done", title: "Done" },
];

export const KanbanBoard: React.FC = () => {
    const [activeTask, setActiveTask] = useState<KanbanTask | null>(null);

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

    // Helper to find column for a task
    // simplified: we act as if column ID is part of task state, but for this demo 
    // we might need to map tasks to columns.
    // For simplicity, let's distribute them.
    // In a real app, tasks would have a 'status' or 'columnId' field.
    // Let's add that to our local state management approach for this demo.

    // Actually, standard dnd-kit kanban examples often keep structured state.
    // Let's refactor state to be a map of columnId -> taskIds or tasks having status.
    // Let's go with tasks having a status for simplicity.
    const [taskState, setTaskState] = useState<{ [key: string]: KanbanTask[] }>({
        "todo": [initialTasks[0], initialTasks[1]],
        "in-progress": [initialTasks[2]],
        "done": [initialTasks[3]],
    });

    const findContainer = (id: string) => {
        if (id in taskState) {
            return id;
        }
        return Object.keys(taskState).find((key) =>
            taskState[key].find((t) => t.id === id)
        ) as string;
    };

    const handleDragStart = (event: DragStartEvent) => {
        const { active } = event;
        const id = active.id as string;
        const container = findContainer(id);
        const task = taskState[container].find((t) => t.id === id);
        if (task) setActiveTask(task);
    };

    const handleDragOver = (event: DragOverEvent) => {
        const { active, over } = event;
        const overId = over?.id;

        if (!overId || active.id === overId) return;

        const activeContainer = findContainer(active.id as string);
        const overContainer = findContainer(overId as string);

        if (!activeContainer || !overContainer || activeContainer === overContainer) {
            return;
        }

        setTaskState((prev) => {
            const activeItems = prev[activeContainer];
            const overItems = prev[overContainer];
            const activeIndex = activeItems.findIndex((i) => i.id === active.id);
            const overIndex = overItems.findIndex((i) => i.id === overId);

            let newIndex;
            if (overId in prev) {
                newIndex = overItems.length + 1;
            } else {
                const isBelowOverItem =
                    over &&
                    active.rect.current.translated &&
                    active.rect.current.translated.top >
                    over.rect.top + over.rect.height;

                const modifier = isBelowOverItem ? 1 : 0;
                newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
            }

            return {
                ...prev,
                [activeContainer]: [
                    ...prev[activeContainer].filter((item) => item.id !== active.id),
                ],
                [overContainer]: [
                    ...prev[overContainer].slice(0, newIndex),
                    activeItems[activeIndex],
                    ...prev[overContainer].slice(newIndex, overItems.length),
                ],
            };
        });
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        const { id } = active;
        const overId = over?.id;

        if (!overId) {
            setActiveTask(null);
            return;
        }

        const activeContainer = findContainer(id as string);
        const overContainer = findContainer(overId as string);

        if (
            activeContainer &&
            overContainer &&
            activeContainer === overContainer
        ) {
            const activeIndex = taskState[activeContainer].findIndex(
                (t) => t.id === id
            );
            const overIndex = taskState[overContainer].findIndex(
                (t) => t.id === overId
            );

            if (activeIndex !== overIndex) {
                setTaskState((prev) => ({
                    ...prev,
                    [activeContainer]: arrayMove(
                        prev[activeContainer],
                        activeIndex,
                        overIndex
                    ),
                }));
            }
        }

        setActiveTask(null);
    };

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
                        tasks={taskState[col.id] || []}
                    />
                ))}
            </div>
            <DragOverlay dropAnimation={dropAnimation}>
                {activeTask ? <KanbanCard task={activeTask} /> : null}
            </DragOverlay>
        </DndContext>
    );
};
