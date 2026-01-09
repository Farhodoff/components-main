import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from "lucide-react";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 transition-all duration-200 [&>svg~*]:pl-8 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-border",
        info: "bg-primary/10 text-primary border-primary/30 [&>svg]:text-primary",
        success:
          "bg-success/10 text-success border-success/30 [&>svg]:text-success",
        warning:
          "bg-warning/10 text-warning-foreground border-warning/30 [&>svg]:text-warning",
        destructive:
          "bg-destructive/10 text-destructive border-destructive/30 [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const iconMap = {
  default: Info,
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  destructive: AlertCircle,
};

export interface LibraryAlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: React.ReactNode;
}

const LibraryAlert = React.forwardRef<HTMLDivElement, LibraryAlertProps>(
  (
    {
      className,
      variant = "default",
      title,
      dismissible,
      onDismiss,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = React.useState(true);
    const IconComponent = iconMap[variant || "default"];

    const handleDismiss = () => {
      setIsVisible(false);
      onDismiss?.();
    };

    if (!isVisible) return null;

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        {icon || <IconComponent className="h-4 w-4" />}
        <div className="flex-1">
          {title && (
            <h5 className="mb-1 font-medium leading-none tracking-tight">
              {title}
            </h5>
          )}
          <div className="text-sm [&_p]:leading-relaxed">{children}</div>
        </div>
        {dismissible && (
          <button
            type="button"
            onClick={handleDismiss}
            className="absolute right-3 top-3 rounded-md p-1 opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Dismiss alert"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
);
LibraryAlert.displayName = "LibraryAlert";

export { LibraryAlert, alertVariants };
