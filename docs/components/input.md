# Input

<script setup>
import { Input } from '../../../src/components/ui/input.tsx'
</script>

<ComponentPreview :component="Input">
  <Input placeholder="Email" type="email" />
</ComponentPreview>

A text input field with validation support.

## Usage

```tsx
import { Input } from '@/components/ui/input'

function App() {
  return <Input placeholder="Enter text..." />
}
```

## Examples

### With Label

```tsx
<div>
  <label htmlFor="email">Email</label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>
```

### With State

```tsx
const [value, setValue] = useState('')

<Input 
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
import { Input } from '@farhod_dev/super-ui'

<Input placeholder="Email" type="email" />
```

## API Reference

### Input Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `"text"` | Input type |
| `placeholder` | `string` | - | Placeholder text |

## Accessibility

- Uses semantic `<input>` element
- Supports all ARIA attributes
- Keyboard accessible
- Works with form labels

## API Reference

### Input Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.

## API Reference

### Input Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.

## API Reference

### Input Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.

## API Reference

### Input Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.
