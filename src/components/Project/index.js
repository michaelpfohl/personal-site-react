import React, { Component } from 'react';

class Project extends Component {
  render() {
    const { project } = this.props;
    return (
      <div className="project--card">
        <img
          src={project.screenshot}
          alt={project.title}
          className="project--image"
        ></img>
        <div className="project--details">
          <h1 className="project--details-title">{project.title}</h1>
          <p className="project--details-description">{project.description}</p>
          <p className="project--details-technologies">
            {project.technologiesUsed}
          </p>
          <a
            href={project.githubUrl}
            className="project--details-link"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href={project.url}
            className="project--details-link"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fas fa-eye"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Project;
