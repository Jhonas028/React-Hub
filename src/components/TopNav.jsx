import { useLocation } from "react-router-dom";
import { Search, Bell } from "lucide-react";

const pageTitles = {
  "/": "Dashboard",
  "/articles": "Articles",
  "/playground": "Playground",
  "/about": "About",
};

export default function TopNav() {
  const { pathname } = useLocation();
  const baseRoute = "/" + pathname.split("/")[1];
  const title = pageTitles[baseRoute] || "ReactHub";

  return (
    <header
      style={{
        height: 56,
        borderBottom: "1px solid var(--border)",
        background: "var(--bg-secondary)",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        gap: 16,
        flexShrink: 0,
      }}
    >
      {/* Page title */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
        <span
          style={{
            fontWeight: 600,
            fontSize: 16,
            color: "var(--text-primary)",
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontSize: 11,
            fontWeight: 500,
            color: "var(--text-muted)",
            background: "var(--bg-elevated)",
            border: "1px solid var(--border-light)",
            borderRadius: 6,
            padding: "2px 8px",
          }}
        >
          v18.3.0
        </span>
      </div>

      {/* Search */}
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 8,
          padding: "6px 12px",
          color: "var(--text-muted)",
          fontSize: 13,
          cursor: "pointer",
          minWidth: 160,
        }}
      >
        <Search size={14} />
        <span>Search...</span>
        <kbd
          style={{
            marginLeft: "auto",
            fontSize: 11,
            color: "var(--text-muted)",
            background: "var(--bg-elevated)",
            border: "1px solid var(--border-light)",
            borderRadius: 4,
            padding: "1px 5px",
            fontFamily: "inherit",
          }}
        >
          ⌘K
        </kbd>
      </button>

      {/* Bell */}
      <button
        style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--text-muted)",
          position: "relative",
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
        }}
      >
        <Bell size={16} />
        <span
          style={{
            position: "absolute",
            top: 6,
            right: 6,
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "var(--accent)",
            border: "1.5px solid var(--bg-secondary)",
          }}
        />
      </button>

      {/* Avatar */}
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #5b6ef5, #a855f7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          fontWeight: 700,
          color: "#fff",
          cursor: "pointer",
        }}
      >
        JD
      </div>
    </header>
  );
}
