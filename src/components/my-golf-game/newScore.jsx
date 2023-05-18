import React, { useRef, useState } from "react";
import "./newScore.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clubs } from "./utils";
import Header from "./header";
import {
  faCheckCircle,
  faCircleArrowDown,
  faCircleArrowUp,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const NewScore = () => {
  const [missedFairway, setMissedFairway] = useState(false);
  const [missedGreen, setMissedGreen] = useState(false);
  const [roundScore, setRoundScore] = useState([]);

  let missedFairwayLieOptions = [
    "Rough",
    "Bunker",
    "In trees",
    "Hazard",
    "Other",
  ];
  let missedGreenLieOptions = [
    "Fairway cut",
    "Rough",
    "Bunker",
    "In trees",
    "Hazard",
    "Other",
  ];

  let clubHitOffTeeRef = useRef("");
  let fairwayHitRef = useRef("");
  let missedFairwayLieRef = useRef("");
  let apprDistanceRef = useRef("");
  let apprClubRef = useRef("");
  let greenHitRef = useRef("");
  let missedGreenLieRef = useRef("");
  let secondPuttDistanceRef = useRef("");
  let numberOfPuttsRef = useRef("");
  let holeScoreRef = useRef("");

  let newScoreSubmitHandler = (event) => {
    event.preventDefault();
    let holeResults = {
      clubHitOffTee: clubHitOffTeeRef.current.value,
      fairwayHit: fairwayHitRef.current,
      missedFairwayLie: missedFairwayLieRef.current,
      approachDistance: apprDistanceRef.current.value,
      apprClub: apprClubRef.current.value,
      greenHit: greenHitRef.current,
      missedGreenLie: missedGreenLieRef.current,
      secondPuttDistance: secondPuttDistanceRef.current,
      numberOfPutts: numberOfPuttsRef.current,
      holeScore: holeScoreRef.current.value,
    };

    setRoundScore((roundScore) => [...roundScore, holeResults]);

    clubHitOffTeeRef.current.value = "";
    fairwayHitRef.current = "";
    missedFairwayLieRef.current = "";
    apprDistanceRef.current.value = "";
    apprClubRef.current = "";
    greenHitRef.current = "";
    missedGreenLieRef.current = "";
    secondPuttDistanceRef.current = "";
    numberOfPuttsRef.current = "";
    holeScoreRef.current.value = "";
  };

  let fairwayHitHandler = (event) => {
    fairwayHitRef.current = event.target.id;
    fairwayHitRef.current !== "fairway"
      ? setMissedFairway(true)
      : setMissedFairway(false);
  };
  let greenHitHandler = (event) => {
    greenHitRef.current = event.target.id;
    greenHitRef.current !== "green"
      ? setMissedGreen(true)
      : setMissedGreen(false);
  };

  let missedFairwayLieSelectHandler = (event) => {
    missedFairwayLieRef.current = event.target.value;
  };

  let missedGreenSelectHandler = (event) => {
    missedGreenLieRef.current = event.target.value;
  };

  let holeNumber = "";

  for (let i = 0; i <= roundScore.length; i++) {
    holeNumber = i + 1;
  }

  return (
    <div className=" newScore-container ">
      <Header />
      <div className="newScore-form-container container">
        <div id="startOfElement" className="newScore-title row ">
          Hole: {holeNumber}
        </div>
        <form className="newScore-form row" onSubmit={newScoreSubmitHandler}>
          <select
            className="newScore-select col-md-4"
            ref={clubHitOffTeeRef}
            name="selectedClubOffTee"
          >
            <option hidden={true} value="">
              Select the club you hit off the tee
            </option>
            {clubs.map((club, index) => (
              <option key={index}>{club}</option>
            ))}
          </select>
          <div className="newScore-fairway-text-wrapper col-md-4">
            <div className="newScore-fairway-container">
              <div className="newScore-fairway-hit" onClick={fairwayHitHandler}>
                <div>FIR</div>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="fairway-photo "
                  id="Faiway"
                />
              </div>
              <div className="newScore-fairway-missed">
                <div>Missed Fairway</div>
                <div className="newScore-arrows-wrapper">
                  <FontAwesomeIcon
                    onClick={fairwayHitHandler}
                    id="left"
                    icon={faCircleArrowLeft}
                    className="fairway-green-input"
                  />
                  <FontAwesomeIcon
                    onClick={fairwayHitHandler}
                    id="Right"
                    icon={faCircleArrowRight}
                    className="fairway-green-input"
                  />
                  <FontAwesomeIcon
                    onClick={fairwayHitHandler}
                    id="Short"
                    icon={faCircleArrowDown}
                    className="fairway-green-input"
                  />
                  <FontAwesomeIcon
                    onClick={fairwayHitHandler}
                    icon={faCircleArrowUp}
                    id="Long"
                    className="fairway-green-input"
                  />
                </div>
              </div>
            </div>
          </div>
          {missedFairway ? (
            <select
              className="newScore-missedFaiway-select col-md-4"
              onChange={missedFairwayLieSelectHandler}
            >
              <option hidden={true}>
                What lie did you have for your appr shot?
              </option>
              {missedFairwayLieOptions.map((lieOption, index) => (
                <option ref={missedFairwayLieRef} key={index}>
                  {lieOption}
                </option>
              ))}
            </select>
          ) : (
            <div></div>
          )}
          <input
            className="newScore-form-input col-md-4"
            id="approach-distance"
            placeholder="Approach Distance"
            type="text"
            ref={apprDistanceRef}
          />
          <select className=" newScore-appr-select col-md-4">
            <option hidden={true}>What club are you hitting?</option>
            {clubs.map((club, index) => (
              <option ref={apprClubRef} key={index}>
                {club}
              </option>
            ))}
          </select>
          <div className="newScore-fairway-text-wrapper col-md-4">
            <div className="newScore-fairway-container">
              <div className="newScore-fairway-hit">
                <div>GIR</div>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  onClick={greenHitHandler}
                  id="green"
                  className=" green-photo "
                />
              </div>
              <div className="newScore-fairway-missed">
                <div>Missed Green</div>
                <div className="newScore-arrows-wrapper">
                  <FontAwesomeIcon
                    id="left"
                    onClick={greenHitHandler}
                    icon={faCircleArrowLeft}
                    className="fairway-green-input"
                  />
                  <FontAwesomeIcon
                    id="right"
                    onClick={greenHitHandler}
                    icon={faCircleArrowRight}
                    className="fairway-green-input"
                  />
                  <FontAwesomeIcon
                    id="short"
                    onClick={greenHitHandler}
                    icon={faCircleArrowDown}
                    className="fairway-green-input"
                  />
                  <FontAwesomeIcon
                    id="long"
                    onClick={greenHitHandler}
                    icon={faCircleArrowUp}
                    className=" fairway-green-input"
                  />
                </div>
              </div>
            </div>
          </div>
          {missedGreen ? (
            <select
              className="missedGreen-lie-select col-md-4"
              onChange={missedGreenSelectHandler}
            >
              <option hidden={true}>
                What lie did you have around the green?
              </option>
              {missedGreenLieOptions.map((greenLieOption, index) => (
                <option ref={missedGreenLieRef} key={index}>
                  {greenLieOption}
                </option>
              ))}
            </select>
          ) : (
            <div></div>
          )}
          <input
            className="newScore-form-input col-md-4"
            id="second-putt-distance"
            placeholder="First Putt Distance"
            type="text"
            ref={secondPuttDistanceRef}
          />
          <input
            className="newScore-form-input col-md-4"
            id="hole-score"
            placeholder="Hole Score"
            type="text"
            ref={holeScoreRef}
          />
          <button type="submit" className="col-md-4">
            Continue to Next Hole
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewScore;
