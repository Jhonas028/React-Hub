import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CodePreview({ code, language = "jsx" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        overflow: "hidden",
        fontFamily: "JetBrains Mono, monospace",
      }}
    >
      {/* Header bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 16px",
          borderBottom: "1px solid var(--border)",
          background: "var(--bg-elevated)",
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#ff5f57",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#febc2e",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#28c840",
            }}
          />
        </div>
        <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
          {language}
        </span>
        <button
          onClick={handleCopy}
          style={{
            color: "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontSize: 12,
            padding: "2px 6px",
            borderRadius: 4,
            background: "transparent",
            border: "1px solid var(--border)",
            cursor: "pointer",
            transition: "color 0.15s",
          }}
        >
          {copied ? <Check size={12} color="#22c55e" /> : <Copy size={12} />}
        </button>
      </div>

      {/* Code body */}
      <pre
        style={{
          padding: "16px 20px",
          overflowX: "auto",
          fontSize: 13,
          lineHeight: 1.7,
          color: "#a8b1c4",
          margin: 0,
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}
