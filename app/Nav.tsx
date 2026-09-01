"use client";

import { useState, useEffect } from "react";

const LINKS: { href: string; label: string }[] = [
  { href: "#coaching", label: "Coaching" },
  { href: "#work", label: "Work" },
  { href: "#art", label: "Art + Nature" },
  { href: "#learning", label: "Learning" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <nav
      style={{
        borderBottom: "0.5px solid #DDD9D0",
        position: "sticky",
        top: 0,
        backgroundColor: "#F5F2EC",
        zIndex: 50,
      }}
    >
      <div
        className="nav-bar"
        style={{
          padding: "1.25rem 3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          onClick={() => setOpen(false)}
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 300,
            fontSize: "20px",
            color: "#1C1C1A",
            textDecoration: "none",
          }}
        >
          Tina Huang
        </a>

        {/* Desktop links */}
        <div
          className="nav-links"
          style={{
            display: "flex",
            gap: "2rem",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} style={{ color: "#999891", textDecoration: "none" }}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger / close button */}
        <button
          type="button"
          className="nav-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{
            display: "none",
            flexDirection: "column",
            justifyContent: "center",
            gap: "5px",
            width: "28px",
            height: "28px",
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <span
            style={{
              display: "block",
              height: "1.5px",
              width: "22px",
              backgroundColor: "#1C1C1A",
              transition: "transform 0.25s ease, opacity 0.25s ease",
              transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              height: "1.5px",
              width: "22px",
              backgroundColor: "#1C1C1A",
              transition: "opacity 0.2s ease",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              height: "1.5px",
              width: "22px",
              backgroundColor: "#1C1C1A",
              transition: "transform 0.25s ease, opacity 0.25s ease",
              transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <div
          className="nav-mobile-panel"
          style={{
            display: "none",
            flexDirection: "column",
            borderTop: "0.5px solid #DDD9D0",
            backgroundColor: "#F5F2EC",
          }}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#666660",
                textDecoration: "none",
                padding: "1rem 2rem",
                borderBottom: "0.5px solid #DDD9D0",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-bar {
            padding: 1.1rem 1.5rem !important;
          }
          .nav-links {
            display: none !important;
          }
          .nav-burger {
            display: flex !important;
          }
          .nav-mobile-panel {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
