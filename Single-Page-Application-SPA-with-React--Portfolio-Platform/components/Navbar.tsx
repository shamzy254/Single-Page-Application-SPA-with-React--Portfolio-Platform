"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(255,253,245,0.95)" : "transparent",
        borderBottom: scrolled ? "2px solid #1E293B" : "none",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.2s ease",
        fontFamily: "var(--font-body-raw)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-heading-raw)",
            fontWeight: 800,
            fontSize: "1.1rem",
            letterSpacing: "-0.03em",
            color: "#1E293B",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "20px",
              height: "20px",
              backgroundColor: "#2563EB",
              border: "2px solid #1E293B",
            }}
          />
          Portfolio Platform
        </Link>

        {/* Nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <a
            href="#work"
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "#1E293B",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#2563EB")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#1E293B")}
          >
            Work
          </a>
          <a
            href="#about"
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "#1E293B",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#2563EB")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#1E293B")}
          >
            About
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 20px",
              backgroundColor: "#2563EB",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.875rem",
              border: "2px solid #1E293B",
              boxShadow: "3px 3px 0px #1E293B",
              transition: "all 0.1s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translate(2px, 2px)";
              e.currentTarget.style.boxShadow = "1px 1px 0px #1E293B";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translate(0, 0)";
              e.currentTarget.style.boxShadow = "3px 3px 0px #1E293B";
            }}
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}