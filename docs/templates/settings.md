# Settings Template

A comprehensive settings page layout with sidebar navigation and forms.

<script setup>
import { SettingsLayout, ProfileForm, NotificationsForm, AccountForm } from '../../src/components/templates/SettingsLayout.tsx'
import { useState } from 'react'


const navItems = [
  { title: "Profile", href: "#profile" },
  { title: "Notifications", href: "#notifications" },
  { title: "Account", href: "#account" },
]
</script>

## Layout with Profile Form

<ComponentPreview :component="SettingsLayout">
  <div className="border rounded-md">
       <SettingsLayout sidebarNavItems={navItems}>
            <ProfileForm />
       </SettingsLayout>
  </div>
</ComponentPreview>

## Notifications Section

<ComponentPreview :component="NotificationsForm">
     <div className="p-6 border rounded-md">
        <NotificationsForm />
    </div>
</ComponentPreview>


## Installation

```bash
npx super-ui-cli add SettingsLayout
```

## Usage

```tsx
import { SettingsLayout, ProfileForm } from '@/components/templates/SettingsLayout'

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/examples/dashboard",
  },
  {
    title: "Account",
    href: "/examples/dashboard/account",
  },
  {
    title: "Appearance",
    href: "/examples/dashboard/appearance",
  },
  {
    title: "Notifications",
    href: "/examples/dashboard/notifications",
  },
]

export default function SettingsPage() {
  return (
    <SettingsLayout sidebarNavItems={sidebarNavItems}>
        <ProfileForm />
    </SettingsLayout>
  )
}
```
