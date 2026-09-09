import { render, screen } from "@testing-library/react";
import { Skeleton } from "./skeleton";
import { describe, it, expect } from "vitest";
import React from "react";

describe("Skeleton", () => {
  it("renders with base animate-pulse and rounded styling", () => {
    const { container } = render(<Skeleton data-testid="skeleton-element" />);
    const skeleton = screen.getByTestId("skeleton-element");

    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass("animate-pulse");
    expect(skeleton).toHaveClass("rounded-md");
    expect(skeleton).toHaveClass("bg-muted");
  });

  it("applies custom dimensions and class names", () => {
    render(<Skeleton data-testid="custom-skeleton" className="h-12 w-48 rounded-full" />);
    const skeleton = screen.getByTestId("custom-skeleton");

    expect(skeleton).toHaveClass("h-12");
    expect(skeleton).toHaveClass("w-48");
    expect(skeleton).toHaveClass("rounded-full");
  });

  it("passes through standard HTML attributes", () => {
    render(<Skeleton data-testid="aria-skeleton" aria-hidden="true" role="status" />);
    const skeleton = screen.getByTestId("aria-skeleton");

    expect(skeleton).toHaveAttribute("aria-hidden", "true");
    expect(skeleton).toHaveAttribute("role", "status");
  });
});
