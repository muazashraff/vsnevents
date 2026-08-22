import { images } from "@/content/images";
import { HoverImage } from "@/components/ui/HoverImage";
import { Reveal } from "@/components/ui/Reveal";

export function ShopPhotos() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Reveal>
        <figure className="group">
          <HoverImage
            image={images.shop01}
            className="aspect-[4/3] rounded-sm"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <figcaption className="mt-3 font-body text-sm text-ink-soft">
            {images.shop01.caption}
          </figcaption>
        </figure>
      </Reveal>
      <Reveal delayMs={100}>
        <figure className="group">
          <HoverImage
            image={images.shop02}
            className="aspect-[4/3] rounded-sm"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <figcaption className="mt-3 font-body text-sm text-ink-soft">
            {images.shop02.caption}
          </figcaption>
        </figure>
      </Reveal>
    </div>
  );
}
