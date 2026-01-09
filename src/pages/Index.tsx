import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ComponentsSection } from "@/components/ComponentsSection";
import { AccessibilitySection } from "@/components/AccessibilitySection";
import { Footer } from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ComponentsSection />
        <AccessibilitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
