"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "./ProjectCard";

const CATEGORIES = ["All", "Branding", "Web Design", "Campaigns", "App Design", "Print"];

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [animating, setAnimating] = useState(false);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleFilter = (cat: string) => {
    if (cat === activeCategory) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveCategory(cat);
      setAnimating(false);
    }, 150);
  };

  return (
    <section id="work" style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px 120px" }}>
      {/* Section header */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          marginBottom: "40px", flexWrap: "wrap", gap: "20px" }}>
        <div>
          <p style={{ fontFamily: "var(--font-body-raw)", fontSize: "0.75rem", fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase", color: "#2563EB", marginBottom: "8px" }}>
            Our Work
          </p>
          <h2 style={{ fontFamily: "var(--font-heading-raw)", fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800, color: "#1E293B", letterSpacing: "-0.03em", lineHeight: 1 }}>
            Selected Projects
          </h2>
        </div>

        {/* Filter tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              style={{
                padding: "6px 16px",
                fontFamily: "var(--font-body-raw)",
                fontSize: "0.8rem",
                fontWeight: 600,
                border: "2px solid #1E293B",
                backgroundColor: activeCategory === cat ? "#1E293B" : "transparent",
                color: activeCategory === cat ? "#FFFDF5" : "#1E293B",
                boxShadow: activeCategory === cat ? "none" : "2px 2px 0px #1E293B",
                transition: "all 0.1s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.backgroundColor = "#f0f0e8";
                  e.currentTarget.style.transform = "translate(-1px, -1px)";
                  e.currentTarget.style.boxShadow = "3px 3px 0px #1E293B";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.transform = "translate(0, 0)";
                  e.currentTarget.style.boxShadow = "2px 2px 0px #1E293B";
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <p style={{ fontFamily: "var(--font-body-raw)", fontSize: "0.8rem", color: "#64748B",
          marginBottom: "28px", fontWeight: 500 }}>
        {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        {activeCategory !== "All" ? ` in ${activeCategory}` : " across all categories"}
      </p>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "28px", opacity: animating ? 0 : 1, transition: "opacity 0.15s ease" }}>
        {filtered.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "80px 0", border: "2px dashed #E2E0D8" }}>
          <p style={{ fontFamily: "var(--font-body-raw)", color: "#64748B" }}>
            No projects in this category yet.
          </p>
        </div>
      )}
    </section>
  );
}