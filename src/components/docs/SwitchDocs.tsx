import React, { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Bell, Shield, Moon, Wifi } from "lucide-react";

const switchProps = [
  {
    name: "checked",
    type: "boolean",
    description: "The controlled state of the switch.",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    description: "The default state of the switch when initially rendered (uncontrolled).",
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean) => void",
    description: "Event handler called when the state of the switch changes.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "When true, prevents user interaction with the switch.",
  },
  {
    name: "required",
    type: "boolean",
    default: "false",
    description: "When true, indicates that the user must check the switch before form submission.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for custom styling.",
  },
];

const importCode = `import { Switch } from "@farhod_dev/super-ui";
import { Label } from "@farhod_dev/super-ui";`;

const basicUsageCode = `<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`;

export const SwitchDocs: React.FC = () => {
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  const handleToggle2FA = (checked: boolean) => {
    setTwoFactorAuth(checked);
    if (checked) {
      toast.success("Two-Factor Authentication enabled");
    } else {
      toast.warning("Two-Factor Authentication disabled");
    }
  };

  const handleTogglePush = (checked: boolean) => {
    setPushNotifications(checked);
    toast.info(`Push notifications ${checked ? "activated" : "muted"}`);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <LibraryBadge variant="outline">Form Controls</LibraryBadge>
          <LibraryBadge variant="secondary">Radix UI</LibraryBadge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Switch</h1>
        <p className="text-lg text-muted-foreground">
          A control that allows the user to toggle between checked and not checked states, ideal for settings and feature flags.
        </p>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Examples</h2>

        {/* 1. Basic Switch */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Basic Toggle with Label</h3>
          <div className="flex items-center space-x-3">
            <Switch id="airplane-mode" defaultChecked />
            <div className="grid gap-1">
              <Label htmlFor="airplane-mode" className="text-sm font-medium cursor-pointer">
                Airplane Mode
              </Label>
              <p className="text-xs text-muted-foreground">
                Instantly disable all wireless radios, cellular, and Bluetooth.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Security & Notifications Panel Scenario */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Account Security & Preferences</h3>
          <Card className="max-w-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">System Preferences</CardTitle>
              <CardDescription>
                Manage your identity verification and messaging protocols.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <div className="flex items-center space-x-3">
                  <Shield className="h-4 w-4 text-primary" />
                  <div className="space-y-0.5">
                    <Label htmlFor="2fa-switch" className="text-sm cursor-pointer">
                      Two-Factor Authentication
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Require security token on untrusted logins.
                    </p>
                  </div>
                </div>
                <Switch
                  id="2fa-switch"
                  checked={twoFactorAuth}
                  onCheckedChange={handleToggle2FA}
                />
              </div>

              <div className="flex items-center justify-between space-x-2">
                <div className="flex items-center space-x-3">
                  <Bell className="h-4 w-4 text-primary" />
                  <div className="space-y-0.5">
                    <Label htmlFor="push-switch" className="text-sm cursor-pointer">
                      Push Notifications
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Receive real-time desktop banners.
                    </p>
                  </div>
                </div>
                <Switch
                  id="push-switch"
                  checked={pushNotifications}
                  onCheckedChange={handleTogglePush}
                />
              </div>

              <div className="flex items-center justify-between space-x-2">
                <div className="flex items-center space-x-3">
                  <Moon className="h-4 w-4 text-primary" />
                  <div className="space-y-0.5">
                    <Label htmlFor="theme-sync" className="text-sm cursor-pointer">
                      Auto Dark Mode
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Sync interface tone with operating system schedule.
                    </p>
                  </div>
                </div>
                <Switch id="theme-sync" defaultChecked />
              </div>

              <div className="flex items-center justify-between space-x-2 opacity-60">
                <div className="flex items-center space-x-3">
                  <Wifi className="h-4 w-4 text-muted-foreground" />
                  <div className="space-y-0.5">
                    <span className="text-sm font-medium">Offline Cache (Pro feature)</span>
                    <p className="text-xs text-muted-foreground">
                      Store asset snapshots locally in IndexedDB.
                    </p>
                  </div>
                </div>
                <Switch disabled />
              </div>
            </CardContent>
          </Card>
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
          <h3 className="text-lg font-medium mb-3">Switch Props</h3>
          <APIReferenceTable props={switchProps} />
        </div>
      </div>
    </div>
  );
};
