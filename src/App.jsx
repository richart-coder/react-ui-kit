import ToastContainer, { useToast } from "./components/Toast";
import "./App.css";

function App() {
  const toast = useToast();
  return (
    <>
      <ToastContainer position="top-right" duration={3000} />
      <div style={{ display: "flex", gap: "16px" }}>
        <button onClick={() => toast.success("操作成功！")}>
          顯示成功 Toast
        </button>
        <button onClick={() => toast.error("發生錯誤！")}>
          顯示錯誤 Toast
        </button>
      </div>
    </>
  );
}

export default App;
