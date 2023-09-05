import './Projects.css';
import BlackJackSS from '../../assets/BlackJackScreenShot.png';
import MovieListSS from '../../assets/MovieListScreenShot.png';
import OutingsSS from '../../assets/OutingsSS.png';
import CalculatorSS from '../../assets/CalculatorSS.png';
import golfStatsTrackerSS from '../../assets/golfStatsTrackerSS.png';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <div className="projects-title">Projects</div>
      <div className="projects-container">
        <Link
          target="_blank"
          to="https://hogans-golf-stats-tracker-471d20cc5c65.herokuapp.com/"
        >
          <img src={golfStatsTrackerSS} className="projects-image" />
        </Link>
        <Link target="_blank" to="https://hoganberens.github.io/Blackjack/">
          <img src={BlackJackSS} className="projects-image" />
        </Link>
        <Link target="_blank" to="https://outings-af5fe22770a5.herokuapp.com/">
          <img src={OutingsSS} className="projects-image" />
        </Link>
        <Link target="_blank" to="/movieList">
          <img src={MovieListSS} className="projects-image" />
        </Link>
        <Link target="_blank" to="/calculator">
          <img src={CalculatorSS} className="projects-image" />
        </Link>
      </div>
    </div>
  );
};
export default Projects;
