import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    Settings,
    Users,
    Bell,
    Search,
    Menu,
    X,
    LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LibraryInput } from "@/components/library/LibraryInput";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavItem {
    title: string;
    href: string;
    icon: React.ReactNode;
}

const defaultNavItems: NavItem[] = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: <LayoutDashboard className="h-4 w-4" />,
    },
    {
        title: "Users",
        href: "/dashboard/users",
        icon: <Users className="h-4 w-4" />,
    },
    {
        title: "Settings",
        href: "/dashboard/settings",
        icon: <Settings className="h-4 w-4" />,
    },
];

interface DashboardLayoutProps {
    children?: React.ReactNode;
    navItems?: NavItem[];
    userName?: string;
    userEmail?: string;
    userImage?: string;
}

export function DashboardLayout({
    children,
    navItems = defaultNavItems,
    userName = "John Doe",
    userEmail = "john@example.com",
    userImage,
}: DashboardLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const location = useLocation();

    return (
        <div className="min-h-screen bg-background">
            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transition-transform lg:translate-x-0",
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex flex-col h-full">
                    <div className="h-16 flex items-center px-6 border-b">
                        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
                            <div className="h-8 w-8 rounded bg-primary text-primary-foreground flex items-center justify-center">
                                D
                            </div>
                            Dashboard
                        </Link>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden ml-auto"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="flex-1 overflow-auto py-4">
                        <nav className="space-y-1 px-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                        location.pathname === item.href
                                            ? "bg-primary/10 text-primary"
                                            : "text-muted-foreground hover:bg-muted"
                                    )}
                                >
                                    {item.icon}
                                    {item.title}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="p-4 border-t">
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src={userImage} />
                                <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 overflow-hidden">
                                <p className="text-sm font-medium truncate">{userName}</p>
                                <p className="text-xs text-muted-foreground truncate">
                                    {userEmail}
                                </p>
                            </div>
                            <Button variant="ghost" size="icon" title="Logout">
                                <LogOut className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <div className="lg:pl-64 flex flex-col min-h-screen">
                <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur px-6">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden -ml-2"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu className="h-5 w-5" />
                    </Button>

                    <div className="flex-1 max-w-md">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <LibraryInput
                                placeholder="Search..."
                                className="pl-9 bg-muted/50 border-none focus-visible:bg-background"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 ml-auto">
                        <Button variant="ghost" size="icon">
                            <Bell className="h-4 w-4" />
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={userImage} />
                                        <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>

                <main className="flex-1 p-6">
                    <div className="container max-w-6xl py-6">{children}</div>
                </main>
            </div>
        </div>
    );
}
