export default function TopicPill({ label }) {
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 500,
        padding: "2px 8px",
        borderRadius: 6,
        background: "var(--bg-elevated)",
        border: "1px solid var(--border-light)",
        color: "var(--text-secondary)",
        display: "inline-block",
      }}
    >
      {label}
    </span>
  );
}
