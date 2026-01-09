import * as React from "react";
import { cn } from "@/lib/utils";

export interface TimelineItemProps {
    date: string;
    title: string;
    description?: string;
    icon?: React.ReactNode;
    isLast?: boolean;
}

export function TimelineItem({
    date,
    title,
    description,
    icon,
    isLast,
}: TimelineItemProps) {
    return (
        <div className="flex gap-4">
            <div className="flex flex-col items-center">
                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border bg-background shadow-sm">
                    {icon || <div className="h-2 w-2 rounded-full bg-primary" />}
                </div>
                {!isLast && <div className="h-full w-px bg-border" />}
            </div>
            <div className="pb-8">
                <div className="text-sm text-muted-foreground mb-1">{date}</div>
                <h3 className="font-semibold leading-none mb-2">{title}</h3>
                {description && (
                    <p className="text-sm text-muted-foreground">{description}</p>
                )}
            </div>
        </div>
    );
}

export interface TimelineProps {
    items: Omit<TimelineItemProps, "isLast">[];
    className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
    return (
        <div className={cn("flex flex-col", className)}>
            {items.map((item, index) => (
                <TimelineItem
                    key={`${item.title}-${index}`}
                    {...item}
                    isLast={index === items.length - 1}
                />
            ))}
        </div>
    );
}
