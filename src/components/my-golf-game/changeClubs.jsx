import React from "react";
import "./changeClubs.css";
import Header from "./header";
import { clubs } from "./utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";

const ChangeClubs = () => {
  let clubSelectHandler = (event) => {
    console.log(event.target);
  };
  let updateClubsHandler = () => {};

  let oldClubHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="changeClubs-container">
      <Header />
      <div className="changeClubs-content-wrapper container">
        <div className="changeClubs-clubs-wrapper col-md-6 ">
          {clubs.map((club, clubIndex) => (
            <div
              className="changeClubs-club-container col-md-4"
              key={clubIndex}
            >
              <div
                className="changeClubs-club-name"
                onClick={clubSelectHandler}
              >
                {club}
              </div>
              <FontAwesomeIcon onClick={oldClubHandler} icon={faCircleMinus} />
            </div>
          ))}
          <button onClick={updateClubsHandler}>Update Clubs</button>
        </div>
      </div>
    </div>
  );
};

export default ChangeClubs;
