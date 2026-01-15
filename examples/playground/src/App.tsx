import { Button } from "@farhod_dev/super-ui";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background gap-4 p-8">
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
  );
}

export default App;
