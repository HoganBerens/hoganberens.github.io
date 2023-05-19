import { club } from "fontawesome";
import React from "react";
import "./changeClubs.css";
import Header from "./header";
import { clubs, possibleClubs } from "./utils";

const ChangeClubs = () => {
  let arr1 = [];

  let clubChange = (clubIndex) => {
    arr1.push({ value: clubIndex });
  };

  let changeClubFormSubmit = (event) => {
    for (let i = 0; i < arr1.length; i++) {
      clubs.splice(arr1[i].value, 1, event.target[arr1[i].value].value);
    }
  };

  return (
    <div className="changeClubs-container">
      <Header />
      <div className="changeClubs-content-wrapper container">
        <form
          className="changeClubs-clubs-container col-md-6"
          onSubmit={changeClubFormSubmit}
        >
          {clubs.map((club, clubIndex) => (
            <select
              key={clubIndex}
              className="club col-md-3"
              onChange={clubChange.bind(this, clubIndex)}
            >
              <option hidden={true}>{club}</option>
              {possibleClubs.map((possibleClub, possibleClubIndex) => (
                <option key={possibleClubIndex}>{possibleClub}</option>
              ))}
            </select>
          ))}
          <button type="submit" className="club col-md-3">
            Update Clubs
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangeClubs;
