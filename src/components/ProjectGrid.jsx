import ProjectCard from './ProjectCard.jsx';

function ProjectGrid({ projects }) {
  if (!projects.length) {
    return <p>No projects match your search. Use the form to add new work.</p>;
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectGrid;
