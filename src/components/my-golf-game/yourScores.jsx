import React from "react";
import "./yourScores.css";
import { scores, course } from "./utils";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const YourScores = () => {
  let allHoles = course.Holes;

  return (
    <div className="yourScores-wrapper">
      <div className="yourScores-header">
        <Link to="/my-golf-game">Back</Link>
        <div className="yourScores-header-title">Your Scores</div>
        <Link to="/profile">
          <FontAwesomeIcon className="fa-xl" icon={faUser} />
        </Link>
      </div>
      <div className="yourScores-round-results-wrapper">
        <div className="yourScores-round-values-wrapper">
          <div className="yourScores-course-values-wrapper">
            <div className="yourScores-hole-value">Hole:</div>
            <div className="yourScores-hole-value">Distance:</div>
            <div className="yourScores-hole-value">Par:</div>
          </div>
          <div className="yourScores-hole-value">Score:</div>
          <div className="yourScores-hole-value">FIR:</div>
          <div className="yourScores-hole-value">Appr Dist:</div>
          <div className="yourScores-hole-value">GIR:</div>
          <div className="yourScores-hole-value">Putts</div>
        </div>
        <div className="yourScores-courseAndScores-wrapper" s>
          <div className="yourScores-course-information-front-wrapper">
            {allHoles[0].map((courseHole, courseHoleIndex) => (
              <div key={courseHoleIndex} className="yourScores-course-map">
                <div>{courseHole.Name}</div>
                <div>{courseHole.Distance} Yards</div>
                <div>{courseHole.Par}</div>
              </div>
            ))}
          </div>
          <div className="yourScores-course-information-back-wrapper">
            {allHoles[1].map((courseHole, courseHoleIndex) => (
              <div key={courseHoleIndex} className="yourScores-course-map">
                <div> {courseHole.Name}</div>
                <div> {courseHole.Distance} Yards</div>
                <div> {courseHole.Par}</div>
              </div>
            ))}
          </div>
          {scores.map((score, index) => (
            <div className="yourScores-player-score-map-wrapper">
              <div key={index} className="yourScores-front-score-map-wrapper">
                {score[0].map((frontHole, frontHoleIndex) => (
                  <div
                    key={frontHoleIndex}
                    className="yourScores-hole-map-wrapper"
                  >
                    <div>{frontHole.Score}</div>
                    {frontHole.FIR ? (
                      <div className="">Yes</div>
                    ) : frontHole.Par != 3 ? (
                      <div>No</div>
                    ) : (
                      <div>N/A</div>
                    )}
                    {frontHole.apprDistance ? (
                      <div>{frontHole.apprDistance}</div>
                    ) : (
                      <div>N/A</div>
                    )}
                    {frontHole.GIR ? <div>Yes</div> : <div>No</div>}
                    <div>{frontHole.numberOfPutts}</div>
                  </div>
                ))}
              </div>
              <div key={index} className="yourScores-back-score-map-wrapper">
                {score[1].map((backHole, backHoleIndex) => (
                  <div
                    key={backHoleIndex}
                    className="yourScores-hole-map-wrapper"
                  >
                    <div>{backHole.Score}</div>
                    {backHole.FIR ? (
                      <div className="">Yes</div>
                    ) : backHole.Par != 3 ? (
                      <div>No</div>
                    ) : (
                      <div>N/A</div>
                    )}
                    {backHole.apprDistance ? (
                      <div>{backHole.apprDistance}</div>
                    ) : (
                      <div>N/A</div>
                    )}
                    {backHole.GIR ? <div>Yes</div> : <div>No</div>}
                    <div>{backHole.numberOfPutts}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourScores;
