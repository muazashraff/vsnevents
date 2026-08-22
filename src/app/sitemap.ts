import type { MetadataRoute } from "next";

const siteUrl = "https://vsnevents.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/florals",
    "/baked-goods",
    "/event-decor",
    "/about",
    "/social-media",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
