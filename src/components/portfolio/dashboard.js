import React from "react";
import Navigation from "../Navigation/Navigation";
import Content from "../Content/Content";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <nav className="dashboard-navbar-wrapper">
        <Navigation />
      </nav>
      <div className="dashboard-content-wrapper">
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
