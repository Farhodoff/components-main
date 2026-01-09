import React from "react";
import { motion } from "framer-motion";
import {
  LibraryCard,
  LibraryCardContent,
  LibraryCardHeader,
  LibraryCardTitle,
} from "./library/LibraryCard";
import { LibraryBadge } from "./library/LibraryBadge";
import {
  Keyboard,
  Eye,
  MousePointer2,
  Volume2,
  Palette,
  Focus,
} from "lucide-react";

const features = [
  {
    icon: Keyboard,
    title: "Keyboard Navigation",
    description:
      "All interactive components are fully accessible via keyboard with proper focus management and tab order.",
    badge: "WCAG 2.1.1",
  },
  {
    icon: Eye,
    title: "Screen Reader Support",
    description:
      "Semantic HTML and ARIA attributes ensure compatibility with assistive technologies.",
    badge: "WCAG 1.3.1",
  },
  {
    icon: Palette,
    title: "Color Contrast",
    description:
      "All color combinations meet WCAG AA contrast requirements for text and interactive elements.",
    badge: "WCAG 1.4.3",
  },
  {
    icon: Focus,
    title: "Focus Indicators",
    description:
      "Clear, visible focus states that work across all themes and color modes.",
    badge: "WCAG 2.4.7",
  },
  {
    icon: MousePointer2,
    title: "Touch Targets",
    description:
      "Minimum 44x44px touch targets for all interactive elements on touch devices.",
    badge: "WCAG 2.5.5",
  },
  {
    icon: Volume2,
    title: "Motion Preferences",
    description:
      "Respects prefers-reduced-motion settings to accommodate users sensitive to animation.",
    badge: "WCAG 2.3.3",
  },
];

export const AccessibilitySection: React.FC = () => {
  return (
    <section id="accessibility" className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <LibraryBadge variant="success" className="mb-4">
            Accessibility First
          </LibraryBadge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for Everyone
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every component is designed and tested to meet WCAG 2.1 AA
            standards, ensuring your application is accessible to all users.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <LibraryCard
                variant="elevated"
                className="h-full bg-card hover:border-primary/30 transition-colors"
              >
                <LibraryCardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <LibraryBadge variant="ghost" size="sm">
                      {feature.badge}
                    </LibraryBadge>
                  </div>
                  <LibraryCardTitle className="mt-4">
                    {feature.title}
                  </LibraryCardTitle>
                </LibraryCardHeader>
                <LibraryCardContent className="pt-2">
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </LibraryCardContent>
              </LibraryCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
