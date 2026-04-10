import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Terminal,
  User,
  Settings,
} from "lucide-react";

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/articles", icon: FileText, label: "Articles" },
  { to: "/playground", icon: Terminal, label: "Playground" },
  { to: "/about", icon: User, label: "About" },
];

export default function Sidebar() {
  return (
    <nav
      style={{
        width: "var(--sidebar-width)",
        background: "var(--bg-secondary)",
        borderRight: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "12px 0",
        gap: "4px",
        flexShrink: 0,
        zIndex: 50,
      }}
    >
      {/* Logo */}
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          background: "linear-gradient(135deg, #5b6ef5, #8b5cf6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
          flexShrink: 0,
        }}
      >
        <Terminal size={18} color="#fff" />
      </div>

      {/* Nav links */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          alignItems: "center",
        }}
      >
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            title={label}
            style={({ isActive }) => ({
              width: 40,
              height: 40,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: isActive ? "#fff" : "var(--text-muted)",
              background: isActive ? "var(--accent)" : "transparent",
              transition: "all 0.15s ease",
            })}
            onMouseEnter={(e) => {
              if (!e.currentTarget.classList.contains("active")) {
                e.currentTarget.style.background = "var(--bg-elevated)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }
            }}
            onMouseLeave={(e) => {
              if (!e.currentTarget.dataset.active) {
                e.currentTarget.style.background = "";
                e.currentTarget.style.color = "";
              }
            }}
          >
            <Icon size={18} />
          </NavLink>
        ))}
      </div>

      {/* Settings at bottom */}
      <NavLink
        to="/settings"
        title="Settings"
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--text-muted)",
          marginTop: "auto",
        }}
      >
        <Settings size={18} />
      </NavLink>
    </nav>
  );
}
