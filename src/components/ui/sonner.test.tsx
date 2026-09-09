import { render, screen, fireEvent } from "@testing-library/react";
import { Toaster, toast } from "./sonner";
import { describe, it, expect } from "vitest";
import React from "react";

describe("Sonner Toast", () => {
  it("renders toaster container without crashing", () => {
    const { container } = render(<Toaster />);
    expect(container).toBeInTheDocument();
  });

  it("can trigger toast notification", async () => {
    render(
      <div>
        <Toaster />
        <button
          type="button"
          onClick={() => toast("Test Toast Notification")}
        >
          Show Toast
        </button>
      </div>
    );

    const button = screen.getByRole("button", { name: /show toast/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    const notification = await screen.findByText("Test Toast Notification");
    expect(notification).toBeInTheDocument();
  });
});
