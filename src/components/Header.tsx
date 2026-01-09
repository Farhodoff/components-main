import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { LibraryBadge } from "./library/LibraryBadge";
import { BookOpen, Github, Package } from "lucide-react";
import { LanguageSwitcher } from "./ui/language-switcher";

export const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10">
            <Package className="h-5 w-5 text-primary" />
          </div>
          <span className="font-semibold text-lg">ComponentLib</span>
          <LibraryBadge variant="secondary" size="sm">
            v1.0.0
          </LibraryBadge>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#components"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.components")}
          </a>
          <Link
            to="/docs"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.documentation")}
          </Link>
          <a
            href="#accessibility"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.themes")}
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button variant="ghost" size="icon" asChild aria-label={t("nav.documentation")}>
            <Link to="/docs">
              <BookOpen className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label={t("nav.github")}>
            <a href="https://github.com/Farhodoff" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="gradient" size="sm" asChild>
            <Link to="/docs">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
