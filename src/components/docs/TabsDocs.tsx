import React, { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Lock, Bell, Code, Eye, BarChart3, FileText, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const tabsProps = [
  {
    name: "defaultValue",
    type: "string",
    description: "The value of the tab that should be active when initially rendered (uncontrolled).",
  },
  {
    name: "value",
    type: "string",
    description: "The controlled value of the active tab. Must be used with onValueChange.",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    description: "Event handler called when the active tab changes.",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "The orientation of the tabs.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for the tabs container.",
  },
];

const tabsTriggerProps = [
  {
    name: "value",
    type: "string",
    required: true,
    description: "A unique value that associates the trigger with a specific content pane.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "When true, prevents the user from activating the tab.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for styling the trigger button.",
  },
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "Content displayed inside the trigger (labels, icons).",
  },
];

const tabsContentProps = [
  {
    name: "value",
    type: "string",
    required: true,
    description: "A unique value matching the corresponding TabsTrigger value.",
  },
  {
    name: "forceMount",
    type: "boolean",
    description: "Used to force mounting when more control is needed (e.g. for animations).",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for the content pane.",
  },
];

const importCode = `import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@farhod_dev/super-ui";`;

const basicUsageCode = `<Tabs defaultValue="account" className="w-[400px]">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you're done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="Farhod Soyilov" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  </TabsContent>
  <TabsContent value="password">
    <Card>
      <CardHeader>
        <CardTitle>Password</CardTitle>
        <CardDescription>
          Change your password here. After saving, you'll be logged out.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="current">Current password</Label>
          <Input id="current" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save password</Button>
      </CardFooter>
    </Card>
  </TabsContent>
</Tabs>`;

export const TabsDocs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleSaveAccount = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Account settings updated successfully!");
  };

  const handleSavePassword = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Password changed successfully!");
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <LibraryBadge variant="outline">Navigation & Disclosure</LibraryBadge>
          <LibraryBadge variant="secondary">Radix UI</LibraryBadge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Tabs</h1>
        <p className="text-lg text-muted-foreground">
          A set of layered sections of content—known as tab panels—that are displayed one at a time, accessible via keyboard arrows.
        </p>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Examples</h2>

        {/* 1. Account Settings Tabbed Form */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Account & Security Tabs</h3>
          <div className="max-w-md">
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="account" className="gap-2">
                  <User className="h-4 w-4" />
                  Account
                </TabsTrigger>
                <TabsTrigger value="password" className="gap-2">
                  <Lock className="h-4 w-4" />
                  Password
                </TabsTrigger>
                <TabsTrigger value="notifications" className="gap-2">
                  <Bell className="h-4 w-4" />
                  Alerts
                </TabsTrigger>
              </TabsList>

              <TabsContent value="account">
                <Card className="mt-2">
                  <CardHeader>
                    <CardTitle>Account Details</CardTitle>
                    <CardDescription>
                      Update your profile information and public handle.
                    </CardDescription>
                  </CardHeader>
                  <form onSubmit={handleSaveAccount}>
                    <CardContent className="space-y-3">
                      <div className="space-y-1">
                        <Label htmlFor="tab-name">Display Name</Label>
                        <Input id="tab-name" defaultValue="Farhod Soyilov" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="tab-username">Username</Label>
                        <Input id="tab-username" defaultValue="@farhod_dev" />
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button type="submit" size="sm" className="gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Save changes
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>

              <TabsContent value="password">
                <Card className="mt-2">
                  <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>
                      Choose a strong, unique password to secure your account.
                    </CardDescription>
                  </CardHeader>
                  <form onSubmit={handleSavePassword}>
                    <CardContent className="space-y-3">
                      <div className="space-y-1">
                        <Label htmlFor="current-pwd">Current password</Label>
                        <Input id="current-pwd" type="password" placeholder="••••••••" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="new-pwd">New password</Label>
                        <Input id="new-pwd" type="password" placeholder="••••••••" />
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button type="submit" size="sm">
                        Update password
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card className="mt-2">
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>
                      Configure which alerts and emails you receive.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between p-2 rounded-md bg-muted/40">
                      <span>Product Updates & Releases</span>
                      <LibraryBadge variant="secondary">Enabled</LibraryBadge>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-md bg-muted/40">
                      <span>Security Incident Notifications</span>
                      <LibraryBadge variant="secondary">Essential</LibraryBadge>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* 2. Controlled Tab with Dashboard Views */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Controlled View Switcher</h3>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="overview" className="gap-2">
                    <Eye className="h-4 w-4" />
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="analytics" className="gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Analytics
                  </TabsTrigger>
                  <TabsTrigger value="reports" className="gap-2">
                    <FileText className="h-4 w-4" />
                    Reports
                  </TabsTrigger>
                  <TabsTrigger value="code" className="gap-2">
                    <Code className="h-4 w-4" />
                    Source
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <span className="text-xs text-muted-foreground">
                Active tab state: <strong className="text-foreground uppercase">{activeTab}</strong>
              </span>
            </div>

            <div className="rounded-md border border-dashed border-border p-6 text-center text-sm text-muted-foreground bg-muted/20">
              {activeTab === "overview" && "Summary dashboard metrics and recent team activity."}
              {activeTab === "analytics" && "User growth rates, retention curves, and latency metrics."}
              {activeTab === "reports" && "Quarterly exports and automated financial statement logs."}
              {activeTab === "code" && "React hooks and TypeScript types driving this view."}
            </div>
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
          <h3 className="text-lg font-medium mb-3">Tabs Props</h3>
          <APIReferenceTable props={tabsProps} />
        </div>
        <div className="pt-4">
          <h3 className="text-lg font-medium mb-3">TabsTrigger Props</h3>
          <APIReferenceTable props={tabsTriggerProps} />
        </div>
        <div className="pt-4">
          <h3 className="text-lg font-medium mb-3">TabsContent Props</h3>
          <APIReferenceTable props={tabsContentProps} />
        </div>
      </div>
    </div>
  );
};
