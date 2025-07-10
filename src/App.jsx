import React from "react";
import "./App.css";
import { ChevronsUpDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./components/ui/Collapsible";

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="collapsible-container">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="flex flex-col gap-2"
      >
        <div className="collapsible-header flex items-center justify-between">
          <h4 className="collapsible-title">📚 我的收藏庫</h4>
          <CollapsibleTrigger asChild>
            <button className={`collapsible-trigger ${isOpen ? "open" : ""}`}>
              <ChevronsUpDown />
              <span className="sr-only">Toggle</span>
            </button>
          </CollapsibleTrigger>
        </div>

        <div className="collapsible-item">
          <span className="font-mono text-sm">@radix-ui/primitives</span>
        </div>

        <CollapsibleContent className="collapsible-content">
          <div className="collapsible-item">
            <span className="font-mono text-sm">@radix-ui/colors</span>
          </div>
          <div className="collapsible-item">
            <span className="font-mono text-sm">@stitches/react</span>
          </div>
          <div className="collapsible-item">
            <span className="font-mono text-sm">@radix-ui/themes</span>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h1>Collapsible Demo</h1>
      </div>
      <CollapsibleDemo />
    </div>
  );
}

export default App;
