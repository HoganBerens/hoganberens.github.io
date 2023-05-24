import React from "react";
import "./yourScores.css";
import { scores } from "./utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import Header from "./header";
const YourScores = () => {
  return (
    <div className="yourScores-wrapper">
      <Header />
      <div className="container">
        <div className="yourScores-round-results-wrapper">
          {scores.map((score, scoreIndex) => (
            <div key={scoreIndex} className="d-flex">
              <div>something describing the score displayed</div>
              <div className="yourScores-round-values-wrapper">
                <div className="yourScores-course-values-wrapper">
                  {[
                    "Hole:",
                    "Yards:",
                    "Par:",
                    "FIR:",
                    "Appr:",
                    "GIR:",
                    "Putts:",
                    "Score:",
                  ].map((value, valueIndex) => (
                    <div key={valueIndex} className="cell">
                      {value}
                    </div>
                  ))}
                </div>
              </div>
              <table>
                <tbody>
                  <tr className="yourScores-player-score-map-wrapper">
                    {score.map((hole, holeIndex) => (
                      <td key={holeIndex} className="yourScores-hole-value">
                        <div className="cell">{holeIndex + 1}</div>
                        <div className="cell">{hole.Distance}</div>
                        <div className="cell">{hole.Par}</div>
                        <FontAwesomeIcon
                          className={`cell cell-icon ${
                            hole.FIR
                              ? "green-check"
                              : hole.Par !== 3
                              ? "red-x"
                              : "black-minus"
                          }`}
                          icon={
                            hole.FIR
                              ? faCheckCircle
                              : hole.Par !== 3
                              ? faTimesCircle
                              : faMinusCircle
                          }
                        >
                          {!hole.FIR && hole.Par === 3 ? "-" : null}
                        </FontAwesomeIcon>
                        <div className="cell">
                          {hole.apprDistance ? (
                            hole.apprDistance
                          ) : (
                            <FontAwesomeIcon icon={faMinusCircle} />
                          )}
                        </div>
                        <FontAwesomeIcon
                          className={`cell cell-icon ${
                            hole.GIR ? "green-check" : "red-x"
                          }`}
                          icon={hole.GIR ? faCheckCircle : faTimesCircle}
                        />
                        <div className="cell">{hole.numberOfPutts}</div>

                        <div className="cell">{hole.Score}</div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourScores;
