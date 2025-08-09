import Spinner from "./Spinner";

export default {
	title: "Components/Spinner",
	component: Spinner,
	parameters: {
		docs: {
			description: {
				component:
					"載入指示器組件，用於顯示內容載入中的狀態。支援三種尺寸和自定義顏色。",
			},
		},
	},
	argTypes: {
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
			description: "Spinner 的尺寸大小",
			table: {
				defaultValue: { summary: "md" },
				type: { summary: "sm | md | lg" },
			},
		},
		color: {
			control: { type: "color" },
			description: "Spinner 的顏色",
			table: {
				defaultValue: { summary: "#007bff" },
			},
		},
	},
	args: {
		size: "md",
		color: "#007bff",
	},
};

export const Default = {
	parameters: {
		docs: {
			description: {
				story: "預設的中等尺寸載入指示器，適合大部分使用場景。",
			},
		},
	},
};

export const Small = {
	args: {
		size: "sm",
	},
	parameters: {
		docs: {
			description: {
				story: "小尺寸 Spinner，適合在按鈕內或較小的元件中使用。",
			},
		},
	},
};

export const Medium = {
	args: {
		size: "md",
	},
	parameters: {
		docs: {
			description: {
				story: "中等尺寸 Spinner，預設大小，適合一般的載入提示。",
			},
		},
	},
};

export const Large = {
	args: {
		size: "lg",
	},
	parameters: {
		docs: {
			description: {
				story: "大尺寸 Spinner，適合頁面級別的載入提示或重要的載入狀態。",
			},
		},
	},
};

export const CustomColors = {
	name: "自定義顏色",
	render: () => (
		<div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
			<div style={{ textAlign: "center" }}>
				<Spinner color="#dc3545" />
				<p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>
					紅色
				</p>
			</div>
			<div style={{ textAlign: "center" }}>
				<Spinner color="#28a745" />
				<p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>
					綠色
				</p>
			</div>
			<div style={{ textAlign: "center" }}>
				<Spinner color="#ffc107" />
				<p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>
					黃色
				</p>
			</div>
			<div style={{ textAlign: "center" }}>
				<Spinner color="#6f42c1" />
				<p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>
					紫色
				</p>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "可以自定義 Spinner 的顏色來配合不同的設計需求或狀態表示。",
			},
		},
		controls: { disable: true },
	},
};

export const SizeComparison = {
	name: "尺寸比較",
	render: () => (
		<div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
			<div style={{ textAlign: "center" }}>
				<Spinner size="sm" />
				<p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>
					Small (sm)
				</p>
			</div>
			<div style={{ textAlign: "center" }}>
				<Spinner size="md" />
				<p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>
					Medium (md)
				</p>
			</div>
			<div style={{ textAlign: "center" }}>
				<Spinner size="lg" />
				<p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>
					Large (lg)
				</p>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "三種不同尺寸的 Spinner，可根據使用情境選擇適合的大小。",
			},
		},
		controls: { disable: true },
	},
};

