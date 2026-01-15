import { Button } from "@/components/ui/button";
import { MoveLeft, RefreshCcw, AlertTriangle, FileQuestion } from "lucide-react";

export function NotFoundPage({
    onGoHome,
}: {
    onGoHome?: () => void;
}) {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-background text-foreground p-4">
            <div className="flex flex-col items-center text-center space-y-6 max-w-md">
                <div className="rounded-full bg-muted p-6">
                    <FileQuestion className="h-12 w-12 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">404</h1>
                    <h2 className="text-2xl font-semibold tracking-tight">Page not found</h2>
                    <p className="text-muted-foreground">
                        Sorry, we couldn't find the page you're looking for. It might have been
                        removed, renamed, or doesn't exist.
                    </p>
                </div>
                <Button size="lg" onClick={onGoHome} className="gap-2">
                    <MoveLeft className="h-4 w-4" /> Go back home
                </Button>
            </div>
        </div>
    );
}

export function ServerErrorPage({
    onReload,
    onContactSupport,
}: {
    onReload?: () => void;
    onContactSupport?: () => void;
}) {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-background text-foreground p-4">
            <div className="flex flex-col items-center text-center space-y-6 max-w-md">
                <div className="rounded-full bg-red-100 dark:bg-red-900/20 p-6">
                    <AlertTriangle className="h-12 w-12 text-red-600 dark:text-red-500" />
                </div>
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl text-red-600 dark:text-red-500">
                        500
                    </h1>
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Internal Server Error
                    </h2>
                    <p className="text-muted-foreground">
                        Something went wrong on our end. We're working on it. Please try again
                        later.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <Button size="lg" onClick={onReload} className="gap-2">
                        <RefreshCcw className="h-4 w-4" /> Reload page
                    </Button>
                    <Button variant="outline" size="lg" onClick={onContactSupport}>
                        Contact support
                    </Button>
                </div>
            </div>
        </div>
    );
}
