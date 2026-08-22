import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { InstagramEmbed } from "@/components/embeds/InstagramEmbed";
import { featuredPosts } from "@/content/social-posts";
import { socialMediaCopy } from "@/content/copy/socialMedia";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Social Media",
  description: socialMediaCopy.intro,
};

export default function SocialMediaPage() {
  return (
    <>
      <Section maxWidth="max-w-4xl" className="text-center">
        <Eyebrow>{socialMediaCopy.eyebrow}</Eyebrow>
        <h1 className="mt-4 font-display text-4xl font-medium text-ink md:text-5xl">
          {socialMediaCopy.headline}
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-body text-base text-ink-soft">
          {socialMediaCopy.intro}
        </p>
      </Section>

      <Section tone="cream-dark">
        <div className="grid items-start gap-10 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <div key={post.url} className="flex justify-center">
              <InstagramEmbed url={post.url} caption={post.caption} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <p className="font-body text-sm text-ink-soft">
            {site.instagram.followersShort} on Instagram
          </p>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm bg-ink px-6 py-3 font-body text-sm font-medium tracking-wide text-cream transition-colors duration-300 hover:bg-ink/90"
          >
            Follow {site.instagram.handle} on Instagram
          </a>
        </div>
      </Section>
    </>
  );
}
