import "./Projects.css";
import BlackJackSS from "../../assets/BlackJackScreenShot.png";
import MovieListSS from "../../assets/MovieListScreenShot.png";
import OutingsSS from "../../assets/OutingsSS.png";
import CalculatorSS from "../../assets/CalculatorSS.png";
import golfStatsTrackerSS from "../../assets/golfStatsTrackerSS.png";
import sharedCalendarSS from "../../assets/shared-calendarSS.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <div className="projects-title" id="projects">
        Projects
      </div>
      <div className="projects-container">
        <Link target="_blank" to="https://shared-calendar-13a0dea55d3b.herokuapp.com/" className="projects-description-container">
          <img src={sharedCalendarSS} alt="Shared-Calendar dashboard" className="projects-image" />
          <div className="projects-description">
            <span className="projects-description-text">
              Shared-Calendar is a Full-Stack app built using React, Express, Mongoose, MongoDb and Full Calendar API. Add your events to your calendar and create a group with your friends to see their events
            </span>
          </div>
        </Link>
        <Link target="_blank" to="https://hogans-golf-stats-tracker-471d20cc5c65.herokuapp.com/" className="projects-description-container">
          <img src={golfStatsTrackerSS} alt="Golf-stats-tracker dashboard" className="projects-image" />
          <div className="projects-description">
            <span className="projects-description-text">Golf-Stats-Tracker is a Full-Stack app built using Express, Mongoose, HTML, CSS and MongoDB. Enter your clubs and recent scores to see the good and bad of your golf game.</span>
          </div>
        </Link>
        <Link target="_blank" to="https://outings-af5fe22770a5.herokuapp.com/" className="projects-description-container">
          <img src={OutingsSS} alt="Outings dashboard" className="projects-image" />
          <div className="projects-description">
            <span className="projects-description-text">Outings is Full-Stack app built using Python, Django, Bootstrap and PostgreSQL. View all the sports-related events that users have posted, post your events if you want others to join! </span>
          </div>
        </Link>
        <Link to="/movieList" className="projects-description-container">
          <img src={MovieListSS} alt="MovieList dashboard" className="projects-image" />
          <div className="projects-description">
            <span className="projects-description-text">Movie List is a Full-Stack app built using React and The Movie Database API. See the most popular movies or search for any movie you would like.</span>
          </div>
        </Link>
        <Link target="_blank" to="https://hoganberens.github.io/Blackjack/" className="projects-description-container">
          <img src={BlackJackSS} alt="Blackjack dashboard" className="projects-image" />
          <div className="projects-description">
            <span className="projects-description-text">Blackjack is single page app built with vanilla JavaScript, HTML and CSS. Wager in-game credits and test your luck!</span>
          </div>
        </Link>
        <Link to="/calculator" className="projects-description-container">
          <img src={CalculatorSS} alt="Calculator dashboard" className="projects-image" />
          <div className="projects-description">
            <span className="projects-description-text">Calculator is a single page app built using React and CSS. Use this app in place of your everyday calculator!</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Projects;
