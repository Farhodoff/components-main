import { render, screen } from "@testing-library/react";
import { Input } from "./input";
import { describe, it, expect } from "vitest";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("Input", () => {
    it("renders correctly with default props", () => {
        render(<Input placeholder="Enter text" />);
        const input = screen.getByPlaceholderText("Enter text");
        expect(input).toBeInTheDocument();
        expect(input).toHaveClass("flex", "h-10", "w-full", "rounded-md");
    });

    it("accepts and displays user input", async () => {
        const user = userEvent.setup();
        render(<Input placeholder="Type here" />);
        const input = screen.getByPlaceholderText("Type here") as HTMLInputElement;

        await user.type(input, "Hello World");
        expect(input.value).toBe("Hello World");
    });

    it("supports different input types", () => {
        const { rerender } = render(<Input type="email" data-testid="email-input" />);
        expect(screen.getByTestId("email-input")).toHaveAttribute("type", "email");

        rerender(<Input type="password" data-testid="password-input" />);
        expect(screen.getByTestId("password-input")).toHaveAttribute("type", "password");

        rerender(<Input type="number" data-testid="number-input" />);
        expect(screen.getByTestId("number-input")).toHaveAttribute("type", "number");
    });

    it("handles disabled state correctly", () => {
        render(<Input disabled placeholder="Disabled input" />);
        const input = screen.getByPlaceholderText("Disabled input");
        expect(input).toBeDisabled();
        expect(input).toHaveClass("disabled:cursor-not-allowed", "disabled:opacity-50");
    });

    it("applies custom className", () => {
        render(<Input className="custom-class" data-testid="custom-input" />);
        const input = screen.getByTestId("custom-input");
        expect(input).toHaveClass("custom-class");
    });

    it("forwards ref correctly", () => {
        const ref = React.createRef<HTMLInputElement>();
        render(<Input ref={ref} />);
        expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
});
