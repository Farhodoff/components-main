import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { LibraryBadge } from "./library/LibraryBadge";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Accessibility, Zap } from "lucide-react";

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.02]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Glow effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <LibraryBadge
              variant="secondary"
              size="lg"
              icon={<Sparkles className="h-3.5 w-3.5" />}
              className="mb-6"
            >
              {t("hero.badge")}
            </LibraryBadge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#components">
              <Button variant="gradient" size="lg" className="group">
                {t("hero.exploreComponents")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <Link to="/docs">
              <Button variant="outline" size="lg">
                {t("hero.viewDocs")}
              </Button>
            </Link>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              {
                icon: Accessibility,
                title: t("hero.features.accessible"),
                description: "WCAG 2.1 AA compliant",
              },
              {
                icon: Zap,
                title: t("hero.features.customizable"),
                description: "Tree-shakable & optimized",
              },
              {
                icon: Sparkles,
                title: t("hero.features.openSource"),
                description: "Interactive documentation",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}

                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center p-4 rounded-xl bg-card/50 border border-border/50"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium text-sm">{feature.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
