import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./button";
import { describe, it, expect, vi } from "vitest";
import React from "react";

describe("Button", () => {
    it("renders correctly with default props", () => {
        render(<Button>Click me</Button>);
        const button = screen.getByRole("button", { name: /click me/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass("bg-primary");
    });

    it("renders with different variants", () => {
        render(<Button variant="destructive">Delete</Button>);
        const button = screen.getByRole("button", { name: /delete/i });
        expect(button).toHaveClass("bg-destructive");
    });

    it("handles click events", () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click me</Button>);
        const button = screen.getByRole("button", { name: /click me/i });
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("renders as a child component when asChild is true", () => {
        render(
            <Button asChild>
                <a href="/test">Link Button</a>
            </Button>
        );
        const link = screen.getByRole("link", { name: /link button/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "/test");
    });

    it("is disabled when disabled prop is passed", () => {
        render(<Button disabled>Disabled</Button>);
        const button = screen.getByRole("button", { name: /disabled/i });
        expect(button).toBeDisabled();
    });
});
