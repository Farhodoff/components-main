import type { Meta, StoryObj } from "@storybook/react";
import { LibraryAlert } from "@/components/library/LibraryAlert";

const meta: Meta<typeof LibraryAlert> = {
  title: "Components/Alert",
  component: LibraryAlert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "info", "success", "warning", "destructive"],
    },
    dismissible: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Default Alert",
    children: "This is a default alert message.",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    title: "Information",
    children: "This is an informational message for the user.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success!",
    children: "Your changes have been saved successfully.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    children: "Please review the changes before proceeding.",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    title: "Error",
    children: "There was a problem processing your request.",
  },
};

export const Dismissible: Story = {
  args: {
    variant: "info",
    title: "Dismissible Alert",
    children: "Click the X button to dismiss this alert.",
    dismissible: true,
  },
};

export const WithoutTitle: Story = {
  args: {
    variant: "success",
    children: "This alert has no title, just a message.",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <LibraryAlert variant="default" title="Default">
        This is a default alert.
      </LibraryAlert>
      <LibraryAlert variant="info" title="Info">
        This is an info alert.
      </LibraryAlert>
      <LibraryAlert variant="success" title="Success">
        This is a success alert.
      </LibraryAlert>
      <LibraryAlert variant="warning" title="Warning">
        This is a warning alert.
      </LibraryAlert>
      <LibraryAlert variant="destructive" title="Error">
        This is an error alert.
      </LibraryAlert>
    </div>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <LibraryAlert variant="success" title="Payment successful">
        Your order #12345 has been confirmed. You will receive an email
        confirmation shortly.
      </LibraryAlert>
      <LibraryAlert variant="warning" title="Session expiring" dismissible>
        Your session will expire in 5 minutes. Please save your work.
      </LibraryAlert>
      <LibraryAlert variant="destructive" title="Connection lost" dismissible>
        Unable to connect to the server. Please check your internet connection
        and try again.
      </LibraryAlert>
    </div>
  ),
};
