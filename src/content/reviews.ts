export type Review = {
  id: string;
  isPlaceholder: true;
  quote: string;
  attribution: string;
};

/**
 * PLACEHOLDER CONTENT — do not ship real-looking reviews without real data.
 * VSN Events has genuine Google reviews, but we do not have permission to
 * transcribe specific quotes/names into this codebase. Once the client
 * shares their Google Business Profile place ID, replace these with real
 * reviews — see README.md "Google reviews" section for the two integration
 * paths (Places API vs a widget like Elfsight/Trustmary).
 */
export const reviews: Review[] = [
  {
    id: "placeholder-1",
    isPlaceholder: true,
    quote: "[Add a real Google review here — see README]",
    attribution: "— Google review, pending",
  },
  {
    id: "placeholder-2",
    isPlaceholder: true,
    quote: "[Add a real Google review here — see README]",
    attribution: "— Google review, pending",
  },
  {
    id: "placeholder-3",
    isPlaceholder: true,
    quote: "[Add a real Google review here — see README]",
    attribution: "— Google review, pending",
  },
];
