import React from "react";

export const InstallationDocs: React.FC = () => (
    <div className="space-y-8">
        <div>
            <h1 className="text-3xl font-bold mb-4">Installation</h1>
            <p className="text-lg text-muted-foreground">Get started with ComponentLib.</p>
        </div>
        <section>
            <h2 className="text-xl font-semibold mb-4">Install via npm</h2>
            <div className="bg-code rounded-lg border border-code-border p-4 font-mono text-sm">
                <pre>npm install @componentlib/react</pre>
            </div>
        </section>
    </div>
);
