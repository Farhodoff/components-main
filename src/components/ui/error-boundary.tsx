import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class GlobalErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    private handleReload = () => {
        window.location.reload();
    };

    public render() {
        if (this.state.hasError) {
            return (
                <div className="flex h-screen w-full flex-col items-center justify-center bg-background p-4 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20 mb-6">
                        <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-500" />
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight mb-2">
                        Something went wrong
                    </h1>
                    <p className="text-muted-foreground max-w-[500px] mb-8">
                        {this.state.error?.message || "An unexpected error occurred. Please try refreshing the page."}
                    </p>
                    <div className="flex gap-4">
                        <Button onClick={() => this.setState({ hasError: false, error: null })} variant="outline">
                            Try Again
                        </Button>
                        <Button onClick={this.handleReload}>
                            Reload Page
                        </Button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
