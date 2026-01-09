import type { Meta, StoryObj } from "@storybook/react";
import { FileUpload } from "@/components/library/FileUpload";
import { useState } from "react";

const meta: Meta<typeof FileUpload> = {
    title: "Components/FileUpload",
    component: FileUpload,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: function Render() {
        const [files, setFiles] = useState<File[]>([]);
        return (
            <div className="w-[400px]">
                <FileUpload value={files} onChange={setFiles} />
            </div>
        );
    },
};

export const MultipleFiles: Story = {
    render: function Render() {
        const [files, setFiles] = useState<File[]>([
            new File(["content"], "document.pdf", { type: "application/pdf" }),
            new File(["image"], "photo.jpg", { type: "image/jpeg" }),
        ]);
        return (
            <div className="w-[400px]">
                <FileUpload value={files} onChange={setFiles} />
            </div>
        );
    },
};
