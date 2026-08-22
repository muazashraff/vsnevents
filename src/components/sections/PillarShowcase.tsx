import Link from "next/link";
import { images, type ImageKey } from "@/content/images";
import { HoverImage } from "@/components/ui/HoverImage";
import { Reveal } from "@/components/ui/Reveal";

export function PillarShowcase({
  pillars,
}: {
  pillars: readonly { title: string; href: string; imageKey: ImageKey; body: string }[];
}) {
  return (
    <div className="grid gap-x-8 gap-y-14 md:grid-cols-3">
      {pillars.map((pillar, i) => (
        <Reveal key={pillar.href} delayMs={i * 100}>
          <Link href={pillar.href} className="group block">
            <div className="relative">
              <HoverImage
                image={images[pillar.imageKey]}
                className="aspect-[4/5] rounded-sm"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              {/* shelf line + ground shadow, echoing the shop's display shelving */}
              <div className="mx-4 h-px bg-gold/50" />
              <div className="mx-6 h-2 rounded-full bg-ink/10 blur-sm" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-medium text-ink">
              {pillar.title}
            </h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink-soft">
              {pillar.body}
            </p>
            <span className="mt-3 inline-block font-body text-sm text-gold transition-transform group-hover:translate-x-1">
              Explore {pillar.title.toLowerCase()} →
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
