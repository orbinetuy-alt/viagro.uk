import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.viagro.co.uk",
      lastModified: new Date("2026-07-07"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
