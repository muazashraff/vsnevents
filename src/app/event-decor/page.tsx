import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FeatureBlocks } from "@/components/sections/FeatureBlocks";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { images } from "@/content/images";
import { eventDecorCopy } from "@/content/copy/eventDecor";

export const metadata: Metadata = {
  title: "Event Decor",
  description: eventDecorCopy.intro,
};

export default function EventDecorPage() {
  return (
    <>
      <Hero
        eyebrow={eventDecorCopy.eyebrow}
        headline={eventDecorCopy.headline}
        sub={eventDecorCopy.intro}
        image={images.decor01}
        tone="oxblood"
      />

      <Section>
        <FeatureBlocks features={eventDecorCopy.features} />
      </Section>

      <Section tone="cream-dark">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xl leading-relaxed text-ink md:text-2xl">
            {eventDecorCopy.leadTimeLine}
          </p>
        </div>
      </Section>

      <Section maxWidth="max-w-3xl">
        <Eyebrow>{eventDecorCopy.ctaHeadline}</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-medium text-ink">
          Tell us about your day
        </h2>
        <p className="mt-3 font-body text-sm text-ink-soft">
          This is the highest-value enquiry on the site, so we&apos;ve made the form a little
          more thorough — event type, date, and guest count help us plan properly from the
          first message.
        </p>
        <div className="mt-8">
          <ConsultationForm />
        </div>
      </Section>
    </>
  );
}
