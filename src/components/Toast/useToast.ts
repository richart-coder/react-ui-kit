import { useCallback, useRef } from "react";
import subEvent from "./event-bus";

type ToastType = "success" | "error" | "warning" | "info";

const useToast = () => {
  const counterRef = useRef(0);

  const success = useCallback((message: string) => {
    const id = `toast-${++counterRef.current}`;
    subEvent.publish("toast", {
      id,
      message,
      type: "success",
    });
  }, []);

  const error = useCallback((message: string) => {
    const id = `toast-${++counterRef.current}`;
    subEvent.publish("toast", {
      id,
      message,
      type: "error",
    });
  }, []);

  const warning = useCallback((message: string) => {
    const id = `toast-${++counterRef.current}`;
    subEvent.publish("toast", {
      id,
      message,
      type: "warning",
    });
  }, []);

  const info = useCallback((message: string) => {
    const id = `toast-${++counterRef.current}`;
    subEvent.publish("toast", {
      id,
      message,
      type: "info",
    });
  }, []);

  return {
    success,
    error,
    warning,
    info,
  };
};

export default useToast;
export type { ToastType };
