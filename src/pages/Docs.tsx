import React, { useState } from "react";
import { useParams, Navigate, Link, useLocation } from "react-router-dom";
import { DocsIntroduction } from "@/components/docs/DocsIntroduction";
import { ButtonDocs } from "@/components/docs/ButtonDocs";
import { InputDocs } from "@/components/docs/InputDocs";
import { BadgeDocs } from "@/components/docs/BadgeDocs";
import { AlertDocs } from "@/components/docs/AlertDocs";
import { CardDocs } from "@/components/docs/CardDocs";
import { Menu, Package, Search, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LibraryInput } from "@/components/library/LibraryInput";
import { cn } from "@/lib/utils";

const componentItems = [
  { title: "Button", url: "/docs/button", category: "Form" },
  { title: "Input", url: "/docs/input", category: "Form" },
  { title: "Badge", url: "/docs/badge", category: "Display" },
  { title: "Alert", url: "/docs/alert", category: "Feedback" },
  { title: "Card", url: "/docs/card", category: "Layout" },
];

const gettingStartedItems = [
  { title: "Introduction", url: "/docs" },
  { title: "Installation", url: "/docs/installation" },
  { title: "Theming", url: "/docs/theming" },
];

const componentMap: Record<string, React.FC> = {
  button: ButtonDocs,
  input: InputDocs,
  badge: BadgeDocs,
  alert: AlertDocs,
  card: CardDocs,
};

const Docs: React.FC = () => {
  const { component } = useParams<{ component?: string }>();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredComponents = componentItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedComponents = filteredComponents.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof componentItems>);

  const renderContent = () => {
    if (!component) return <DocsIntroduction />;
    const ComponentDocs = componentMap[component.toLowerCase()];
    if (ComponentDocs) return <ComponentDocs />;
    if (component === "installation") return <InstallationDocs />;
    if (component === "theming") return <ThemingDocs />;
    return <Navigate to="/docs" replace />;
  };

  const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      to={to}
      onClick={() => setSidebarOpen(false)}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors",
        location.pathname === to
          ? "bg-primary/10 text-primary font-medium"
          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
      )}
    >
      <ChevronRight className="h-3 w-3" />
      {children}
    </Link>
  );

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform lg:relative lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Package className="h-4 w-4 text-primary" />
              </div>
              <span className="font-semibold">ComponentLib</span>
            </Link>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="p-3">
            <LibraryInput
              placeholder="Search..."
              leftIcon={<Search className="h-4 w-4" />}
              inputSize="sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <nav className="flex-1 overflow-auto p-3 space-y-6">
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">Getting Started</h3>
              <div className="space-y-1">
                {gettingStartedItems.map((item) => (
                  <NavItem key={item.url} to={item.url}>{item.title}</NavItem>
                ))}
              </div>
            </div>
            
            {Object.entries(groupedComponents).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">{category}</h3>
                <div className="space-y-1">
                  {items.map((item) => (
                    <NavItem key={item.url} to={item.url}>{item.title}</NavItem>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-background/80 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-border bg-background/95 backdrop-blur px-4 lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <span className="font-semibold">Documentation</span>
        </header>

        <main className="flex-1 overflow-auto">
          <div className="container max-w-4xl py-8 px-4 lg:px-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

const InstallationDocs: React.FC = () => (
  <div className="space-y-8">
    <div>
      <h1 className="text-3xl font-bold mb-4">Installation</h1>
      <p className="text-lg text-muted-foreground">Get started with ComponentLib.</p>
    </div>
    <section>
      <h2 className="text-xl font-semibold mb-4">Install via npm</h2>
      <div className="bg-code rounded-lg border border-code-border p-4 font-mono text-sm">
        <pre>npm install @componentlib/react</pre>
      </div>
    </section>
  </div>
);

const ThemingDocs: React.FC = () => (
  <div className="space-y-8">
    <div>
      <h1 className="text-3xl font-bold mb-4">Theming</h1>
      <p className="text-lg text-muted-foreground">Customize ComponentLib to match your brand.</p>
    </div>
    <section>
      <h2 className="text-xl font-semibold mb-4">CSS Variables</h2>
      <p className="text-muted-foreground">Override CSS custom properties to customize the appearance.</p>
    </section>
  </div>
);

export default Docs;
