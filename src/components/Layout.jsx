import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

export default function Layout() {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <TopNav />
        <main
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "32px 40px",
            background: "var(--bg-primary)",
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
