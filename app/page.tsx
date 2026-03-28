import Image from "next/image";

export default function Home() {
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
            color: "#999891",
          }}
        >
          <a href="#work" style={{ color: "#999891", textDecoration: "none" }}>Work</a>
          <a href="#about" style={{ color: "#999891", textDecoration: "none" }}>About</a>
          <a href="#contact" style={{ color: "#999891", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="hero-section"
        style={{
          padding: "9rem 3rem 5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          minHeight: "calc(100vh - 60px)",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 300,
              fontSize: "72px",
              lineHeight: 1.1,
              color: "#1C1C1A",
              margin: 0,
              marginBottom: "1.5rem",
            }}
          >
            Climate expertise, built into{" "}
            <em style={{ color: "#B07D3A", fontStyle: "italic" }}>AI products.</em>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 400,
              fontSize: "18px",
              color: "#666660",
              margin: 0,
              marginBottom: "0.75rem",
              lineHeight: 1.8,
            }}
          >
            Start to finish.
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#B07D3A",
              margin: 0,
              marginBottom: "2.5rem",
            }}
          >
            I spot the problem. I build the fix.
          </p>
          <a
            href="#work"
            style={{
              display: "inline-block",
              backgroundColor: "#1C1C1A",
              color: "#F5F2EC",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "13px",
              padding: "0.75rem 1.75rem",
              borderRadius: "40px",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            See the work →
          </a>
        </div>

        {/* Right column: decorative element */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            minHeight: "360px",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "radial-gradient(circle, #C4BFB5 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              opacity: 0.45,
            }}
          />
          <div style={{ position: "relative", width: "340px", height: "340px" }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid #DDD9D0" }} />
            <div style={{ position: "absolute", inset: "14%", borderRadius: "50%", border: "1px solid #C4BFB5" }} />
            <div style={{ position: "absolute", inset: "28%", borderRadius: "50%", border: "1px solid #B07D3A", opacity: 0.35 }} />
            <div style={{ position: "absolute", inset: "42%", borderRadius: "50%", backgroundColor: "#B07D3A", opacity: 0.18 }} />
          </div>
        </div>
      </section>

      {/* WORK SECTION */}
      <section
        id="work"
        style={{
          borderTop: "0.5px solid #DDD9D0",
          padding: "5rem 3rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#C4BFB5",
            margin: 0,
            marginBottom: "1rem",
          }}
        >
          Work
        </p>
        <p
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 400,
            fontSize: "20px",
            color: "#666660",
            margin: 0,
            marginBottom: "2.5rem",
            lineHeight: 1.8,
          }}
        >
          Complex problems. I go deep, then build something people can actually use.
        </p>

        {/* 2x2 equal card grid */}
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
          {/* Card: Smoke Story */}
          <div style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#B07D3A",
                margin: 0,
                marginBottom: "1rem",
              }}
            >
              Geospatial + AI
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 300,
                fontSize: "26px",
                color: "#1C1C1A",
                margin: 0,
                marginBottom: "0.75rem",
              }}
            >
              Smoke Story
            </h2>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                fontSize: "17px",
                fontStyle: "italic",
                color: "#999891",
                margin: 0,
                marginBottom: "1rem",
                lineHeight: 1.7,
              }}
            >
              &ldquo;Most wildfire tools show you the data. This one tells you what it means.&rdquo;
            </p>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                fontSize: "17px",
                color: "#666660",
                margin: 0,
                marginBottom: "1.5rem",
                lineHeight: 1.8,
              }}
            >
              Real-time satellite layers — active fires, smoke, PM2.5 — combined with AI-generated narrative and financial impact modeling. Built for anyone who needs to understand what&apos;s actually happening, not just what the numbers say.
            </p>
            <a
              href="https://smokestory.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", color: "#B07D3A", textDecoration: "none" }}
            >
              View project →
            </a>
          </div>

          {/* Card: NoThanks */}
          <div style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#B07D3A",
                margin: 0,
                marginBottom: "1rem",
              }}
            >
              AI Chatbot · Workplace
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 300,
                fontSize: "26px",
                color: "#1C1C1A",
                margin: 0,
                marginBottom: "0.75rem",
              }}
            >
              NoThanks
            </h2>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                fontSize: "17px",
                fontStyle: "italic",
                color: "#999891",
                margin: 0,
                marginBottom: "1rem",
                lineHeight: 1.7,
              }}
            >
              &ldquo;You already know you should say no. You just don&apos;t know how.&rdquo;
            </p>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                fontSize: "17px",
                color: "#666660",
                margin: 0,
                marginBottom: "1.5rem",
                lineHeight: 1.8,
              }}
            >
              Describe the situation. Get a response you can actually send. Built on frameworks I learned at BCG for saying no at work — without burning bridges.
            </p>
            <a
              href="https://nothanks-xi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", color: "#B07D3A", textDecoration: "none" }}
            >
              Try it →
            </a>
          </div>

          {/* Card: Climate Triple Takes */}
          <div style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#B07D3A",
                margin: 0,
                marginBottom: "1rem",
              }}
            >
              Climate Communication
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 300,
                fontSize: "26px",
                color: "#1C1C1A",
                margin: 0,
                marginBottom: "0.75rem",
              }}
            >
              Climate Triple Takes
            </h2>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                fontSize: "17px",
                fontStyle: "italic",
                color: "#999891",
                margin: 0,
                marginBottom: "1rem",
                lineHeight: 1.7,
              }}
            >
              &ldquo;One story. Three ways to read it.&rdquo;
            </p>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                fontSize: "17px",
                color: "#666660",
                margin: 0,
                marginBottom: "1.5rem",
                lineHeight: 1.8,
              }}
            >
              Satire, optimism, or straight facts. Pick your mood. Same story, completely different experience.
            </p>
            <a
              href="https://climatetripletakes.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", color: "#B07D3A", textDecoration: "none" }}
            >
              Read →
            </a>
          </div>

          {/* Card: Learning Journey */}
          <div style={{ backgroundColor: "#FDFAF5", padding: "2.5rem" }}>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#B07D3A",
                margin: 0,
                marginBottom: "1rem",
              }}
            >
              Open Source · AI + Climate
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 300,
                fontSize: "26px",
                color: "#1C1C1A",
                margin: 0,
                marginBottom: "0.75rem",
              }}
            >
              Learning Journey
            </h2>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                fontSize: "17px",
                fontStyle: "italic",
                color: "#999891",
                margin: 0,
                marginBottom: "1rem",
                lineHeight: 1.7,
              }}
            >
              &ldquo;Started in February 2026. Already shipped three products.&rdquo;
            </p>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                fontSize: "17px",
                color: "#666660",
                margin: 0,
                marginBottom: "1.5rem",
                lineHeight: 1.8,
              }}
            >
              All my notes on learning AI and applying it to climate problems — from day zero — are open source.
            </p>
            <a
              href="https://github.com/tinahuang1994/Climate-AI-Journey/tree/main/learning%20materials"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", color: "#B07D3A", textDecoration: "none" }}
            >
              Read the notes →
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT + CONTACT SECTION */}
      <section
        id="about"
        style={{
          borderTop: "0.5px solid #DDD9D0",
          padding: "5rem 3rem 6rem",
        }}
      >
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "260px 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Left column: photo + pills + actions */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div
              style={{
                width: "260px",
                height: "320px",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#DDD9D0",
                flexShrink: 0,
              }}
            >
              <Image
                src="/IMG_1635.JPG"
                alt="Tina Huang"
                width={260}
                height={320}
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
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {["Yale MEM", "UC Berkeley", "BCG", "WRI"].map((cred) => (
                <span
                  key={cred}
                  style={{
                    border: "0.5px solid #C4BFB5",
                    borderRadius: "20px",
                    fontSize: "11px",
                    color: "#999891",
                    fontFamily: "var(--font-inter), sans-serif",
                    padding: "0.3rem 0.85rem",
                  }}
                >
                  {cred}
                </span>
              ))}
            </div>

            {/* Action links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href="mailto:tina.huang@aya.yale.edu"
                style={{
                  display: "inline-block",
                  backgroundColor: "#B07D3A",
                  color: "#F5F2EC",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "13px",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "40px",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  textAlign: "center",
                }}
              >
                Get in touch →
              </a>
              <a
                href="/TinaHuang_CV_Full.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "13px",
                  color: "#666660",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Download full CV →
              </a>
            </div>
          </div>

          {/* Right column: bio + CTA */}
          <div>
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
                marginBottom: "1.75rem",
              }}
            >
              Climate Expert · AI Builder · Independent
            </p>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                fontSize: "18px",
                color: "#666660",
                lineHeight: 1.9,
                margin: 0,
                marginBottom: "1rem",
              }}
            >
              I grew up in Hangzhou — one of China&apos;s most beautiful cities. For years, it also had some of the worst air. I wanted to do something about it.
            </p>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                fontSize: "18px",
                color: "#666660",
                lineHeight: 1.9,
                margin: 0,
                marginBottom: "1rem",
              }}
            >
              I studied climate problems and solutions, and started applying them in the real world — in policy, in consulting, and in research.
            </p>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                fontSize: "18px",
                color: "#666660",
                lineHeight: 1.9,
                margin: 0,
                marginBottom: "3rem",
              }}
            >
              Now AI makes it possible to build faster and better than ever. I&apos;m not going to miss that.
            </p>

            {/* CTA block — merged into About */}
            <div
              id="contact"
              style={{
                borderTop: "0.5px solid #DDD9D0",
                paddingTop: "2.5rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 300,
                  fontSize: "42px",
                  color: "#1C1C1A",
                  lineHeight: 1.2,
                  margin: 0,
                  marginBottom: "1rem",
                }}
              >
                Have a problem worth{" "}
                <em style={{ color: "#B07D3A", fontStyle: "italic" }}>solving?</em>
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "13px",
                  color: "#999891",
                  margin: 0,
                  marginBottom: "0.75rem",
                  lineHeight: 1.7,
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
            </div>
          </div>
        </div>
      </section>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .hero-section > div:last-child {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .work-grid {
            grid-template-columns: 1fr !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-grid > div:first-child {
            align-items: center;
          }
        }
      `}</style>
    </main>
  );
}
