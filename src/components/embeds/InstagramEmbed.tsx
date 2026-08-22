"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export function InstagramEmbed({ url, caption }: { url: string; caption?: string }) {
  const ref = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const existingScript = document.getElementById("instagram-embed-script");
    const process = () => window.instgrm?.Embeds.process();

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = process;
      document.body.appendChild(script);
    } else {
      process();
    }
  }, [url]);

  return (
    <figure className="w-full">
      <blockquote
        ref={ref}
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ background: "#F6F1E7", margin: 0, minWidth: "auto" }}
      >
        {/* Instagram's own fallback link, shown until embed.js replaces this
            (or permanently, if a blocker prevents the script from loading) */}
        <a href={url} target="_blank" rel="noopener noreferrer">
          View this post on Instagram
        </a>
      </blockquote>
      {caption && (
        <figcaption className="mt-3 font-body text-sm text-ink-soft">{caption}</figcaption>
      )}
    </figure>
  );
}
