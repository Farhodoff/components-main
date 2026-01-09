import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "@/components/library/DatePicker";
import { useState } from "react";

const meta: Meta<typeof DatePicker> = {
    title: "Components/DatePicker",
    component: DatePicker,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: function Render() {
        const [date, setDate] = useState<Date>();
        return <DatePicker date={date} onSelect={setDate} />;
    },
};

export const WithPreselectedDate: Story = {
    render: function Render() {
        const [date, setDate] = useState<Date | undefined>(new Date());
        return <DatePicker date={date} onSelect={setDate} />;
    },
};

export const CustomPlaceholder: Story = {
    render: function Render() {
        const [date, setDate] = useState<Date>();
        return <DatePicker date={date} onSelect={setDate} placeholder="When is your birthday?" />;
    },
};
