"use client";

import { useState } from "react";
import { TESTIMONIALS } from "../TestimonialsModal";
import styles from "./page.module.css";

const ROLE_ZH: Record<string, string> = {
  "Operations Lead at a U.S. Recycling Company": "美国再生资源公司运营负责人",
  "Psychotherapist": "心理治疗师",
  "Artist": "艺术家",
  "Business Professional": "商业从业者",
  "Weekend Builder": "周末创作者",
  "Emerging Artist": "青年艺术家",
  "Academic Researcher in Economics": "经济学科研工作者",
  "Sustainability Professional": "可持续发展从业者",
  "First-Time AI Builder": "第一次用 AI 做产品的创作者",
  "Aspiring Product Manager": "产品经理转型者",
  "Cross-disciplinary Creator": "跨学科创作者",
  "3D Printing Instructor": "3D 打印讲师",
  "Artist & Designer": "艺术家与设计师",
  "Parent & Aspiring Content Creator": "育儿内容创作者",
  "Beauty Industry Professional": "美业从业者",
  "Marketer & Video Creator": "市场与视频创作者",
  "Incoming College Student": "准大学生",
  "English Teacher & Parent": "英语老师与家长",
  "AI Game Creator · Kaikai": "AI 游戏创作者 · Kaikai",
  "Climate Professional": "气候变化专家",
  "Fashion Designer & Solo Founder": "服装设计师 · 一人公司",
  "Product Builder · Zoey_竹": "产品创作者 · Zoey_竹",
  "Anthony": "Anthony",
  "今天也要跟AI好好说话": "今天也要跟AI好好说话",
};

export default function TestimonialsView({ initialLanguage }: { initialLanguage: "zh" | "en" }) {
  const [language, setLanguage] = useState<"zh" | "en">(initialLanguage);

  const chooseLanguage = (nextLanguage: "zh" | "en") => {
    setLanguage(nextLanguage);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", nextLanguage);
    window.history.replaceState({}, "", url);
  };

  const isZh = language === "zh";

  return (
    <main className={styles.page} lang={isZh ? "zh-CN" : "en"}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <a className={styles.brand} href={isZh ? "/zh" : "/"}>Tina Huang</a>
          <a className={styles.back} href={isZh ? "/zh#impact" : "/#impact"}>{isZh ? "返回首页" : "Back to home"}</a>
        </div>
      </nav>

      <div className={styles.shell}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>{isZh ? "他们怎么说" : "In their own words"}</p>
          <div>
            <h1>{isZh ? "他们做出了什么，又把什么带走了" : "What people built and what changed afterward"}</h1>
            <p className={styles.intro}>{isZh ? "这里收录的是学员的中文原话。" : "These English translations preserve the meaning and detail of the original Chinese testimonials."}</p>
          </div>
        </header>

        <div className={styles.toggle} aria-label={isZh ? "选择推荐语语言" : "Choose testimonial language"}>
          <button type="button" data-active={isZh} onClick={() => chooseLanguage("zh")}>中文原文</button>
          <button type="button" data-active={!isZh} onClick={() => chooseLanguage("en")}>English translation</button>
        </div>

        <section className={styles.list} aria-label="Testimonials">
          {TESTIMONIALS.map((testimonial, index) => (
            <article className={styles.row} id={`testimonial-${index + 1}`} key={`${testimonial.role}-${index}`}>
              <span className={styles.count}>{String(index + 1).padStart(2, "0")}</span>
              <div className={`${styles.language} ${isZh ? styles.zh : styles.en}`} lang={isZh ? "zh-CN" : "en"}>
                {(isZh ? testimonial.zh : testimonial.en).map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
                <p className={styles.role}>— {isZh ? ROLE_ZH[testimonial.role] ?? testimonial.role : testimonial.role}</p>
              </div>
            </article>
          ))}
        </section>

        <footer className={styles.footer}>
          <p>{isZh ? "有一个想了很久、还没做出来的项目？" : "Have a real problem you want to work through with AI?"}</p>
          <a href="mailto:tina.huang@aya.yale.edu?subject=AI%20Project%20Coaching">{isZh ? "告诉我你想做什么 →" : "Tell me what you’re working on →"}</a>
        </footer>
      </div>
    </main>
  );
}
