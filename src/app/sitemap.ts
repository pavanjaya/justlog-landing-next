import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://justlog.live", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://justlog.live/download", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://justlog.live/privacy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: "https://justlog.live/terms", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
