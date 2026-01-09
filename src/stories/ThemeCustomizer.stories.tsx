import type { Meta, StoryObj } from "@storybook/react";
import { ThemeCustomizer } from "@/components/ui/theme-customizer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const meta: Meta<typeof ThemeCustomizer> = {
    title: "Components/ThemeCustomizer",
    component: ThemeCustomizer,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: function Render() {
        return (
            <div className="flex flex-col gap-8 items-center p-8 bg-background border rounded-lg min-h-[400px] w-[600px] relative">
                <div className="absolute top-4 right-4">
                    <ThemeCustomizer />
                </div>

                <div className="w-full max-w-sm">
                    <Card>
                        <CardHeader>
                            <CardTitle>Create project</CardTitle>
                            <CardDescription>Deploy your new project in one-click.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="Name of your project" />
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="outline">Cancel</Button>
                            <Button>Deploy</Button>
                        </CardFooter>
                    </Card>
                </div>

                <div className="flex gap-4">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                </div>
            </div>
        );
    },
};
