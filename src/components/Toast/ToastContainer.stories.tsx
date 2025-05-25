import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ToastContainer from "./ToastContainer";
import useToast from "./useToast";

const ToastStoryWrapper = ({
  position,
  duration,
  messageType,
  messageLength,
  useCase,
}: {
  position: any;
  duration: number;
  messageType: "success" | "error" | "warning" | "info";
  messageLength: "short" | "medium" | "long";
  useCase: "basic" | "batch" | "flow" | "special";
}) => {
  const toast = useToast();

  const messages = {
    short: {
      success: "成功",
      error: "錯誤",
      warning: "警告",
      info: "通知",
    },
    medium: {
      success: "操作執行成功，資料已儲存",
      error: "操作失敗，請檢查網路連線",
      warning: "帳戶餘額不足，請先儲值",
      info: "系統將於10分鐘後進行維護",
    },
    long: {
      success:
        "恭喜！您的帳戶驗證已完成，現在可以使用所有功能，包括轉帳、投資和信用卡申請等服務",
      error:
        "系統發生嚴重錯誤，無法完成資料同步作業，請聯繫客服人員或稍後再試，錯誤代碼：HTTP 500",
      warning:
        "系統檢測到異常登入活動，為了您的帳戶安全，請立即修改密碼並啟用雙因素驗證功能",
      info: "ℹ️ 新版本已發布，包含重要安全更新和效能改善，建議您立即更新以獲得最佳使用體驗",
    },
  };

  const handleUseCase = () => {
    const message = messages[messageLength][messageType];

    switch (useCase) {
      case "basic":
        toast[messageType](message);
        break;

      case "batch":
        for (let i = 1; i <= 3; i++) {
          setTimeout(() => toast[messageType](`${message} ${i}/3`), i * 300);
        }
        break;

      case "flow":
        toast.info("開始處理...");
        setTimeout(() => toast[messageType](message), 1000);
        setTimeout(() => toast.success("流程完成"), 2000);
        break;

      case "special":
        const specialMessages = {
          success: "✨ Emoji 成功訊息 🎉",
          error: "HTTP 404: Resource not found",
          warning: "餘額：NT$ 1,234.56 元",
          info: "HTML <script>alert('test')</script> 測試",
        };
        toast[messageType](specialMessages[messageType]);
        break;
    }
  };

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "20px",
            padding: "16px",
            backgroundColor: "#f8fafc",
            borderRadius: "8px",
            border: "1px solid #e2e8f0",
          }}
        >
          <div>
            <strong>當前配置：</strong>
          </div>
          <div>
            類型: <code>{messageType}</code>
          </div>
          <div>
            長度: <code>{messageLength}</code>
          </div>
          <div>
            場景: <code>{useCase}</code>
          </div>
          <div>
            位置: <code>{position}</code>
          </div>
          <div>
            持續: <code>{duration}ms</code>
          </div>
        </div>

        <button
          onClick={handleUseCase}
          style={{
            padding: "12px 24px",
            backgroundColor: "#6366f1",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          觸發 Toast
        </button>

        <div
          style={{
            marginTop: "16px",
            padding: "12px",
            backgroundColor: "#f1f5f9",
            borderRadius: "6px",
            fontSize: "14px",
            color: "#475569",
          }}
        >
          <strong>預覽訊息：</strong> {messages[messageLength][messageType]}
        </div>
      </div>

      <ToastContainer position={position} duration={duration} />
    </div>
  );
};

const meta: Meta<typeof ToastStoryWrapper> = {
  title: "Components/Toast",
  component: ToastStoryWrapper,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Toast 通知組件，支援四種類型和多種使用場景。透過控制面板調整不同參數進行測試。",
      },
    },
  },
  argTypes: {
    position: {
      control: "select",
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
      description: "Toast 顯示位置",
    },
    duration: {
      control: { type: "range", min: 1000, max: 10000, step: 500 },
      description: "Toast 顯示持續時間 (毫秒)",
    },
    messageType: {
      control: "select",
      options: ["success", "error", "warning", "info"],
      description: "Toast 類型",
    },
    messageLength: {
      control: "select",
      options: ["short", "medium", "long"],
      description: "訊息長度",
    },
    useCase: {
      control: "select",
      options: ["basic", "batch", "flow", "special"],
      description: "使用案例",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: "basic" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {
    position: "top-right",
    duration: 3000,
    messageType: "success",
    messageLength: "medium",
    useCase: "basic",
  },
  parameters: {
    docs: {
      description: {
        story: `
互動式 Toast 測試工具，可以通過控制面板調整各種參數：

**訊息類型 (messageType):**
- \`success\` - 成功通知
- \`error\` - 錯誤通知  
- \`warning\` - 警告通知
- \`info\` - 資訊通知

**訊息長度 (messageLength):**
- \`short\` - 短訊息
- \`medium\` - 中等長度
- \`long\` - 長訊息 (包含 Emoji)

**使用案例 (useCase):**
- \`basic\` - 單一 Toast
- \`batch\` - 批次顯示 (3個)
- \`flow\` - 流程模擬 (資訊 → 指定類型 → 成功)
- \`special\` - 特殊字符測試

**其他參數:**
- \`position\` - 顯示位置
- \`duration\` - 持續時間
        `,
      },
    },
  },
};
