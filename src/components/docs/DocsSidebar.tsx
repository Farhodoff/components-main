import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Package, ChevronRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { LibraryInput } from "@/components/library/LibraryInput";

const componentItems = [
  { title: "Button", url: "/docs/button", category: "Form" },
  { title: "Input", url: "/docs/input", category: "Form" },
  { title: "Badge", url: "/docs/badge", category: "Display" },
  { title: "Alert", url: "/docs/alert", category: "Feedback" },
  { title: "Card", url: "/docs/card", category: "Layout" },
  { title: "Kanban Board", url: "/docs/kanban", category: "Library" },
  { title: "Charts & Analytics", url: "/docs/charts", category: "Library" },
  { title: "Auth Templates", url: "/docs/auth", category: "Templates" },
  { title: "Data Grid", url: "/docs/datagrid", category: "Library" },
];

const gettingStartedItems = [
  { title: "Introduction", url: "/docs" },
  { title: "Installation", url: "/docs/installation" },
  { title: "Theming", url: "/docs/theming" },
];

export function DocsSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredComponents = componentItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedComponents = filteredComponents.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof componentItems>);

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <div className="p-4 border-b border-border">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
            <Package className="h-4 w-4 text-primary" />
          </div>
          {!collapsed && <span className="font-semibold">ComponentLib</span>}
        </button>
      </div>

      <SidebarContent className="px-2">
        {!collapsed && (
          <div className="p-2">
            <LibraryInput
              placeholder="Search components..."
              leftIcon={<Search className="h-4 w-4" />}
              inputSize="sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        )}

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2">
            Getting Started
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {gettingStartedItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                      activeClassName="bg-primary/10 text-primary font-medium"
                    >
                      <ChevronRight className="h-3 w-3" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {Object.entries(groupedComponents).map(([category, items]) => (
          <SidebarGroup key={category}>
            <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2">
              {category}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        end
                        className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                        activeClassName="bg-primary/10 text-primary font-medium"
                      >
                        <ChevronRight className="h-3 w-3" />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
