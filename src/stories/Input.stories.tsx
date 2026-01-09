import type { Meta, StoryObj } from "@storybook/react";
import { LibraryInput } from "@/components/library/LibraryInput";
import { Mail, Search, User, Lock } from "lucide-react";

const meta: Meta<typeof LibraryInput> = {
  title: "Components/Input",
  component: LibraryInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "error", "success"],
    },
    inputSize: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email Address",
    placeholder: "you@example.com",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Username",
    description: "This will be your public display name.",
    placeholder: "johndoe",
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    leftIcon: <Mail className="h-4 w-4" />,
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    error: "Please enter a valid email address.",
    leftIcon: <Mail className="h-4 w-4" />,
  },
};

export const WithSuccess: Story = {
  args: {
    label: "Username",
    placeholder: "johndoe",
    success: "Username is available!",
    leftIcon: <User className="h-4 w-4" />,
    defaultValue: "johndoe",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "Cannot edit this",
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <LibraryInput inputSize="sm" placeholder="Small input" />
      <LibraryInput inputSize="default" placeholder="Default input" />
      <LibraryInput inputSize="lg" placeholder="Large input" />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <LibraryInput
        label="Full Name"
        placeholder="John Doe"
        leftIcon={<User className="h-4 w-4" />}
      />
      <LibraryInput
        label="Email"
        type="email"
        placeholder="john@example.com"
        leftIcon={<Mail className="h-4 w-4" />}
      />
      <LibraryInput
        label="Password"
        type="password"
        placeholder="Create a password"
        description="Must be at least 8 characters."
      />
    </div>
  ),
};
