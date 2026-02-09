import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { AlertCircle, Check, Eye, EyeOff } from "lucide-react";

const inputVariants = cva(
  "flex w-full rounded-lg border bg-background px-4 py-2.5 text-sm transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-input focus-visible:ring-ring focus-visible:border-primary",
        error:
          "border-destructive focus-visible:ring-destructive text-destructive",
        success:
          "border-success focus-visible:ring-success",
      },
      inputSize: {
        sm: "h-9 px-3 text-xs",
        default: "h-11 px-4",
        lg: "h-12 px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
);

export interface LibraryInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
  VariantProps<typeof inputVariants> {
  label?: string;
  description?: string;
  error?: string;
  success?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const LibraryInput = React.forwardRef<HTMLInputElement, LibraryInputProps>(
  (
    {
      className,
      type,
      variant,
      inputSize,
      label,
      description,
      error,
      success,
      leftIcon,
      rightIcon,
      id,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const generatedId = React.useId();
    const inputId = id || generatedId;

    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    const currentVariant = error ? "error" : success ? "success" : variant;

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {leftIcon}
            </div>
          )}
          <input
            type={inputType}
            id={inputId}
            className={cn(
              inputVariants({ variant: currentVariant, inputSize, className }),
              leftIcon && "pl-10",
              (rightIcon || isPassword || error || success) && "pr-10"
            )}
            ref={ref}
            aria-invalid={!!error}
            aria-describedby={
              error
                ? `${inputId}-error`
                : success
                  ? `${inputId}-success`
                  : description
                    ? `${inputId}-description`
                    : undefined
            }
            {...props}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {isPassword ? (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            ) : error ? (
              <AlertCircle className="h-4 w-4 text-destructive" />
            ) : success ? (
              <Check className="h-4 w-4 text-success" />
            ) : (
              rightIcon && (
                <span className="text-muted-foreground">{rightIcon}</span>
              )
            )}
          </div>
        </div>
        {error && (
          <p
            id={`${inputId}-error`}
            className="text-xs text-destructive flex items-center gap-1"
            role="alert"
          >
            <AlertCircle className="h-3 w-3" />
            {error}
          </p>
        )}
        {success && !error && (
          <p
            id={`${inputId}-success`}
            className="text-xs text-success flex items-center gap-1"
          >
            <Check className="h-3 w-3" />
            {success}
          </p>
        )}
      </div>
    );
  }
);
LibraryInput.displayName = "LibraryInput";

// eslint-disable-next-line react-refresh/only-export-components
export { LibraryInput, inputVariants };
