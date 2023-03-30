import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";

const Projects = () => {
  return (
    <div className="project-wrapper">
      <div className="projects-title">Projects</div>
      <div className="projects-container">
        <div className="projects">My-Golf-Game</div>
        <Link className="projects" to="/movieList">
          Movie List
        </Link>
        <div className="projects">Calculator</div>
        <div className="projects">Login Page</div>
      </div>
    </div>
  );
};

export default Projects;
