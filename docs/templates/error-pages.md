# Error Pages

Ready-to-use 404 and 500 error pages.

<script setup>
import { NotFoundPage, ServerErrorPage } from '../../../src/components/templates/ErrorPages.tsx'
</script>

## 404 Not Found

<ComponentPreview :component="NotFoundPage">
  <div className="border rounded-md h-[400px] relative overflow-hidden">
       <NotFoundPage />
  </div>
</ComponentPreview>

## 500 Server Error

<ComponentPreview :component="ServerErrorPage">
  <div className="border rounded-md h-[400px] relative overflow-hidden">
       <ServerErrorPage />
  </div>
</ComponentPreview>


## Installation

```bash
npx super-ui-cli add ErrorPages
```

## Usage

```tsx
import { NotFoundPage, ServerErrorPage } from '@/components/templates/ErrorPages'

// In your router configuration
{
  path: "*",
  element: <NotFoundPage onGoHome={() => navigate('/')} />
}
```
