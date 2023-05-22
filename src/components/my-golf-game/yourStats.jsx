import React from "react";
import "./yourStats.css";
import { scores } from "./utils";

const YourStats = () => {
  let hitFIR = 0;
  let totalFairways = 0;
  let hitGIR = 0;
  let totalGreens = 0;
  scores.map((score, scoreIndex) => {
    hitFIR += score.filter((hole) => {
      return hole.FIR;
    }).length;
    totalFairways += score.filter((hole) => {
      return hole.FIR !== undefined;
    }).length;
    hitGIR += score.filter((hole) => {
      return hole.GIR === true;
    }).length;
    totalGreens += score.filter((hole) => {
      return hole.GIR !== undefined;
    }).length;
  });

  return (
    <div className="yourStats-wrapper  col-md-8">
      <div className="yourStats-title">Stats from your last 3 rounds</div>
      <div className="yourStats-stats-container col-md-10">
        <div className="yourStats-FIR-wrapper col-md-4 ">
          <div className="yourStats-cell">
            <div>Fairways Hit</div>
          </div>
          <div className="yourStats-cell">
            {hitFIR} / {totalFairways}
          </div>
          <div className="yourStats-cell">
            <div style={{ color: "lightgreen" }}>
              {Math.round((hitFIR / totalFairways) * 100)}%
            </div>
          </div>
        </div>
        <div className="yourStats-Gir-wrapper col-md-4 ">
          <div className="yourStats-cell">
            <div>Greens Hit</div>
          </div>
          <div className="yourStats-cell">
            {hitGIR} / {totalGreens}
          </div>
          <div className="yourStats-cell">
            <div style={{ color: "red" }}>
              {Math.round((hitGIR / totalGreens) * 100)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourStats;
