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
  let allScores = [
    firstScoreBack,
    firstScoreFront,
    secondScoreBack,
    secondScoreFront,
    thirdScoreBack,
    thirdScoreFront,
  ];

  return (
    <div>
      <div>{console.log(allScores[0][4].FIR)}</div>
      <div>{allScores[0][3].FIR}</div>
    </div>
  );
};

export default YourStats;
