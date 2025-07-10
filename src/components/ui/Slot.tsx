import React, { type ReactElement } from "react";
type SlotProps = {
  children: ReactElement;
} & Record<string, any>;
export function Slot({ children, ...props }: SlotProps) {
  if (!React.isValidElement(children)) {
    throw new Error("Slot expects a valid React element as its child.");
  }

  return React.cloneElement(children, {
    ...props,
    ...(children.props as SlotProps),
  });
}
