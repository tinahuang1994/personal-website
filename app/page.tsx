import Image from "next/image";

export default function Home() {
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
    <main style={{ backgroundColor: "#F5F2EC", minHeight: "100vh" }}>
      {/* NAV */}
      <nav
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
        }}
      >
        <span
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
          style={{
            display: "flex",
            gap: "2rem",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          <a href="#work"    style={{ color: "#999891", textDecoration: "none" }}>Work</a>
          <a href="#writing" style={{ color: "#999891", textDecoration: "none" }}>Writing</a>
          <a href="#about"   style={{ color: "#999891", textDecoration: "none" }}>About</a>
          <a href="#contact" style={{ color: "#999891", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "8rem 3rem 7rem", position: "relative", overflow: "hidden" }}>
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
            className="hero-headline"
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
            Climate expertise,
            <br />
            built into{" "}
            <em style={{ color: "#B07D3A", fontStyle: "italic" }}>AI products.</em>
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
            I spot the problem. I build the fix. Start to finish.
          </p>
          <a
            href="#work"
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
            See the work →
          </a>
        </div>
      </section>

      {/* WORK SECTION */}
      <section
        id="work"
        style={{ borderTop: "0.5px solid #DDD9D0", padding: "5rem 3rem" }}
      >
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "20px", color: "#666660", margin: 0, marginBottom: "2.5rem", lineHeight: 1.8 }}>
          Complex problems. I go deep, then build something people can actually use.
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
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>AI Benchmarking · Climate</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>True Zero</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", fontStyle: "italic", color: "#999891", margin: 0, marginBottom: "1rem", lineHeight: 1.7 }}>&ldquo;Most climate claims survive a press release. Not all of them survive this.&rdquo;</p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.8 }}>The AI read the reports. I decided what they meant. Six rounds of review to make sure we agreed. This is what I found.</p>
            <a href="/true-zero.html" style={goldPill}>View →</a>
          </div>

          {/* Card: Smoke Story */}
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>Geospatial + AI</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>Smoke Story</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", fontStyle: "italic", color: "#999891", margin: 0, marginBottom: "1rem", lineHeight: 1.7 }}>&ldquo;Most wildfire tools show you the data. This one tells you what it means.&rdquo;</p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.8 }}>Real-time satellite layers — active fires, smoke, PM2.5 — combined with AI-generated narrative and financial impact modeling. Built for anyone who needs to understand what&apos;s actually happening, not just what the numbers say.</p>
            <a href="https://smokestory.onrender.com" target="_blank" rel="noopener noreferrer" style={goldPill}>Explore →</a>
          </div>

          {/* Card: NoThanks */}
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>AI Chatbot · Workplace</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>NoThanks</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", fontStyle: "italic", color: "#999891", margin: 0, marginBottom: "1rem", lineHeight: 1.7 }}>&ldquo;You already know you should say no. You just don&apos;t know how.&rdquo;</p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.8 }}>Describe the situation. Get a response you can actually send. Built on frameworks I learned at BCG for saying no at work — without burning bridges.</p>
            <a href="https://nothanks-xi.vercel.app" target="_blank" rel="noopener noreferrer" style={goldPill}>Try →</a>
          </div>

          {/* Card: Learning Journey */}
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>Open Source · AI + Climate</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>Learning Journey</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", fontStyle: "italic", color: "#999891", margin: 0, marginBottom: "1rem", lineHeight: 1.7 }}>&ldquo;Started in Feb 2026. Already shipped three products by March.&rdquo;</p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.8 }}>All my notes on learning AI and applying it to climate problems — from day zero — are open source.</p>
            <a href="https://github.com/tinahuang1994/Climate-AI-Journey" target="_blank" rel="noopener noreferrer" style={goldPill}>Follow →</a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION — three columns */}
      <section
        id="about"
        style={{ borderTop: "0.5px solid #DDD9D0", padding: "5rem 3rem" }}
      >
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "220px minmax(0, 1fr) minmax(0, 1fr)",
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
                src="/IMG_1635.JPG"
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
              Download full CV →
            </a>
          </div>

          {/* Middle column: name + role + bio */}
          <div style={{ minWidth: 0 }}>
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
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#B07D3A",
                margin: 0,
                marginBottom: "1.5rem",
              }}
            >
              Climate Expert · AI Builder · Problem Solver
            </p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", lineHeight: 1.85, margin: 0, marginBottom: "1rem" }}>
              I grew up in Hangzhou — one of China&apos;s most beautiful cities. For years, it also had some of the worst air. I wanted to do something about it.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", lineHeight: 1.85, margin: 0, marginBottom: "1rem" }}>
              At WRI, I analyzed national climate plans for countries around the world. The conclusion was uncomfortable: the world was far off track.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", lineHeight: 1.85, margin: 0, marginBottom: "1rem" }}>
              At BCG, I was the go-to knowledge team expert on climate science and policy. I helped a Middle East government write their national climate plans, and helped corporations build net zero strategies they could actually execute.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#B07D3A", lineHeight: 1.85, margin: 0 }}>
              Now AI makes it possible to build faster and better than ever. I&apos;m not going to miss that.
            </p>
          </div>

          {/* Right column: CTA */}
          <div
            id="contact"
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
              Have a problem worth{" "}
              <em style={{ color: "#B07D3A", fontStyle: "italic" }}>solving?</em>
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
              I&apos;m open to consulting, collaboration, and the right full-time role.
            </p>
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
              Get in touch →
            </a>
          </div>
        </div>
      </section>

      {/* WRITING SECTION */}
      <section
        id="writing"
        style={{ borderTop: "0.5px solid #DDD9D0", padding: "5rem 3rem" }}
      >
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "20px", color: "#666660", margin: 0, marginBottom: "2.5rem", lineHeight: 1.8 }}>
          Things I figured out along the way.
        </p>
        <div style={{ borderRadius: "12px", overflow: "hidden", border: "0.5px solid #DDD9D0" }}>
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>Essay · April 2026</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>I Shipped Four AI Products in One Month</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", fontStyle: "italic", color: "#999891", margin: 0, marginBottom: "1rem", lineHeight: 1.7 }}>&ldquo;No developer background. No roadmap. Just a download and a problem worth solving.&rdquo;</p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.85 }}>What I actually figured out about learning AI by building — from climate policy to four shipped products in one month.</p>
            <a href="/writing/ai-month-one" style={goldPill}>Read →</a>
          </div>
        </div>
      </section>

      {/* FOR FUN SECTION */}
      <section
        style={{ borderTop: "0.5px solid #DDD9D0", padding: "5rem 3rem" }}
      >
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "20px", color: "#666660", margin: 0, marginBottom: "2.5rem", lineHeight: 1.8 }}>
          Sometimes I build just to see what it feels like.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", backgroundColor: "#DDD9D0", borderRadius: "12px", overflow: "hidden" }}>
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>Hobby · Creative</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>Echo</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", fontStyle: "italic", color: "#999891", margin: 0, marginBottom: "1rem", lineHeight: 1.7 }}>&ldquo;Cold, vast, and quiet. The way space actually feels.&rdquo;</p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.8 }}>Built after watching Project Hail Mary. A starfield that breathes with the music. Three classical pieces — Debussy, Satie, Holst. Or bring your own.</p>
            <a href="https://echo-by-tina.vercel.app" target="_blank" rel="noopener noreferrer" style={goldPill}>Listen →</a>
          </div>
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>Hobby · Climate</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>Climate Triple Takes</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", fontStyle: "italic", color: "#999891", margin: 0, marginBottom: "1rem", lineHeight: 1.7 }}>&ldquo;One story. Three ways to read it.&rdquo;</p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.8 }}>Satire, optimism, or straight facts. Pick your mood. Same story, completely different experience.</p>
            <a href="https://climatetripletakes.netlify.app" target="_blank" rel="noopener noreferrer" style={goldPill}>Discover →</a>
          </div>

          {/* Card: Understory — full width, newest */}
          <div className="work-card" style={{ backgroundColor: "#FDFAF5", padding: "2.5rem", gridColumn: "1 / -1" }}>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#B07D3A", margin: 0, marginBottom: "1rem" }}>Web Art · Language</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "26px", color: "#1C1C1A", margin: 0, marginBottom: "0.75rem" }}>Understory</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", fontStyle: "italic", color: "#999891", margin: 0, marginBottom: "1rem", lineHeight: 1.7 }}>&ldquo;Our language for nature is thin. These words got closer.&rdquo;</p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "17px", color: "#666660", margin: 0, marginBottom: "1.5rem", lineHeight: 1.8 }}>An immersive web art piece built around nature words that English has no room for — from Japanese, Arabic, Māori, Sanskrit, and others. Click a word. Enter the feeling it names.</p>
            <a href="https://understory-rust.vercel.app" target="_blank" rel="noopener noreferrer" style={goldPill}>Enter →</a>
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
        }
        .work-card:hover {
          background-color: #EDE8DF !important;
        }
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 220px minmax(0, 1fr) !important;
          }
          .about-grid > div:last-child {
            grid-column: 2 / 3;
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 0.5px solid #DDD9D0;
            padding-top: 2rem;
          }
        }
        @media (max-width: 768px) {
          .work-grid {
            grid-template-columns: 1fr !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-grid > div:last-child {
            grid-column: 1 !important;
            border-left: none !important;
            padding-left: 0 !important;
          }
        }
      `}</style>
    </main>
  );
}
