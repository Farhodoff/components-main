import { render, screen } from "@testing-library/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { describe, it, expect } from "vitest";
import React from "react";

describe("Avatar", () => {
  it("renders root avatar with fallback", () => {
    render(
      <Avatar>
        <AvatarFallback>FD</AvatarFallback>
      </Avatar>
    );

    const fallback = screen.getByText("FD");
    expect(fallback).toBeInTheDocument();
  });

  it("applies custom class name to avatar root", () => {
    const { container } = render(
      <Avatar className="custom-avatar-class h-16 w-16">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    );

    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass("custom-avatar-class");
    expect(root).toHaveClass("h-16");
    expect(root).toHaveClass("w-16");
  });

  it("renders fallback with custom styling", () => {
    render(
      <Avatar>
        <AvatarFallback className="bg-emerald-500 text-white">
          OK
        </AvatarFallback>
      </Avatar>
    );

    const fallback = screen.getByText("OK");
    expect(fallback).toHaveClass("bg-emerald-500");
    expect(fallback).toHaveClass("text-white");
  });

  it("renders avatar image component", () => {
    render(
      <Avatar>
        <AvatarImage src="https://example.com/avatar.jpg" alt="User profile" />
        <AvatarFallback>UP</AvatarFallback>
      </Avatar>
    );

    // In jsdom without network image load, fallback or image tag is rendered
    expect(screen.getByText("UP")).toBeInTheDocument();
  });
});
