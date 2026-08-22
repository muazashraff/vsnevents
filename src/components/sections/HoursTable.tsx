import { site } from "@/content/site";

export function HoursTable({ className = "" }: { className?: string }) {
  return (
    <dl className={`divide-y divide-ink/10 border-y border-ink/10 ${className}`}>
      {site.hours.map((h) => (
        <div key={h.day} className="flex justify-between py-3 font-body text-sm">
          <dt className="text-ink">{h.day}</dt>
          <dd className={h.hours === "Closed" ? "text-ink-soft" : "text-ink-soft"}>
            {h.hours}
          </dd>
        </div>
      ))}
    </dl>
  );
}
