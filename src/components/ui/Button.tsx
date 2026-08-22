import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "solid-ink" | "solid-oxblood" | "outline" | "outline-cream";

const variantClasses: Record<Variant, string> = {
  "solid-ink": "bg-ink text-cream hover:bg-ink/90",
  "solid-oxblood": "bg-oxblood text-cream hover:bg-oxblood-deep",
  outline: "border border-ink text-ink hover:bg-ink hover:text-cream",
  "outline-cream": "border border-cream text-cream hover:bg-cream hover:text-ink",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-body text-sm font-medium tracking-wide transition-colors duration-300";

export function Button({
  href,
  variant = "solid-ink",
  className = "",
  children,
  ...props
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      href={href}
      className={`${base} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
