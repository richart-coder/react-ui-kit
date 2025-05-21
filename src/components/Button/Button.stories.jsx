import React from "react";
import Button from "./Button";
const COLOR_OPTIONS = {
  "#2563eb": "主要藍",
  "#16a34a": "成功綠",
  "#eab308": "警告黃",
  "#dc2626": "危險紅",
  "#4f46e5": "靛藍色",
  "#8b5cf6": "紫羅蘭",
  "#ec4899": "粉玫瑰",
  "#4b5563": "深灰色",
  "#f3f4f6": "淺灰色",
  "#171717": "純黑色",
};
const COLORS = [
  "#2563eb",
  "#16a34a",
  "#eab308",
  "#dc2626",
  "#4f46e5",
  "#8b5cf6",
  "#ec4899",
  "#4b5563",
  "#f3f4f6",
  "#171717",
];
const TEXT_COLOR_OPTIONS = {
  white: "純白色",
  "#171717": "純黑色",
  "#1e40af": "深藍色",
  "#166534": "深綠色",
  "#78350f": "深棕色",
  "#374151": "深灰色",
};
const TEXT_COLORS = [
  "white",
  "#171717",
  "#1e40af",
  "#166534",
  "#78350f",
  "#374151",
];
export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "按鈕",
  color: "#3b82f6",
  textColor: "white",
  width: 200,
};
Default.argTypes = {
  color: {
    options: COLORS,
    control: {
      type: "select",
      labels: COLOR_OPTIONS,
    },
    description: "按鈕背景顏色",
  },
  textColor: {
    options: TEXT_COLORS,
    control: {
      type: "select",
      labels: TEXT_COLOR_OPTIONS,
    },
    description: "按鈕文字顏色",
  },
  children: {
    control: "text",
    description: "按鈕文字",
  },
  width: { table: { disable: true } },
};

export const Loading = Template.bind({});
Loading.args = {
  children: "加載中",
  color: "#3b82f6",
  textColor: "white",
  width: 200,
  isLoading: true,
};
Loading.argTypes = {
  color: {
    options: COLORS,
    control: {
      type: "select",
      labels: COLOR_OPTIONS,
    },
    description: "按鈕背景顏色",
  },
  textColor: {
    options: TEXT_COLORS,
    control: {
      type: "select",
      labels: TEXT_COLOR_OPTIONS,
    },
    description: "按鈕文字顏色",
  },
  children: {
    control: "text",
    description: "按鈕文字",
  },
  width: {
    control: { type: "number" },
    description: "按鈕寬度 (px)",
    defaultValue: 200,
  },
};
