import { images, type ImageKey } from "@/content/images";
import { HoverImage } from "@/components/ui/HoverImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

const strip: ImageKey[] = ["decor01", "decor03", "florals02", "florals03", "bakes01", "bakes03"];

export function InstagramStrip() {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>As seen on {site.instagram.handle}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium text-ink">
            Recent work, straight from the shop
          </h2>
        </div>
        <a
          href={site.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm text-gold hover:text-ink"
        >
          {site.instagram.followersShort} on Instagram →
        </a>
      </div>

      <Reveal className="mt-8">
        <a
          href={site.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="grid grid-cols-3 gap-2 md:gap-4"
        >
          {strip.map((key) => (
            <div key={key} className="group">
              <HoverImage image={images[key]} className="aspect-square rounded-sm" sizes="33vw" />
            </div>
          ))}
        </a>
      </Reveal>
    </div>
  );
}
