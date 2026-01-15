import * as React from "react";
import { cn } from "@/lib/utils";

interface DataGridLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    actions?: React.ReactNode;
    children: React.ReactNode;
}

export function DataGridLayout({
    title,
    description,
    actions,
    children,
    className,
    ...props
}: DataGridLayoutProps) {
    return (
        <div
            className={cn("h-full flex-1 flex-col space-y-8 p-8 md:flex", className)}
            {...props}
        >
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
                    {description && (
                        <p className="text-muted-foreground">{description}</p>
                    )}
                </div>
                <div className="flex items-center space-x-2">{actions}</div>
            </div>
            <div className="flex-1">{children}</div>
        </div>
    );
}
