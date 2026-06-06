import { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import ProjectForm from './components/ProjectForm.jsx';
import ProjectGrid from './components/ProjectGrid.jsx';
import initialProjects from './data/projects.js';

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return projects.filter((project) => {
      return (
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    });
  }, [projects, searchQuery]);

  function handleAddProject(newProject) {
    setProjects((current) => [newProject, ...current]);
  }

  return (
    <div className="app-shell">
      <Header />
      <main className="layout-container">
        <section className="hero-card">
          <div>
            <p className="eyebrow">Creative Agency Portfolio</p>
            <h1>Modern campaigns, strategic storytelling, and results-focused design.</h1>
            <p>
              Showcase new work, keep the portfolio fresh, and help clients discover the agency impact with a responsive project gallery.
            </p>
          </div>
          <div className="hero-panel">
            <p className="hero-panel-title">Portfolio Controls</p>
            <SearchBar value={searchQuery} onSearch={setSearchQuery} />
            <ProjectForm onAddProject={handleAddProject} />
          </div>
        </section>

        <section className="projects-section">
          <div className="section-headline">
            <div>
              <p className="eyebrow">Latest Work</p>
              <h2>Agency Projects</h2>
            </div>
            <p>{filteredProjects.length} project{filteredProjects.length === 1 ? '' : 's'} showing</p>
          </div>
          <ProjectGrid projects={filteredProjects} />
        </section>
      </main>
    </div>
  );
}

export default App;
