import type { Preview } from "@storybook/react";
import { useEffect } from "react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "hsl(220 20% 97%)" },
        { name: "dark", value: "hsl(220 25% 8%)" },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      useEffect(() => {
        const backgroundValue = context.globals.backgrounds?.value;
        // Check if the selected background is the dark one
        if (backgroundValue === "hsl(220 25% 8%)") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, [context.globals.backgrounds]);

      return Story();
    },
  ],
};

export default preview;
