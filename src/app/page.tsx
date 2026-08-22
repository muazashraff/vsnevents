import { Hero } from "@/components/sections/Hero";
import { PillarShowcase } from "@/components/sections/PillarShowcase";
import { InstagramStrip } from "@/components/sections/InstagramStrip";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { Section } from "@/components/ui/Section";
import { Ampersand } from "@/components/ui/Ampersand";
import { images } from "@/content/images";
import { homeCopy } from "@/content/copy/home";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Hero
        patternBg
        eyebrow={homeCopy.hero.eyebrow}
        headline={homeCopy.hero.headline}
        sub={homeCopy.hero.sub}
        image={images.decor02}
        cta={
          <>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-oxblood px-6 py-3 font-body text-sm font-medium tracking-wide text-cream transition-colors duration-300 hover:bg-oxblood-deep"
            >
              Enquire about your event
            </a>
            <a
              href={site.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-ink px-6 py-3 font-body text-sm font-medium tracking-wide text-ink transition-colors duration-300 hover:bg-ink hover:text-cream"
            >
              Visit the shop
            </a>
          </>
        }
      />

      <Section>
        <PillarShowcase pillars={homeCopy.pillars} />
      </Section>

      <div className="flex justify-center py-2">
        <Ampersand className="text-3xl" />
      </div>

      <Section tone="cream-dark">
        <InstagramStrip />
      </Section>

      <Section>
        <ReviewsCarousel />
      </Section>
    </>
  );
}
