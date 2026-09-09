import React, { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { FileUpload } from "@/components/library/FileUpload";
import { LibraryBadge } from "@/components/library/LibraryBadge";

const fileUploadProps = [
  {
    name: "value",
    type: "File[]",
    default: "[]",
    description: "Array of selected File objects.",
  },
  {
    name: "onChange",
    type: "(files: File[]) => void",
    description: "Callback invoked when files are selected or dropped.",
  },
  {
    name: "onRemove",
    type: "(file: File) => void",
    description: "Callback when a file is removed from the list.",
  },
  {
    name: "maxFiles",
    type: "number",
    description: "Maximum number of files that can be uploaded.",
  },
  {
    name: "accept",
    type: "Record<string, string[]>",
    description: "Accepted MIME types for dropzone.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for styling.",
  },
];

const importCode = `import { FileUpload } from "@/components/library/FileUpload";`;

const usageCode = `export default function FileUploadDemo() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileUpload
      value={files}
      onChange={setFiles}
      maxFiles={5}
    />
  );
}`;

export const FileUploadDocs: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="space-y-12">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">File Upload</h1>
          <LibraryBadge variant="secondary">Library</LibraryBadge>
        </div>
        <p className="text-lg text-muted-foreground">
          Drag-and-drop file uploader with preview list, size calculations, and individual file removal built on react-dropzone.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-4">Interactive Demo</h2>
        <div className="p-8 rounded-lg border border-border bg-card max-w-xl">
          <FileUpload
            value={files}
            onChange={setFiles}
            maxFiles={3}
          />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Installation & Import</h2>
        <CodeBlock code={importCode} language="typescript" />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Usage</h2>
        <CodeBlock code={usageCode} language="tsx" />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">API Reference</h2>
        <APIReferenceTable props={fileUploadProps} />
      </section>
    </div>
  );
};
