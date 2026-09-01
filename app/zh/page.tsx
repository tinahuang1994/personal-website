import Image from "next/image";
import Link from "next/link";

export default function ChineseHome() {
  const goldPill: React.CSSProperties = {
    display: "inline-block",
    backgroundColor: "#B07D3A",
    color: "#F5F2EC",
    fontFamily: "var(--font-inter), sans-serif",
    fontSize: "12px",
    padding: "0.5rem 1.25rem",
    borderRadius: "40px",
    textDecoration: "none",
    letterSpacing: "0.02em",
  };

  return (
    <main lang="zh-CN" style={{ backgroundColor: "#F5F2EC", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* NAV */}
      <nav
        className="legacy-nav"
        style={{
          borderBottom: "0.5px solid #DDD9D0",
          padding: "1.25rem 3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          backgroundColor: "#F5F2EC",
          zIndex: 50,
          order: 0,
        }}
      >
        <span
          className="legacy-brand"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 300,
            fontSize: "20px",
            color: "#1C1C1A",
          }}
        >
          Tina Huang
        </span>
        <div
          className="legacy-nav-links"
          style={{
            display: "flex",
            gap: "2rem",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          <a href="#about" style={{ color: "#999891", textDecoration: "none" }}>关于</a>
          <a href="#impact" style={{ color: "#999891", textDecoration: "none" }}>项目教练</a>
          <a href="#work" style={{ color: "#999891", textDecoration: "none" }}>气候 AI</a>
          <a href="#writing" style={{ color: "#999891", textDecoration: "none" }}>写作</a>
          <Link href="/" style={{ color: "#B07D3A", textDecoration: "none" }}>EN</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="legacy-hero" style={{ padding: "8rem 3rem 7rem", position: "relative", overflow: "hidden", order: 1 }}>
        {/* Ambient background blob */}
        <div className="hero-ambient" style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "65%",
          height: "130%",
          background: "radial-gradient(ellipse at center, #DDD9D0 0%, transparent 68%)",
          opacity: 0.45,
          pointerEvents: "none",
          zIndex: 0,
        }} />
        {/* Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1
            className="hero-headline legacy-hero-title"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 300,
              fontSize: "88px",
              lineHeight: 1.05,
              color: "#1C1C1A",
              margin: 0,
              marginBottom: "1.75rem",
              maxWidth: "900px",
            }}
          >
            把<span style={{ whiteSpace: "nowrap" }}>真实问题</span>带来，
            <br />
            一起做成{" "}
            <em style={{ color: "#B07D3A", fontStyle: "italic", whiteSpace: "nowrap" }}>能用的东西</em>
          </h1>
          <p
            className="hero-sub"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 300,
              fontSize: "20px",
              color: "#999891",
              margin: 0,
              marginBottom: "2.25rem",
              lineHeight: 1.5,
            }}
          >
            AI 教育者 / 教练 · 气候 AI 产品创造者 · AI 原生一人公司
          </p>
          <a
            href="#impact"
            className="hero-btn"
            style={{
              display: "inline-block",
              backgroundColor: "#B07D3A",
              color: "#F5F2EC",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              padding: "0.75rem 1.75rem",
              borderRadius: "40px",
              textDecoration: "none",
            }}
          >
            了解项目教练 →
          </a>
        </div>
      </section>

      {/* IMPACT SECTION — coaching comes first */}
      <section
        id="impact"
        className="site-section"
        style={{ borderTop: "0.5px solid #DDD9D0", padding: "5rem 3rem", order: 3, scrollMarginTop: "72px" }}
      >
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "20px", color: "#666660", margin: 0, marginBottom: "2.5rem", lineHeight: 1.8 }}>
          现在，我陪人们用 AI 解决真实问题。我们先把一个问题理清楚，再做成能用的东西。
        </p>
        <div className="work-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", backgroundColor: "#DDD9D0", borderRadius: "12px", overflow: "hidden" }}>
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>Justin · 五节课</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>从 AI 用户，到做出自己的原型</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.8 }}>Justin 没有 Coding 背景。他做出了库存扫描工具、看板和每日 AI 简报。公司把库存原型交给开发团队继续评估。</p>
            <Link href="/writing/justin-five-sessions?lang=zh" style={goldPill}>读 Justin 的故事 →</Link>
          </div>
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>Roy · 八节课</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>第一次做完项目以后，他开始教别人</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.8 }}>Roy 以前从没完成过一个完整项目。八节课里，他做出了游戏、小程序和数据看板。后来，他开始参与课程设计，也开始教美术入门。</p>
            <Link href="/writing/roy-eight-sessions?lang=zh" style={goldPill}>读 Roy 的故事 →</Link>
          </div>
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>项目教练 · 2026 年 8 月</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>40 位客户</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.8 }}>他们带来的真实问题来自运营、科研、可持续发展、设计、教育、医疗等 29 个领域。</p>
            <a href="#contact" style={goldPill}>聊聊你的项目 →</a>
          </div>
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>他们怎么说</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>全部推荐语</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.8 }}>看他们做出了什么、哪些地方让他们意外，以及他们把什么带进了下一个项目。</p>
            <Link href="/testimonials?lang=zh" style={goldPill}>阅读全部推荐语 →</Link>
          </div>
        </div>
      </section>

      {/* COACHING CTA */}
      <section
        id="contact"
        className="site-section"
        style={{ borderTop: "0.5px solid #DDD9D0", padding: "5rem 3rem", order: 4, scrollMarginTop: "72px" }}
      >
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "4rem", alignItems: "start" }}>
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "44px", color: "#1C1C1A", lineHeight: 1.12, margin: 0 }}>
            你有一个值得解决的<em style={{ color: "#B07D3A", fontStyle: "italic" }}>问题吗？</em>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "19px", color: "#666660", lineHeight: 1.8, margin: 0 }}>
              带一个真实问题来。我们可以先从一节两小时的项目教练开始，之后只在项目确实需要时继续。
            </p>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#B07D3A", margin: 0 }}>¥2,000 / 2 小时</p>
            <a href="mailto:tina.huang@aya.yale.edu" style={goldPill}>告诉我你在做什么 →</a>
          </div>
        </div>
      </section>

      {/* WORK SECTION */}
      <section
        id="work"
        className="site-section"
        style={{ borderTop: "0.5px solid #DDD9D0", padding: "5rem 3rem", order: 5, scrollMarginTop: "72px" }}
      >
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "20px", color: "#666660", margin: 0, marginBottom: "2.5rem", lineHeight: 1.8 }}>
          把气候专业经验，做成真正有人能用的 AI 产品。
        </p>

        <div
          className="work-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            backgroundColor: "#DDD9D0",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {/* Card: True Zero */}
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>AI 基准评估 · 气候</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>True Zero</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", fontStyle: "italic", color: "#999891", margin: 0, marginBottom: "1rem", lineHeight: 1.7 }}>&ldquo;大部分气候承诺都经得住新闻稿，不一定经得住证据。&rdquo;</p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.8 }}>True Zero 检查企业气候承诺和证据能不能对得上。我先建立判断标准，再让 AI 阅读企业报告，前后做了六轮审查。</p>
            <a href="/true-zero.html" style={goldPill}>查看 →</a>
          </div>

          {/* Card: Smoke Story */}
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>地理空间数据 + AI</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>Smoke Story</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", fontStyle: "italic", color: "#999891", margin: 0, marginBottom: "1rem", lineHeight: 1.7 }}>&ldquo;大部分野火工具只展示数据，这个产品解释数据意味着什么。&rdquo;</p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.8 }}>把实时卫星、烟雾和空气质量数据，做成一场读得懂的野火故事，并估算它造成的经济影响。</p>
            <a href="https://smokestory.onrender.com" target="_blank" rel="noopener noreferrer" style={goldPill}>探索 →</a>
          </div>

          {/* Card: Climate AI Journey */}
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>开源 · AI + 气候</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>Climate AI Journey</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", fontStyle: "italic", color: "#999891", margin: 0, marginBottom: "1rem", lineHeight: 1.7 }}>&ldquo;从最初几个月的学习笔记，到真正做出来的气候 AI 产品。&rdquo;</p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.8 }}>我从 2026 年 2 月开始学习 AI。一路上的课程、笔记和产品实验都完整公开。</p>
            <a href="https://github.com/tinahuang1994/Climate-AI-Journey" target="_blank" rel="noopener noreferrer" style={goldPill}>查看 →</a>
          </div>

          {/* Card: Understory */}
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>网页艺术 · 自然</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>Understory</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", fontStyle: "italic", color: "#999891", margin: 0, marginBottom: "1rem", lineHeight: 1.7 }}>&ldquo;我们描述自然的语言太薄了，这些词更接近那种感觉。&rdquo;</p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.8 }}>十二个英语装不下的自然词，来自日语、阿拉伯语、毛利语、梵语和其他语言。点击一个词，进入它描述的感觉。</p>
            <a href="https://understory-demo.vercel.app" target="_blank" rel="noopener noreferrer" style={goldPill}>进入 →</a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION — three columns */}
      <section
        id="about"
        className="about-section"
        style={{ borderTop: "0.5px solid #DDD9D0", padding: "5rem 3rem", order: 2, scrollMarginTop: "72px" }}
      >
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "220px minmax(0, 1fr)",
            gap: "3.5rem",
            alignItems: "start",
          }}
        >
          {/* Left column: photo + pills + CV link */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div
              style={{
                width: "220px",
                height: "280px",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#DDD9D0",
              }}
            >
              <Image
                src="/tina-portrait.jpeg"
                alt="Tina Huang"
                width={220}
                height={280}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
            </div>

            {/* Credential pills */}
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {["Yale MEM", "UC Berkeley", "BCG", "WRI"].map((cred) => (
                <span
                  key={cred}
                  className="cred-pill"
                  style={{
                    border: "0.5px solid #B07D3A",
                    borderRadius: "20px",
                    fontSize: "11px",
                    color: "#B07D3A",
                    fontFamily: "var(--font-inter), sans-serif",
                    padding: "0.3rem 0.75rem",
                    backgroundColor: "transparent",
                  }}
                >
                  {cred}
                </span>
              ))}
            </div>

            {/* CV link — gold pill */}
            <a
              href="/TinaHuang_CV_Full.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                backgroundColor: "#B07D3A",
                color: "#F5F2EC",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                padding: "0.6rem 1rem",
                borderRadius: "40px",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              下载完整 CV →
            </a>
          </div>

          {/* Middle column: name + role + bio */}
          <div className="about-copy" style={{ minWidth: 0, maxWidth: "720px" }}>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 300,
                fontSize: "30px",
                color: "#1C1C1A",
                margin: 0,
                marginBottom: "0.4rem",
              }}
            >
              Tina Huang
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "12px",
                lineHeight: 1.5,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#B07D3A",
                margin: 0,
                marginBottom: "1.5rem",
              }}
            >
              AI 教育者 / 教练 · 气候 AI 产品创造者 · AI 原生一人公司
            </p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", lineHeight: 1.85, margin: 0, marginBottom: "1rem" }}>
              我在杭州长大。这座城市很美，也曾长期被严重的空气污染困扰。我的职业生涯因此从气候变化开始。
            </p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", lineHeight: 1.85, margin: 0, marginBottom: "1rem" }}>
              在 WRI，我分析世界各国的气候计划。结论并不乐观：世界仍远远偏离目标。
            </p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", lineHeight: 1.85, margin: 0, marginBottom: "1rem" }}>
              在 BCG，我参与政府和企业的气候科学、政策和净零战略工作。
            </p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#B07D3A", lineHeight: 1.85, margin: 0 }}>
              现在，我做项目教练、气候 AI 产品，也用自己搭建的系统经营一人公司。
            </p>
          </div>

          {/* CTA moved into its own coaching section */}
          <div
            hidden
            aria-hidden="true"
            style={{
              minWidth: 0,
              paddingLeft: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 300,
                fontSize: "32px",
                color: "#1C1C1A",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              你有一个值得解决的
              <em style={{ color: "#B07D3A", fontStyle: "italic" }}>问题吗？</em>
            </h3>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                fontSize: "17px",
                color: "#666660",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              带一个真实问题来。我们可以先从一节两小时的项目教练开始，之后只在项目确实需要时继续。
            </p>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#B07D3A", margin: 0 }}>¥2,000 / 2 小时</p>
            <a
              href="mailto:tina.huang@aya.yale.edu"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "13px",
                color: "#B07D3A",
                textDecoration: "none",
              }}
            >
              tina.huang@aya.yale.edu
            </a>
            <a
              href="mailto:tina.huang@aya.yale.edu"
              style={{
                display: "inline-block",
                backgroundColor: "#B07D3A",
                color: "#F5F2EC",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                padding: "0.75rem 1.5rem",
                borderRadius: "40px",
                textDecoration: "none",
                alignSelf: "flex-start",
              }}
            >
              告诉我你在做什么 →
            </a>
          </div>
        </div>
      </section>

      {/* WRITING SECTION */}
      <section
        id="writing"
        className="site-section"
        style={{ borderTop: "0.5px solid #DDD9D0", padding: "5rem 3rem", order: 6, scrollMarginTop: "72px" }}
      >
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "20px", color: "#666660", margin: 0, marginBottom: "2.5rem", lineHeight: 1.8 }}>
          一路上想清楚的一些事。这些文章先用中文写成，英文版本会按英文读者的习惯重新表达。
        </p>
        <div className="work-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", backgroundColor: "#DDD9D0", borderRadius: "12px", overflow: "hidden" }}>
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>月度手记 · 2026 年 8 月</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>这个 8 月，我更清楚自己想怎么工作</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", fontStyle: "italic", color: "#999891", margin: 0, marginBottom: "1rem", lineHeight: 1.7 }}>&ldquo;两次播客录制、持续回来的学员和一个家庭项目，让方向变得更清楚。&rdquo;</p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.85 }}>关于项目教练、学习、气候，以及我更想把时间放在哪一种工作上。</p>
            <Link href="/writing/august-2026?lang=zh" style={goldPill}>回看这个 8 月 →</Link>
          </div>
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>职业转型 · 2026 年 8 月</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>我没有想清楚新职业，先做了一个个小实验</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.85 }}>八款小产品和咖啡馆里的一次教学，给了我比反复思考更具体的证据。</p>
            <Link href="/writing/career-experiments?lang=zh" style={goldPill}>看看我试了什么 →</Link>
          </div>
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>一人公司 · 2026 年 8 月</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>每天只工作 4 小时，我是怎么做到的？</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.85 }}>上下文、自动化和清晰的完成标准，让四小时这条边界成为可能。</p>
            <Link href="/writing/four-focused-hours?lang=zh" style={goldPill}>看看怎么做到 →</Link>
          </div>
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>用 AI 创造 · 2026 年 4 月</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>一个月做出四款 AI 产品，我学到了什么</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", fontStyle: "italic", color: "#999891", margin: 0, marginBottom: "1rem", lineHeight: 1.7 }}>&ldquo;没有开发背景，也没有路线图。只是下载了工具，然后从一个值得解决的问题开始。&rdquo;</p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.85 }}>从气候政策到四个真正跑起来的产品，我是怎么边做边学的。</p>
            <Link href="/writing/ai-month-one?lang=zh" style={goldPill}>开始动手 →</Link>
          </div>
        </div>
      </section>

      {/* FOR FUN SECTION */}
      <section
        className="site-section"
        style={{ borderTop: "0.5px solid #DDD9D0", padding: "5rem 3rem", order: 7 }}
      >
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "20px", color: "#666660", margin: 0, marginBottom: "2.5rem", lineHeight: 1.8 }}>
          有些项目来自好奇，有些是为了解决我反复遇到的问题。
        </p>
        <div className="work-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", backgroundColor: "#DDD9D0", borderRadius: "12px", overflow: "hidden" }}>
          {/* Card: NoThanks */}
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>AI 聊天工具 · 职场</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>NoThanks</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", fontStyle: "italic", color: "#999891", margin: 0, marginBottom: "1rem", lineHeight: 1.7 }}>&ldquo;你已经知道应该拒绝，只是不知道怎么说。&rdquo;</p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.8 }}>描述具体情境，就能得到一段真正可以发出去的回复。产品使用了我在 BCG 学到的职场拒绝框架。</p>
            <a href="https://nothanks-xi.vercel.app" target="_blank" rel="noopener noreferrer" style={goldPill}>试用 →</a>
          </div>
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>兴趣项目 · 创作</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>Echo</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", fontStyle: "italic", color: "#999891", margin: 0, marginBottom: "1rem", lineHeight: 1.7 }}>&ldquo;冰冷、辽阔、安静，像太空真正给人的感觉。&rdquo;</p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.8 }}>读完《挽救计划》以后做的一片会随着音乐呼吸的星空。</p>
            <a href="/echo/index.html" target="_blank" rel="noopener noreferrer" style={goldPill}>聆听 →</a>
          </div>
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>兴趣项目 · 气候</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>Climate Triple Takes</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", fontStyle: "italic", color: "#999891", margin: 0, marginBottom: "1rem", lineHeight: 1.7 }}>&ldquo;同一个故事，三种读法。&rdquo;</p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.8 }}>讽刺、乐观，或者只看事实。选择你今天想用哪种方式读同一则气候新闻。</p>
            <a href="https://climatetripletakes.netlify.app" target="_blank" rel="noopener noreferrer" style={goldPill}>查看 →</a>
          </div>

          {/* Card: More to come */}
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>下一步</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>新的实验还在做</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, lineHeight: 1.8 }}>做好以后，我会放在这里。</p>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroAmbient {
          0%   { transform: translate(0%, 0%)   scale(1);    opacity: 0.45; }
          33%  { transform: translate(3%, -4%)  scale(1.06); opacity: 0.6;  }
          66%  { transform: translate(-2%, 3%)  scale(0.97); opacity: 0.5;  }
          100% { transform: translate(0%, 0%)   scale(1);    opacity: 0.45; }
        }
        .hero-headline {
          animation: fadeUp 0.75s ease-out both;
          animation-delay: 0.05s;
        }
        .hero-sub {
          animation: fadeUp 0.75s ease-out both;
          animation-delay: 0.3s;
        }
        .hero-btn {
          animation: fadeUp 0.75s ease-out both;
          animation-delay: 0.52s;
        }
        .hero-ambient {
          animation: heroAmbient 14s ease-in-out infinite;
        }
        .work-card {
          transition: background-color 0.25s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        .work-card > a:last-child {
          margin-top: auto;
          align-self: flex-start;
        }
        .work-card:hover {
          background-color: #EDE8DF !important;
        }
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 220px minmax(0, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .legacy-nav {
            padding: 1rem 1.25rem !important;
          }
          .legacy-brand {
            white-space: nowrap;
            font-size: 18px !important;
          }
          .legacy-nav-links {
            gap: 0.75rem !important;
            font-size: 8.5px !important;
            letter-spacing: 0.04em !important;
          }
          .legacy-hero {
            padding: 5rem 1.25rem 4rem !important;
          }
          .legacy-hero-title {
            font-size: clamp(52px, 16vw, 64px) !important;
          }
          .work-grid {
            grid-template-columns: 1fr !important;
          }
          .site-section {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
          .work-card {
            padding: 1.875rem !important;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .about-section {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
          .about-copy {
            max-width: none !important;
          }
        }
      `}</style>
    </main>
  );
}
