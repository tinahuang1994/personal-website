import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tinahuang.vercel.app"),
  title: {
    default: "Tina Huang | AI Educator & Coach, Climate AI Builder, Solo Founder",
    template: "%s | Tina Huang",
  },
  description: "Tina Huang coaches people through real AI projects, builds climate AI products, and runs an AI-native solo business.",
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/zh" },
  },
  openGraph: {
    title: "Tina Huang | AI Educator & Coach, Climate AI Builder, Solo Founder",
    description: "One-to-one AI project coaching, climate AI products, and an AI-native solo business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              const path = window.location.pathname;
              const selectedLanguage = new URLSearchParams(window.location.search).get("lang");
              const bilingualPage = path.startsWith("/writing/") || path === "/testimonials";
              const isChinese = path === "/zh" || (bilingualPage && selectedLanguage !== "en");
              document.documentElement.lang = isChinese ? "zh-CN" : "en";
            })();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
