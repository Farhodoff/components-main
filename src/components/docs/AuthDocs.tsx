import React from "react";
import { LoginTemplate } from "@/components/templates/auth/Login";
import { RegisterTemplate } from "@/components/templates/auth/Register";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const AuthDocs: React.FC = () => {
    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold mb-4">Authentication Templates</h1>
                <p className="text-lg text-muted-foreground">
                    Pre-built, responsive login and registration forms using <code>react-hook-form</code> and <code>zod</code>.
                </p>
            </div>

            <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
                    <TabsTrigger value="login">Login Page</TabsTrigger>
                    <TabsTrigger value="register">Register Page</TabsTrigger>
                </TabsList>

                <TabsContent value="login" className="mt-6 border rounded-xl overflow-hidden shadow-sm bg-background">
                    <LoginTemplate />
                </TabsContent>

                <TabsContent value="register" className="mt-6 flex justify-center border rounded-xl p-10 bg-muted/30">
                    <RegisterTemplate />
                </TabsContent>
            </Tabs>
        </div>
    );
};
