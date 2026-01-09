import React from "react";
import { motion } from "framer-motion";
import { ComponentShowcase } from "./ComponentShowcase";
import { Button } from "./ui/button";
import { LibraryInput } from "./library/LibraryInput";
import { LibraryBadge } from "./library/LibraryBadge";
import { LibraryAlert } from "./library/LibraryAlert";
import {
  LibraryCard,
  LibraryCardHeader,
  LibraryCardTitle,
  LibraryCardDescription,
  LibraryCardContent,
} from "./library/LibraryCard";
import { Mail, Search, Star } from "lucide-react";

const buttonCode = `import { Button } from "@/components/ui/button";

// Variants
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="gradient">Gradient</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="success">Success</Button>`;

const inputCode = `import { LibraryInput } from "@/components/library/LibraryInput";

<LibraryInput
  label="Email Address"
  placeholder="you@example.com"
  leftIcon={<Mail />}
/>

<LibraryInput
  label="Password"
  type="password"
  placeholder="Enter password"
/>

<LibraryInput
  error="This field is required"
  placeholder="Error state"
/>`;

const badgeCode = `import { LibraryBadge } from "@/components/library/LibraryBadge";

<LibraryBadge>Default</LibraryBadge>
<LibraryBadge variant="success">Success</LibraryBadge>
<LibraryBadge variant="warning">Warning</LibraryBadge>
<LibraryBadge icon={<Star />}>Featured</LibraryBadge>
<LibraryBadge removable onRemove={() => {}}>Removable</LibraryBadge>`;

const alertCode = `import { LibraryAlert } from "@/components/library/LibraryAlert";

<LibraryAlert title="Information">
  This is an informational alert message.
</LibraryAlert>

<LibraryAlert variant="success" title="Success!">
  Your changes have been saved.
</LibraryAlert>

<LibraryAlert variant="destructive" dismissible>
  There was an error processing your request.
</LibraryAlert>`;

const cardCode = `import { LibraryCard } from "@/components/library/LibraryCard";

<LibraryCard variant="elevated">
  <LibraryCardHeader>
    <LibraryCardTitle>Card Title</LibraryCardTitle>
    <LibraryCardDescription>
      A brief description of the card content.
    </LibraryCardDescription>
  </LibraryCardHeader>
  <LibraryCardContent>
    Card content goes here.
  </LibraryCardContent>
</LibraryCard>`;

export const ComponentsSection: React.FC = () => {
  return (
    <section id="components" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <LibraryBadge variant="outline" className="mb-4">
            Components
          </LibraryBadge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore the Component Library
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each component is built with accessibility in mind, fully typed with
            TypeScript, and documented with interactive Storybook examples.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ComponentShowcase
              title="Button"
              description="Versatile button component with multiple variants and sizes"
              code={buttonCode}
            >
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="gradient">Gradient</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="success">Success</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </ComponentShowcase>
          </motion.div>

          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ComponentShowcase
              title="Input"
              description="Accessible input fields with labels, validation, and icons"
              code={inputCode}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
                <LibraryInput
                  label="Email"
                  placeholder="you@example.com"
                  leftIcon={<Mail className="h-4 w-4" />}
                />
                <LibraryInput
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                />
                <LibraryInput
                  label="Search"
                  placeholder="Search..."
                  leftIcon={<Search className="h-4 w-4" />}
                  success="Found 12 results"
                />
              </div>
            </ComponentShowcase>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ComponentShowcase
              title="Badge"
              description="Status indicators with multiple variants and optional icons"
              code={badgeCode}
            >
              <div className="flex flex-wrap items-center gap-3">
                <LibraryBadge>Default</LibraryBadge>
                <LibraryBadge variant="secondary">Secondary</LibraryBadge>
                <LibraryBadge variant="success">Success</LibraryBadge>
                <LibraryBadge variant="warning">Warning</LibraryBadge>
                <LibraryBadge variant="destructive">Error</LibraryBadge>
                <LibraryBadge variant="outline">Outline</LibraryBadge>
                <LibraryBadge
                  icon={<Star className="h-3 w-3" />}
                  variant="secondary"
                >
                  Featured
                </LibraryBadge>
                <LibraryBadge removable onRemove={() => { }}>
                  Removable
                </LibraryBadge>
              </div>
            </ComponentShowcase>
          </motion.div>

          {/* Alerts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ComponentShowcase
              title="Alert"
              description="Contextual feedback messages with dismissible option"
              code={alertCode}
            >
              <div className="flex flex-col gap-4 w-full max-w-xl">
                <LibraryAlert variant="info" title="Information">
                  This is an informational message for the user.
                </LibraryAlert>
                <LibraryAlert variant="success" title="Success!">
                  Your changes have been saved successfully.
                </LibraryAlert>
                <LibraryAlert variant="warning" title="Warning">
                  Please review before proceeding.
                </LibraryAlert>
                <LibraryAlert variant="destructive" title="Error" dismissible>
                  There was a problem with your request.
                </LibraryAlert>
              </div>
            </ComponentShowcase>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ComponentShowcase
              title="Card"
              description="Container component with multiple variants for different use cases"
              code={cardCode}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <LibraryCard variant="default">
                  <LibraryCardHeader>
                    <LibraryCardTitle>Default Card</LibraryCardTitle>
                    <LibraryCardDescription>
                      A basic card with subtle border
                    </LibraryCardDescription>
                  </LibraryCardHeader>
                  <LibraryCardContent>
                    <p className="text-sm text-muted-foreground">
                      Card content goes here with any elements.
                    </p>
                  </LibraryCardContent>
                </LibraryCard>

                <LibraryCard variant="elevated">
                  <LibraryCardHeader>
                    <LibraryCardTitle>Elevated Card</LibraryCardTitle>
                    <LibraryCardDescription>
                      Card with shadow elevation
                    </LibraryCardDescription>
                  </LibraryCardHeader>
                  <LibraryCardContent>
                    <p className="text-sm text-muted-foreground">
                      Elevated cards stand out from the page.
                    </p>
                  </LibraryCardContent>
                </LibraryCard>

                <LibraryCard variant="interactive">
                  <LibraryCardHeader>
                    <LibraryCardTitle>Interactive Card</LibraryCardTitle>
                    <LibraryCardDescription>
                      Hover for animation
                    </LibraryCardDescription>
                  </LibraryCardHeader>
                  <LibraryCardContent>
                    <p className="text-sm text-muted-foreground">
                      Interactive cards respond to user actions.
                    </p>
                  </LibraryCardContent>
                </LibraryCard>
              </div>
            </ComponentShowcase>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
