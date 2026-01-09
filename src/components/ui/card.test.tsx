import { render, screen } from "@testing-library/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { describe, it, expect } from "vitest";

describe("Card", () => {
    it("renders Card component correctly", () => {
        render(<Card data-testid="card">Card content</Card>);
        const card = screen.getByTestId("card");
        expect(card).toBeInTheDocument();
        expect(card).toHaveClass("rounded-lg", "border", "bg-card");
    });

    it("renders CardHeader correctly", () => {
        render(<CardHeader data-testid="card-header">Header content</CardHeader>);
        const header = screen.getByTestId("card-header");
        expect(header).toBeInTheDocument();
        expect(header).toHaveClass("flex", "flex-col", "p-6");
    });

    it("renders CardTitle correctly", () => {
        render(<CardTitle>Card Title</CardTitle>);
        const title = screen.getByText("Card Title");
        expect(title).toBeInTheDocument();
        expect(title.tagName).toBe("H3");
        expect(title).toHaveClass("text-2xl", "font-semibold");
    });

    it("renders CardDescription correctly", () => {
        render(<CardDescription>Card description text</CardDescription>);
        const description = screen.getByText("Card description text");
        expect(description).toBeInTheDocument();
        expect(description.tagName).toBe("P");
        expect(description).toHaveClass("text-sm", "text-muted-foreground");
    });

    it("renders CardContent correctly", () => {
        render(<CardContent data-testid="card-content">Content here</CardContent>);
        const content = screen.getByTestId("card-content");
        expect(content).toBeInTheDocument();
        expect(content).toHaveClass("p-6", "pt-0");
    });

    it("renders CardFooter correctly", () => {
        render(<CardFooter data-testid="card-footer">Footer content</CardFooter>);
        const footer = screen.getByTestId("card-footer");
        expect(footer).toBeInTheDocument();
        expect(footer).toHaveClass("flex", "items-center", "p-6");
    });

    it("renders complete Card composition", () => {
        render(
            <Card data-testid="complete-card">
                <CardHeader>
                    <CardTitle>Test Title</CardTitle>
                    <CardDescription>Test Description</CardDescription>
                </CardHeader>
                <CardContent>Test Content</CardContent>
                <CardFooter>Test Footer</CardFooter>
            </Card>
        );

        expect(screen.getByTestId("complete-card")).toBeInTheDocument();
        expect(screen.getByText("Test Title")).toBeInTheDocument();
        expect(screen.getByText("Test Description")).toBeInTheDocument();
        expect(screen.getByText("Test Content")).toBeInTheDocument();
        expect(screen.getByText("Test Footer")).toBeInTheDocument();
    });

    it("applies custom className to Card", () => {
        render(<Card className="custom-card-class" data-testid="custom-card">Content</Card>);
        const card = screen.getByTestId("custom-card");
        expect(card).toHaveClass("custom-card-class");
    });
});
