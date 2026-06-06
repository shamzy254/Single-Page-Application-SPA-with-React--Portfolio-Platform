function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div>
        <p className="eyebrow">Featured project</p>
        <h3>{project.title}</h3>
      </div>
      <p>{project.description}</p>
      {project.tags && project.tags.length > 0 && (
        <ul className="tag-list">
          {project.tags.map((tag) => (
            <li className="tag" key={`${project.id}-${tag}`}>
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default ProjectCard;
