import { HeroSection, FeaturesSection, PricingSection, Footer } from "@/components/templates/LandingSections";
import { Header } from "@/components/Header";

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <HeroSection />
                <FeaturesSection />
                <PricingSection />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
