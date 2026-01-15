# Landing Page Sections

Pre-built sections to quickly assemble a high-converting landing page.

<script setup>
import { HeroSection, FeaturesSection, PricingSection, Footer } from '../../src/components/templates/LandingSections.tsx'
</script>

## Hero Section

<ComponentPreview :component="HeroSection">
  <HeroSection />
</ComponentPreview>

## Features Section

<ComponentPreview :component="FeaturesSection">
  <FeaturesSection />
</ComponentPreview>

## Pricing Section

<ComponentPreview :component="PricingSection">
  <PricingSection />
</ComponentPreview>

## Footer

<ComponentPreview :component="Footer">
  <Footer />
</ComponentPreview>

## Installation

```bash
npx super-ui-cli add LandingSections
```

## Usage

```tsx
import { 
  HeroSection, 
  FeaturesSection, 
  PricingSection, 
  Footer 
} from '@/components/templates/LandingSections'

export default function LandingPage() {
  return (
    <main>
      <HeroSection 
        title="Welcome to My SaaS" 
        subtitle="The best solution for your business."
      />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </main>
  )
}
```
