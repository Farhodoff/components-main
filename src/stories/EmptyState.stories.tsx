import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "@/components/library/EmptyState";
import { FileSearch } from "lucide-react";

const meta: Meta<typeof EmptyState> = {
    title: "Components/EmptyState",
    component: EmptyState,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "No files found",
        description: "You haven't uploaded any files yet. Upload a file to get started.",
    },
};

export const WithAction: Story = {
    args: {
        title: "No projects",
        description: "Get started by creating a new project.",
        action: {
            label: "Create Project",
            onClick: () => alert("Create project clicked"),
        },
    },
};

export const CustomIcon: Story = {
    args: {
        icon: <FileSearch className="h-10 w-10 text-primary" />,
        title: "No search results",
        description: "We couldn't find any documents matching your search.",
    },
};
