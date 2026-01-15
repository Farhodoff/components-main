# Tooltip

<script setup>
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../src/components/ui/tooltip.tsx"
import { Button } from "../../../src/components/ui/button.tsx"
</script>

<ComponentPreview :component="Tooltip">
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</ComponentPreview>

A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.

## Usage

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
```

## API Reference
