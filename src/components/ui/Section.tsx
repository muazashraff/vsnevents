export function Section({
  children,
  className = "",
  tone = "cream",
  maxWidth = "max-w-7xl",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "cream" | "cream-dark";
  maxWidth?: string;
}) {
  const bg = tone === "cream-dark" ? "bg-cream-dark" : "bg-cream";
  return (
    <section className={bg}>
      <div className={`mx-auto ${maxWidth} px-6 py-16 md:px-10 md:py-24 ${className}`}>
        {children}
      </div>
    </section>
  );
}
