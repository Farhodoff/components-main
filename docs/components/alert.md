# Alert

<script setup>
import { Alert, AlertTitle, AlertDescription } from '../../../src/components/ui/alert.tsx'
import { Terminal } from 'lucide-react'
</script>

<ComponentPreview :component="Alert">
  <Alert>
    <Terminal className="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      You can add components to your app using the cli.
    </AlertDescription>
  </Alert>
</ComponentPreview>

 Contextual feedback messages for different scenarios.

## Usage

```tsx
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the CLI.
  </AlertDescription>
</Alert>
```

## Variants

```tsx
<Alert variant="default">
  <AlertTitle>Default</AlertTitle>
  <AlertDescription>This is a default alert.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>
```

## API Reference

### Alert Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.

## API Reference

### Alert Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.

## API Reference

### Alert Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.

## API Reference

### Alert Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.
