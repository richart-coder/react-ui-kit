import React from "react";
import "./App.css";
import Image from "./components/Image/Image";
import ToastContainer, { useToast } from "./components/Toast";
function App() {
  const toast = useToast();
  return (
    <>
      <ToastContainer position="bottom-right" duration={3000} />
      <div
        style={{
          display: "flex",
          gap: "16px",
          width: "500px",
          height: "300px",
        }}
      >
        <Image
          src="/assets/images/house.jpg"
          alt="test"
          loading="lazy"
          placeholder="blur"
          fill
        />
      </div>
      <Image
        src="/assets/images/house.jpg"
        alt="test"
        loading="lazy"
        placeholder="blur"
        width={500}
        height={300}
      />
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
