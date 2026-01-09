import type { Meta, StoryObj } from "@storybook/react";
import { Timeline } from "@/components/library/Timeline";
import { CheckCircle2, AlertCircle, Clock } from "lucide-react";

const meta: Meta<typeof Timeline> = {
    title: "Components/Timeline",
    component: Timeline,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
    {
        date: "2023-10-01",
        title: "Project Started",
        description: "Initial commit and setup.",
        icon: <Clock className="h-4 w-4 text-blue-500" />,
    },
    {
        date: "2023-10-15",
        title: "Feature A Completed",
        description: "Implemented core feature set.",
        icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
    },
    {
        date: "2023-10-20",
        title: "Bug Fixes",
        description: "Resolved critical issues in beta.",
        icon: <AlertCircle className="h-4 w-4 text-orange-500" />,
    },
    {
        date: "2023-11-01",
        title: "Release v1.0",
        description: "Official public launch.",
        icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
    },
];

export const Default: Story = {
    args: {
        items,
    },
};
