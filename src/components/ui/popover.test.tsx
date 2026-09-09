import { render, screen, fireEvent } from "@testing-library/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover";
import { describe, it, expect } from "vitest";
import React from "react";

describe("Popover", () => {
  it("renders trigger element correctly", () => {
    render(
      <Popover>
        <PopoverTrigger asChild>
          <button type="button">Open Menu</button>
        </PopoverTrigger>
        <PopoverContent>
          <p>Popover Details</p>
        </PopoverContent>
      </Popover>
    );

    const button = screen.getByRole("button", { name: /open menu/i });
    expect(button).toBeInTheDocument();
  });

  it("opens popover content on click", () => {
    render(
      <Popover>
        <PopoverTrigger asChild>
          <button type="button">Click Me</button>
        </PopoverTrigger>
        <PopoverContent>
          <p>Interactive Content</p>
        </PopoverContent>
      </Popover>
    );

    const trigger = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(trigger);

    expect(screen.getByText("Interactive Content")).toBeInTheDocument();
  });

  it("renders open content when open prop is true", () => {
    render(
      <Popover open={true}>
        <PopoverTrigger asChild>
          <button type="button">Controlled Trigger</button>
        </PopoverTrigger>
        <PopoverContent className="custom-popover-class">
          <p>Always Visible</p>
        </PopoverContent>
      </Popover>
    );

    const content = screen.getByText("Always Visible");
    expect(content).toBeInTheDocument();
    expect(content.closest(".custom-popover-class")).toBeInTheDocument();
  });
});