export const UsageExamples = {
	name: "使用範例",
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
			{/* 按鈕載入 */}
			<div>
				<h4 style={{ margin: "0 0 12px 0", color: "#333" }}>按鈕載入狀態</h4>
				<p style={{ margin: "0 0 12px 0", color: "#666", fontSize: "14px" }}>
					在按鈕中使用小尺寸 Spinner 表示處理中
				</p>
				<button
					style={{
						display: "flex",
						alignItems: "center",
						gap: "8px",
						padding: "8px 16px",
						border: "1px solid #007bff",
						borderRadius: "4px",
						background: "#007bff",
						color: "white",
						cursor: "not-allowed",
					}}
				>
					<Spinner size="sm" color="white" />
					處理中...
				</button>
			</div>

			<div>
				<h4 style={{ margin: "0 0 12px 0", color: "#333" }}>卡片載入狀態</h4>
				<p style={{ margin: "0 0 12px 0", color: "#666", fontSize: "14px" }}>
					卡片內容載入時的中央顯示
				</p>
				<div
					style={{
						width: "300px",
						height: "200px",
						border: "1px solid #ddd",
						borderRadius: "8px",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						gap: "12px",
					}}
				>
					<Spinner size="md" />
					<span style={{ color: "#666", fontSize: "14px" }}>載入中...</span>
				</div>
			</div>

			<div>
				<h4 style={{ margin: "0 0 12px 0", color: "#333" }}>頁面載入狀態</h4>
				<p style={{ margin: "0 0 12px 0", color: "#666", fontSize: "14px" }}>
					整個頁面或大區塊的載入指示
				</p>
				<div
					style={{
						width: "100%",
						height: "150px",
						border: "1px solid #ddd",
						borderRadius: "8px",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						gap: "16px",
						backgroundColor: "#f8f9fa",
					}}
				>
					<Spinner size="lg" />
					<span style={{ color: "#666" }}>頁面載入中...</span>
				</div>
			</div>

			<div>
				<h4 style={{ margin: "0 0 12px 0", color: "#333" }}>列表項目載入</h4>
				<p style={{ margin: "0 0 12px 0", color: "#666", fontSize: "14px" }}>
					在列表項目中顯示個別項目的載入狀態
				</p>
				<div style={{ border: "1px solid #ddd", borderRadius: "8px" }}>
					<div style={{ padding: "12px 16px", borderBottom: "1px solid #eee" }}>
						<span>項目 1 - 已載入</span>
					</div>
					<div
						style={{
							padding: "12px 16px",
							borderBottom: "1px solid #eee",
							display: "flex",
							alignItems: "center",
							gap: "8px",
						}}
					>
						<Spinner size="sm" />
						<span style={{ color: "#666" }}>項目 2 - 載入中...</span>
					</div>
					<div style={{ padding: "12px 16px" }}>
						<span>項目 3 - 已載入</span>
					</div>
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Spinner 在不同使用場景下的實際應用範例，展示最佳使用方式。",
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
				<h4 style={{ color: "#333", margin: "0 0 12px 0" }}>尺寸選擇指南</h4>
				<ul style={{ color: "#666", margin: 0, paddingLeft: "20px" }}>
					<li>
						<strong>Small (sm)：</strong>按鈕內、表單欄位旁、小型元件
					</li>
					<li>
						<strong>Medium (md)：</strong>卡片載入、一般內容區域、預設選擇
					</li>
					<li>
						<strong>Large (lg)：</strong>頁面級載入、重要的載入狀態
					</li>
				</ul>
			</div>

			<div style={{ marginBottom: "24px" }}>
				<h4 style={{ color: "#333", margin: "0 0 12px 0" }}>顏色使用建議</h4>
				<ul style={{ color: "#666", margin: 0, paddingLeft: "20px" }}>
					<li>
						<strong>品牌色：</strong>一般載入狀態，與介面整體風格一致
					</li>
					<li>
						<strong>白色：</strong>深色背景或彩色按鈕內使用
					</li>
					<li>
						<strong>狀態色：</strong>特定狀態提示（紅色表示錯誤處理中等）
					</li>
				</ul>
			</div>

			<div style={{ marginBottom: "24px" }}>
				<h4 style={{ color: "#333", margin: "0 0 12px 0" }}>最佳實踐</h4>
				<ul style={{ color: "#666", margin: 0, paddingLeft: "20px" }}>
					<li>載入時間超過 1 秒時才顯示 Spinner</li>
					<li>搭配說明文字讓使用者了解載入內容</li>
					<li>避免多個 Spinner 同時出現造成混亂</li>
					<li>載入完成後要及時移除 Spinner</li>
					<li>在白色背景上使用品牌色，深色背景使用白色</li>
				</ul>
			</div>

			<div>
				<h4 style={{ color: "#333", margin: "0 0 12px 0" }}>無障礙考量</h4>
				<ul style={{ color: "#666", margin: 0, paddingLeft: "20px" }}>
					<li>為 Spinner 添加適當的 aria-label 或說明文字</li>
					<li>考慮使用 role="status" 或 aria-live 屬性</li>
					<li>確保動畫不會對視覺敏感使用者造成不適</li>
				</ul>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Spinner 組件的使用指南和設計原則，幫助開發者正確使用載入指示器。",
			},
		},
		controls: { disable: true },
	},
};
