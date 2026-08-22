import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Ampersand } from "@/components/ui/Ampersand";
import { Reveal } from "@/components/ui/Reveal";
import { InstagramEmbed } from "@/components/embeds/InstagramEmbed";
import { featuredPosts } from "@/content/social-posts";
import { socialMediaCopy } from "@/content/copy/socialMedia";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Social Media",
  description: socialMediaCopy.intro,
};

const stagger = ["md:mt-0", "md:mt-12", "md:mt-4"];

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

      <div className="flex justify-center py-2">
        <Ampersand className="text-3xl" />
      </div>

      <Section>
        <div className="grid items-start gap-10 md:grid-cols-3 md:gap-8">
          {featuredPosts.map((post, i) => (
            <Reveal key={post.url} delayMs={i * 120} className={stagger[i % stagger.length]}>
              <div className="flex justify-center">
                <div className="w-full max-w-sm border border-ink/10 bg-cream-dark p-3 pt-0">
                  <div className="-mx-3 mb-3 h-1 bg-gold/60" />
                  <InstagramEmbed url={post.url} caption={post.caption} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 border-t border-ink/10 pt-12 text-center">
          <Eyebrow>{site.instagram.followersShort} on Instagram</Eyebrow>
          <p className="mx-auto mt-3 max-w-sm font-display text-xl text-ink italic">
            {site.instagram.handle}
          </p>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-sm bg-ink px-6 py-3 font-body text-sm font-medium tracking-wide text-cream transition-colors duration-300 hover:bg-ink/90"
          >
            Follow on Instagram
          </a>
        </div>
      </Section>
    </>
  );
}
