export function Eyebrow({
  children,
  tone = "gold",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "gold" | "ink" | "cream";
  className?: string;
}) {
  const toneClass =
    tone === "gold" ? "text-gold" : tone === "cream" ? "text-cream" : "text-ink-soft";

  return (
    <span
      className={`block font-body text-xs font-medium uppercase tracking-[0.15em] ${toneClass} ${className}`}
    >
      {children}
    </span>
  );
}
