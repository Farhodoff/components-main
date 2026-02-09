import React from "react";

export const ThemingDocs: React.FC = () => (
    <div className="space-y-8">
        <div>
            <h1 className="text-3xl font-bold mb-4">Theming</h1>
            <p className="text-lg text-muted-foreground">Customize ComponentLib to match your brand.</p>
        </div>
        <section>
            <h2 className="text-xl font-semibold mb-4">CSS Variables</h2>
            <p className="text-muted-foreground">Override CSS custom properties to customize the appearance.</p>
        </section>
    </div>
);
