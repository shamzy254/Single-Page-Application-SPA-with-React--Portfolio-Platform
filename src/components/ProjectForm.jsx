import { useState } from 'react';

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    onAddProject({
      id: `project-${Date.now()}`,
      title: title.trim(),
      description: description.trim(),
      tags: tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean)
    });

    setTitle('');
    setDescription('');
    setTags('');
  }

  return (
    <form className="control-row" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="project-title">Project title</label>
        <input
          id="project-title"
          type="text"
          placeholder="Campaign name or creative project"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="project-description">Project description</label>
        <textarea
          id="project-description"
          placeholder="Short summary of the work and value delivered"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="project-tags">Tags (comma separated)</label>
        <input
          id="project-tags"
          type="text"
          placeholder="Brand, digital, social"
          value={tags}
          onChange={(event) => setTags(event.target.value)}
        />
      </div>
      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
