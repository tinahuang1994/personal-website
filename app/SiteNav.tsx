"use client";

import { useState } from "react";
import styles from "./design-preview/page.module.css";

const LINKS = {
  en: [["#climate-ai", "Climate AI"], ["#coaching", "Coaching"], ["#writing", "Writing"], ["#about", "About"], ["#work-with-me", "Work with me"]],
  zh: [["#coaching", "项目教练"], ["#climate-ai", "气候 AI"], ["#writing", "写作"], ["#about", "关于我"], ["#work-with-me", "和我一起做"]],
} as const;

export default function SiteNav({ language }: { language: "en" | "zh" }) {
  const [open, setOpen] = useState(false);
  const isZh = language === "zh";

  return (
    <nav className={styles.nav} aria-label={isZh ? "主导航" : "Main navigation"}>
      <div className={`${styles.shell} ${styles.navInner}`}>
        <a className={styles.brand} href="#top" onClick={() => setOpen(false)}>Tina Huang</a>
        <div className={styles.navLinks}>
          {LINKS[language].map(([href, label], index) => <a className={index === LINKS[language].length - 1 ? styles.navCta : undefined} href={href} key={href}>{label}</a>)}
        </div>
        <div className={styles.navActions}>
          <a
            className={styles.languageSwitch}
            href={isZh ? "/" : "/zh"}
            onClick={(event) => {
              event.preventDefault();
              window.location.href = `${isZh ? "/" : "/zh"}${window.location.hash}`;
            }}
          >
            <span data-current={!isZh}>EN</span> / <span data-current={isZh}>中文</span>
          </a>
          <button className={styles.mobileMenuButton} type="button" aria-expanded={open} aria-controls="mobile-site-menu" onClick={() => setOpen((current) => !current)}>{open ? (isZh ? "关闭" : "Close") : (isZh ? "菜单" : "Menu")}</button>
        </div>
      </div>
      {open ? <div className={styles.mobilePanel} id="mobile-site-menu">{LINKS[language].map(([href, label]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}</div> : null}
    </nav>
  );
}
