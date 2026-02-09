import * as React from "react";
import { Check, Moon, Paintbrush, Sun, RotateCcw } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";


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
    {
        name: "Indigo",
        label: "Indigo",
        activeColor: {
            light: "226 70% 55%",
            dark: "226 70% 55%",
        },
    },
    {
        name: "Cyan",
        label: "Cyan",
        activeColor: {
            light: "189 94% 43%",
            dark: "189 94% 43%",
        },
    },
    {
        name: "Teal",
        label: "Teal",
        activeColor: {
            light: "173 58% 39%",
            dark: "173 58% 39%",
        },
    },
    {
        name: "Premium",
        label: "Premium",
        activeColor: {
            light: "45 90% 50%",
            dark: "45 90% 50%",
        },
    },
];

const fonts = [
    { name: "Inter", label: "Inter", value: "'Inter', sans-serif" },
    { name: "Manrope", label: "Manrope", value: "'Manrope', sans-serif" },
    { name: "Roboto", label: "Roboto", value: "'Roboto', sans-serif" },
    { name: "System", label: "System", value: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" },
];

export function ThemeCustomizer() {
    const [mounted, setMounted] = React.useState(false);
    const { setTheme, theme } = useTheme();
    const [color, setColor] = React.useState("Blue");
    const [radius, setRadius] = React.useState(0.5);
    const [font, setFont] = React.useState("Inter");

    React.useEffect(() => {
        setMounted(true);
        // Load from localStorage
        const savedColor = localStorage.getItem("theme-color");
        const savedRadius = localStorage.getItem("theme-radius");
        const savedFont = localStorage.getItem("theme-font");

        if (savedColor) setColor(savedColor);
        if (savedRadius) setRadius(parseFloat(savedRadius));
        if (savedFont) setFont(savedFont);
    }, []);

    React.useEffect(() => {
        if (!mounted) return;

        const root = window.document.documentElement;

        // Save to localStorage
        localStorage.setItem("theme-color", color);
        localStorage.setItem("theme-radius", radius.toString());
        localStorage.setItem("theme-font", font);

        // Handle Premium theme class
        if (color === "Premium") {
            root.classList.add("theme-premium");
        } else {
            root.classList.remove("theme-premium");
        }

        const selectedTheme = themes.find((t) => t.name === color);
        if (selectedTheme) {
            const primaryColor = theme === 'dark' ? selectedTheme.activeColor.dark : selectedTheme.activeColor.light;
            root.style.setProperty("--primary", primaryColor);
        }
        root.style.setProperty("--radius", `${radius}rem`);

        const selectedFont = fonts.find(f => f.name === font);
        if (selectedFont) {
            root.style.setProperty("--font-primary", selectedFont.value);
            // Apply immediately to body to ensure it takes effect
            document.body.style.fontFamily = selectedFont.value;
        }

    }, [color, radius, font, theme, mounted]);

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
                        <div className="flex items-center justify-between">
                            <h4 className="font-medium leading-none">Theme Customizer</h4>
                            <Button variant="ghost" size="icon" className="h-4 w-4" onClick={() => {
                                localStorage.removeItem("theme-color");
                                localStorage.removeItem("theme-radius");
                                localStorage.removeItem("theme-font");
                                window.location.reload();
                            }}>
                                <RotateCcw className="h-3 w-3" />
                                <span className="sr-only">Reset</span>
                            </Button>
                        </div>
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
                    <div className="space-y-2">
                        <Label>Font</Label>
                        <div className="grid grid-cols-2 gap-2">
                            {fonts.map((f) => (
                                <Button
                                    key={f.name}
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setFont(f.name)}
                                    className={cn(
                                        font === f.name && "border-2 border-primary",
                                        "justify-start"
                                    )}
                                    style={{ fontFamily: f.value }}
                                >
                                    {f.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <Button
                        className="w-full"
                        onClick={() => {
                            const selectedTheme = themes.find((t) => t.name === color);
                            const selectedFont = fonts.find(f => f.name === font);
                            if (selectedTheme && selectedFont) {
                                const css = `@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --primary: ${selectedTheme.activeColor.light};
    --primary-foreground: 0 0% 98%;
    --radius: ${radius}rem;
    --font-primary: ${selectedFont.value};
  }
 
  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --primary: ${selectedTheme.activeColor.dark};
    --primary-foreground: 240 5.9% 10%;
  }

  body {
    font-family: var(--font-primary);
  }
}`;
                                navigator.clipboard.writeText(css);
                                toast.success("Theme code copied to clipboard!");
                            }
                        }}
                    >
                        Copy Code
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}
