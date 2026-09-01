"use client";

import { useState, useRef, useEffect } from "react";

const EMAIL = "tina.huang@aya.yale.edu";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Fallback for older browsers / non-secure contexts
      const ta = document.createElement("textarea");
      ta.value = EMAIL;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch { /* no-op */ }
      document.body.removeChild(ta);
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={copy}
      title="Click to copy"
      aria-label={`Copy email address ${EMAIL}`}
      style={{
        display: "inline-block",
        backgroundColor: copied ? "#B07D3A" : "transparent",
        color: copied ? "#F5F2EC" : "#B07D3A",
        border: "1px solid #B07D3A",
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: "12px",
        letterSpacing: "0.02em",
        padding: "0.75rem 1.75rem",
        borderRadius: "40px",
        textDecoration: "none",
        cursor: "pointer",
        transition: "background-color 0.2s ease, color 0.2s ease",
      }}
    >
      {copied ? "Copied ✓" : `${EMAIL}  ⧉`}
    </button>
  );
}
