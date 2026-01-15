# Card

<script setup>
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../../src/components/ui/card'
import { Button } from '../../../src/components/ui/button'
import { Input } from '../../../src/components/ui/input'
import { Label } from '../../../src/components/ui/label'
</script>

<ComponentPreview :component="Card">
  <Card className="w-[350px]">
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Name of your project" />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline">Cancel</Button>
      <Button>Deploy</Button>
    </CardFooter>
  </Card>
</ComponentPreview>

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

## API Reference

### Card Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.

## API Reference

### Card Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.

## API Reference

### Card Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.
