import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TopicPill from "../components/TopicPill";
import articles from "../data/reactBlogs.json";

const levelColors = {
  Advanced: { bg: "rgba(91,110,245,0.15)", color: "#818cf8" },
  Intermediate: { bg: "rgba(251,146,60,0.15)", color: "#fb923c" },
  Beginner: { bg: "rgba(34,197,94,0.15)", color: "#4ade80" },
};

function MasonryCard({ article }) {
  const navigate = useNavigate();
  const level = levelColors[article.level] || levelColors.Intermediate;
  const isBig = article.featured;

  return (
    <div
      onClick={() => navigate(`/articles/${article.id}`)}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 14,
        padding: isBig ? 24 : 16,
        cursor: "pointer",
        transition: "all 0.2s ease",
        display: "flex",
        flexDirection: isBig ? "column" : "row",
        gap: isBig ? 16 : 14,
        alignItems: isBig ? "flex-start" : "center",
        gridRow: isBig ? "span 2" : "span 1",
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
      {/* Icon */}
      <div
        style={{
          width: isBig ? 48 : 40,
          height: isBig ? 48 : 40,
          borderRadius: 12,
          background: article.iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: isBig ? 22 : 18,
          flexShrink: 0,
          position: "relative",
        }}
      >
        {article.icon}
        {isBig && (
          <span
            style={{
              position: "absolute",
              top: -4,
              right: -4,
              fontSize: 10,
              fontWeight: 700,
              padding: "2px 6px",
              borderRadius: 4,
              background: level.bg,
              color: level.color,
              border: `1px solid ${level.color}40`,
            }}
          >
            {article.level}
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {isBig ? (
          <>
            <h3
              style={{
                fontWeight: 700,
                fontSize: 18,
                marginBottom: 10,
                lineHeight: 1.35,
              }}
            >
              {article.title}
            </h3>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: 13,
                lineHeight: 1.6,
                marginBottom: 16,
              }}
            >
              {article.description}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: article.authorColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  {article.authorInitial}
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>
                    {article.author}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                    {article.authorRole}
                  </div>
                </div>
              </div>
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                ⏱ {article.readTime} min
              </span>
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                fontWeight: 600,
                fontSize: 14,
                marginBottom: 4,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {article.title}
            </div>
            <div
              style={{
                fontSize: 12,
                color: "var(--text-secondary)",
                marginBottom: 6,
              }}
            >
              {article.author}
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {article.tags.map((t) => (
                <TopicPill key={t} label={t} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Articles() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return articles;
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.author.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q)),
    );
  }, [query]);

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
      <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24 }}>
        All Articles
      </h1>

      {/* Search bar */}
      <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 10,
            padding: "10px 16px",
          }}
        >
          <Search size={16} color="var(--text-muted)" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, authors, or tags..."
            style={{
              flex: 1,
              background: "none",
              border: "none",
              outline: "none",
              color: "var(--text-primary)",
              fontSize: 14,
            }}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              style={{
                color: "var(--text-muted)",
                cursor: "pointer",
                background: "none",
                border: "none",
              }}
            >
              <X size={14} />
            </button>
          )}
        </div>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 10,
            padding: "10px 16px",
            color: "var(--text-secondary)",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          <SlidersHorizontal size={16} /> Filters
        </button>
      </div>

      {/* Count */}
      <p
        style={{
          fontSize: 13,
          color: "var(--text-secondary)",
          marginBottom: 20,
        }}
      >
        Showing{" "}
        <strong style={{ color: "var(--text-primary)" }}>
          {filtered.length}
        </strong>{" "}
        of {articles.length} articles
      </p>

      {/* Grid or empty state */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", paddingTop: 80 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <Search size={24} color="var(--text-muted)" />
          </div>
          <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
            No articles found
          </h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: 24 }}>
            Try adjusting your search or filters
          </p>
          <button
            onClick={() => setQuery("")}
            style={{
              background: "var(--accent)",
              color: "#fff",
              padding: "10px 24px",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              border: "none",
            }}
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "160px",
            gap: 16,
          }}
        >
          {filtered.map((article) => (
            <MasonryCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
