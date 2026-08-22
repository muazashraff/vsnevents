import Link from "next/link";
import { navItems } from "@/content/nav";
import { site } from "@/content/site";
import { Ampersand } from "@/components/ui/Ampersand";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream-dark">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4 md:px-10">
        <div>
          <Link href="/" className="font-display text-lg tracking-[0.08em] text-ink">
            VSN EVENTS
          </Link>
          <p className="mt-3 max-w-xs font-body text-sm text-ink-soft">
            Florals <Ampersand /> baked goods <Ampersand /> event decor, family-run in
            Bradford since {site.established}.
          </p>
        </div>

        <div>
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-ink-soft">
            Explore
          </span>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-body text-sm text-ink hover:text-oxblood"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-ink-soft">
            Visit
          </span>
          <a
            href={site.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block font-body text-sm text-ink hover:text-oxblood"
          >
            {site.address.full}
          </a>
          <div className="mt-4 space-y-1 font-body text-sm text-ink-soft">
            {site.hours.map((h) => (
              <div key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span>{h.hours}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-ink-soft">
            Contact
          </span>
          <ul className="mt-4 space-y-2 font-body text-sm text-ink">
            <li>
              <a href={`tel:${site.phone.tel}`} className="hover:text-oxblood">
                {site.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-oxblood">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-oxblood"
              >
                {site.instagram.handle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-6 font-body text-xs text-ink-soft md:px-10">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
