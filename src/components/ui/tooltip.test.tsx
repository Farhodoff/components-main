import { render, screen } from "@testing-library/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { describe, it, expect } from "vitest";
import React from "react";

describe("Tooltip", () => {
  it("renders trigger element correctly", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button type="button">Hover Me</button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tooltip Information</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    const button = screen.getByRole("button", { name: /hover me/i });
    expect(button).toBeInTheDocument();
  });

  it("renders open tooltip content when open is true", () => {
    render(
      <TooltipProvider>
        <Tooltip open={true}>
          <TooltipTrigger asChild>
            <button type="button">Active Trigger</button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Active Tooltip Content</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent("Active Tooltip Content");
  });

  it("applies custom class name to TooltipContent", () => {
    render(
      <TooltipProvider>
        <Tooltip open={true}>
          <TooltipTrigger asChild>
            <button type="button">Trigger</button>
          </TooltipTrigger>
          <TooltipContent className="custom-tooltip-class">
            <p>Styled Tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    const tooltipElement = screen.getByRole("tooltip").closest(".custom-tooltip-class");
    expect(tooltipElement).toBeInTheDocument();
    expect(tooltipElement).toHaveClass("custom-tooltip-class");
  });
});
