import type { MetadataRoute } from "next";
import { ARTICLES } from "./writing/articles";

const baseUrl = "https://tinahuang.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const articleRoutes = Object.keys(ARTICLES).flatMap((slug) => [
    { url: `${baseUrl}/writing/${slug}?lang=en`, lastModified: new Date("2026-09-01"), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/writing/${slug}?lang=zh`, lastModified: new Date("2026-09-01"), changeFrequency: "monthly" as const, priority: 0.7 },
  ]);

  return [
    { url: baseUrl, lastModified: new Date("2026-09-01"), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/zh`, lastModified: new Date("2026-09-01"), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/testimonials?lang=en`, lastModified: new Date("2026-09-01"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/testimonials?lang=zh`, lastModified: new Date("2026-09-01"), changeFrequency: "monthly", priority: 0.7 },
    ...articleRoutes,
  ];
}
