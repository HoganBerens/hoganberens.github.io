import React, { useEffect } from "react";
import "./yourScores.css";
import { scores } from "./utils";

const YourScores = () => {
  /* let roundScore = scores[0];
  let firArray = [];
  let roundPlayed = [];
  let parForRound = [];

  let sumOfRoundPlayed = roundPlayed.reduce((partialSum, a) => {
    partialSum + a, 0;
  });

  let parOfCourse = parForRound.reduce((partialSum2, aa) => {
    partialSum2 + aa, 0;
  });
  useEffect(() => {
    for (let i = 0; i <= 17; i++) {
      roundPlayed.push(roundScore[i].Score);
      parForRound.push(roundScore[i].Par);
      if (roundScore[i].FIR === undefined) {
        console.log('Must have missed fairway');
      } else {
        firArray.push(1);
      }
    }
  }, []);
  return (
    <div className="yourScores-wrapper">
      <div>
        {roundScore.map((hole, index) => (
          <div key={index} className="yourScores-hole-map-wrapper">
            <div className="yourScores-hole-info"></div>
            <div className="yourScores-hole-info">Hole Number: {hole.Hole}</div>
            <div className="yourScores-hole-info">Par: {hole.Par}</div>
            <div className="yourScores-hole-info">Score: {hole.Score}</div>
            <div className="yourScores-hole-info">{hole.Score}</div>
            <div>{console.log(sumOfRoundPlayed, parOfCourse)}</div>
          </div>
        ))}
      </div>
    </div>
  ); */
};

export default YourScores;
