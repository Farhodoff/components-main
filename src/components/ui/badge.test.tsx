import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";
import { describe, it, expect } from "vitest";

describe("Badge", () => {
    it("renders correctly with default variant", () => {
        render(<Badge>Default Badge</Badge>);
        const badge = screen.getByText("Default Badge");
        expect(badge).toBeInTheDocument();
        expect(badge).toHaveClass("bg-primary", "text-primary-foreground");
    });

    it("renders with secondary variant", () => {
        render(<Badge variant="secondary">Secondary Badge</Badge>);
        const badge = screen.getByText("Secondary Badge");
        expect(badge).toBeInTheDocument();
        expect(badge).toHaveClass("bg-secondary", "text-secondary-foreground");
    });

    it("renders with destructive variant", () => {
        render(<Badge variant="destructive">Destructive Badge</Badge>);
        const badge = screen.getByText("Destructive Badge");
        expect(badge).toBeInTheDocument();
        expect(badge).toHaveClass("bg-destructive", "text-destructive-foreground");
    });

    it("renders with outline variant", () => {
        render(<Badge variant="outline">Outline Badge</Badge>);
        const badge = screen.getByText("Outline Badge");
        expect(badge).toBeInTheDocument();
        expect(badge).toHaveClass("text-foreground");
    });

    it("displays text content correctly", () => {
        render(<Badge>Test Content</Badge>);
        expect(screen.getByText("Test Content")).toBeInTheDocument();
    });

    it("applies custom className", () => {
        render(<Badge className="custom-badge" data-testid="custom-badge">Custom</Badge>);
        const badge = screen.getByTestId("custom-badge");
        expect(badge).toHaveClass("custom-badge");
    });

    it("has correct base styling classes", () => {
        render(<Badge data-testid="styled-badge">Styled</Badge>);
        const badge = screen.getByTestId("styled-badge");
        expect(badge).toHaveClass(
            "inline-flex",
            "items-center",
            "rounded-full",
            "border",
            "px-2.5",
            "py-0.5",
            "text-xs",
            "font-semibold"
        );
    });

    it("renders as a div element", () => {
        render(<Badge data-testid="badge-element">Badge</Badge>);
        const badge = screen.getByTestId("badge-element");
        expect(badge.tagName).toBe("DIV");
    });
});
