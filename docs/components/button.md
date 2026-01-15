# Button

<script setup>
import { Button } from '../../src/components/ui/button.tsx'
</script>

A versatile button component with multiple variants and sizes.

## Usage

<ComponentPreview :component="Button">
  <Button>Click me</Button>
</ComponentPreview>

```tsx
import { Button } from '@farhod_dev/super-ui'

function App() {
  return <Button>Click me</Button>
}
```

## Variants

### Default

```tsx
<Button>Default Button</Button>
```

### Secondary

```tsx
<Button variant="secondary">Secondary Button</Button>
```

### Destructive

```tsx
<Button variant="destructive">Delete</Button>
```

### Outline

```tsx
<Button variant="outline">Outline Button</Button>
```

### Ghost

```tsx
<Button variant="ghost">Ghost Button</Button>
```

### Link

```tsx
<Button variant="link">Link Button</Button>
```

## Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔍</Button>
```

## Disabled State

```tsx
<Button disabled>Disabled Button</Button>
```

## With Icon

```tsx
import { Mail } from 'lucide-react'

<Button>
  <Mail className="mr-2 h-4 w-4" />
  Send Email
</Button>
```

## As Child (Polymorphic)

```tsx
<Button asChild>
  <a href="/dashboard">Go to Dashboard</a>
</Button>
```

## API Reference

### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `asChild` | `boolean \| undefined` | - | - |

## Accessibility

- Uses semantic `<button>` element
- Keyboard accessible (Enter, Space)
- Proper focus management
- ARIA attributes when needed
- Disabled state properly announced

## Examples

### Loading Button

```tsx
import { Loader2 } from 'lucide-react'

function LoadingButton() {
  const [loading, setLoading] = useState(false)
  
  return (
    <Button disabled={loading}>
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {loading ? 'Processing...' : 'Submit'}
    </Button>
  )
}
```

### Button Group

```tsx
<div className="flex gap-2">
  <Button variant="outline">Cancel</Button>
  <Button>Confirm</Button>
</div>
```

## Best Practices

- ✅ Use meaningful button text
- ✅ Provide visual feedback on interaction
- ✅ Use appropriate variants for context
- ❌ Don't overuse primary buttons
- ❌ Avoid disabled buttons without explanation

## Related Components

- Input - For text input fields
- Select - For selection controls

## API Reference

### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `asChild` | `boolean \| undefined` | - | - |


## API Reference

### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `asChild` | `boolean \| undefined` | - | - |


## API Reference

### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `asChild` | `boolean \| undefined` | - | - |


## API Reference

### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `asChild` | `boolean \| undefined` | - | - |


## API Reference

### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `asChild` | `boolean \| undefined` | - | - |

