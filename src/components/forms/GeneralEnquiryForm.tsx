"use client";

import { useState, type FormEvent } from "react";
import { useFormspree } from "@/lib/hooks/useFormspree";

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_GENERAL_ID || "REPLACE_WITH_FORMSPREE_ID";

const fieldClass =
  "w-full border-b border-ink/20 bg-transparent py-2 font-body text-sm text-ink placeholder:text-ink-soft/50 focus:border-oxblood focus:outline-none";
const labelClass = "font-body text-xs font-medium uppercase tracking-[0.12em] text-ink-soft";
export const submitButtonClass =
  "inline-flex w-full items-center justify-center rounded-sm bg-ink px-6 py-3 font-body text-sm font-medium tracking-wide text-cream transition-colors duration-300 hover:bg-ink/90 disabled:opacity-60 sm:w-auto";

export function GeneralEnquiryForm() {
  const { status, submit } = useFormspree(FORM_ID);
  const [values, setValues] = useState({ name: "", contact: "", message: "" });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void submit({ form_type: "general", ...values });
  }

  if (status === "success") {
    return (
      <p className="border border-gold/50 bg-gold-soft/40 p-6 font-body text-sm text-ink">
        Thank you — your message is on its way to us. We&apos;ll be in touch as soon as we can.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-1.5">
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          required
          className={fieldClass}
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="contact" className={labelClass}>
          Email or phone
        </label>
        <input
          id="contact"
          required
          className={fieldClass}
          value={values.contact}
          onChange={(e) => setValues((v) => ({ ...v, contact: e.target.value }))}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          className={fieldClass}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
        />
      </div>

      <button type="submit" disabled={status === "submitting"} className={submitButtonClass}>
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>

      <div aria-live="polite">
        {status === "error" && (
          <p className="font-body text-sm text-oxblood">
            Something went wrong sending that — please try WhatsApp or email us directly.
          </p>
        )}
        {status === "unconfigured" && (
          <p className="font-body text-sm text-oxblood">
            This form isn&apos;t connected yet — please WhatsApp or email us directly for now.
          </p>
        )}
      </div>
    </form>
  );
}
