# Theming

Customize Super UI to match your brand identity.

## CSS Variables

Super UI is built using CSS variables for customization. This allows you to easily change the look and feel of your application by overriding these variables in your global CSS.

### List of Variables

Here are the default CSS variables used in the library. You can override them in your `globals.css` or `index.css`.

```css
:root {
  /* Base Colors */
  --background: 220 20% 97%;
  --foreground: 220 20% 10%;

  /* Component Colors */
  --card: 0 0% 100%;
  --card-foreground: 220 20% 10%;
  --popover: 0 0% 100%;
  --popover-foreground: 220 20% 10%;

  /* Brand Colors */
  --primary: 174 72% 40%;
  --primary-foreground: 0 0% 100%;
  --secondary: 220 14% 90%;
  --secondary-foreground: 220 20% 20%;
  --accent: 262 83% 58%;
  --accent-foreground: 0 0% 100%;

  /* State Colors */
  --muted: 220 14% 92%;
  --muted-foreground: 220 10% 45%;
  --destructive: 0 72% 51%;
  --destructive-foreground: 0 0% 100%;
  --success: 142 72% 40%;
  --success-foreground: 0 0% 100%;
  --warning: 38 92% 50%;
  --warning-foreground: 0 0% 10%;

  /* Borders & Inputs */
  --border: 220 14% 88%;
  --input: 220 14% 88%;
  --ring: 174 72% 40%;

  /* Border Radius */
  --radius: 0.625rem;
}

.dark {
  /* Dark Mode Overrides */
  --background: 220 25% 8%;
  --foreground: 220 10% 94%;
  /* ... overrides for other variables */
}
```

### Overriding Styles

To customize the theme, simply define these variables in your own CSS file. For example, to change the primary color to Blue and increase the border radius:

```css
@layer base {
  :root {
    --primary: 221 83% 53%; /* Blue */
    --primary-foreground: 210 40% 98%;
    --radius: 1rem; /* More rounded */
  }
}
```

## Colors

Super UI uses HSL (Hue, Saturation, Lightness) color values for better control and theming support.

| Variable | Description |
| :--- | :--- |
| `--background` | Background color of the page |
| `--foreground` | Default text color |
| `--primary` | Primary brand color (buttons, active states) |
| `--secondary` | Secondary color (muted buttons, backgrounds) |
| `--accent` | Accent color for highlighting elements |
| `--muted` | Muted background color (disabled states, subtle bgs) |
| `--border` | Default border color |

## Border Radius

You can easily change the global border radius for all components.

| Variable | Description |
| :--- | :--- |
| `--radius` | Base border radius (default: `0.625rem`) |

```css
:root {
  --radius: 0rem; /* Square */
  --radius: 0.5rem; /* Standard */
  --radius: 1.5rem; /* High rounded */
}
```

## Dark Mode

Super UI automates dark mode using the `.dark` class. Ensure your `tailwind.config.js` is set up to handle dark mode via class.

```js
// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  // ...
}
```

When you toggle the theme, the `.dark` class is added to the `<html>` element, activating the dark mode variable overrides.
