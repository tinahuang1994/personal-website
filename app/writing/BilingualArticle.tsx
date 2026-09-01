"use client";

import { useState } from "react";
import Link from "next/link";
import type { Article } from "./articles";
import styles from "./article.module.css";

const CATEGORY_ZH: Record<string, string> = {
  "Monthly notes": "月度手记",
  "Career change": "职业转型",
  "Learning with AI": "AI 学习",
  "Solo business": "一人公司",
  "Learner story": "学员案例",
  "Client story": "客户案例",
  "Building with AI": "AI 产品实践",
};

const DATE_ZH: Record<string, string> = {
  "April 2026": "2026 年 4 月",
  "May 2026": "2026 年 5 月",
  "August 2026": "2026 年 8 月",
};

export default function BilingualArticle({ article, initialLanguage = "zh" }: { article: Article; initialLanguage?: "zh" | "en" }) {
  const [language, setLanguage] = useState<"zh" | "en">(initialLanguage);

  const chooseLanguage = (nextLanguage: "zh" | "en") => {
    setLanguage(nextLanguage);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", nextLanguage);
    window.history.replaceState({}, "", url);
  };

  return (
    <main className={styles.page} lang={language === "zh" ? "zh-CN" : "en"}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Link className={styles.brand} href={language === "zh" ? "/zh" : "/"}>Tina Huang</Link>
          <Link className={styles.back} href={language === "zh" ? "/zh#writing" : "/#writing"}>{language === "zh" ? "返回写作" : "Back to writing"}</Link>
        </div>
      </nav>

      <div className={styles.shell}>
        <header className={styles.header}>
          <p className={styles.meta}>{language === "zh" ? `${CATEGORY_ZH[article.category] ?? article.category} · ${DATE_ZH[article.date] ?? article.date}` : `${article.category} · ${article.date}`}</p>
          <div className={styles.titleGrid}>
            {language === "zh" ? <div className={styles.title} data-lang="zh" lang="zh-CN"><h1>{article.zhTitle}</h1></div> : <div className={styles.title} data-lang="en" lang="en"><h1>{article.enTitle}</h1></div>}
          </div>
          <div className={styles.dekGrid}>
            {language === "zh" ? <div className={styles.dek} data-lang="zh" lang="zh-CN"><p>{article.zhDek}</p></div> : <div className={styles.dek} data-lang="en" lang="en"><p>{article.enDek}</p></div>}
          </div>
          <p className={styles.note}>{language === "zh" ? "本文为中文原文。可使用下方切换阅读英文翻译。" : "This piece was originally written in Chinese. The English version has been adapted for natural reading while preserving the original meaning."}</p>
        </header>

        <div className={styles.toggle} aria-label={language === "zh" ? "选择文章语言" : "Choose article language"}>
          <button type="button" data-active={language === "zh"} onClick={() => chooseLanguage("zh")}>中文原文</button>
          <button type="button" data-active={language === "en"} onClick={() => chooseLanguage("en")}>English translation</button>
        </div>

        <article className={styles.article}>
          {article.sections.map((section, index) => (
            <section className={styles.sectionRow} key={`${section.enTitle}-${index}`}>
              {language === "zh" ? (
                <div className={styles.language} data-lang="zh" lang="zh-CN"><h2>{section.zhTitle}</h2>{section.zh.map((paragraph, paragraphIndex) => <p className={section.highlights?.includes(paragraphIndex) || (paragraphIndex === section.zh.length - 1 && section.callout) ? styles.callout : undefined} key={paragraphIndex}>{paragraph}</p>)}</div>
              ) : (
                <div className={styles.language} data-lang="en" lang="en"><h2>{section.enTitle}</h2>{section.en.map((paragraph, paragraphIndex) => <p className={section.highlights?.includes(paragraphIndex) || (paragraphIndex === section.en.length - 1 && section.callout) ? styles.callout : undefined} key={paragraphIndex}>{paragraph}</p>)}</div>
              )}
            </section>
          ))}
        </article>

        <footer className={styles.footer}>
          <p className={styles.footerMeta}>{language === "zh" ? "继续阅读" : "Keep reading"}</p>
          <h2>{language === "zh" ? "更多关于 AI、学习和工作的文章" : "More notes on building, learning, and working with AI"}</h2>
          <Link href={language === "zh" ? "/zh#writing" : "/#writing"}>{language === "zh" ? "返回精选文章 →" : "Return to selected writing →"}</Link>
        </footer>
      </div>
    </main>
  );
}
