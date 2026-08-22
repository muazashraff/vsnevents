"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

// When several InstagramEmbed instances mount together (the normal case —
// 3 on this page), each one's effect would otherwise call
// window.instgrm.Embeds.process() independently and near-simultaneously.
// Overlapping calls can interrupt Instagram's own processing for whichever
// blockquotes it hasn't gotten to yet, so coalesce same-tick calls into one.
let processQueued = false;
function scheduleProcess() {
  if (processQueued) return;
  processQueued = true;
  requestAnimationFrame(() => {
    processQueued = false;
    window.instgrm?.Embeds.process();
  });
}

export function InstagramEmbed({ url, caption }: { url: string; caption?: string }) {
  const ref = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const existingScript = document.getElementById("instagram-embed-script");

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = scheduleProcess;
      document.body.appendChild(script);
    } else {
      scheduleProcess();
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
