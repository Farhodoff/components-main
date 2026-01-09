import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "./dialog";
import { describe, it, expect } from "vitest";

describe("Dialog", () => {
    it("renders Dialog trigger button", () => {
        render(
            <Dialog>
                <DialogTrigger>Open Dialog</DialogTrigger>
            </Dialog>
        );
        expect(screen.getByText("Open Dialog")).toBeInTheDocument();
    });

    it("opens Dialog when trigger is clicked", async () => {
        const user = userEvent.setup();
        render(
            <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogTitle>Dialog Title</DialogTitle>
                </DialogContent>
            </Dialog>
        );

        const trigger = screen.getByText("Open");
        await user.click(trigger);

        expect(screen.getByText("Dialog Title")).toBeInTheDocument();
    });

    it("renders DialogTitle correctly", async () => {
        const user = userEvent.setup();
        render(
            <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogTitle>Test Title</DialogTitle>
                </DialogContent>
            </Dialog>
        );

        await user.click(screen.getByText("Open"));
        const title = screen.getByText("Test Title");
        expect(title).toBeInTheDocument();
        expect(title).toHaveClass("text-lg", "font-semibold");
    });

    it("renders DialogDescription correctly", async () => {
        const user = userEvent.setup();
        render(
            <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogTitle>Title</DialogTitle>
                    <DialogDescription>Test description</DialogDescription>
                </DialogContent>
            </Dialog>
        );

        await user.click(screen.getByText("Open"));
        const description = screen.getByText("Test description");
        expect(description).toBeInTheDocument();
        expect(description).toHaveClass("text-sm", "text-muted-foreground");
    });

    it("renders complete Dialog composition", async () => {
        const user = userEvent.setup();
        render(
            <Dialog>
                <DialogTrigger>Open Dialog</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Complete Dialog</DialogTitle>
                        <DialogDescription>This is a complete dialog example</DialogDescription>
                    </DialogHeader>
                    <div>Dialog body content</div>
                    <DialogFooter>
                        <button>Cancel</button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        );

        await user.click(screen.getByText("Open Dialog"));

        expect(screen.getByText("Complete Dialog")).toBeInTheDocument();
        expect(screen.getByText("This is a complete dialog example")).toBeInTheDocument();
        expect(screen.getByText("Dialog body content")).toBeInTheDocument();
        expect(screen.getByText("Cancel")).toBeInTheDocument();
    });

    it("renders close button with accessibility label", async () => {
        const user = userEvent.setup();
        render(
            <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogTitle>Title</DialogTitle>
                </DialogContent>
            </Dialog>
        );

        await user.click(screen.getByText("Open"));
        expect(screen.getByText("Close")).toBeInTheDocument();
    });

    it("DialogContent is accessible", async () => {
        const user = userEvent.setup();
        render(
            <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent aria-label="Test dialog">
                    <DialogTitle>Accessible Dialog</DialogTitle>
                </DialogContent>
            </Dialog>
        );

        await user.click(screen.getByText("Open"));
        const content = screen.getByLabelText("Test dialog");
        expect(content).toBeInTheDocument();
    });
});
