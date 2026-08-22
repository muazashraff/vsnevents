export type FeaturedPost = {
  url: string;
  caption?: string;
};

/**
 * The 3 featured Instagram posts on /social-media, rendered as live embeds
 * via Instagram's own embed.js (see src/components/embeds/InstagramEmbed.tsx).
 * To swap a post: replace the permalink URL below and redeploy — no other
 * code changes needed. Get a permalink from instagram.com (desktop web):
 * open the post → ··· menu → Embed → the URL in data-instgrm-permalink.
 */
export const featuredPosts: FeaturedPost[] = [
  { url: "https://www.instagram.com/reel/DKzp1T9Nuni/" },
  { url: "https://www.instagram.com/reel/DKWzX2MsREX/" },
  { url: "https://www.instagram.com/reel/DbOPl5HNXO8/" },
];
