import React, { useState, createContext, use } from "react";
import styles from "./accordion.module.css";
import { ChevronDown } from "lucide-react";
type AccordionContextType = {
  activeItem: string;
  setActiveItem: (value: string) => void;
};
const AccordionContext = createContext<AccordionContextType>({
  activeItem: "",
  setActiveItem: () => {},
});

export function Accordion({ defaultValue, children, ...props }) {
  const [activeItem, setActiveItem] = useState(defaultValue ?? "");

  return (
    <AccordionContext.Provider value={{ activeItem, setActiveItem }}>
      <div {...props}>{children}</div>
    </AccordionContext.Provider>
  );
}

const AccordionItemContext = createContext("");

export function AccordionItem({ value, children, ...props }) {
  const { activeItem, setActiveItem } = use(AccordionContext);

  return (
    <div
      onClick={() => setActiveItem(activeItem === value ? "" : value)}
      {...props}
    >
      <AccordionItemContext.Provider value={value}>
        {children}
      </AccordionItemContext.Provider>
    </div>
  );
}

export function AccordionTrigger({ children }) {
  const { activeItem } = use(AccordionContext);
  const value = use(AccordionItemContext);
  const isActive = activeItem === value;
  return (
    <button
      type="button"
      className={`${styles["accordion-trigger"]} ${
        isActive ? styles.open : ""
      }`}
    >
      {children}
      <ChevronDown />
    </button>
  );
}

export function AccordionContent({ children }) {
  const { activeItem } = use(AccordionContext);
  const value = use(AccordionItemContext);
  const isActive = activeItem === value;

  const contentStyle = {
    display: "grid",
    gridTemplateRows: isActive ? "1fr" : "0fr",
    overflow: "hidden",
    transition: "grid-template-rows 0.3s ease-in-out",
  };

  return (
    <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
      <div
        style={{
          minHeight: "0",
        }}
      >
        {children}
      </div>
    </div>
  );
}
