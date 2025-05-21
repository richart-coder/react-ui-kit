import React from "react";
import "./styles.css";

const Spinner = ({ size = "md", className = "", color, ...props }) => {
  const darkerColor = color
    ? `color-mix(in srgb, ${color} 80%, black)`
    : undefined;

  return (
    <div
      className={`spinner ${className}`}
      role="status"
      aria-hidden="true"
      style={{ color: darkerColor }}
      {...props}
    >
      <span className={`spinner-inner spinner-${size}`} />
    </div>
  );
};

export default Spinner;
