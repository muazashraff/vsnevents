"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";

/**
 * Minimal Formspree submit hook — no serverless function needed for v1.
 * To swap in a Resend/API-route flow later, replace the fetch below with a
 * POST to your own `/api/enquiry` route and keep the same Status contract.
 */
export function useFormspree(formId: string) {
  const [status, setStatus] = useState<Status>("idle");

  async function submit(data: Record<string, string>) {
    if (!formId || formId.startsWith("REPLACE_")) {
      setStatus("unconfigured");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return { status, submit };
}
