import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { HoursTable } from "@/components/sections/HoursTable";
import { ShopPhotos } from "@/components/sections/ShopPhotos";
import { GeneralEnquiryForm } from "@/components/forms/GeneralEnquiryForm";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { contactCopy } from "@/content/copy/contact";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: contactCopy.intro,
};

export default function ContactPage() {
  return (
    <>
      <Section maxWidth="max-w-4xl" className="text-center">
        <Eyebrow>{contactCopy.eyebrow}</Eyebrow>
        <h1 className="mt-4 font-display text-4xl font-medium text-ink md:text-5xl">
          {contactCopy.headline}
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-body text-base text-ink-soft">
          {contactCopy.intro}
        </p>
      </Section>

      <Section tone="cream-dark" className="grid gap-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-medium text-ink">
            {contactCopy.generalFormTitle}
          </h2>
          <p className="mt-2 font-body text-sm text-ink-soft">{contactCopy.generalFormSub}</p>
          <div className="mt-8">
            <GeneralEnquiryForm />
          </div>
        </div>

        <div className="border-t border-ink/10 pt-16 md:border-t-0 md:border-l md:pt-0 md:pl-16">
          <h2 className="font-display text-2xl font-medium text-ink">
            {contactCopy.consultationFormTitle}
          </h2>
          <p className="mt-2 font-body text-sm text-ink-soft">
            {contactCopy.consultationFormSub}
          </p>
          <div className="mt-8">
            <ConsultationForm />
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow>Walk the shop</Eyebrow>
        <h2 className="mt-3 font-display text-2xl font-medium text-ink md:text-3xl">
          Not local? Here&apos;s what to expect.
        </h2>
        <p className="mt-3 max-w-lg font-body text-sm text-ink-soft">
          Long-distance clients often book decor without visiting first — here&apos;s the shop on
          Listerhills Road, so you know exactly what to expect walking in.
        </p>
        <div className="mt-8">
          <ShopPhotos />
        </div>
      </Section>

      <Section tone="cream-dark" className="grid gap-12 md:grid-cols-2">
        <div>
          <Eyebrow>Visit</Eyebrow>
          <a
            href={site.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block font-display text-xl text-ink hover:text-oxblood"
          >
            {site.address.full}
          </a>
          <div className="mt-6 space-y-1 font-body text-sm text-ink">
            <a href={`tel:${site.phone.tel}`} className="block hover:text-oxblood">
              {site.phone.display}
            </a>
            <a href={`mailto:${site.email}`} className="block hover:text-oxblood">
              {site.email}
            </a>
          </div>
        </div>
        <div>
          <Eyebrow>Opening Hours</Eyebrow>
          <HoursTable className="mt-4" />
        </div>
      </Section>
    </>
  );
}
