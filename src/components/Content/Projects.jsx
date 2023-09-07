import "./Projects.css";
import BlackJackSS from "../../assets/BlackJackScreenShot.png";
import MovieListSS from "../../assets/MovieListScreenShot.png";
import OutingsSS from "../../assets/OutingsSS.png";
import CalculatorSS from "../../assets/CalculatorSS.png";
import golfStatsTrackerSS from "../../assets/golfStatsTrackerSS.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <div className="projects-title" id="projects">
        Projects
      </div>
      <div className="projects-container">
        <Link
          target="_blank"
          to="https://hogans-golf-stats-tracker-471d20cc5c65.herokuapp.com/"
          className="projects-description-container"
        >
          <img src={golfStatsTrackerSS} className="projects-image" />
          <div className="projects-description">
            <span className="projects-description-text">
              Golf-Stats-Tracker is a Full-Stack app built using Express,
              Mongoose, HTML, CSS and MongoDB. Enter your clubs and recent
              scores to see the good and bad of your golf game.
            </span>
          </div>
        </Link>
        <Link
          target="_blank"
          to="https://hoganberens.github.io/Blackjack/"
          className="projects-description-container"
        >
          <img src={BlackJackSS} className="projects-image" />
          <div className="projects-description">
            <span className="projects-description-text">
              Golf-Stats-Tracker is a Full-Stack app built using Express,
              Mongoose, HTML, CSS and MongoDB. Enter your clubs and recent
              scores to see the good and bad of your golf game.
            </span>
          </div>
        </Link>
        <Link
          target="_blank"
          to="https://outings-af5fe22770a5.herokuapp.com/"
          className="projects-description-container"
        >
          <img src={OutingsSS} className="projects-image" />
          <div className="projects-description">
            <span className="projects-description-text">
              Golf-Stats-Tracker is a Full-Stack app built using Express,
              Mongoose, HTML, CSS and MongoDB. Enter your clubs and recent
              scores to see the good and bad of your golf game.
            </span>
          </div>
        </Link>
        <Link
          target="_blank"
          to="/movieList"
          className="projects-description-container"
        >
          <img src={MovieListSS} className="projects-image" />
          <div className="projects-description">
            <span className="projects-description-text">
              Golf-Stats-Tracker is a Full-Stack app built using Express,
              Mongoose, HTML, CSS and MongoDB. Enter your clubs and recent
              scores to see the good and bad of your golf game.
            </span>
          </div>
        </Link>
        <Link
          target="_blank"
          to="/calculator"
          className="projects-description-container"
        >
          <img src={CalculatorSS} className="projects-image" />
          <div className="projects-description">
            <span className="projects-description-text">
              Golf-Stats-Tracker is a Full-Stack app built using Express,
              Mongoose, HTML, CSS and MongoDB. Enter your clubs and recent
              scores to see the good and bad of your golf game.
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Projects;
