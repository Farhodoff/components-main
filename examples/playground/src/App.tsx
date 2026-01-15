import { Button, ThemeProvider, useTheme } from "@farhod_dev/super-ui";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col items-center justify-center min-h-screen bg-background gap-4 p-8 text-foreground">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Super UI Playground
        </h1>
        <div className="flex gap-4">
          <Button onClick={() => setCount((c) => c + 1)}>
            Count is {count}
          </Button>
          <Button variant="destructive" onClick={() => setCount(0)}>
            Reset
          </Button>
          <Button variant="outline">
            Outline
          </Button>
          <Button variant="ghost">
            Ghost
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
