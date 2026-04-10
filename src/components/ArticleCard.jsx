import { useNavigate } from "react-router-dom";
import { Clock, ArrowUpRight } from "lucide-react";
import TopicPill from "./TopicPill";

const levelColors = {
  Advanced: { bg: "rgba(91,110,245,0.15)", color: "#818cf8" },
  Intermediate: { bg: "rgba(251,146,60,0.15)", color: "#fb923c" },
  Beginner: { bg: "rgba(34,197,94,0.15)", color: "#4ade80" },
};

export default function ArticleCard({ article, variant = "default" }) {
  const navigate = useNavigate();
  const level = levelColors[article.level] || levelColors.Intermediate;

  if (variant === "featured") {
    return (
      <div
        onClick={() => navigate(`/articles/${article.id}`)}
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          padding: 24,
          cursor: "pointer",
          transition: "all 0.2s ease",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          position: "relative",
          overflow: "hidden",
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
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: article.iconBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              flexShrink: 0,
            }}
          >
            {article.icon}
          </div>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              padding: "3px 8px",
              borderRadius: 6,
              background: level.bg,
              color: level.color,
            }}
          >
            {article.level}
          </span>
        </div>

        <div>
          <h3
            style={{
              fontWeight: 700,
              fontSize: 16,
              marginBottom: 8,
              lineHeight: 1.4,
            }}
          >
            {article.title}
          </h3>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: 13,
              lineHeight: 1.6,
            }}
          >
            {article.description}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 24,
                height: 24,
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
              <div style={{ fontSize: 12, fontWeight: 500 }}>
                {article.author}
              </div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                {article.authorRole}
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "var(--text-muted)",
              fontSize: 12,
            }}
          >
            <Clock size={12} />
            <span>{article.readTime} min</span>
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>
    );
  }

  // default / list variant
  return (
    <div
      onClick={() => navigate(`/articles/${article.id}`)}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: "16px 20px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        display: "flex",
        alignItems: "center",
        gap: 16,
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
          width: 36,
          height: 36,
          borderRadius: 10,
          background: article.iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 16,
          flexShrink: 0,
        }}
      >
        {article.icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
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
          {article.tags.map((tag) => (
            <TopicPill key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
