import * as React from "react";
import { FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface EmptyStateProps {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    action?: {
        label: string;
        onClick: () => void;
    };
    className?: string;
    children?: React.ReactNode;
}

export function EmptyState({
    title,
    description,
    icon,
    action,
    className,
    children,
}: EmptyStateProps) {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center p-8 text-center border-2 border-dashed rounded-lg bg-card animation-fade-in",
                className
            )}
        >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-4">
                {icon || <FolderOpen className="h-10 w-10 text-muted-foreground" />}
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            {description && (
                <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                    {description}
                </p>
            )}
            {children}
            {action && (
                <Button onClick={action.onClick} className="mt-4">
                    {action.label}
                </Button>
            )}
        </div>
    );
}
