# Theming

Customize Super UI to match your brand.

## Theme Customizer

Super UI includes a built-in theme customizer that allows you to change:
- Primary color
- Border radius
- Dark/Light mode

## Usage

The theme customizer is available in the development environment.

## Custom Colors

Edit your Tailwind configuration to use custom colors:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1faaa0',
          // ... more shades
        }
      }
    }
  }
}
```

## Dark Mode

Super UI automatically supports dark mode based on system preferences.

Toggle manually:

```tsx
import { useTheme } from '@/components/theme-provider'

function ThemeToggle() {
  const { setTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme('dark')}>
      Dark Mode
    </button>
  )
}
```

## More Details

Coming soon...
