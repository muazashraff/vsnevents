"use client";

import { useRef } from "react";
import { reviews } from "@/content/reviews";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function ReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const node = trackRef.current;
    if (!node) return;
    node.scrollBy({ left: dir * node.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>Reviews</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium text-ink">
            What people say
          </h2>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Previous review"
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-ink/20 text-ink hover:border-ink"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Next review"
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-ink/20 text-ink hover:border-ink"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex w-[85%] shrink-0 snap-start flex-col justify-between border border-dashed border-gold/60 bg-gold-soft/40 p-6 sm:w-[45%] lg:w-[31%]"
          >
            <div>
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-gold">
                Placeholder — not a real review
              </span>
              <p className="mt-3 font-display text-lg leading-snug text-ink-soft italic">
                {review.quote}
              </p>
            </div>
            <p className="mt-6 font-body text-sm text-ink-soft">{review.attribution}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
