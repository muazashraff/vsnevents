import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-4 font-display text-4xl font-medium text-ink">
        This page wandered off.
      </h1>
      <p className="mt-4 font-body text-base text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist — but the flowers, cakes, and decor
        certainly do.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-sm bg-ink px-6 py-3 font-body text-sm font-medium tracking-wide text-cream transition-colors duration-300 hover:bg-ink/90"
      >
        Back to home
      </Link>
    </div>
  );
}
