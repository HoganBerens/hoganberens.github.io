import React, { useEffect } from "react";
import AboutMe from "./aboutMe";
import Projects from "./projects";
import "./dashboard.css";

const Dashboard = () => {
  useEffect(() => {
    localStorage.setItem(
      "clubs",
      JSON.stringify([
        "Driver",
        "Three Wood",
        "2 Iron",
        "4 Iron",
        "5 Iron",
        "6 Iron ",
        "7 Iron",
        "8 Iron",
        "9 Iron",
        "Pitching Wedge",
        "50 Degree",
        "54 Degree",
        "58 Degree",
      ])
    );
  }, []);
  return (
    <div className="dashboard-wrapper">
      <div className="homepage-container">
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
