import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="project-tech-list">
          {project.technologies.map((tech) => (
            <li key={tech} className="project-tech-item">{tech}</li>
          ))}
        </ul>
        <a href={project.github}
            className="github-button"
            style={{textDecoration: 'none'}}
            target="_blank">
            Repository Github
        </a>

      </div>
    </div>
  );
}

export default ProjectCard;
