# Select

<script setup>
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../src/components/ui/select.tsx'
</script>

<ComponentPreview :component="Select">
  <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Theme" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
      <SelectItem value="system">System</SelectItem>
    </SelectContent>
  </Select>
</ComponentPreview>

Dropdown selection menu.

## Usage

```tsx
import { Select } from '@/components/ui/select'

<Select>
  <option>Option 1</option>
  <option>Option 2</option>
</Select>
```

## API Reference

### Select Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.

## API Reference

### Select Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.

## API Reference

### Select Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.

## API Reference

### Select Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.
