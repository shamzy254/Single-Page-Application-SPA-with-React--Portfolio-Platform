import { notFound } from "next/navigation";
import projects from "../../../data/projects.json";
import Navbar from "../../../components/Navbar";
import { BackButton, NextProjectButton } from "../../../components/ProjectInteractiveElements";
import type { Project } from "../../../components/ProjectCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return (projects as Project[]).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = (projects as Project[]).find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };
  return { title: `${project.title} — Portfolio Platform`, description: project.description };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = (projects as Project[]).find((p) => p.slug === slug);
  if (!project) notFound();

  const allProjects = projects as Project[];
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <main style={{ backgroundColor: "#FFFDF5", minHeight: "100vh" }}>
      <Navbar />

      {/* Back button */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "100px 24px 0" }}>
        <BackButton />
      </div>

      {/* Header */}
      <header style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px 56px",
          borderBottom: "2px solid #1E293B" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between",
            flexWrap: "wrap", gap: "32px" }}>
          <div style={{ flex: 1, minWidth: "300px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <span style={{ backgroundColor: "#F97316", color: "#fff",
                  fontFamily: "var(--font-body-raw)", fontSize: "0.7rem", fontWeight: 700,
                  padding: "4px 12px", border: "1.5px solid #1E293B",
                  letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {project!.category}
              </span>
              <span style={{ fontFamily: "var(--font-body-raw)", fontSize: "0.82rem",
                  color: "#64748B", fontWeight: 500 }}>
                {project!.year}
              </span>
            </div>
            <h1 style={{ fontFamily: "var(--font-heading-raw)", fontWeight: 900,
                fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.04em",
                color: "#1E293B", lineHeight: 1, marginBottom: "24px" }}>
              {project!.title}
            </h1>
            <p style={{ fontFamily: "var(--font-body-raw)", fontSize: "1.05rem",
                color: "#64748B", maxWidth: "560px", lineHeight: 1.75 }}>
              {project!.description}
            </p>
          </div>

          {/* Meta card */}
          <div style={{ border: "2px solid #1E293B", padding: "28px", minWidth: "240px",
              boxShadow: "4px 4px 0px #1E293B", backgroundColor: "#FFFDF5" }}>
            {[
              { label: "Client", value: project!.client },
              { label: "Year", value: project!.year },
              { label: "Category", value: project!.category },
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: i < 2 ? "20px" : "0",
                  paddingBottom: i < 2 ? "20px" : "0", borderBottom: i < 2 ? "1px solid #E2E0D8" : "none" }}>
                <div style={{ fontFamily: "var(--font-body-raw)", fontSize: "0.68rem", fontWeight: 700,
                    letterSpacing: "0.12em", textTransform: "uppercase", color: "#2563EB", marginBottom: "4px" }}>
                  {item.label}
                </div>
                <div style={{ fontFamily: "var(--font-heading-raw)", fontSize: "1rem",
                    fontWeight: 700, color: "#1E293B" }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Cover image */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ border: "2px solid #1E293B", boxShadow: "6px 6px 0px #1E293B",
            overflow: "hidden", aspectRatio: "16/9" }}>
          <img src={project!.coverImage} alt={project!.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* Description + Tags */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 80px",
          display: "grid", gridTemplateColumns: "2fr 1fr", gap: "64px", alignItems: "start" }}>
        <div>
          <p style={{ fontFamily: "var(--font-body-raw)", fontSize: "0.75rem", fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase", color: "#2563EB", marginBottom: "16px" }}>
            About the Project
          </p>
          <p style={{ fontFamily: "var(--font-body-raw)", fontSize: "1.05rem",
              color: "#1E293B", lineHeight: 1.9 }}>
            {project!.longDescription || project!.description}
          </p>
        </div>
        <div>
          <p style={{ fontFamily: "var(--font-body-raw)", fontSize: "0.75rem", fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase", color: "#2563EB", marginBottom: "16px" }}>
            Disciplines
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {project!.tags.map((tag: string) => (
              <span key={tag} style={{ fontFamily: "var(--font-body-raw)", fontSize: "0.78rem",
                  fontWeight: 600, padding: "6px 14px", border: "2px solid #1E293B", color: "#1E293B" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Next project */}
      <div style={{ borderTop: "2px solid #1E293B", backgroundColor: "#1E293B", padding: "64px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex",
            alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
          <div>
            <p style={{ fontFamily: "var(--font-body-raw)", fontSize: "0.75rem", fontWeight: 700,
                letterSpacing: "0.15em", textTransform: "uppercase", color: "#F97316", marginBottom: "8px" }}>
              Next Project
            </p>
            <h3 style={{ fontFamily: "var(--font-heading-raw)", fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                fontWeight: 800, color: "#FFFDF5", letterSpacing: "-0.03em" }}>
              {nextProject.title}
            </h3>
          </div>
          <NextProjectButton slug={nextProject.slug} title={nextProject.title} />
        </div>
      </div>
    </main>
  );
}