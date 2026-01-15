import { defineConfig } from "tsup";

export default defineConfig({
    entry: [
        "src/index.ts",
        "src/components/**/*.tsx",
        "!src/**/*.test.tsx",
        "!src/**/*.spec.ts",
        "!src/**/*.stories.tsx",
        "!src/test/**/*"
    ],
    format: ["cjs", "esm"],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    treeshake: true,
    external: ["react", "react-dom"],
    tsconfig: "tsconfig.build.json",
});
