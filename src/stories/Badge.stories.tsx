import type { Meta, StoryObj } from "@storybook/react";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import { Star, Check, AlertCircle, Zap } from "lucide-react";

const meta: Meta<typeof LibraryBadge> = {
  title: "Components/Badge",
  component: LibraryBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "destructive",
        "success",
        "warning",
        "outline",
        "ghost",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
    removable: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    children: "Success",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning",
    variant: "warning",
  },
};

export const Destructive: Story = {
  args: {
    children: "Error",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Featured",
    icon: <Star className="h-3 w-3" />,
    variant: "secondary",
  },
};

export const Removable: Story = {
  args: {
    children: "Removable",
    removable: true,
    onRemove: () => alert("Removed!"),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <LibraryBadge size="sm">Small</LibraryBadge>
      <LibraryBadge size="default">Default</LibraryBadge>
      <LibraryBadge size="lg">Large</LibraryBadge>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <LibraryBadge variant="default">Default</LibraryBadge>
      <LibraryBadge variant="secondary">Secondary</LibraryBadge>
      <LibraryBadge variant="success">Success</LibraryBadge>
      <LibraryBadge variant="warning">Warning</LibraryBadge>
      <LibraryBadge variant="destructive">Destructive</LibraryBadge>
      <LibraryBadge variant="outline">Outline</LibraryBadge>
      <LibraryBadge variant="ghost">Ghost</LibraryBadge>
    </div>
  ),
};

export const StatusIndicators: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <LibraryBadge variant="success" icon={<Check className="h-3 w-3" />}>
          Completed
        </LibraryBadge>
        <span className="text-sm text-muted-foreground">Task finished</span>
      </div>
      <div className="flex items-center gap-2">
        <LibraryBadge variant="warning" icon={<AlertCircle className="h-3 w-3" />}>
          Pending
        </LibraryBadge>
        <span className="text-sm text-muted-foreground">Awaiting review</span>
      </div>
      <div className="flex items-center gap-2">
        <LibraryBadge variant="default" icon={<Zap className="h-3 w-3" />}>
          In Progress
        </LibraryBadge>
        <span className="text-sm text-muted-foreground">Currently working</span>
      </div>
    </div>
  ),
};
