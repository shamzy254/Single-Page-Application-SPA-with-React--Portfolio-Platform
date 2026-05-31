"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  client: string;
  description: string;
  longDescription?: string;
  coverImage: string;
  images?: string[];
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/projects/${project.slug}`}
      style={{
        display: "block",
        border: "2px solid #1E293B",
        backgroundColor: "#FFFDF5",
        boxShadow: hovered ? "6px 6px 0px #1E293B" : "4px 4px 0px #1E293B",
        transform: hovered ? "translate(-2px, -2px)" : "translate(0, 0)",
        transition: "all 0.15s ease",
        cursor: "pointer",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          aspectRatio: "4/3",
          overflow: "hidden",
          borderBottom: "2px solid #1E293B",
          backgroundColor: "#E2E0D8",
        }}
      >
        <img
          src={project.coverImage}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />
        {/* Category badge */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            backgroundColor: "#F97316",
            color: "#fff",
            fontFamily: "var(--font-body-raw)",
            fontSize: "0.7rem",
            fontWeight: 700,
            padding: "4px 10px",
            border: "1.5px solid #1E293B",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {project.category}
        </div>
        {project.featured && (
          <div
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              backgroundColor: "#2563EB",
              color: "#fff",
              fontFamily: "var(--font-body-raw)",
              fontSize: "0.65rem",
              fontWeight: 700,
              padding: "3px 8px",
              border: "1.5px solid #1E293B",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "20px 20px 16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "12px",
            marginBottom: "8px",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-heading-raw)",
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "#1E293B",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h3>
          <div
            style={{
              width: "28px",
              height: "28px",
              minWidth: "28px",
              border: "2px solid #1E293B",
              backgroundColor: hovered ? "#2563EB" : "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background-color 0.15s ease",
            }}
          >
            <ArrowUpRight
              size={14}
              color={hovered ? "#fff" : "#1E293B"}
              strokeWidth={2.5}
            />
          </div>
        </div>

        <p
          style={{
            fontFamily: "var(--font-body-raw)",
            fontSize: "0.82rem",
            color: "#64748B",
            marginBottom: "14px",
            lineHeight: 1.55,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "12px",
            borderTop: "1px solid #E2E0D8",
          }}
        >
          <span style={{ fontFamily: "var(--font-body-raw)", fontSize: "0.75rem", color: "#64748B", fontWeight: 500 }}>
            {project.client}
          </span>
          <span style={{ fontFamily: "var(--font-body-raw)", fontSize: "0.75rem", color: "#64748B", fontWeight: 500 }}>
            {project.year}
          </span>
        </div>
      </div>
    </Link>
  );
}