type ToastType = "success" | "error" | "warning" | "info";

type ToastMessage = {
  id: string;
  message: string;
  type: ToastType;
};

type ToastPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export type { ToastMessage, ToastPosition, ToastType };
