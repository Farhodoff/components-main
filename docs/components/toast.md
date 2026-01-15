# Toast

<script setup>
import { Button } from '../../../src/components/ui/button.tsx'
import { Toaster } from '../../../src/components/ui/toaster.tsx'
import { useToast } from '../../../src/components/ui/use-toast.tsx'
</script>

<ComponentPreview :component="Toaster">
  <div className="flex flex-col gap-2">
      <Button>
        Show Toast (See Code)
      </Button>
      <Toaster />
  </div>
</ComponentPreview>

Notification messages displayed temporarily.

## Usage

```tsx
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"

export function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
```

## API Reference
