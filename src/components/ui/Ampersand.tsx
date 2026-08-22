export function Ampersand({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`font-display italic text-gold ${className}`}
    >
      &amp;
    </span>
  );
}
