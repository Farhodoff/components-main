import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export const InstallationDocs: React.FC = () => (
    <div className="space-y-8 max-w-4xl">
        <div>
            <h1 className="text-3xl font-bold mb-4">Installation</h1>
            <p className="text-lg text-muted-foreground">
                Follow these steps to set up and run the ComponentLib project locally.
            </p>
        </div>

        <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Prerequisites</h2>
            <p>Before you begin, ensure you have the following installed:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Node.js (v18 or higher)</li>
                <li>npm (usually comes with Node.js)</li>
                <li>Git</li>
                <li>A <a href="https://supabase.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Supabase</a> account (for Authentication)</li>
            </ul>
        </section>

        <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Clone the Repository</h2>
            <div className="bg-muted rounded-lg border p-4 font-mono text-sm">
                <pre>git clone https://github.com/Farhodoff/components-main.git
                    cd components-main</pre>
            </div>
        </section>

        <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Install Dependencies</h2>
            <div className="bg-muted rounded-lg border p-4 font-mono text-sm">
                <pre>npm install</pre>
            </div>
        </section>

        <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Environment Configuration</h2>
            <p>Create a <code>.env</code> file in the root directory and add your Supabase credentials:</p>
            <div className="bg-muted rounded-lg border p-4 font-mono text-sm">
                <pre>VITE_SUPABASE_URL=your_supabase_project_url
                    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key</pre>
            </div>
            <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Note</AlertTitle>
                <AlertDescription>
                    You can find these keys in your Supabase Project Settings &gt; API.
                </AlertDescription>
            </Alert>
        </section>

        <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Run the Project</h2>
            <p>Start the development server:</p>
            <div className="bg-muted rounded-lg border p-4 font-mono text-sm">
                <pre>npm run dev</pre>
            </div>
            <p>The application will be available at <code className="bg-muted px-1 py-0.5 rounded">http://localhost:5173</code>.</p>
        </section>

        <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Building for Production</h2>
            <p>To create a production build:</p>
            <div className="bg-muted rounded-lg border p-4 font-mono text-sm">
                <pre>npm run build</pre>
            </div>
            <p>The build artifacts will be stored in the <code>dist/</code> directory.</p>
        </section>

        <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Troubleshooting</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="font-semibold text-lg">"Missing Supabase environment variables" Error</h3>
                    <p className="text-muted-foreground">
                        Ensure you have created the <code>.env</code> file and restart the development server.
                        Vite only loads environment variables when the server starts.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-lg">Type Errors during Build</h3>
                    <p className="text-muted-foreground">
                        Run <code>npm run lint</code> to check for linting errors. If you encounter type errors,
                        ensure all dependencies are correctly installed.
                    </p>
                </div>
            </div>
        </section>
    </div>
);
