import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BilingualArticle from "../BilingualArticle";
import { ARTICLES, ARTICLE_SLUGS } from "../articles";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
};

export function generateStaticParams() {
  return ARTICLE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const [{ slug }, query] = await Promise.all([params, searchParams]);
  const article = ARTICLES[slug];
  if (!article) return {};
  const isEnglish = query.lang === "en";
  const path = `/writing/${slug}`;
  return {
    title: isEnglish ? article.enTitle : article.zhTitle,
    description: isEnglish ? article.enDek : article.zhDek,
    alternates: {
      canonical: `${path}?lang=${isEnglish ? "en" : "zh"}`,
      languages: { en: `${path}?lang=en`, "zh-CN": `${path}?lang=zh` },
    },
  };
}

export default async function ArticlePage({ params, searchParams }: PageProps) {
  const [{ slug }, query] = await Promise.all([params, searchParams]);
  const article = ARTICLES[slug];
  if (!article) notFound();
  const initialLanguage = query.lang === "en" ? "en" : "zh";
  return <BilingualArticle article={article} initialLanguage={initialLanguage} />;
}
