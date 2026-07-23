import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://justlog.live", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://justlog.live/download", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://justlog.live/ai-expense-tracker", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://justlog.live/voice-expense-tracker", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://justlog.live/expense-tracker-for-freelancers", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://justlog.live/expense-tracker-without-categories", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://justlog.live/whatsapp-expense-tracker", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://justlog.live/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://justlog.live/blog/best-expense-tracker-apps-india-2026", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://justlog.live/blog/how-to-track-daily-expenses-without-spreadsheet", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://justlog.live/blog/30-days-expense-tracking-challenge", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://justlog.live/privacy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: "https://justlog.live/terms", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
