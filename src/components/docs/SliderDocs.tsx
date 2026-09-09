import React, { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Volume2, VolumeX, Sun, DollarSign } from "lucide-react";

const sliderProps = [
  {
    name: "value",
    type: "number[]",
    description: "The controlled value of the slider.",
  },
  {
    name: "defaultValue",
    type: "number[]",
    default: "[0]",
    description: "The value of the slider when initially rendered (uncontrolled).",
  },
  {
    name: "onValueChange",
    type: "(value: number[]) => void",
    description: "Event handler called when the value of the slider changes.",
  },
  {
    name: "min",
    type: "number",
    default: "0",
    description: "The minimum value for the range.",
  },
  {
    name: "max",
    type: "number",
    default: "100",
    description: "The maximum value for the range.",
  },
  {
    name: "step",
    type: "number",
    default: "1",
    description: "The stepping interval for incrementing or decrementing.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "When true, prevents user interaction with the slider.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for custom styling.",
  },
];

const importCode = `import { Slider } from "@farhod_dev/super-ui";
import { Label } from "@farhod_dev/super-ui";`;

const basicUsageCode = `<div className="space-y-2">
  <Label>Volume: 50%</Label>
  <Slider defaultValue={[50]} max={100} step={1} />
</div>`;

export const SliderDocs: React.FC = () => {
  const [volume, setVolume] = useState([65]);
  const [priceRange, setPriceRange] = useState([250]);
  const [brightness, setBrightness] = useState([80]);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <LibraryBadge variant="outline">Form Controls</LibraryBadge>
          <LibraryBadge variant="secondary">Radix UI</LibraryBadge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Slider</h1>
        <p className="text-lg text-muted-foreground">
          An interactive input where the user selects a value from a given range along a horizontal track.
        </p>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Examples</h2>

        {/* 1. Audio Volume Control */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Audio Volume with Dynamic Icons</h3>
          <div className="max-w-md space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="vol-slider" className="text-sm font-medium flex items-center gap-2">
                {volume[0] === 0 ? (
                  <VolumeX className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Volume2 className="h-4 w-4 text-primary" />
                )}
                Master Volume
              </Label>
              <span className="text-sm font-semibold tabular-nums">{volume[0]}%</span>
            </div>
            <Slider
              id="vol-slider"
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
            />
          </div>
        </div>

        {/* 2. Stepped Price Filter */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Stepped Price Filter ($25 steps)</h3>
          <Card className="max-w-md">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-1.5">
                  <DollarSign className="h-4 w-4 text-primary" />
                  Budget Threshold
                </CardTitle>
                <LibraryBadge variant="secondary" className="tabular-nums">
                  Up to ${priceRange[0]}
                </LibraryBadge>
              </div>
              <CardDescription>
                Filter items matching your spending limits.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                min={50}
                max={1000}
                step={25}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>$50 (Min)</span>
                <span>$500</span>
                <span>$1,000 (Max)</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 3. Display Brightness & Disabled State */}
        <div className="rounded-lg border border-border p-6 space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Display Brightness & Disabled State</h3>
          <div className="max-w-md space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="bright-slider" className="text-sm font-medium flex items-center gap-2">
                  <Sun className="h-4 w-4 text-amber-500" />
                  Panel Luminosity
                </Label>
                <span className="text-sm font-semibold tabular-nums">{brightness[0]} nits</span>
              </div>
              <Slider
                id="bright-slider"
                value={brightness}
                onValueChange={setBrightness}
                min={10}
                max={100}
                step={5}
              />
            </div>

            <div className="space-y-2 opacity-60">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Hardware Contrast (Locked)</span>
                <LibraryBadge variant="outline" className="text-[10px]">Disabled</LibraryBadge>
              </div>
              <Slider defaultValue={[50]} disabled />
            </div>
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
          <h3 className="text-lg font-medium mb-3">Slider Props</h3>
          <APIReferenceTable props={sliderProps} />
        </div>
      </div>
    </div>
  );
};
