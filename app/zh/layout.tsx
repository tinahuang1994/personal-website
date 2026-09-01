import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Tina Huang｜AI 教育者与教练、气候 AI 产品创造者、AI 原生一人公司创始人" },
  description: "Tina Huang 陪人用 AI 解决真实问题，也做气候 AI 产品，经营一家 AI 原生一人公司。",
  alternates: {
    canonical: "/zh",
    languages: { en: "/", "zh-CN": "/zh" },
  },
};

export default function ChineseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
