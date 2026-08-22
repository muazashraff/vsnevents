import { site } from "@/content/site";

export function waLink(message: string): string {
  return `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function waLinkForPath(pathname: string): string {
  if (pathname.startsWith("/florals")) {
    return waLink("Hi VSN Events! I'd love to enquire about a bouquet.");
  }
  if (pathname.startsWith("/baked-goods")) {
    return waLink("Hi VSN Events! I'd love to enquire about a cake or cupcake order.");
  }
  if (pathname.startsWith("/event-decor")) {
    return waLink("Hi VSN Events! I'd like a quote for Nikkah/wedding decor.");
  }
  return waLink("Hi VSN Events! I have a question about...");
}
