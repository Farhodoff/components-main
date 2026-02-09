import React from "react";

export const ThemingDocs: React.FC = () => (
    <div className="space-y-8 max-w-4xl">
        <div>
            <h1 className="text-3xl font-bold mb-4">Theming</h1>
            <p className="text-lg text-muted-foreground">Customize ComponentLib to match your brand identity.</p>
        </div>

        <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Premium Theme</h2>
            <p className="text-muted-foreground">
                We have introduced a rigorous <strong>Premium Theme</strong> designed for high-end applications.
                It features a Deep Violet background with Gold accents.
            </p>
            <div className="bg-muted p-4 rounded-lg border">
                <h3 className="text-sm font-medium mb-2">How to Enable</h3>
                <p className="text-sm text-foreground/80 mb-4">
                    Click the <span className="inline-flex items-center justify-center p-1 bg-background border rounded mx-1">Paintbrush</span> icon in the header and select <strong>Premium</strong>.
                </p>
                <div className="p-4 rounded border bg-background theme-premium">
                    <div className="space-y-2">
                        <div className="font-semibold text-foreground">Preview</div>
                        <div className="text-sm text-muted-foreground">This is how the premium theme looks.</div>
                        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium text-sm">
                            Action Button
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h2 className="text-2xl font-semibold">CSS Variables</h2>
            <p className="text-muted-foreground">You can customize the following CSS variables in your <code className="text-sm bg-muted px-1 rounded">index.css</code>:</p>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <h3 className="font-semibold">Base Colors</h3>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li><code className="text-foreground">--background</code>: Page background</li>
                        <li><code className="text-foreground">--foreground</code>: Primary text color</li>
                        <li><code className="text-foreground">--primary</code>: Brand color</li>
                        <li><code className="text-foreground">--muted</code>: Secondary backgrounds</li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h3 className="font-semibold">Premium Tokens</h3>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li><code className="text-foreground">.theme-premium</code>: Scope class</li>
                        <li><code className="text-foreground">--gradient-primary</code>: Gold gradient</li>
                        <li><code className="text-foreground">--shadow-glow</code>: Neon glow effect</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
);
