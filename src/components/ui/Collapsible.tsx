import { Slot } from "./Slot";
import React, { createContext, use } from "react";
const CollapsibleContext = createContext({
  open: false,
  onOpenChange(value: boolean) {
    console.log("onOpenChange", value);
  },
});
export const Collapsible = ({ open, onOpenChange, children, ...props }) => {
  return (
    <div {...props}>
      <CollapsibleContext.Provider value={{ open, onOpenChange }}>
        {children}
      </CollapsibleContext.Provider>
    </div>
  );
};
export const CollapsibleContent = ({ children, ...props }) => {
  const { open } = use(CollapsibleContext);
  return <div {...props}>{open && children}</div>;
};
export const CollapsibleTrigger = ({ asChild, children }) => {
  const { open, onOpenChange } = use(CollapsibleContext);
  const props = {
    onClick() {
      onOpenChange(!open);
    },
  };
  return asChild ? (
    <Slot {...props}>{children}</Slot>
  ) : (
    <button {...props}>{children ?? "點擊"}</button>
  );
};
