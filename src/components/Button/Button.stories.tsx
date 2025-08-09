import Button from "./Button";

export default {
	title: "Components/Button",
	component: Button,
	parameters: {
		docs: {
			description: {
				component:
					"通用按鈕組件，支援兩種視覺風格和禁用狀態。適用於表單提交、操作確認等場景。",
			},
		},
	},
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["solid", "outline"],
			description: "按鈕風格變體",
			table: {
				defaultValue: { summary: "solid" },
				type: { summary: "solid | outline" },
			},
		},
		children: {
			control: { type: "text" },
			description: "按鈕顯示的文字或內容",
		},
		disabled: {
			control: { type: "boolean" },
			description: "禁用按鈕，阻止使用者互動",
			table: {
				defaultValue: { summary: "false" },
			},
		},
		onClick: {
			action: "clicked",
			description: "點擊時的回調函數",
		},
	},
	args: {
		children: "按鈕",
	},
};

export const Default = {
	parameters: {
		docs: {
			description: {
				story: "預設的 solid 風格按鈕，適合主要操作使用。",
			},
		},
	},
};

export const Solid = {
	args: {
		variant: "solid",
		children: "主要操作",
	},
	parameters: {
		docs: {
			description: {
				story:
					"實心按鈕用於主要操作，如提交表單、確認動作等。具有較強的視覺重點。",
			},
		},
	},
};

export const Outline = {
	args: {
		variant: "outline",
		children: "次要操作",
	},
	parameters: {
		docs: {
			description: {
				story:
					"外框按鈕用於次要操作，如取消、返回等。視覺權重較輕，不會干擾主要操作。",
			},
		},
	},
};

export const Disabled = {
	args: {
		disabled: true,
		children: "無法操作",
	},
	parameters: {
		docs: {
			description: {
				story:
					"禁用狀態的按鈕無法點擊，通常用於表單驗證未通過或操作不可用的情況。",
			},
		},
	},
};

export const UsageExamples = {
	name: "使用範例",
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
			<div>
				<h4 style={{ margin: "0 0 12px 0", color: "#333" }}>表單操作</h4>
				<p style={{ margin: "0 0 12px 0", color: "#666", fontSize: "14px" }}>
					表單中的主要操作使用 solid，次要操作使用 outline
				</p>
				<div style={{ display: "flex", gap: "8px" }}>
					<Button variant="solid">提交</Button>
					<Button variant="outline">取消</Button>
				</div>
			</div>

			<div>
				<h4 style={{ margin: "0 0 12px 0", color: "#333" }}>確認對話框</h4>
				<p style={{ margin: "0 0 12px 0", color: "#666", fontSize: "14px" }}>
					重要操作的確認，危險操作建議使用 outline 降低誤觸機率
				</p>
				<div style={{ display: "flex", gap: "8px" }}>
					<Button variant="outline">刪除</Button>
					<Button variant="solid">保留</Button>
				</div>
			</div>

			<div>
				<h4 style={{ margin: "0 0 12px 0", color: "#333" }}>載入狀態</h4>
				<p style={{ margin: "0 0 12px 0", color: "#666", fontSize: "14px" }}>
					處理中時禁用按鈕，防止重複提交
				</p>
				<div style={{ display: "flex", gap: "8px" }}>
					<Button disabled>處理中...</Button>
					<Button variant="outline">取消</Button>
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "按鈕在不同場景下的實際應用範例，展示最佳使用方式。",
			},
		},
		controls: { disable: true },
	},
};

export const AllVariants = {
	name: "所有變體",
	render: () => (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(2, 1fr)",
				gap: "20px",
				padding: "20px",
				border: "1px solid #eee",
				borderRadius: "8px",
			}}
		>
			<div>
				<h5 style={{ margin: "0 0 12px 0" }}>Solid 實心</h5>
				<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
					<Button variant="solid">正常狀態</Button>
					<Button variant="solid" disabled>
						禁用狀態
					</Button>
				</div>
			</div>

			<div>
				<h5 style={{ margin: "0 0 12px 0" }}>Outline 外框</h5>
				<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
					<Button variant="outline">正常狀態</Button>
					<Button variant="outline" disabled>
						禁用狀態
					</Button>
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "按鈕組件支援的所有視覺變體，包含正常和禁用狀態。",
			},
		},
		controls: { disable: true },
	},
};

export const DesignGuidelines = {
	name: "設計指南",
	render: () => (
		<div style={{ maxWidth: "600px", lineHeight: "1.6" }}>
			<div style={{ marginBottom: "24px" }}>
				<h4 style={{ color: "#333", margin: "0 0 12px 0" }}>
					何時使用 Solid 按鈕
				</h4>
				<ul style={{ color: "#666", margin: 0, paddingLeft: "20px" }}>
					<li>主要操作（提交、確認、購買）</li>
					<li>希望使用者優先點擊的動作</li>
					<li>一個介面區域中只能有一個 solid 按鈕</li>
				</ul>
			</div>

			<div style={{ marginBottom: "24px" }}>
				<h4 style={{ color: "#333", margin: "0 0 12px 0" }}>
					何時使用 Outline 按鈕
				</h4>
				<ul style={{ color: "#666", margin: 0, paddingLeft: "20px" }}>
					<li>次要操作（取消、返回、編輯）</li>
					<li>危險操作（刪除、重置）</li>
					<li>與 solid 按鈕搭配使用</li>
				</ul>
			</div>

			<div>
				<h4 style={{ color: "#333", margin: "0 0 12px 0" }}>最佳實踐</h4>
				<ul style={{ color: "#666", margin: 0, paddingLeft: "20px" }}>
					<li>按鈕文字使用動詞，清楚說明操作結果</li>
					<li>重要操作放在右側，次要操作放在左側</li>
					<li>載入或處理中時使用 disabled 狀態</li>
					<li>保持按鈕文字簡潔，避免過長</li>
				</ul>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "按鈕組件的使用指南和設計原則，幫助開發者做出正確的選擇。",
			},
		},
		controls: { disable: true },
	},
};
