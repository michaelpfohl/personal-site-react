import React, { Component } from 'react';

import projectsData from '../helpers/data/projectsData';
import Project from '../components/Project';

class Projects extends Component {
  state = { projects: [] };

  componentDidMount() {
    this.setState({
      projects: projectsData.getProjects(),
    });
  }

  render() {
    const { projects } = this.state;
    const showProjects = () => (
      projects.map((project) => <Project project={project}/>)
    );

    return (
        <div className="main--container">
        {showProjects()}
        </div>
    );
  }
}

export default Projects;
