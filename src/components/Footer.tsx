import React from "react";
import { Package, Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
              <Package className="h-4 w-4 text-primary" />
            </div>
            <span className="font-semibold">ComponentLib</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Documentation
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Components
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Storybook
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              GitHub
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="GitHub" asChild>
              <a href="https://github.com/Farhodoff" target="_blank" rel="noopener noreferrer">
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
            Built with React, TypeScript, and Tailwind CSS. Open source and
            free forever.
          </p>
        </div>
      </div>
    </footer>
  );
};
