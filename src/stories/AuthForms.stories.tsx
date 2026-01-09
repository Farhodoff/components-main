import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm, RegisterForm } from "@/components/templates/AuthForms";

const meta: Meta<typeof LoginForm> = {
    title: "Templates/AuthForms",
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
    render: function Render() {
        return <LoginForm onSubmit={(values) => console.log(values)} />;
    },
};

export const Register: Story = {
    render: function Render() {
        return <RegisterForm onSubmit={(values) => console.log(values)} />;
    },
};
