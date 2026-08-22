import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { SiteImage } from "@/content/images";

export function Hero({
  eyebrow,
  headline,
  sub,
  image,
  cta,
  tone = "cream",
}: {
  eyebrow: string;
  headline: string;
  sub?: string;
  image: SiteImage;
  cta?: React.ReactNode;
  tone?: "cream" | "oxblood";
}) {
  const wash = tone === "oxblood" ? "bg-oxblood" : "bg-cream-dark";

  return (
    <section className={`${wash} border-b border-ink/10`}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:gap-16 md:px-10 md:py-20">
        <div className={tone === "oxblood" ? "text-cream" : "text-ink"}>
          <Eyebrow tone={tone === "oxblood" ? "cream" : "gold"}>{eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] font-medium text-balance md:text-5xl lg:text-6xl">
            {headline}
          </h1>
          {sub && (
            <p
              className={`mt-6 max-w-md font-body text-base leading-relaxed md:text-lg ${
                tone === "oxblood" ? "text-cream/85" : "text-ink-soft"
              }`}
            >
              {sub}
            </p>
          )}
          {cta && <div className="mt-8 flex flex-wrap gap-4">{cta}</div>}
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[3/4]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
