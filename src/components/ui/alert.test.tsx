import { render, screen } from "@testing-library/react";
import { Alert, AlertTitle, AlertDescription } from "./alert";
import { describe, it, expect } from "vitest";

describe("Alert", () => {
    it("renders Alert with default variant", () => {
        render(<Alert data-testid="alert">Alert content</Alert>);
        const alert = screen.getByTestId("alert");
        expect(alert).toBeInTheDocument();
        expect(alert).toHaveAttribute("role", "alert");
        expect(alert).toHaveClass("bg-background", "text-foreground");
    });

    it("renders Alert with destructive variant", () => {
        render(<Alert variant="destructive" data-testid="destructive-alert">Error</Alert>);
        const alert = screen.getByTestId("destructive-alert");
        expect(alert).toBeInTheDocument();
        expect(alert).toHaveClass("border-destructive/50", "text-destructive");
    });

    it("renders AlertTitle correctly", () => {
        render(<AlertTitle>Alert Title</AlertTitle>);
        const title = screen.getByText("Alert Title");
        expect(title).toBeInTheDocument();
        expect(title.tagName).toBe("H5");
        expect(title).toHaveClass("mb-1", "font-medium", "leading-none");
    });

    it("renders AlertDescription correctly", () => {
        render(<AlertDescription>Alert description text</AlertDescription>);
        const description = screen.getByText("Alert description text");
        expect(description).toBeInTheDocument();
        expect(description).toHaveClass("text-sm");
    });

    it("renders complete Alert composition", () => {
        render(
            <Alert data-testid="complete-alert">
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>This is a warning message</AlertDescription>
            </Alert>
        );

        expect(screen.getByTestId("complete-alert")).toBeInTheDocument();
        expect(screen.getByText("Warning")).toBeInTheDocument();
        expect(screen.getByText("This is a warning message")).toBeInTheDocument();
    });

    it("applies custom className to Alert", () => {
        render(<Alert className="custom-alert" data-testid="custom-alert">Custom</Alert>);
        const alert = screen.getByTestId("custom-alert");
        expect(alert).toHaveClass("custom-alert");
    });

    it("has correct base styling classes", () => {
        render(<Alert data-testid="styled-alert">Styled</Alert>);
        const alert = screen.getByTestId("styled-alert");
        expect(alert).toHaveClass(
            "relative",
            "w-full",
            "rounded-lg",
            "border",
            "p-4"
        );
    });

    it("AlertDescription renders as div element", () => {
        render(<AlertDescription data-testid="description-element">Description</AlertDescription>);
        const description = screen.getByTestId("description-element");
        expect(description.tagName).toBe("DIV");
    });
});
