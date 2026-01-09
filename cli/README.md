# @farhod_dev/super-ui-cli

CLI tool for Super UI component library - add components to your project in seconds!

## Installation

You don't need to install globally. Use with `npx`:

```bash
npx @farhod_dev/super-ui add button
```

Or install globally:

```bash
npm install -g @farhod_dev/super-ui-cli
super-ui add button
```

## Commands

### `list` - List Components

View all available components:

```bash
npx super-ui list
```

With categories:

```bash
npx super-ui list --categories
```

### `add` - Add Components

Add one or more components to your project:

```bash
# Single component
npx super-ui add button

# Multiple components
npx super-ui add button input card

# All components
npx super-ui add --all

# Custom path
npx super-ui add button --path src/ui

# Overwrite existing
npx super-ui add button --overwrite
```

### `init` - Initialize Project

Set up Super UI in your project:

```bash
npx super-ui init
```

Interactive setup for:
- Package manager selection (npm/pnpm/yarn)
- TypeScript configuration
- Tailwind CSS setup
- Component directory

skip prompts with `--yes`:

```bash
npx super-ui init --yes
```

## What It Does

The CLI:

1. **Copies** component files to your project
2. **Installs** required dependencies automatically
3. **Detects** your package manager (npm/pnpm/yarn)
4. **Shows** usage examples

## Example

```bash
$ npx super-ui add button

✓ Copying button.tsx
✓ Installing dependencies (class-variance-authority, clsx)
✓ Component ready!

Usage:
  import { Button } from '@/components/ui/button'

  <Button>Click me</Button>

Done in 3.2s
```

## Available Components

- **Form:** button, input, checkbox, select
- **Data Display:** card, badge, alert, table
- **Feedback:** dialog, toast
- Many more...

Run `npx super-ui list` to see all 10 components.

## Requirements

- Node.js 18+
- React 18+
- Tailwind CSS

## Development

```bash
# Clone repo
git clone https://github.com/YOUR_USERNAME/components-main.git
cd components-main/cli

# Install dependencies
pnpm install

# Build
pnpm build

# Test locally
node dist/index.js list
```

## License

MIT © Farhod Soyilov
