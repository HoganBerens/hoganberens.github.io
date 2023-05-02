import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import YourStats from "./yourStats";

const Dashboard = () => {
  return (
    <div className="my-golf-game-dashboard-container">
      <div className="my-golf-game-header">
        <Link to="/">Back</Link>
        <h1>My Golf Game</h1>
        <Link to="/profile">
          <FontAwesomeIcon className="fa-xl" icon={faUser} />
        </Link>
      </div>
      <div className="my-golf-game-dashboard-card-container">
        <Link to="/newScore" className="my-golf-game-dashboard-card">
          Enter New Score
        </Link>
        <Link to="/yourScores" className="my-golf-game-dashboard-card">
          View Your Scores
        </Link>
        <Link to="/changeClubs" className="my-golf-game-dashboard-card">
          Change Clubs
        </Link>
        <div className="my-golf-game-dashboard-card-stats">
          <YourStats />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
