import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";

const Projects = () => {
  return (
    <div className="project-wrapper">
      <div className="projects-title">Projects</div>
      <div className="projects-container">
        <Link className="projects" to="/my-golf-game">
          My Golf Game
        </Link>
        <Link className="projects" to="/movieList">
          Movie List
        </Link>
        <Link className="projects" to="/calculator">
          Calculator
        </Link>
      </div>
    </div>
  );
};

export default Projects;
