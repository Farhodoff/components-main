# Card

A container component for grouping related content.

## Usage

```tsx
import { Card } from '@/components/ui/card'

<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

## With Sub-components

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main card content</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

## Examples

See [Button documentation](/components/button) for more examples.
