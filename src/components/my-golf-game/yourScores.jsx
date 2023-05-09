import React from 'react';
import './yourScores.css';
import { scores, course } from './utils';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const YourScores = () => {
  let allHoles = course.Holes;
  let score = scores[0];

  return (
    <div className="yourScores-wrapper container">
      <div className="yourScores-header">
        <Link to="/my-golf-game">Back</Link>
        <div className="yourScores-header-title">Your Scores</div>
        <Link to="/profile">
          <FontAwesomeIcon className="fa-xl" icon={faUser} />
        </Link>
      </div>
      <div className="yourScores-round-results-wrapper ">
        {scores.map((score) => (
          <div className="d-flex">
            <div className="yourScores-round-values-wrapper">
              <div className="yourScores-course-values-wrapper">
                {[
                  'Hole:',
                  'Yards:',
                  'Par:',
                  'Score:',
                  'FIR:',
                  'Appr:',
                  'GIR:',
                  'Putts:',
                ].map((value) => (
                  <div className="cell">{value}</div>
                ))}
              </div>
            </div>
            <table>
              <tr className="yourScores-course-information-wrapper">
                {allHoles.map((courseHole, courseHoleIndex) => (
                  <td key={courseHoleIndex} className="yourScores-hole-value">
                    <div className="cell">{courseHole.Name}</div>
                    <div className="cell">{courseHole.Distance}</div>
                    <div className="cell">{courseHole.Par}</div>
                  </td>
                ))}
              </tr>
              <tr className="yourScores-player-score-map-wrapper">
                {score.map((hole, holeIndex) => (
                  <td key={holeIndex} className="yourScores-hole-value">
                    <div className="cell">{hole.Score}</div>
                    <FontAwesomeIcon
                      className={`cell cell-icon ${
                        hole.FIR
                          ? 'green-check'
                          : hole.Par !== 3
                          ? 'red-x'
                          : 'gray-minus'
                      }`}
                      icon={
                        hole.FIR
                          ? faCheckCircle
                          : hole.Par !== 3
                          ? faTimesCircle
                          : faMinusCircle
                      }
                    >
                      {!hole.FIR && hole.Par === 3 ? '-' : null}
                    </FontAwesomeIcon>
                    <div className="cell">
                      {hole.apprDistance ? hole.apprDistance : '-'}
                    </div>
                    <FontAwesomeIcon
                      className={`cell cell-icon ${
                        hole.GIR ? 'green-check' : 'red-x'
                      }`}
                      icon={hole.GIR ? faCheckCircle : faTimesCircle}
                    />
                    <div className="cell">{hole.numberOfPutts}</div>
                  </td>
                ))}
              </tr>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourScores;
