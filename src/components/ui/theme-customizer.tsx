import * as React from "react";
import { Check, Moon, Paintbrush, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const themes = [
    {
        name: "Zinc",
        label: "Zinc",
        activeColor: {
            light: "240 5.9% 10%",
            dark: "240 5.2% 33.9%",
        },
    },
    {
        name: "Red",
        label: "Red",
        activeColor: {
            light: "0 72.2% 50.6%",
            dark: "0 72.2% 50.6%",
        },
    },
    {
        name: "Rose",
        label: "Rose",
        activeColor: {
            light: "346.8 77.2% 49.8%",
            dark: "346.8 77.2% 49.8%",
        },
    },
    {
        name: "Orange",
        label: "Orange",
        activeColor: {
            light: "24.6 95% 53.1%",
            dark: "20.5 90.2% 48.2%",
        },
    },
    {
        name: "Green",
        label: "Green",
        activeColor: {
            light: "142.1 76.2% 36.3%",
            dark: "142.1 70.6% 45.3%",
        },
    },
    {
        name: "Blue",
        label: "Blue",
        activeColor: {
            light: "221.2 83.2% 53.3%",
            dark: "217.2 91.2% 59.8%",
        },
    },
    {
        name: "Violet",
        label: "Violet",
        activeColor: {
            light: "262.1 83.3% 57.8%",
            dark: "263.4 70% 50.4%",
        },
    },
];

export function ThemeCustomizer() {
    const [mounted, setMounted] = React.useState(false);
    const { setTheme, theme } = useTheme();
    const [color, setColor] = React.useState("Blue");
    const [radius, setRadius] = React.useState(0.5);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    React.useEffect(() => {
        const root = window.document.documentElement;
        const selectedTheme = themes.find((t) => t.name === color);
        if (selectedTheme) {
            // Logic to update --primary would go here if we were using a real CSS-in-JS or writing to style
            // For this demo, we will update the style attribute directly
            const primaryColor = theme === 'dark' ? selectedTheme.activeColor.dark : selectedTheme.activeColor.light;
            root.style.setProperty("--primary", primaryColor);
        }
        root.style.setProperty("--radius", `${radius}rem`);
    }, [color, radius, theme]);

    if (!mounted) {
        return null;
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="icon" className="ml-auto">
                    <Paintbrush className="h-4 w-4" />
                    <span className="sr-only">Customize</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[340px] p-4" align="end">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Theme Customizer</h4>
                        <p className="text-sm text-muted-foreground">
                            Customize the look and feel of the application.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <Label>Mode</Label>
                        <div className="grid grid-cols-2 gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setTheme("light")}
                                className={cn(theme === "light" && "border-2 border-primary")}
                            >
                                <Sun className="mr-2 h-4 w-4" />
                                Light
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setTheme("dark")}
                                className={cn(theme === "dark" && "border-2 border-primary")}
                            >
                                <Moon className="mr-2 h-4 w-4" />
                                Dark
                            </Button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label>Color</Label>
                        <div className="grid grid-cols-3 gap-2">
                            {themes.map((themeObj) => (
                                <Button
                                    key={themeObj.name}
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setColor(themeObj.name)}
                                    className={cn(
                                        "justify-start",
                                        color === themeObj.name && "border-2 border-primary"
                                    )}
                                >
                                    <span
                                        className="mr-2 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full"
                                        style={{
                                            backgroundColor: `hsl(${themeObj.activeColor.light})`,
                                        }}
                                    >
                                        {color === themeObj.name && (
                                            <Check className="h-3 w-3 text-white" />
                                        )}
                                    </span>
                                    {themeObj.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label>Radius</Label>
                        <div className="flex gap-2">
                            {[0, 0.3, 0.5, 0.75, 1.0].map((r) => (
                                <Button
                                    key={r}
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setRadius(r)}
                                    className={cn(
                                        radius === r && "border-2 border-primary"
                                    )}
                                >
                                    {r}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
