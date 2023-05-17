import React from "react";
import AboutMe from "./aboutMe";
import Header from "./header";
import Projects from "./projects";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard ">
        <div className="dashboard-background-box" />
        <div className="dashboard-box-wrapper">
          <AboutMe />
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
