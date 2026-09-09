import React from "react";
import { useTranslation } from "react-i18next";
import { Package, Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
              <Package className="h-4 w-4 text-primary" />
            </div>
            <span className="font-semibold">Super UI</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="/docs" className="hover:text-foreground transition-colors">
              {t("footer.documentation")}
            </a>
            <a href="/#components" className="hover:text-foreground transition-colors">
              {t("footer.components")}
            </a>
            <a href="https://Farhodoff.github.io/components-main/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              {t("footer.storybook")}
            </a>
            <a href="https://github.com/Farhodoff/components-main" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              {t("footer.github")}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="GitHub" asChild>
              <a href="https://github.com/Farhodoff/components-main" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>
            {t("footer.builtWith")}
          </p>
        </div>
      </div>
    </footer>
  );
};
