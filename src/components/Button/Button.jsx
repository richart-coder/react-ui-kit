import React from "react";
import Spinner from "../Spinner";
import "./styles.css";

const Button = ({
  className = "",
  disabled,
  children,
  isLoading,
  onClick,
  color = "#3b82f6",
  textColor = "white",
  width,
  ...props
}) => {
  return (
    <button
      className={`button ${className}`}
      aria-disabled={disabled}
      disabled={isLoading || disabled}
      onClick={(e) => onClick?.(e)}
      style={{
        "--button-bg": color,
        "--button-text": textColor,
        ...(width ? { width: width + "px" } : {}),
      }}
      {...props}
    >
      {isLoading ? <span className="sr-only">正在載入...</span> : null}
      {isLoading ? <Spinner color={color} size="sm" /> : children}
    </button>
  );
};

export default Button;
