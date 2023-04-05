import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div className="my-golf-game-dashboard-container">
      {console.log(user)}
      <Link to="/">Back</Link>
      <div className="mgg-dashboard-postedScores-container">Posted Scores</div>
      <Link to="/newScoreDetails">Enter New Score</Link>
      <Link to="/newCourse">Enter New Course</Link>
    </div>
  );
};

export default Dashboard;
