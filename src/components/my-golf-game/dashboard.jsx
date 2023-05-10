import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import YourStats from "./yourStats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Dashboard = () => {
  return (
    <div className="my-golf-game-dashboard-container">
      <div className="my-golf-game-header">
        <div className="d-flex container">
          <div className="flex-auto">
            <Link className="golf-header-link" to="/">
              Back
            </Link>
          </div>
          <h1 className="flex-auto header-title">My Golf Game</h1>
          <div className="flex-auto header-profile-wrapper">
            <FontAwesomeIcon
              onClick={() => {
                window.location = "/profile";
              }}
              className="fa-xl golf-header-link-header-profile"
              icon={faUser}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="py-5 row gx-5">
          <div className="col-md-4">
            <Link to="/newScore" className="my-golf-game-dashboard-card">
              Enter New Score
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/yourScores" className="my-golf-game-dashboard-card">
              View Your Scores
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/changeClubs" className="my-golf-game-dashboard-card">
              Change Clubs
            </Link>
          </div>
        </div>
        <div className="py-5 row gx-5">
          <div className="col-12">
            <div className="my-golf-game-dashboard-card-stats">
              <YourStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
