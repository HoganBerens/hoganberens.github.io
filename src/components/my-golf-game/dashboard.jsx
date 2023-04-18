import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import { user } from './utils';

const Dashboard = () => {
  return (
    <div className="my-golf-game-dashboard-container">
      <div className="my-golf-game-header">
        <Link to="/">Back</Link>
        <h1>My Golf Game</h1>
        <Link to="/profile">Profile</Link>
      </div>
      <div className="my-golf-game-dashboard-card-container">
        <Link to="/newScore" className="my-golf-game-dashboard-card">
          Enter New Score
        </Link>
        <Link to="/yourScores" className="my-golf-game-dashboard-card">
          Your Scores
        </Link>
        <Link to="/yourScores" className="my-golf-game-dashboard-card">
          Your Stats from last 5 scores
        </Link>
        <Link to="/changeClubs" className="my-golf-game-dashboard-card">
          Change Clubs
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
