import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import TopicPill from "../components/TopicPill";
import articles from "../data/reactBlogs.json";

export default function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div style={{ textAlign: "center", paddingTop: 80 }}>
        <h2 style={{ marginBottom: 16 }}>Article not found</h2>
        <button
          onClick={() => navigate("/articles")}
          style={{
            background: "var(--accent)",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: 8,
            fontWeight: 600,
            cursor: "pointer",
            border: "none",
          }}
        >
          Back to Articles
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      {/* Back button */}
      <button
        onClick={() => navigate("/articles")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          color: "var(--text-secondary)",
          fontSize: 13,
          fontWeight: 500,
          marginBottom: 28,
          cursor: "pointer",
          background: "none",
          border: "none",
        }}
      >
        <ArrowLeft size={16} /> Back to Articles
      </button>

      {/* Header */}
      <div
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          padding: 32,
          marginBottom: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: article.iconBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
            }}
          >
            {article.icon}
          </div>
          <div>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                padding: "3px 8px",
                borderRadius: 6,
                background: "rgba(91,110,245,0.15)",
                color: "#818cf8",
                marginBottom: 6,
                display: "inline-block",
              }}
            >
              {article.level}
            </span>
            <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
              {article.tags.map((t) => (
                <TopicPill key={t} label={t} />
              ))}
            </div>
          </div>
        </div>

        <h1
          style={{
            fontSize: 26,
            fontWeight: 800,
            marginBottom: 12,
            lineHeight: 1.3,
          }}
        >
          {article.title}
        </h1>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: 15,
            lineHeight: 1.7,
            marginBottom: 20,
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
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: article.authorColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              {article.authorInitial}
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>
                {article.author}
              </div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                {article.authorRole}
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
              color: "var(--text-muted)",
              fontSize: 13,
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <Clock size={13} /> {article.readTime} min read
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <BookOpen size={13} /> Full article
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          padding: 32,
          color: "var(--text-secondary)",
          lineHeight: 1.8,
          fontSize: 15,
        }}
      >
        <p style={{ marginBottom: 20 }}>{article.content}</p>
        <p style={{ marginBottom: 20 }}>
          This is a deep dive article that covers all aspects of{" "}
          {article.title.toLowerCase()}. The content here would typically span
          several thousand words covering the topic in detail.
        </p>
        <p>
          In a real implementation, you would load the full markdown content
          from your data source, parse it, and render it with proper formatting
          including code blocks, images, and callouts.
        </p>
      </div>
    </div>
  );
}
