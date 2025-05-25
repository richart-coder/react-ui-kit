import React, { useState, useEffect } from "react";
import eventBus from "./subEvent";
import styles from "./ToastContainer.module.css";
import { Check, X, AlertTriangle, Info } from "lucide-react";
type ToastType = "success" | "error" | "warning" | "info";

type ToastMessage = {
  id: string;
  message: string;
  type: ToastType;
};

type ToastPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

type ToastProps = {
  position: ToastPosition;
  duration: number;
};

const TOAST_CONFIG = {
  success: {
    icon: <Check size={16} />,
    iconColor: "#ffffff",
    iconBg: "#22c55e",
  },
  error: {
    icon: <X size={16} />,
    iconColor: "#ffffff",
    iconBg: "#ef4444",
  },
  warning: {
    icon: <AlertTriangle size={16} />,
    iconColor: "#ffffff",
    iconBg: "#f59e0b",
  },
  info: {
    icon: <Info size={16} />,
    iconColor: "#ffffff",
    iconBg: "#3b82f6",
  },
} as const;

const getPositionStyles = (position: ToastPosition): React.CSSProperties => {
  const positions = {
    "top-left": { top: "20px", left: "20px" },
    "top-right": { top: "20px", right: "20px" },
    "bottom-left": { bottom: "20px", left: "20px" },
    "bottom-right": { bottom: "20px", right: "20px" },
  };
  return positions[position];
};

const ToastContainer = ({ position, duration }: ToastProps) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const unsubscribe = eventBus.subscribe("toast", (message) => {
      setMessages((prev) => [message, ...prev]);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      const timer = setTimeout(() => {
        setMessages((prev) => prev.slice(0, -1));
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [messages, duration]);

  const containerStyle: React.CSSProperties = {
    position: "fixed",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    ...getPositionStyles(position),
  };

  const handleDismiss = (id: string) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };
  return (
    <div style={containerStyle}>
      <ul className={styles.list}>
        {messages?.map((message) => {
          const config = TOAST_CONFIG[message.type];

          return (
            <li
              key={message.id}
              className={`${styles.toastItem} ${styles[message.type]}`}
            >
              <div className={styles.content}>
                <span
                  className={`toast-icon ${message.type}`}
                  style={{
                    color: config.iconColor,
                    backgroundColor: config.iconBg,
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {config.icon}
                </span>
                <span className={styles.text}>{message.message}</span>
              </div>

              <button
                onClick={() => handleDismiss(message.id)}
                className={styles.closeButton}
                title="關閉"
              >
                ×
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToastContainer;
