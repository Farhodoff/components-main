import React from "react";
import { useTranslation } from "react-i18next";
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

export const AccessibilitySection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Keyboard,
      title: t("accessibility.features.keyboardTitle"),
      description: t("accessibility.features.keyboardDesc"),
      badge: "WCAG 2.1.1",
    },
    {
      icon: Eye,
      title: t("accessibility.features.screenReaderTitle"),
      description: t("accessibility.features.screenReaderDesc"),
      badge: "WCAG 1.3.1",
    },
    {
      icon: Palette,
      title: t("accessibility.features.colorContrastTitle"),
      description: t("accessibility.features.colorContrastDesc"),
      badge: "WCAG 1.4.3",
    },
    {
      icon: Focus,
      title: t("accessibility.features.focusIndicatorsTitle"),
      description: t("accessibility.features.focusIndicatorsDesc"),
      badge: "WCAG 2.4.7",
    },
    {
      icon: MousePointer2,
      title: t("accessibility.features.touchTargetsTitle"),
      description: t("accessibility.features.touchTargetsDesc"),
      badge: "WCAG 2.5.5",
    },
    {
      icon: Volume2,
      title: t("accessibility.features.motionPreferencesTitle"),
      description: t("accessibility.features.motionPreferencesDesc"),
      badge: "WCAG 2.3.3",
    },
  ];

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
            {t("accessibility.badge")}
          </LibraryBadge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("accessibility.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("accessibility.description")}
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
