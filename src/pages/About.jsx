import { Mail, MapPin, Calendar } from "lucide-react";

const contributors = [
  { name: "Dan Abramov", role: "React Core", initial: "D", color: "#e17055" },
  {
    name: "Sophie Alpert",
    role: "Engineering",
    initial: "S",
    color: "#a855f7",
  },
  { name: "Sebastian M", role: "Architecture", initial: "S", color: "#3b82f6" },
  { name: "Andrew Clark", role: "Core Team", initial: "A", color: "#22c55e" },
];

const stats = [
  { value: "50+", label: "Articles" },
  { value: "12", label: "Contributors" },
  { value: "10K", label: "Readers" },
  { value: "2024", label: "Since" },
];

export default function About() {
  return (
    <div
      style={{
        maxWidth: 720,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 32,
      }}
    >
      {/* Profile header */}
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "linear-gradient(135deg, #a855f7, #6366f1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 32,
            fontWeight: 800,
            color: "#fff",
            flexShrink: 0,
          }}
        >
          R
        </div>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 4 }}>
            ReactHub
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
            Advanced React Learning Platform
          </p>
        </div>
      </div>

      {/* Stats row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 12,
        }}
      >
        {stats.map(({ value, label }) => (
          <div
            key={label}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "20px 16px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>
              {value}
            </div>
            <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* About section */}
      <div>
        <h2 style={{ fontWeight: 700, fontSize: 18, marginBottom: 14 }}>
          About
        </h2>
        <p
          style={{
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            marginBottom: 14,
          }}
        >
          ReactHub is a curated platform for learning advanced React concepts.
          We collaborate with React core team members and industry experts to
          bring you in-depth tutorials, real-world patterns, and insider
          knowledge about the React ecosystem.
        </p>
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
          Whether you're mastering hooks, exploring concurrent features, or
          building production applications, our content is designed to
          accelerate your journey from intermediate to expert React developer.
        </p>
      </div>

      {/* Contributors */}
      <div>
        <h2 style={{ fontWeight: 700, fontSize: 18, marginBottom: 16 }}>
          Contributors
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
          }}
        >
          {contributors.map(({ name, role, initial, color }) => (
            <div
              key={name}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "20px 16px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-light)";
                e.currentTarget.style.background = "var(--bg-card-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "var(--bg-card)";
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                {initial}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 2 }}>
                  {name}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                  {role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Get in touch */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a1060 0%, #0f0c3a 100%)",
          border: "1px solid #2e2070",
          borderRadius: 16,
          padding: 28,
        }}
      >
        <h2
          style={{
            fontWeight: 700,
            fontSize: 18,
            marginBottom: 20,
            color: "#fff",
          }}
        >
          Get in Touch
        </h2>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "#c4b5fd",
              fontSize: 14,
            }}
          >
            <Mail size={16} /> hello@reacthub.dev
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "#c4b5fd",
              fontSize: 14,
            }}
          >
            <MapPin size={16} /> San Francisco, CA
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "#c4b5fd",
              fontSize: 14,
            }}
          >
            <Calendar size={16} /> Mon-Fri, 9am-6pm PST
          </div>
        </div>
      </div>
    </div>
  );
}
