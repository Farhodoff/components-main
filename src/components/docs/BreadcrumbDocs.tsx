import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Home, Slash, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const breadcrumbProps = [
  {
    name: "separator",
    type: "ReactNode",
    default: "<ChevronRight />",
    description: "Custom separator icon or element between breadcrumb items.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes applied to the root nav element.",
  },
];

const breadcrumbLinkProps = [
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "Change the default rendered element for the one passed as a child (e.g. react-router Link).",
  },
  {
    name: "href",
    type: "string",
    description: "The URL that the hyperlink points to (when asChild is false).",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for styling the link.",
  },
];

const importCode = `import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@farhod_dev/super-ui";`;

const basicUsageCode = `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`;

export const BreadcrumbDocs: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <LibraryBadge variant="outline">Navigation & Disclosure</LibraryBadge>
          <LibraryBadge variant="secondary">Accessible HTML5</LibraryBadge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Breadcrumb</h1>
        <p className="text-lg text-muted-foreground">
          Displays the path to the current resource using a hierarchy of links with accessible semantic markup.
        </p>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Examples</h2>

        {/* 1. Basic Chevron Breadcrumb */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Standard Chevron Breadcrumb</h3>
          <div className="p-4 rounded-md bg-muted/20 border border-border/50">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center gap-1.5">
                      <Home className="h-3.5 w-3.5" />
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/docs">Documentation</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/docs/tabs">Navigation</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* 2. Custom Separator (Slash) */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Custom Slash Separator</h3>
          <div className="p-4 rounded-md bg-muted/20 border border-border/50">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Dashboard</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash className="h-3.5 w-3.5" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/docs">Projects</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash className="h-3.5 w-3.5" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Super UI Library</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* 3. Collapsed Path with Dropdown Menu */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Collapsed with Ellipsis & Dropdown</h3>
          <div className="p-4 rounded-md bg-muted/20 border border-border/50">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-3.5 w-3.5" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 hover:text-foreground">
                      <BreadcrumbEllipsis />
                      <span className="sr-only">Toggle collapsed items</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem asChild>
                        <Link to="/docs">Documentation</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/docs/theming">Theming</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/docs/charts">Analytics</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-3.5 w-3.5" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/docs/accordion">Components</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-3.5 w-3.5" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {/* Installation & Import */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock code={importCode} language="tsx" />
      </div>

      {/* Usage Code */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Usage</h2>
        <CodeBlock code={basicUsageCode} language="tsx" />
      </div>

      {/* API Reference */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">API Reference</h2>
        <div>
          <h3 className="text-lg font-medium mb-3">Breadcrumb Props</h3>
          <APIReferenceTable props={breadcrumbProps} />
        </div>
        <div className="pt-4">
          <h3 className="text-lg font-medium mb-3">BreadcrumbLink Props</h3>
          <APIReferenceTable props={breadcrumbLinkProps} />
        </div>
      </div>
    </div>
  );
};
