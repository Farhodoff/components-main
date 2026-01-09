# Components Overview

Explore our comprehensive collection of 50+ production-ready React components.

## Categories

### Form Components

Essential form elements for user input.

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <a href="/components/button" class="component-card">
    <strong>Button</strong>
    <p>Clickable button with variants</p>
  </a>
  <a href="/components/input" class="component-card">
    <strong>Input</strong>
    <p>Text input with validation</p>
  </a>
  <a href="/components/checkbox" class="component-card">
    <strong>Checkbox</strong>
    <p>Checkbox selection control</p>
  </a>
  <a href="/components/select" class="component-card">
    <strong>Select</strong>
    <p>Dropdown selection menu</p>
  </a>
</div>

### Data Display

Components for displaying information.

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <a href="/components/card" class="component-card">
    <strong>Card</strong>
    <p>Container for content</p>
  </a>
  <a href="/components/badge" class="component-card">
    <strong>Badge</strong>
    <p>Small status indicator</p>
  </a>
  <a href="/components/alert" class="component-card">
    <strong>Alert</strong>
    <p>Contextual feedback messages</p>
  </a>
  <a href="/components/table" class="component-card">
    <strong>Table</strong>
    <p>Data table with sorting</p>
  </a>
</div>

### Feedback

User feedback and notifications.

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <a href="/components/dialog" class="component-card">
    <strong>Dialog</strong>
    <p>Modal dialog window</p>
  </a>
  <a href="/components/toast" class="component-card">
    <strong>Toast</strong>
    <p>Brief notification message</p>
  </a>
  <a href="/components/progress" class="component-card">
    <strong>Progress</strong>
    <p>Progress indicator</p>
  </a>
</div>

## All Components

| Component | Description | Category |
|-----------|-------------|----------|
| [Button](/components/button) | Clickable button with multiple variants | Form |
| [Input](/components/input) | Text input field with validation | Form |
| [Checkbox](/components/checkbox) | Checkbox selection control | Form |
| [Select](/components/select) | Dropdown selection menu | Form |
| [Card](/components/card) | Container for content grouping | Data Display |
| [Badge](/components/badge) | Small status or label indicator | Data Display |
| [Alert](/components/alert) | Contextual feedback messages | Feedback |
| [Dialog](/components/dialog) | Modal dialog window | Feedback |

<style scoped>
.component-card {
  display: block;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s;
}

.component-card:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.component-card strong {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.component-card p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
</style>
