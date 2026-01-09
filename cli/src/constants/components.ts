import type { ComponentRegistry } from '../types'

export const COMPONENTS: ComponentRegistry = {
    // Form Components
    button: {
        name: 'Button',
        category: 'form',
        dependencies: ['class-variance-authority', 'clsx', 'tailwind-merge'],
        files: ['button.tsx'],
        description: 'Clickable button with multiple variants and sizes',
        tags: ['form', 'interactive', 'button'],
    },
    input: {
        name: 'Input',
        category: 'form',
        dependencies: [],
        files: ['input.tsx'],
        description: 'Text input field with validation support',
        tags: ['form', 'input', 'text'],
    },
    checkbox: {
        name: 'Checkbox',
        category: 'form',
        dependencies: ['@radix-ui/react-checkbox'],
        files: ['checkbox.tsx'],
        description: 'Checkbox selection control',
        tags: ['form', 'checkbox', 'selection'],
    },
    select: {
        name: 'Select',
        category: 'form',
        dependencies: ['@radix-ui/react-select'],
        files: ['select.tsx'],
        description: 'Dropdown selection menu',
        tags: ['form', 'select', 'dropdown'],
    },

    // Data Display
    card: {
        name: 'Card',
        category: 'data-display',
        dependencies: [],
        files: ['card.tsx'],
        description: 'Container for grouping related content',
        tags: ['layout', 'card', 'container'],
    },
    badge: {
        name: 'Badge',
        category: 'data-display',
        dependencies: ['class-variance-authority'],
        files: ['badge.tsx'],
        description: 'Small status or label indicator',
        tags: ['badge', 'label', 'status'],
    },
    alert: {
        name: 'Alert',
        category: 'feedback',
        dependencies: ['class-variance-authority'],
        files: ['alert.tsx'],
        description: 'Contextual feedback messages',
        tags: ['alert', 'feedback', 'notification'],
    },
    table: {
        name: 'Table',
        category: 'data-display',
        dependencies: [],
        files: ['table.tsx'],
        description: 'Data table with proper formatting',
        tags: ['table', 'data', 'grid'],
    },

    // Feedback
    dialog: {
        name: 'Dialog',
        category: 'feedback',
        dependencies: ['@radix-ui/react-dialog'],
        files: ['dialog.tsx'],
        description: 'Modal dialog window',
        tags: ['dialog', 'modal', 'overlay'],
    },
    toast: {
        name: 'Toast',
        category: 'feedback',
        dependencies: ['@radix-ui/react-toast'],
        files: ['toast.tsx', 'toaster.tsx', 'use-toast.ts'],
        description: 'Brief notification message',
        tags: ['toast', 'notification', 'alert'],
    },

    // Add more components as needed...
}

export const CATEGORIES = {
    form: 'Form Controls',
    'data-display': 'Data Display',
    feedback: 'Feedback',
    layout: 'Layout',
    navigation: 'Navigation',
    overlay: 'Overlay',
    media: 'Media',
}
