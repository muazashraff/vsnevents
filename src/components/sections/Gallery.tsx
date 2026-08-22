import { images, type ImageKey } from "@/content/images";
import { HoverImage } from "@/components/ui/HoverImage";
import { Reveal } from "@/components/ui/Reveal";

type GalleryItem = { imageKey: ImageKey; caption?: string };

function Group({ items, isFirstGroup }: { items: GalleryItem[]; isFirstGroup: boolean }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:grid-rows-2">
      {items.map((item, i) => (
        <Reveal
          key={item.imageKey}
          delayMs={i * 100}
          className={i === 0 ? "md:row-span-2" : ""}
        >
          <figure className="group">
            <HoverImage
              image={images[item.imageKey]}
              className={`rounded-sm ${i === 0 ? "aspect-[3/4]" : "aspect-[4/3]"}`}
              sizes="(min-width: 768px) 50vw, 100vw"
              priority={isFirstGroup && i === 0}
            />
            {item.caption && (
              <figcaption className="mt-3 font-body text-sm text-ink-soft">
                {item.caption}
              </figcaption>
            )}
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

export function Gallery({ items }: { items: GalleryItem[] }) {
  const groups: GalleryItem[][] = [];
  for (let i = 0; i < items.length; i += 3) {
    groups.push(items.slice(i, i + 3));
  }

  return (
    <div className="space-y-16">
      {groups.map((group, i) => (
        <Group key={i} items={group} isFirstGroup={i === 0} />
      ))}
    </div>
  );
}
