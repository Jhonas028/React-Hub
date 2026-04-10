import { useNavigate } from "react-router-dom";
import {
  Star,
  TrendingUp,
  FileText,
  Users,
  Tag,
  ArrowRight,
} from "lucide-react";
import ArticleCard from "../components/ArticleCard";
import CodePreview from "../components/CodePreview";
import articles from "../data/reactBlogs.json";

const spotlightCode = `// React 19: Automatic Memoization
function ExpensiveComponent({ data }) {
  // No useMemo needed!
  // Compiler handles optimization
  const processed = heavyComputation(data);

  return <View data={processed} />;
}`;

export default function Home() {
  const navigate = useNavigate();
  const featured = articles.filter((a) => a.featured);
  const recent = articles.slice(0, 3);

  return (
    <div
      style={{
        maxWidth: 960,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 32,
      }}
    >
      {/* Hero banner */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #1a1060 0%, #0f0c3a 40%, #1a0a40 70%, #2d1060 100%)",
          border: "1px solid #2e2070",
          borderRadius: 16,
          padding: 36,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.15,
            background:
              "radial-gradient(ellipse at 70% 50%, #7c3aed 0%, transparent 60%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              color: "#a78bfa",
              fontWeight: 500,
              background: "rgba(167,139,250,0.1)",
              border: "1px solid rgba(167,139,250,0.2)",
              borderRadius: 20,
              padding: "3px 10px",
              marginBottom: 14,
            }}
          >
            ⚡ New: React 19 Compiler
          </div>
          <h1
            style={{
              fontSize: 32,
              fontWeight: 800,
              marginBottom: 10,
              color: "#fff",
              lineHeight: 1.2,
            }}
          >
            Master Modern React
          </h1>
          <p
            style={{
              color: "#c4b5fd",
              fontSize: 15,
              marginBottom: 24,
              maxWidth: 460,
              lineHeight: 1.6,
            }}
          >
            Deep dives into React internals, hooks, patterns, and the ecosystem.
            Written by core team members and industry experts.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <button
              onClick={() => navigate("/articles")}
              style={{
                background: "var(--accent)",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
                border: "none",
              }}
            >
              Explore Articles <ArrowRight size={14} />
            </button>
            <button
              onClick={() => navigate("/playground")}
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Try Playground
            </button>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
        }}
      >
        {[
          { icon: <FileText size={20} />, value: "50+", label: "Articles" },
          { icon: <Users size={20} />, value: "12", label: "Authors" },
          { icon: <Tag size={20} />, value: "8", label: "Topics" },
        ].map(({ icon, value, label }) => (
          <div
            key={label}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div style={{ color: "var(--accent)" }}>{icon}</div>
            <div style={{ fontSize: 26, fontWeight: 800 }}>{value}</div>
            <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Featured deep dives */}
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 16,
          }}
        >
          <Star size={16} color="#facc15" fill="#facc15" />
          <h2 style={{ fontWeight: 700, fontSize: 16 }}>Featured Deep Dives</h2>
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
        >
          {featured.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              variant="featured"
            />
          ))}
        </div>
      </div>

      {/* Bottom two-column: recently published + code spotlight */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* Recently published */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 16,
            }}
          >
            <TrendingUp size={16} color="#22c55e" />
            <h2 style={{ fontWeight: 700, fontSize: 16 }}>
              Recently Published
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {recent.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                variant="default"
              />
            ))}
          </div>
        </div>

        {/* Code spotlight */}
        <div>
          <h2 style={{ fontWeight: 700, fontSize: 16, marginBottom: 16 }}>
            Code Spotlight
          </h2>
          <CodePreview code={spotlightCode} language="jsx" />
        </div>
      </div>
    </div>
  );
}
