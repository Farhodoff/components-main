import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
    CardDescription,
} from "@/components/ui/card";

interface SettingsLayoutProps {
    children: React.ReactNode;
    sidebarNavItems: {
        title: string;
        href: string;
    }[];
}

export function SettingsLayout({ children, sidebarNavItems }: SettingsLayoutProps) {
    return (
        <div className="hidden space-y-6 p-10 pb-16 md:block">
            <div className="space-y-0.5">
                <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground">
                    Manage your account settings and set e-mail preferences.
                </p>
            </div>
            <SeparatorClassName className="my-6" />
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                <aside className="-mx-4 lg:w-1/5">
                    <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
                        {sidebarNavItems.map((item) => (
                            <Button
                                key={item.href}
                                variant="ghost"
                                className={cn(
                                    "justify-start hover:bg-transparent hover:underline",
                                    "text-primary" // Simplified active state for demo
                                )}
                                asChild
                            >
                                <a href={item.href}>{item.title}</a>
                            </Button>
                        ))}
                    </nav>
                </aside>
                <div className="flex-1 lg:max-w-2xl">{children}</div>
            </div>
        </div>
    );
}

// Helper to fix the Separator import issue if it arises (using a simple div fallback if needed, but assuming Separator exists)
function SeparatorClassName({ className }: { className?: string }) {
    return <Separator className={className} />;
}

export function ProfileForm() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Profile</h3>
                <p className="text-sm text-muted-foreground">
                    This is how others will see you on the site.
                </p>
            </div>
            <Separator />
            <div className="space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="farhod_dev" />
                    <p className="text-[0.8rem] text-muted-foreground">
                        This is your public display name.
                    </p>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="m@example.com" />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" placeholder="Tell us a little bit about yourself" />
                </div>

                <Button>Update profile</Button>
            </div>
        </div>
    );
}

export function NotificationsForm() {
    // Fake state for demo
    const [emailNotifs, setEmailNotifs] = React.useState(true);

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Notifications</h3>
                <p className="text-sm text-muted-foreground">
                    Configure how you receive notifications.
                </p>
            </div>
            <Separator />
            <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <Label className="text-base">Email Notifications</Label>
                        <CardDescription>
                            Receive emails about your account activity.
                        </CardDescription>
                    </div>
                    <Switch checked={emailNotifs} onCheckedChange={setEmailNotifs} />
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <Label className="text-base">Marketing Emails</Label>
                        <CardDescription>
                            Receive emails about new products, features, and more.
                        </CardDescription>
                    </div>
                    <Switch />
                </div>
            </div>
            <Button>Update notifications</Button>
        </div>
    );
}

export function AccountForm() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Account</h3>
                <p className="text-sm text-muted-foreground">
                    Update your account settings. Set your preferred language and timezone.
                </p>
            </div>
            <Separator />
            <div className="space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="language">Language</Label>
                    <Input id="language" placeholder="English" disabled />
                    <p className="text-[0.8rem] text-muted-foreground">
                        This is the language that will be used in the dashboard.
                    </p>
                </div>
                <div className="pt-4">
                    <h4 className="text-sm font-medium text-destructive mb-2">Danger Zone</h4>
                    <div className="rounded-md border border-destructive/50 p-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <div className="font-medium text-destructive">Delete Account</div>
                                <div className="text-sm text-muted-foreground">Permanently delete your account and all data.</div>
                            </div>
                            <Button variant="destructive">Delete</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
