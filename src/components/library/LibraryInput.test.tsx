import { render, screen, fireEvent } from "@testing-library/react";
import { LibraryInput } from "./LibraryInput";
import { describe, it, expect } from "vitest";
import React from "react";

describe("LibraryInput", () => {
    it("renders correctly with label and placeholder", () => {
        render(<LibraryInput label="Email" placeholder="Enter email" />);
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/enter email/i)).toBeInTheDocument();
    });

    it("links label and input via id", () => {
        render(<LibraryInput label="Username" id="user-input" />);
        const input = screen.getByLabelText(/username/i);
        expect(input).toHaveAttribute("id", "user-input");
    });

    it("shows error message and applies invalid state", () => {
        render(<LibraryInput label="Email" error="Invalid email" />);
        const input = screen.getByLabelText(/email/i);
        expect(input).toHaveAttribute("aria-invalid", "true");
        expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
    });

    it("toggles password visibility", () => {
        render(<LibraryInput label="Password" type="password" />);
        const input = screen.getByLabelText("Password", { selector: "input" });
        expect(input).toHaveAttribute("type", "password");

        const toggleButton = screen.getByRole("button", { name: /show password/i });
        fireEvent.click(toggleButton);

        expect(input).toHaveAttribute("type", "text");
        expect(screen.getByRole("button", { name: /hide password/i })).toBeInTheDocument();
    });
});
