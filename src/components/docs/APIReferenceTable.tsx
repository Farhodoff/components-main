import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LibraryBadge } from "@/components/library/LibraryBadge";

interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

interface APIReferenceTableProps {
  props: PropDefinition[];
}

export const APIReferenceTable: React.FC<APIReferenceTableProps> = ({
  props,
}) => {
  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">Prop</TableHead>
            <TableHead className="font-semibold">Type</TableHead>
            <TableHead className="font-semibold">Default</TableHead>
            <TableHead className="font-semibold">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.map((prop) => (
            <TableRow key={prop.name}>
              <TableCell>
                <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm text-primary">
                  {prop.name}
                </code>
                {prop.required && (
                  <LibraryBadge variant="destructive" size="sm" className="ml-2">
                    required
                  </LibraryBadge>
                )}
              </TableCell>
              <TableCell>
                <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs text-muted-foreground">
                  {prop.type}
                </code>
              </TableCell>
              <TableCell>
                {prop.default ? (
                  <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs">
                    {prop.default}
                  </code>
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {prop.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
