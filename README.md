# VSN Events

Marketing site for VSN Events — florals, baked goods, and event decor in Bradford. Enquiry-led brochure site (no cart, no checkout): every path ends in WhatsApp, phone, email, or a form.

Built with Next.js (App Router) + TypeScript + Tailwind CSS v4. Content lives in `src/content/` as plain TypeScript objects — no CMS. To change any copy, hours, or contact details, edit the relevant file in that folder and redeploy.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content structure

- `src/content/site.ts` — brand facts: phone, WhatsApp, email, address, opening hours, Instagram stats.
- `src/content/nav.ts` — header/footer navigation order.
- `src/content/images.ts` — the image manifest. Every photo on the site is registered here with its file path, intrinsic dimensions, and alt text.
- `src/content/copy/*.ts` — per-page headline/body copy.
- `src/content/reviews.ts` — Google review placeholders (see below — do not fill these with invented content).

## Image assets

Real photography from VSN's own shop and past events lives in `public/images/{florals,baked-goods,event-decor,about-shop}/`. To add or replace a photo:

1. Drop the new file into the matching category folder in `public/images/`.
2. Update (or add) its entry in `src/content/images.ts` with the correct `src`, `width`, `height`, and a real, descriptive `alt` text.
3. Reference that key from the relevant `copy/*.ts` file or component.

The three files in `reference-only/` (opening-hours post, Instagram profile, About Us story — all screenshots) are source material only and are never imported into the app; they document where the copy in `src/content/` originally came from.

## Logo

The navbar currently renders the wordmark as tracked-caps type ("VSN EVENTS" in Fraunces Medium) because no vector logo file exists yet. Once the client provides a high-res/vector logo:

- Replace the text wordmark in `src/components/layout/Header.tsx` and `Footer.tsx` with an `<Image>` of the real mark.
- Replace the generated "N" monogram favicon in `src/app/icon.tsx` with the real logo mark.

## Forms (Formspree)

Both enquiry forms (`src/components/forms/GeneralEnquiryForm.tsx` and `ConsultationForm.tsx`) POST to Formspree — no backend needed for v1.

1. Create a free account at https://formspree.io.
2. Create two forms (e.g. "VSN — General Enquiries" and "VSN — Event Decor Consultation").
3. Copy `.env.example` to `.env.local` and paste each form's ID (the part after `/f/` in the endpoint Formspree gives you):
   ```
   NEXT_PUBLIC_FORMSPREE_GENERAL_ID=xxxxxxxx
   NEXT_PUBLIC_FORMSPREE_CONSULTATION_ID=xxxxxxxx
   ```
4. Add the same two variables in your Vercel project's Environment Variables settings before deploying.

Until these are set, both forms show an inline "not connected yet" message rather than silently failing.

**v2 path:** if VSN wants server-side email later (e.g. via Resend), swap the `fetch` call inside `src/lib/hooks/useFormspree.ts` for a POST to your own `/api/enquiry` route — the component-level status contract (`idle/submitting/success/error`) doesn't need to change.

## Google reviews

`src/components/sections/ReviewsCarousel.tsx` renders three cards from `src/content/reviews.ts`, all containing the placeholder string `[Add a real Google review here — see README]` and styled with a dashed gold border so they can't be mistaken for real reviews. **Do not replace these with invented names or star ratings.**

Once the client shares their Google Business Profile place ID, there are two ways to go live:

1. **Google Places API** — call `place/details` with the `reviews` field server-side (needs an API key + a small server component or route handler, since the Places API isn't meant to be called from the client).
2. **A lightweight widget** — e.g. Elfsight or Trustmary's free tier — embeds real reviews with no backend work.

Either approach slots into the same `ReviewsCarousel` card shape.

## Instagram

`src/components/sections/InstagramStrip.tsx` is a hardcoded 6-image grid linking to instagram.com/vsnevents_, plus the real follower count (32.1K). No API keys, no rate limits.

**v2 path:** if the client wants a live feed, a widget like SnapWidget or Behold.so can slot into the same grid position — but it needs their Instagram Business account connected to Meta's API, which wasn't worth the setup cost for v1.

## Deployment

### Vercel

This repo is intended to deploy on Vercel's free tier:

1. Push this repo to GitHub (already done if you're reading this from the deployed repo).
2. In the [Vercel dashboard](https://vercel.com/new), choose **Import Git Repository** and select this repo.
3. Add the Formspree environment variables (see above) before the first deploy.
4. Deploy — you'll get a `*.vercel.app` URL.

### Custom domain

No domain is connected yet. Once the client has one:

1. In the Vercel project, go to **Settings → Domains** and add the domain.
2. Update the DNS records at the client's registrar as Vercel instructs (usually an `A`/`ALIAS` record for the apex and a `CNAME` for `www`).
3. Update `siteUrl` in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` from the placeholder `https://vsnevents.vercel.app` to the real domain, then redeploy.

## Open items to confirm with the client

- **Real, high-res/vector logo file** — see "Logo" above.
- **Google Business Profile place ID** — needed to wire up real reviews (see "Google reviews" above).
- **Live Instagram feed vs. the current hardcoded grid** — needs their Instagram account connected to Meta's API if they want it later.
- **Confirm `vsnevents@mail.com` / `07544 434441` stay the public contact details long-term** — these were correct as of the brief this site was built from.

## QA checklist before calling this launch-ready

- [ ] Run Lighthouse (mobile) on the deployed URL — target 90+ on Performance, Accessibility, Best Practices, SEO.
- [ ] Confirm every enquiry form delivers a test submission once Formspree IDs are live.
- [ ] Test WhatsApp links on both iOS and Android.
- [ ] Check colour contrast for text-on-oxblood and text-on-gold combinations specifically.
- [ ] Swap in the real logo and re-check the favicon.
- [ ] Connect the custom domain once the client has transferred one.
