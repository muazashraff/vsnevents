import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HoursTable } from "@/components/sections/HoursTable";
import { images } from "@/content/images";
import { aboutCopy } from "@/content/copy/about";
import { HoverImage } from "@/components/ui/HoverImage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: aboutCopy.body[0],
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow={aboutCopy.eyebrow}
        headline={aboutCopy.headline}
        image={images.shop01}
      />

      <Section className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <div className="space-y-5">
          {aboutCopy.body.map((paragraph) => (
            <p key={paragraph} className="font-body text-base leading-relaxed text-ink-soft">
              {paragraph}
            </p>
          ))}
        </div>

        <div>
          <Eyebrow>Opening Hours</Eyebrow>
          <HoursTable className="mt-4" />
          <p className="mt-4 font-body text-sm text-ink-soft">{site.address.full}</p>
        </div>
      </Section>

      <Section tone="cream-dark">
        <figure className="group">
          <HoverImage
            image={images.shop02}
            className="aspect-[16/9] rounded-sm"
            sizes="100vw"
          />
          <figcaption className="mt-3 text-center font-body text-sm text-ink-soft">
            {aboutCopy.interiorCaption}
          </figcaption>
        </figure>
      </Section>
    </>
  );
}
