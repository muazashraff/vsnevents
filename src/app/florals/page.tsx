import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Gallery } from "@/components/sections/Gallery";
import { Section } from "@/components/ui/Section";
import { images } from "@/content/images";
import { floralsCopy } from "@/content/copy/florals";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Florals",
  description: floralsCopy.intro,
};

export default function FloralsPage() {
  return (
    <>
      <Hero
        eyebrow={floralsCopy.eyebrow}
        headline={floralsCopy.headline}
        sub={floralsCopy.intro}
        image={images.florals02}
      />

      <Section>
        <Gallery items={[...floralsCopy.gallery]} />
      </Section>

      <Section tone="cream-dark" className="text-center">
        <h2 className="font-display text-2xl font-medium text-ink md:text-3xl">
          {floralsCopy.ctaHeadline}
        </h2>
        <p className="mx-auto mt-3 max-w-md font-body text-sm text-ink-soft">
          Collection and local delivery both available. Message us on WhatsApp or use the
          contact form.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href={waLink(floralsCopy.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm bg-oxblood px-6 py-3 font-body text-sm font-medium tracking-wide text-cream transition-colors duration-300 hover:bg-oxblood-deep"
          >
            Message us on WhatsApp
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm border border-ink px-6 py-3 font-body text-sm font-medium tracking-wide text-ink transition-colors duration-300 hover:bg-ink hover:text-cream"
          >
            Use the contact form
          </a>
        </div>
      </Section>
    </>
  );
}
