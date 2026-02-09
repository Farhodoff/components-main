import React from "react";
import { SimpleAreaChart, SimpleBarChart, SimplePieChart } from "@/components/library/Charts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, Users, DollarSign, Activity, CreditCard } from "lucide-react";

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

export const AnalyticsDashboard: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <div className="flex items-center space-x-2">
                    {/* Add date range picker or buttons here if needed */}
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+2350</div>
                        <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Sales</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+12,234</div>
                        <p className="text-xs text-muted-foreground">+19% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-muted-foreground">+201 since last hour</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <SimpleBarChart
                            data={chartdata}
                            index="date"
                            categories={["Sales", "Profit"]}
                            colors={["hsl(var(--primary))", "hsl(var(--muted))"]}
                            valueFormatter={(val) => `$${val}`}
                        />
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Sales</CardTitle>
                        <CardDescription>
                            You made 265 sales this month.
                        </CardDescription>
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
            </div>
        </div>
    );
};
