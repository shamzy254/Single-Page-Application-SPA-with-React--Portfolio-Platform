"use client";
import Link from "next/link";
import { useState } from "react";

export function BackButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href="/#work"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontFamily: "var(--font-body-raw)",
        fontSize: "0.82rem",
        fontWeight: 600,
        color: "#1E293B",
        border: "2px solid #1E293B",
        padding: "8px 16px",
        boxShadow: hovered ? "1px 1px 0px #1E293B" : "3px 3px 0px #1E293B",
        transform: hovered ? "translate(2px, 2px)" : "translate(0, 0)",
        transition: "all 0.1s ease",
        backgroundColor: "#FFFDF5",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
      </svg>
      All Projects
    </Link>
  );
}

export function NextProjectButton({ slug, title }: { slug: string; title: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={`/projects/${slug}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "14px 28px",
        backgroundColor: "#F97316",
        color: "#fff",
        fontFamily: "var(--font-body-raw)",
        fontWeight: 700,
        fontSize: "0.9rem",
        border: "2px solid #FFFDF5",
        boxShadow: hovered ? "2px 2px 0px #FFFDF5" : "4px 4px 0px #FFFDF5",
        transform: hovered ? "translate(2px, 2px)" : "translate(0, 0)",
        transition: "all 0.1s ease",
        textDecoration: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      View Project
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
      </svg>
    </Link>
  );
}