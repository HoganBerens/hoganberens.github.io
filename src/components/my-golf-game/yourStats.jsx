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
      <div className="yourStats-FIR-wrapper col-md-4 ">
        <div className="yourStats-cell">
          {/* {Math.round((hitFIR / totalFairways) * 100) / 100}% */}
          <div className="yourStats-cell-chart"></div>
        </div>
        <div className="yourStats-cell">
          {hitFIR} / {totalFairways}
          <div>Fairways Hit</div>
        </div>
      </div>
      <div className="yourStats-Gir-wrapper col-md-4 ">
        <div className="yourStats-cell">
          {/* 
          {Math.round((hitGIR / totalGreens) * 100) / 100}% */}
          <div className="yourStats-cell-chart"></div>
        </div>
        <div className="yourStats-cell">
          {hitGIR} / {totalGreens} <div>Greens Hit</div>
        </div>
      </div>
    </div>
  );
};

export default YourStats;
