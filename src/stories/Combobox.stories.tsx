import type { Meta, StoryObj } from "@storybook/react";
import { Combobox } from "@/components/library/Combobox";
import { useState } from "react";

const meta: Meta<typeof Combobox> = {
    title: "Components/Combobox",
    component: Combobox,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const frameworks = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
];

export const Default: Story = {
    render: function Render() {
        const [value, setValue] = useState("");
        return (
            <Combobox
                options={frameworks}
                value={value}
                onSelect={setValue}
                placeholder="Select framework..."
            />
        );
    },
};

export const CustomSearchPlaceholder: Story = {
    render: function Render() {
        const [value, setValue] = useState("");
        return (
            <Combobox
                options={frameworks}
                value={value}
                onSelect={setValue}
                placeholder="Select framework..."
                searchPlaceholder="Find a framework..."
            />
        );
    },
};
