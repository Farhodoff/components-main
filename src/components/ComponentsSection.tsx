import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

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
            {t("componentsShowcase.sectionBadge")}
          </LibraryBadge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("componentsShowcase.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("componentsShowcase.description")}
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
              title={t("componentsShowcase.button.title")}
              description={t("componentsShowcase.button.description")}
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
              title={t("componentsShowcase.input.title")}
              description={t("componentsShowcase.input.description")}
              code={inputCode}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
                <LibraryInput
                  label={t("componentsShowcase.input.emailLabel")}
                  placeholder="you@example.com"
                  leftIcon={<Mail className="h-4 w-4" />}
                />
                <LibraryInput
                  label={t("componentsShowcase.input.passwordLabel")}
                  type="password"
                  placeholder="••••••••"
                />
                <LibraryInput
                  label={t("componentsShowcase.input.searchLabel")}
                  placeholder={t("componentsShowcase.input.searchPlaceholder")}
                  leftIcon={<Search className="h-4 w-4" />}
                  success={t("componentsShowcase.input.searchSuccess")}
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
              title={t("componentsShowcase.badge.title")}
              description={t("componentsShowcase.badge.description")}
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
                  {t("componentsShowcase.badge.featured")}
                </LibraryBadge>
                <LibraryBadge removable onRemove={() => { }}>
                  {t("componentsShowcase.badge.removable")}
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
              title={t("componentsShowcase.alert.title")}
              description={t("componentsShowcase.alert.description")}
              code={alertCode}
            >
              <div className="flex flex-col gap-4 w-full max-w-xl">
                <LibraryAlert variant="info" title={t("componentsShowcase.alert.infoTitle")}>
                  {t("componentsShowcase.alert.infoDesc")}
                </LibraryAlert>
                <LibraryAlert variant="success" title={t("componentsShowcase.alert.successTitle")}>
                  {t("componentsShowcase.alert.successDesc")}
                </LibraryAlert>
                <LibraryAlert variant="warning" title={t("componentsShowcase.alert.warningTitle")}>
                  {t("componentsShowcase.alert.warningDesc")}
                </LibraryAlert>
                <LibraryAlert variant="destructive" title="Error" dismissible>
                  {t("componentsShowcase.alert.errorDesc")}
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
              title={t("componentsShowcase.card.title")}
              description={t("componentsShowcase.card.description")}
              code={cardCode}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <LibraryCard variant="default">
                  <LibraryCardHeader>
                    <LibraryCardTitle>{t("componentsShowcase.card.defaultTitle")}</LibraryCardTitle>
                    <LibraryCardDescription>
                      {t("componentsShowcase.card.defaultDesc")}
                    </LibraryCardDescription>
                  </LibraryCardHeader>
                  <LibraryCardContent>
                    <p className="text-sm text-muted-foreground">
                      {t("componentsShowcase.card.cardContent")}
                    </p>
                  </LibraryCardContent>
                </LibraryCard>

                <LibraryCard variant="elevated">
                  <LibraryCardHeader>
                    <LibraryCardTitle>{t("componentsShowcase.card.elevatedTitle")}</LibraryCardTitle>
                    <LibraryCardDescription>
                      {t("componentsShowcase.card.elevatedDesc")}
                    </LibraryCardDescription>
                  </LibraryCardHeader>
                  <LibraryCardContent>
                    <p className="text-sm text-muted-foreground">
                      {t("componentsShowcase.card.cardContent")}
                    </p>
                  </LibraryCardContent>
                </LibraryCard>

                <LibraryCard variant="interactive">
                  <LibraryCardHeader>
                    <LibraryCardTitle>{t("componentsShowcase.card.glassTitle")}</LibraryCardTitle>
                    <LibraryCardDescription>
                      {t("componentsShowcase.card.glassDesc")}
                    </LibraryCardDescription>
                  </LibraryCardHeader>
                  <LibraryCardContent>
                    <p className="text-sm text-muted-foreground">
                      {t("componentsShowcase.card.cardContent")}
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
