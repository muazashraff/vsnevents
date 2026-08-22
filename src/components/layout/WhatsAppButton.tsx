"use client";

import { usePathname } from "next/navigation";
import { waLinkForPath } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const pathname = usePathname();
  const href = waLinkForPath(pathname ?? "/");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message VSN Events on WhatsApp"
      className="fixed right-5 bottom-[calc(1.25rem+env(safe-area-inset-bottom))] z-50 flex items-center gap-2 rounded-sm bg-[#25D366] px-4 py-3 font-body text-sm font-medium text-white shadow-lg transition-transform duration-300 hover:scale-105 md:right-8 md:bottom-8"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.92 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2Zm0 1.67c2.24 0 4.35.87 5.94 2.46a8.23 8.23 0 0 1 2.42 5.85c0 4.56-3.72 8.27-8.31 8.27a8.3 8.3 0 0 1-4.22-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.27-4.4c0-4.56 3.72-8.32 8.23-8.32Zm-4.53 4.6c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.7 2.71 4.2 3.7 2.08.83 2.5.66 2.95.62.45-.04 1.45-.59 1.66-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.45-.28-.24-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.13-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.36-.77-1.86-.2-.48-.4-.42-.55-.42h-.47Z" />
      </svg>
      <span className="hidden md:inline">WhatsApp us</span>
    </a>
  );
}
