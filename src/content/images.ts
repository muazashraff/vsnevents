export type SiteImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

/**
 * Central image manifest. Every photo used on the site is registered here —
 * to swap a photo later, replace the file in public/images and update the
 * src/width/height here; no component code needs to change.
 */
export const images = {
  florals01: {
    src: "/images/florals/florals-01-pink-peony-allium-bouquet.jpg",
    width: 1284,
    height: 1725,
    alt: "Hand-tied bouquet of pink peonies, purple allium, and white chrysanthemum wrapped in kraft paper, held in the crook of an arm",
    caption: "Hand-tied peony & allium bouquet",
  },
  florals02: {
    src: "/images/florals/florals-02-pink-rose-gyp-bouquets.jpg",
    width: 1284,
    height: 1890,
    alt: "Boxed bouquets of pink and white roses with magenta gypsophila, tied with pink ribbon",
    caption: "Pink rose & gypsophila bouquets",
  },
  florals03: {
    src: "/images/florals/florals-03-white-rose-baatpakki-bouquet.jpg",
    width: 1284,
    height: 1760,
    alt: "All-white bouquet of roses and gypsophila wrapped in ivory paper, gift tag reading 'baat pakki'",
    caption: "Baat pakki bouquet, white rose & gypsophila",
  },
  bakes01: {
    src: "/images/baked-goods/bakes-01-rosette-cupcakes-with-flowerbox.jpg",
    width: 1284,
    height: 2054,
    alt: "Six mauve rosette buttercream cupcakes in a clear box beside a pink flower box arrangement",
    caption: "Rosette cupcakes with fresh flower box",
  },
  bakes02: {
    src: "/images/baked-goods/bakes-02-purple-birthday-cake-balloons-collage.jpg",
    width: 1284,
    height: 2020,
    alt: "Collage of a cream birthday cake with purple sugar flowers, a purple balloon bubble arrangement, and lilac-wrapped bouquets",
    caption: "Birthday cake, balloon bubble & bouquet set",
  },
  bakes03: {
    src: "/images/baked-goods/bakes-03-1st-anniversary-cake-cupcakes.jpg",
    width: 1284,
    height: 1992,
    alt: "Cream 'Happy 1st Anniversary' cake with yellow sugar flowers, beside matching piped cupcakes reading 'I love you'",
    caption: "1st anniversary cake & cupcakes",
  },
  decor01: {
    src: "/images/event-decor/decor-01-red-gold-wedding-welcome-sign.jpg",
    width: 1284,
    height: 1996,
    alt: "Deep red silk welcome sign reading 'Welcome to the Wedding of Shahraz & Zara, 20.04.2025', flanked by cascading red and white rose florals with candlelight",
    caption: "Shahraz & Zara, 20.04.2025 — deep red silk, cascading rose and orchid florals",
  },
  decor02: {
    src: "/images/event-decor/decor-02-boho-neutral-pampas-arch.jpg",
    width: 1284,
    height: 1997,
    alt: "Boho wedding arch dressed with pampas grass and dried cream and rust florals over champagne drapery, in a marquee reception",
    caption: "A neutral, pampas-and-gold arch for a marquee reception",
  },
  decor03: {
    src: "/images/event-decor/decor-03-white-nikkah-welcome-sign.jpg",
    width: 1284,
    height: 1976,
    alt: "All-white Nikkah welcome sign with Bismillah calligraphy reading 'Welcome to the Nikkah of Abdul Rauf & Azqa, 28/05/2025', with fresh white roses and floating candles",
    caption: "Abdul Rauf & Azqa, 28/05/2025 — an all-white Nikkah welcome, fresh roses and floating candles",
  },
  decor04: {
    src: "/images/event-decor/decor-04-blush-gold-ceremony-arch.jpg",
    width: 1284,
    height: 1806,
    alt: "Blush and gold ceremony arch with hanging white florals and pearl strands, set against tall arched windows",
    caption: "Blush and gold ceremony arch with hanging florals",
  },
  shop01: {
    src: "/images/about-shop/shop-01-storefront-signage.jpg",
    width: 1284,
    height: 1690,
    alt: "VSN Events shopfront on Listerhills Road, Bradford, with copper 3D signage reading 'VSN Events — Florals, Bakes, Event Decor' and a floral archway over the entrance",
    caption: "The shop on Listerhills Road, Bradford",
  },
  shop02: {
    src: "/images/about-shop/shop-02-interior-display.jpg",
    width: 1284,
    height: 860,
    alt: "Inside the VSN Events shop — cream display shelving with cakes, balloon bubbles, and floral arrangements, and a seating area for consultations",
    caption: "Inside the shop on Listerhills Road",
  },
} as const satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;
