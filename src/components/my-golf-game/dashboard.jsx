import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  return (
    <div className="my-golf-game-dashboard-container">
      <Link to="/">Back</Link>
      <Link to="/newScoreDetails">
        <div className="my-golf-game-dashboard-card">Enter New Score</div>
      </Link>
      <Link>
        <div className="my-golf-game-dashboard-card">Your Scores</div>
      </Link>
    </div>
  );
};

export default Dashboard;
