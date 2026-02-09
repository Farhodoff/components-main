import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Line,
    LineChart,
    PieChart,
    Pie,
    Cell,
    Legend
} from "recharts";

interface BaseChartProps {
    data: Record<string, string | number>[];
    categories: string[];
    index: string;
    colors?: string[];
    valueFormatter?: (value: number) => string;
    yAxisWidth?: number;
    className?: string;
}

const defaultColors = ["hsl(var(--primary))", "hsl(var(--accent))", "#3b82f6", "#f97316"];

export function SimpleAreaChart({
    data,
    categories,
    index,
    colors = defaultColors,
    valueFormatter = (value: number) => `${value}`,
    yAxisWidth = 40,
    className,
}: BaseChartProps) {
    return (
        <ResponsiveContainer width="100%" height={350} className={className}>
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                    {categories.map((category, i) => (
                        <linearGradient key={category} id={`color-${category}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={colors[i % colors.length]} stopOpacity={0.3} />
                            <stop offset="95%" stopColor={colors[i % colors.length]} stopOpacity={0} />
                        </linearGradient>
                    ))}
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis
                    dataKey={index}
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={valueFormatter}
                    width={yAxisWidth}
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: "hsl(var(--popover))",
                        borderColor: "hsl(var(--border))",
                        borderRadius: "var(--radius)",
                        color: "hsl(var(--popover-foreground))",
                    }}
                    itemStyle={{ color: "hsl(var(--foreground))" }}
                    formatter={valueFormatter}
                />
                <Legend />
                {categories.map((category, i) => (
                    <Area
                        key={category}
                        type="monotone"
                        dataKey={category}
                        stroke={colors[i % colors.length]}
                        fillOpacity={1}
                        fill={`url(#color-${category})`}
                        strokeWidth={2}
                    />
                ))}
            </AreaChart>
        </ResponsiveContainer >
    );
}

export function SimpleBarChart({
    data,
    categories,
    index,
    colors = defaultColors,
    valueFormatter = (value: number) => `${value}`,
    yAxisWidth = 40,
    className,
}: BaseChartProps) {
    return (
        <ResponsiveContainer width="100%" height={350} className={className}>
            <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis
                    dataKey={index}
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={valueFormatter}
                    width={yAxisWidth}
                />
                <Tooltip
                    cursor={{ fill: "hsl(var(--muted)/0.4)" }}
                    contentStyle={{
                        backgroundColor: "hsl(var(--popover))",
                        borderColor: "hsl(var(--border))",
                        borderRadius: "var(--radius)",
                        color: "hsl(var(--popover-foreground))",
                    }}
                    itemStyle={{ color: "hsl(var(--foreground))" }}
                    formatter={valueFormatter}
                />
                <Legend />
                {categories.map((category, i) => (
                    <Bar
                        key={category}
                        dataKey={category}
                        fill={colors[i % colors.length]}
                        radius={[4, 4, 0, 0]}
                    />
                ))}
            </BarChart>
        </ResponsiveContainer>
    );
}

export function SimpleLineChart({
    data,
    categories,
    index,
    colors = defaultColors,
    valueFormatter = (value: number) => `${value}`,
    yAxisWidth = 40,
    className,
}: BaseChartProps) {
    return (
        <ResponsiveContainer width="100%" height={350} className={className}>
            <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis
                    dataKey={index}
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={valueFormatter}
                    width={yAxisWidth}
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: "hsl(var(--popover))",
                        borderColor: "hsl(var(--border))",
                        borderRadius: "var(--radius)",
                        color: "hsl(var(--popover-foreground))",
                    }}
                    itemStyle={{ color: "hsl(var(--foreground))" }}
                    formatter={valueFormatter}
                />
                <Legend />
                {categories.map((category, i) => (
                    <Line
                        key={category}
                        type="monotone"
                        dataKey={category}
                        stroke={colors[i % colors.length]}
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 6, strokeWidth: 0 }}
                    />
                ))}
            </LineChart>
        </ResponsiveContainer>
    );
}

export function SimplePieChart({
    data, // Expects [{ name: string, value: number }]
    index = "name", // name key
    categories = ["value"], // value key
    colors = defaultColors,
    className,
}: Omit<BaseChartProps, "categories"> & { categories?: string[] }) {
    const dataKey = categories[0];

    return (
        <ResponsiveContainer width="100%" height={350} className={className}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey={dataKey}
                    nameKey={index}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index} `} fill={colors[index % colors.length]} stroke="hsl(var(--background))" strokeWidth={2} />
                    ))}
                </Pie>
                <Tooltip
                    contentStyle={{
                        backgroundColor: "hsl(var(--popover))",
                        borderColor: "hsl(var(--border))",
                        borderRadius: "var(--radius)",
                        color: "hsl(var(--popover-foreground))",
                    }}
                    itemStyle={{ color: "hsl(var(--foreground))" }}
                />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
}
