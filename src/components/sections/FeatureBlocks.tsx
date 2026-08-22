import { images, type ImageKey } from "@/content/images";
import { HoverImage } from "@/components/ui/HoverImage";
import { Reveal } from "@/components/ui/Reveal";
import { Ampersand } from "@/components/ui/Ampersand";

type Feature = {
  imageKey: ImageKey;
  title: string;
  date: string | null;
  body: string;
};

export function FeatureBlocks({ features }: { features: readonly Feature[] }) {
  return (
    <div className="space-y-20">
      {features.map((feature, i) => {
        const reversed = i % 2 === 1;
        const titleParts = feature.title.split(" & ");
        return (
          <Reveal key={feature.title}>
            <div
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                reversed ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <HoverImage
                image={images[feature.imageKey]}
                className="aspect-[4/5] rounded-sm"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div>
                <h3 className="font-display text-3xl font-medium text-ink">
                  {titleParts.length === 2 ? (
                    <>
                      {titleParts[0]} <Ampersand /> {titleParts[1]}
                    </>
                  ) : (
                    feature.title
                  )}
                </h3>
                {feature.date && (
                  <p className="mt-1 font-body text-sm tracking-wide text-gold">
                    {feature.date}
                  </p>
                )}
                <p className="mt-4 max-w-md font-body text-base leading-relaxed text-ink-soft">
                  {feature.body}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
