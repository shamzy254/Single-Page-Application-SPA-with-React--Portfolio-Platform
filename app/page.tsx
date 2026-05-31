import Navbar from "../components/Navbar";
import PortfolioGrid from "../components/PortfolioGrid";
import projects from "../data/projects.json";
import type { Project } from "../components/ProjectCard";

export default function HomePage() {
  const allProjects = projects as Project[];
  const featuredProjects = allProjects.filter((project) => project.featured);

  return (
    <main style={{ backgroundColor: "#FFFDF5", minHeight: "100vh" }}>
      <Navbar />

      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "120px 24px 80px" }}>
        <div style={{ display: "grid", gap: "32px" }}>
          <div style={{ maxWidth: "780px" }}>
            <p style={{ marginBottom: "16px", color: "#2563EB", fontFamily: "var(--font-body-raw)", fontWeight: 700, letterSpacing: "0.15em", fontSize: "0.82rem", textTransform: "uppercase" }}>
              Creative portfolio platform
            </p>
            <h1 style={{ fontFamily: "var(--font-heading-raw)", fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: 1, marginBottom: "24px", color: "#1E293B" }}>
              Showcase your best work with a polished creative agency experience.
            </h1>
            <p style={{ color: "#475569", fontFamily: "var(--font-body-raw)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "720px" }}>
              A modern Next.js portfolio built to present projects clearly, highlight featured work, and deliver a memorable brand experience across desktop and mobile.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            <a href="#work" style={{ padding: "14px 24px", borderRadius: "999px", backgroundColor: "#2563EB", color: "#fff", fontWeight: 700, fontFamily: "var(--font-body-raw)", textDecoration: "none", boxShadow: "4px 4px 0px #1E293B" }}>
              View projects
            </a>
            <a href="#contact" style={{ padding: "14px 24px", borderRadius: "999px", border: "2px solid #1E293B", backgroundColor: "transparent", color: "#1E293B", fontWeight: 700, fontFamily: "var(--font-body-raw)", textDecoration: "none", boxShadow: "4px 4px 0px #1E293B" }}>
              Contact us
            </a>
          </div>
        </div>
      </section>

      <section id="about" style={{ backgroundColor: "#F8FAFC", padding: "64px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
          <div>
            <p style={{ marginBottom: "16px", color: "#2563EB", fontFamily: "var(--font-body-raw)", fontWeight: 700, letterSpacing: "0.15em", fontSize: "0.82rem", textTransform: "uppercase" }}>
              About the studio
            </p>
            <h2 style={{ fontFamily: "var(--font-heading-raw)", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#1E293B", marginBottom: "20px" }}>
              Design systems, storytelling, and digital experiences that feel unmistakably premium.
            </h2>
            <p style={{ color: "#475569", fontFamily: "var(--font-body-raw)", fontSize: "1rem", lineHeight: 1.8 }}>
              We build portfolio experiences that help brands stand out, convert visitors, and create lasting impressions. From branding and web design to campaign strategy, every project is designed to feel refined and reliable.
            </p>
          </div>

          <div style={{ display: "grid", gap: "16px" }}>
            {featuredProjects.slice(0, 3).map((project) => (
              <div key={project.id} style={{ border: "2px solid #1E293B", padding: "24px", backgroundColor: "#FFFDF5", boxShadow: "4px 4px 0px #1E293B" }}>
                <span style={{ display: "inline-block", marginBottom: "10px", fontFamily: "var(--font-body-raw)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#2563EB" }}>
                  Featured
                </span>
                <h3 style={{ fontFamily: "var(--font-heading-raw)", fontSize: "1.3rem", color: "#1E293B", marginBottom: "10px" }}>
                  {project.title}
                </h3>
                <p style={{ fontFamily: "var(--font-body-raw)", color: "#475569", lineHeight: 1.75, fontSize: "0.95rem" }}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioGrid projects={allProjects} />

      <section id="contact" style={{ backgroundColor: "#1E293B", padding: "64px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gap: "24px", color: "#fff" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <p style={{ marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#F97316", fontSize: "0.82rem", fontFamily: "var(--font-body-raw)", fontWeight: 700 }}>
                Let’s build something exceptional
              </p>
              <h2 style={{ fontFamily: "var(--font-heading-raw)", fontSize: "clamp(2rem, 3vw, 3rem)", margin: 0 }}>
                Need a stronger portfolio or refreshed brand strategy?
              </h2>
            </div>
            <a href="mailto:hello@portfolio-platform.com" style={{ padding: "16px 24px", backgroundColor: "#F97316", color: "#fff", borderRadius: "999px", fontWeight: 700, fontFamily: "var(--font-body-raw)", textDecoration: "none" }}>
              Email us
            </a>
          </div>
          <p style={{ maxWidth: "760px", color: "#CBD5E1", fontFamily: "var(--font-body-raw)", lineHeight: 1.75 }}>
            Share your goals, timeline, and creative direction. This portfolio platform is designed to help agencies and studios present case studies with confidence and clarity.
          </p>
        </div>
      </section>
    </main>
  );
}
