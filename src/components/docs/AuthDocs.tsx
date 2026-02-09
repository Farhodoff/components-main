import React, { useState } from "react";
import { LoginTemplate } from "@/components/templates/auth/Login";
import { RegisterTemplate } from "@/components/templates/auth/Register";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const AuthDocs: React.FC = () => {
    const loginCode = `import { LoginTemplate } from '@farhod_dev/super-ui';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/40">
      <LoginTemplate />
    </div>
  );
}`;

    const registerCode = `import { RegisterTemplate } from '@farhod_dev/super-ui';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/40">
      <RegisterTemplate />
    </div>
  );
}`;

    const [activeTab, setActiveTab] = useState("login");

    const copyToClipboard = () => {
        const codeToCopy = activeTab === "login" ? loginCode : registerCode;
        navigator.clipboard.writeText(codeToCopy);
    };

    return (
        <div className="w-full max-w-[1400px] mx-auto p-6 space-y-10">
            {/* Header Section */}
            <div>
                <h1 className="text-3xl font-bold mb-4">Authentication Templates</h1>
                <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                    Pre-built, responsive login and registration forms using <code>react-hook-form</code> and <code>zod</code>.
                    Includes validation, error handling, and mock Supabase integration.
                </p>
            </div>

            {/* Interactive Demo Section - Full Width */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Interactive Demo</h2>
                <div className="border rounded-xl overflow-hidden shadow-lg bg-background ring-1 ring-slate-200 dark:ring-slate-800 p-8">
                    <Tabs defaultValue="login" className="w-full" onValueChange={setActiveTab}>
                        <div className="flex justify-center mb-8">
                            <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
                                <TabsTrigger value="login">Login Page</TabsTrigger>
                                <TabsTrigger value="register">Register Page</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="login" className="mt-0 flex justify-center">
                            <div className="w-full max-w-5xl border rounded-xl overflow-hidden shadow-sm bg-background">
                                <LoginTemplate />
                            </div>
                        </TabsContent>

                        <TabsContent value="register" className="mt-0 flex justify-center">
                            <div className="w-full max-w-xl">
                                <RegisterTemplate />
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>

            {/* Documentation & Code Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Usage Code */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">Usage Code</h2>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={copyToClipboard}
                            className="gap-2"
                        >
                            <Copy className="h-4 w-4" />
                            Copy Code
                        </Button>
                    </div>
                    <Card className="bg-slate-950 text-slate-50 p-6 relative overflow-hidden rounded-xl">
                        <pre className="text-sm overflow-x-auto font-mono scrollbar-hide">
                            <code>{activeTab === "login" ? loginCode : registerCode}</code>
                        </pre>
                    </Card>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Key Features</h2>
                    <Card className="p-6">
                        <ul className="grid grid-cols-1 gap-4 text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">1</span>
                                <div>
                                    <strong className="text-foreground">Form Validation:</strong> Built-in validation using <code>zod</code> schemas for robust data handling.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">2</span>
                                <div>
                                    <strong className="text-foreground">State Integration:</strong> Uses <code>react-hook-form</code> for efficient form state management.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">3</span>
                                <div>
                                    <strong className="text-foreground">Supabase Ready:</strong> Pre-configured async handlers for Supabase authentication methods.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">4</span>
                                <div>
                                    <strong className="text-foreground">Responsive Design:</strong> Fully responsive layouts that adapt to all device sizes.
                                </div>
                            </li>
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
};
