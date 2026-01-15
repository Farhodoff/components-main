import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Check, Github, Twitter, Linkedin } from "lucide-react";

export function HeroSection({
    title = "Build faster with Super UI",
    subtitle = "A complete component library helping you ship accessible, customizable, and high-performance web applications.",
    ctaText = "Get Started",
    ctaLink = "#",
    secondaryCtaText = "View Components",
    secondaryCtaLink = "#",
}: {
    title?: string;
    subtitle?: string;
    ctaText?: string;
    ctaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
}) {
    return (
        <section className="py-24 lg:py-32 flex flex-col items-center text-center gap-8 px-4 md:px-6">
            <Badge variant="secondary" className="mb-4">
                v1.0.0 released 🎉
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                {title}
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
                {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 min-w-[200px]">
                <Button size="lg" asChild>
                    <a href={ctaLink}>{ctaText}</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <a href={secondaryCtaLink}>{secondaryCtaText}</a>
                </Button>
            </div>
        </section>
    );
}

export function FeaturesSection({
    features = [
        {
            title: "Accessible",
            description: "Built on Radix UI primitives for full screen reader support.",
            icon: "♿",
        },
        {
            title: "Customizable",
            description: "Styled with Tailwind CSS. Easy to override and extend.",
            icon: "🎨",
        },
        {
            title: "Dark Mode",
            description: "Automatic dark mode support out of the box.",
            icon: "🌙",
        },
    ],
}: {
    features?: { title: string; description: string; icon: string }[];
}) {
    return (
        <section className="py-16 px-4 md:px-6 bg-muted/30">
            <div className="container max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
                    Why Choose Us?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="bg-background">
                            <CardHeader>
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function PricingSection() {
    return (
        <section className="py-24 px-4 md:px-6">
            <div className="container max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-muted-foreground mb-16">
                    Choose the plan that's right for you.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Basic */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Basic</CardTitle>
                            <CardDescription>Essential components for hobbyists.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold mb-6">$0<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                            <ul className="space-y-3 text-left">
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> All Core Components</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Community Support</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="outline">Get Started</Button>
                        </CardFooter>
                    </Card>

                    {/* Pro */}
                    <Card className="border-primary relative shadow-lg">
                        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>
                        <CardHeader>
                            <CardTitle>Pro</CardTitle>
                            <CardDescription>Advanced templates and priority support.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold mb-6">$29<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                            <ul className="space-y-3 text-left">
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> All Core Components</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Pro Templates</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Priority Support</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Get Pro</Button>
                        </CardFooter>
                    </Card>

                    {/* Enterprise */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Enterprise</CardTitle>
                            <CardDescription>For large teams and custom needs.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold mb-6">Custom</div>
                            <ul className="space-y-3 text-left">
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Everything in Pro</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Custom Development</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> SLA Support</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="outline">Contact Sales</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="border-t py-12 px-4 md:px-6 bg-muted/20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <h3 className="font-bold text-lg">Super UI</h3>
                    <p className="text-sm text-muted-foreground">
                        Building the next generation of web applications with ease and style.
                    </p>
                    <div className="flex gap-4">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Github className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Twitter className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Linkedin className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Product</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-primary">Components</a></li>
                        <li><a href="#" className="hover:text-primary">Templates</a></li>
                        <li><a href="#" className="hover:text-primary">Pricing</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Resources</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-primary">Documentation</a></li>
                        <li><a href="#" className="hover:text-primary">Blog</a></li>
                        <li><a href="#" className="hover:text-primary">Community</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                © 2024 Super UI. All rights reserved.
            </div>
        </footer>
    );
}
