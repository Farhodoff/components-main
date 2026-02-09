import React from "react";
import { SimpleAreaChart, SimpleBarChart, SimpleLineChart, SimplePieChart } from "@/components/library/Charts";
import { AnalyticsDashboard } from "@/components/templates/AnalyticsDashboard";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const chartdata = [
    { date: "Jan", Sales: 2890, Profit: 2338 },
    { date: "Feb", Sales: 2756, Profit: 2103 },
    { date: "Mar", Sales: 3322, Profit: 2194 },
    { date: "Apr", Sales: 3470, Profit: 2108 },
    { date: "May", Sales: 3475, Profit: 1812 },
    { date: "Jun", Sales: 3129, Profit: 1726 },
];

const pieData = [
    { name: "Direct", value: 400 },
    { name: "Social", value: 300 },
    { name: "Organic", value: 300 },
    { name: "Referral", value: 200 },
];

export const ChartsDocs: React.FC = () => {
    return (
        <div className="space-y-8 max-w-5xl">
            <div>
                <h1 className="text-3xl font-bold mb-4">Charts & Analytics</h1>
                <p className="text-lg text-muted-foreground">
                    Beautiful, responsive, and accessible charts built with <code>recharts</code>.
                </p>
            </div>

            <Tabs defaultValue="components" className="w-full">
                <TabsList>
                    <TabsTrigger value="components">Components</TabsTrigger>
                    <TabsTrigger value="dashboard">Dashboard Template</TabsTrigger>
                </TabsList>

                <TabsContent value="components" className="space-y-8 mt-6">
                    <section className="grid gap-6 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Area Chart</CardTitle>
                                <CardDescription>Great for showing trends over time.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <SimpleAreaChart
                                    data={chartdata}
                                    index="date"
                                    categories={["Sales", "Profit"]}
                                />
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Bar Chart</CardTitle>
                                <CardDescription>Best for comparing categorical data.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <SimpleBarChart
                                    data={chartdata}
                                    index="date"
                                    categories={["Sales", "Profit"]}
                                />
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Line Chart</CardTitle>
                                <CardDescription>Ideal for precise data points.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <SimpleLineChart
                                    data={chartdata}
                                    index="date"
                                    categories={["Sales", "Profit"]}
                                />
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Pie Chart</CardTitle>
                                <CardDescription>Visualizing parts of a whole.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="h-[350px] flex items-center justify-center">
                                    <SimplePieChart
                                        data={pieData}
                                        index="name"
                                        categories={["value"]}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </TabsContent>

                <TabsContent value="dashboard" className="mt-6">
                    <div className="rounded-lg border bg-muted/30 p-6">
                        <AnalyticsDashboard />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};
