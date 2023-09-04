import "./Projects.css";
import BlackJackSS from "../../assets/BlackJackScreenShot.png";
import MovieListSS from "../../assets/MovieListScreenShot.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <div className="projects-title">Projects</div>
      <div className="projects-container">
        <Link to="/">
          <img src={BlackJackSS} className="projects-image" />
        </Link>
        <img src={MovieListSS} className="projects-image" />
      </div>
    </div>
  );
};
export default Projects;
