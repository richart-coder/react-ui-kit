import { AlertTriangle, Check, Info, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import eventBus from "./event-bus";
import styles from "./style.module.css";

import type { ToastMessage, ToastPosition } from "./types";

type ToastProps = {
  position: ToastPosition;
  duration: number;
};

const TOAST_CONFIG = {
  success: {
    icon: <Check size={16} />,
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

const getPositionClass = (position: ToastPosition): string => {
  const positionMap = {
    "top-left": styles.topLeft,
    "top-center": styles.topCenter,
    "top-right": styles.topRight,
    "bottom-left": styles.bottomLeft,
    "bottom-center": styles.bottomCenter,
    "bottom-right": styles.bottomRight,
  };
  return positionMap[position];
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

  const handleDismiss = (id: string) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };
  return (
    <div className={`${styles.container} ${getPositionClass(position)}`}>
      <ul className={styles.messageList}>
        {messages?.map((message) => {
          const config = TOAST_CONFIG[message.type];

          return (
            <li
              key={message.id}
              className={`${styles.toastItem} ${styles[message.type]}`}
            >
              <div className={styles.content}>
                <span className={`${styles.toastIcon} ${styles[message.type]}`}>
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
