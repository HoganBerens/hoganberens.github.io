import React from 'react';
import './yourScores.css';
import { scores, course } from './utils';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

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

      <div className="yourScores-courseAndScores-wrapper" s>
        <div className="yourScores-course-information-front-wrapper">
          {allHoles[0].map((courseHole, courseHoleIndex) => (
            <div key={courseHoleIndex} className="yourScores-course-map">
              <div> Hole: {courseHole.Name}</div>
              <div> Distance: {courseHole.Distance} Yards</div>
              <div> Par: {courseHole.Par}</div>
            </div>
          ))}
        </div>
        <div className="yourScores-course-information-back-wrapper">
          {allHoles[1].map((courseHole, courseHoleIndex) => (
            <div key={courseHoleIndex} className="yourScores-course-map">
              <div> Hole: {courseHole.Name}</div>
              <div> Distance: {courseHole.Distance} Yards</div>
              <div> Par: {courseHole.Par}</div>
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
  );
};

export default YourScores;
