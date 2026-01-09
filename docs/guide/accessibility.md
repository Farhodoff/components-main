# Accessibility

Super UI components are built with accessibility in mind.

## WCAG 2.1 AA Compliance

All components follow WCAG 2.1 Level AA guidelines.

## Features

### Keyboard Navigation
- ✅ All interactive elements are keyboard accessible
- ✅ Proper focus management
- ✅ Tab order follows visual order

### Screen Readers
- ✅ Proper ARIA attributes
- ✅ Semantic HTML elements
- ✅ Alt text for images

### Color Contrast
- ✅ Minimum 4.5:1 contrast ratio for text
- ✅ 3:1 for UI components

## Testing

We use:
- axe-core for automated testing
- Manual keyboard testing
- Screen reader testing (NVDA, VoiceOver)

## Best Practices

### Use Semantic HTML

```tsx
// ✅ Good
<button onClick={handleClick}>Click me</button>

// ❌ Bad
<div onClick={handleClick}>Click me</div>
```

### Provide Labels

```tsx
// ✅ Good
<label htmlFor="email">Email</label>
<Input id="email" type="email" />

// ❌ Bad
<Input type="email" placeholder="Email" />
```

### Focus Indicators

All components have visible focus indicators by default.

## More Information

- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Radix UI Accessibility](https://www.radix-ui.com/primitives/docs/overview/accessibility)
