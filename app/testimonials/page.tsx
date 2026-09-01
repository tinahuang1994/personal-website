import type { Metadata } from "next";
import TestimonialsView from "./TestimonialsView";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const query = await searchParams;
  const isEnglish = query.lang === "en";
  const title = isEnglish ? "Testimonials" : "推荐语";
  const description = isEnglish
    ? "What clients say about building with AI alongside Tina Huang. Chinese originals with English translations."
    : "Tina Huang 的客户推荐语：中文原文与英文翻译。";

  return {
    title,
    description,
    alternates: {
      canonical: `/testimonials?lang=${isEnglish ? "en" : "zh"}`,
      languages: { en: "/testimonials?lang=en", "zh-CN": "/testimonials?lang=zh" },
    },
  };
}

export default async function TestimonialsPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const query = await searchParams;
  return <TestimonialsView initialLanguage={query.lang === "en" ? "en" : "zh"} />;
}
