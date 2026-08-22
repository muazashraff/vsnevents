"use client";

import { useState, type FormEvent } from "react";
import { useFormspree } from "@/lib/hooks/useFormspree";
import { contactCopy } from "@/content/copy/contact";
import { submitButtonClass } from "@/components/forms/GeneralEnquiryForm";

const FORM_ID =
  process.env.NEXT_PUBLIC_FORMSPREE_CONSULTATION_ID || "REPLACE_WITH_FORMSPREE_ID";

const fieldClass =
  "w-full border-b border-ink/20 bg-transparent py-2 font-body text-sm text-ink placeholder:text-ink-soft/50 focus:border-oxblood focus:outline-none";
const labelClass = "font-body text-xs font-medium uppercase tracking-[0.12em] text-ink-soft";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  eventType: contactCopy.eventTypes[0] as string,
  eventDate: "",
  guestCount: "",
  message: "",
};

export function ConsultationForm() {
  const { status, submit } = useFormspree(FORM_ID);
  const [values, setValues] = useState(initialValues);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void submit({
      form_type: "event_decor_consultation",
      name: values.name,
      email: values.email,
      phone: values.phone,
      event_type: values.eventType,
      event_date: values.eventDate,
      guest_count: values.guestCount,
      message: values.message,
    });
  }

  if (status === "success") {
    return (
      <p className="border border-gold/50 bg-gold-soft/40 p-6 font-body text-sm text-ink">
        Thank you — we&apos;ve received your consultation request and will be in touch to
        start planning.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <input type="hidden" name="form_type" value="event_decor_consultation" />

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="c-name" className={labelClass}>
            Name
          </label>
          <input
            id="c-name"
            required
            className={fieldClass}
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="c-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="c-phone"
            type="tel"
            required
            className={fieldClass}
            value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="c-email" className={labelClass}>
          Email
        </label>
        <input
          id="c-email"
          type="email"
          required
          className={fieldClass}
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div className="space-y-1.5">
          <label htmlFor="c-event-type" className={labelClass}>
            Event type
          </label>
          <select
            id="c-event-type"
            required
            className={fieldClass}
            value={values.eventType}
            onChange={(e) => setValues((v) => ({ ...v, eventType: e.target.value }))}
          >
            {contactCopy.eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="c-event-date" className={labelClass}>
            Event date
          </label>
          <input
            id="c-event-date"
            type="date"
            required
            className={fieldClass}
            value={values.eventDate}
            onChange={(e) => setValues((v) => ({ ...v, eventDate: e.target.value }))}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="c-guests" className={labelClass}>
            Estimated guests
          </label>
          <input
            id="c-guests"
            type="number"
            min={1}
            inputMode="numeric"
            className={fieldClass}
            value={values.guestCount}
            onChange={(e) => setValues((v) => ({ ...v, guestCount: e.target.value }))}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="c-message" className={labelClass}>
          Tell us your vision
        </label>
        <textarea
          id="c-message"
          required
          rows={4}
          className={fieldClass}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
        />
      </div>

      <button type="submit" disabled={status === "submitting"} className={submitButtonClass}>
        {status === "submitting" ? "Sending…" : "Request consultation"}
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
