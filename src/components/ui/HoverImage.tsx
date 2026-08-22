import Image from "next/image";
import type { SiteImage } from "@/content/images";

export function HoverImage({
  image,
  className = "",
  sizes = "100vw",
  priority = false,
}: {
  image: SiteImage;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        priority={priority}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
  );
}
