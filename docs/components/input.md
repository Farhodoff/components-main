# Input

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
```

### Different Types

```tsx
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input type="number" placeholder="Age" />
<Input type="search" placeholder="Search..." />
```

### Disabled

```tsx
<Input disabled placeholder="Disabled input" />
```

## Props

Extends all native HTML `<input>` attributes.

## Accessibility

- Uses semantic `<input>` element
- Supports all ARIA attributes
- Keyboard accessible
- Works with form labels
