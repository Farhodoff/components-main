import * as React from "react";
import { useDropzone, type DropzoneOptions } from "react-dropzone";
import { Upload, X, FileIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface FileUploadProps extends DropzoneOptions {
    className?: string;
    value?: File[];
    onChange?: (files: File[]) => void;
    onRemove?: (file: File) => void;
}

export function FileUpload({
    className,
    value = [],
    onChange,
    onRemove,
    ...dropzoneProps
}: FileUploadProps) {
    const onDrop = React.useCallback(
        (acceptedFiles: File[]) => {
            if (onChange) {
                onChange([...value, ...acceptedFiles]);
            }
        },
        [onChange, value]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        ...dropzoneProps,
    });

    const handleRemove = (fileToRemove: File) => {
        if (onRemove) {
            onRemove(fileToRemove);
        } else if (onChange) {
            onChange(value.filter((file) => file !== fileToRemove));
        }
    };

    return (
        <div className={cn("w-full space-y-4", className)}>
            <div
                {...getRootProps()}
                className={cn(
                    "border-2 border-dashed rounded-lg p-8 text-center hover:bg-accent/50 transition-colors cursor-pointer",
                    isDragActive ? "border-primary bg-accent" : "border-muted-foreground/25"
                )}
            >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center gap-2">
                    <div className="p-3 rounded-full bg-primary/10">
                        <Upload className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm font-medium">
                        {isDragActive ? "Drop files here" : "Drag & drop files here"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                        or click to select files
                    </p>
                </div>
            </div>

            {value.length > 0 && (
                <div className="space-y-2">
                    {value.map((file, index) => (
                        <div
                            key={`${file.name}-${index}`}
                            className="flex items-center justify-between p-3 border rounded-lg bg-card"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded bg-muted">
                                    <FileIcon className="h-4 w-4 text-foreground" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium truncate max-w-[200px]">
                                        {file.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {(file.size / 1024).toFixed(1)} KB
                                    </p>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleRemove(file)}
                                aria-label={`Remove ${file.name}`}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
