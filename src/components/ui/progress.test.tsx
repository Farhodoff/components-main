import { render, screen } from "@testing-library/react";
import { Progress } from "./progress";
import { describe, it, expect } from "vitest";
import React from "react";

describe("Progress", () => {
  it("renders progress root element without crashing", () => {
    const { container } = render(<Progress value={50} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("applies custom class name to progress container", () => {
    const { container } = render(<Progress value={40} className="custom-progress h-6" />);
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass("custom-progress");
    expect(root).toHaveClass("h-6");
  });

  it("renders indicator with correct transform style", () => {
    const { container } = render(<Progress value={70} />);
    const indicator = container.querySelector("[class*='bg-primary']") as HTMLElement;
    expect(indicator).toBeInTheDocument();
    expect(indicator.style.transform).toBe("translateX(-30%)");
  });

  it("handles empty or zero value correctly", () => {
    const { container } = render(<Progress value={0} />);
    const indicator = container.querySelector("[class*='bg-primary']") as HTMLElement;
    expect(indicator.style.transform).toBe("translateX(-100%)");
  });
});
