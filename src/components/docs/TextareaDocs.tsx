import React, { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Send, MessageSquare } from "lucide-react";

const textareaProps = [
  {
    name: "value",
    type: "string",
    description: "The controlled value of the textarea.",
  },
  {
    name: "defaultValue",
    type: "string",
    description: "The default value when initially rendered (uncontrolled).",
  },
  {
    name: "onChange",
    type: "(event: React.ChangeEvent<HTMLTextAreaElement>) => void",
    description: "Event handler called when the text content changes.",
  },
  {
    name: "placeholder",
    type: "string",
    description: "Brief hint that describes the expected value of the field.",
  },
  {
    name: "rows",
    type: "number",
    default: "3",
    description: "The visible number of lines in a text area.",
  },
  {
    name: "maxLength",
    type: "number",
    description: "The maximum number of characters that the user can enter.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "When true, prevents the user from typing or interacting.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for custom sizing and styling.",
  },
];

const importCode = `import { Textarea } from "@farhod_dev/super-ui";
import { Label } from "@farhod_dev/super-ui";`;

const basicUsageCode = `<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea placeholder="Type your message here." id="message" />
</div>`;

export const TextareaDocs: React.FC = () => {
  const [bioText, setBioText] = useState("Frontend architect passionate about accessibility and sleek micro-interactions.");
  const maxBioLength = 200;

  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) {
      toast.error("Please enter a message before sending.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFeedback("");
      toast.success("Thank you! Your feedback has been sent.");
    }, 600);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <LibraryBadge variant="outline">Form Controls</LibraryBadge>
          <LibraryBadge variant="secondary">HTML5 Standard</LibraryBadge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Textarea</h1>
        <p className="text-lg text-muted-foreground">
          Displays a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text.
        </p>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Examples</h2>

        {/* 1. Basic Textarea with Label */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Standard Multi-line Field</h3>
          <div className="max-w-md space-y-2">
            <Label htmlFor="basic-msg">Message</Label>
            <Textarea
              id="basic-msg"
              placeholder="Tell us what's on your mind..."
              rows={3}
            />
            <p className="text-xs text-muted-foreground">
              Your message will be transmitted securely over encrypted channels.
            </p>
          </div>
        </div>

        {/* 2. Dynamic Character Counter */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Bio with Real-time Character Counter</h3>
          <div className="max-w-md space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="bio-input">Public Profile Bio</Label>
              <span
                className={`text-xs tabular-nums ${
                  bioText.length >= maxBioLength ? "text-destructive font-semibold" : "text-muted-foreground"
                }`}
              >
                {bioText.length} / {maxBioLength}
              </span>
            </div>
            <Textarea
              id="bio-input"
              value={bioText}
              maxLength={maxBioLength}
              onChange={(e) => setBioText(e.target.value)}
              rows={3}
              placeholder="Write a short summary about yourself..."
            />
          </div>
        </div>

        {/* 3. Feedback Form Scenario */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Support / Feedback Form</h3>
          <form onSubmit={handleFeedbackSubmit} className="max-w-md space-y-3">
            <div className="space-y-2">
              <Label htmlFor="support-feedback" className="flex items-center gap-1.5">
                <MessageSquare className="h-4 w-4 text-primary" />
                Issue Description
              </Label>
              <Textarea
                id="support-feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Describe any challenges or suggestions you have..."
                rows={4}
              />
            </div>
            <Button type="submit" size="sm" disabled={isSubmitting} className="gap-1.5">
              <Send className="h-3.5 w-3.5" />
              {isSubmitting ? "Sending..." : "Send Feedback"}
            </Button>
          </form>
        </div>

        {/* 4. Disabled State */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Disabled & ReadOnly States</h3>
          <div className="max-w-md space-y-2 opacity-60">
            <div className="flex items-center justify-between">
              <Label htmlFor="disabled-notes">Archived Audit Logs</Label>
              <LibraryBadge variant="outline" className="text-[10px]">Disabled</LibraryBadge>
            </div>
            <Textarea
              id="disabled-notes"
              disabled
              defaultValue="This document has been finalized and archived. Edits are no longer accepted."
              rows={2}
            />
          </div>
        </div>
      </div>

      {/* Installation & Import */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock code={importCode} language="tsx" />
      </div>

      {/* Usage Code */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Usage</h2>
        <CodeBlock code={basicUsageCode} language="tsx" />
      </div>

      {/* API Reference */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">API Reference</h2>
        <div>
          <h3 className="text-lg font-medium mb-3">Textarea Props</h3>
          <APIReferenceTable props={textareaProps} />
        </div>
      </div>
    </div>
  );
};
