import React from "react";
import "./yourStats.css";
import { scores } from "./utils";

const YourStats = () => {
  let firstScoreFront = scores[0][0];
  let firstScoreBack = scores[0][1];
  let secondScoreFront = scores[1][0];
  let secondScoreBack = scores[1][1];
  let thirdScoreFront = scores[2][0];
  let thirdScoreBack = scores[2][1];
  let allFIRs = [];

  for (let i = 0; i <= scores.length; i++) {}

  for (let i = 0; i <= 8; i++) {
    thirdScoreBack[i].Par != 3
      ? thirdScoreBack[i].FIR
        ? allFIRs.push(1)
        : allFIRs.push(0)
      : console.log("no FIR");
    thirdScoreFront[i].Par != 3
      ? thirdScoreFront[i].FIR
        ? allFIRs.push(1)
        : allFIRs.push(0)
      : console.log("no FIR");
    secondScoreBack[i].Par != 3
      ? secondScoreBack[i].FIR
        ? allFIRs.push(1)
        : allFIRs.push(0)
      : console.log("no FIR");
    secondScoreFront[i].Par != 3
      ? secondScoreFront[i].FIR
        ? allFIRs.push(1)
        : allFIRs.push(0)
      : console.log("no FIR");
    firstScoreBack[i].Par != 3
      ? firstScoreBack[i].FIR
        ? allFIRs.push(1)
        : allFIRs.push(0)
      : console.log("no FIR");
    firstScoreFront[i].Par != 3
      ? firstScoreFront[i].FIR
        ? allFIRs.push(1)
        : allFIRs.push(0)
      : console.log("no FIR");
  }

  return (
    <div className="yourStats-wrapper">
      {console.log(scores)}
      <div className="yourStats-FIR-wrapper">FIR pie chart</div>
      <div className="yourStats-Gir-wrapper">Gir pie chart</div>
    </div>
  );
};

export default YourStats;
