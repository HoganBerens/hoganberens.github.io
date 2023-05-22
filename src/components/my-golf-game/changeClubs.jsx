import React, { useState } from "react";
import { useEffect } from "react";
import "./changeClubs.css";
import Header from "./header";
import { possibleClubs } from "./utils";

const ChangeClubs = () => {
  const [render, setRender] = useState(false);
  let clubs = localStorage.getItem("clubs", JSON.parse("clubs"));
  let arr1 = [];

  let clubChange = (clubIndex) => {
    arr1.push({ value: clubIndex });
  };

  let changeClubFormSubmit = (event) => {
    event.preventDefault();
    for (let i = 0; i < arr1.length; i++) {
      clubs.splice(arr1[i].value, 1, event.target[arr1[i].value].value);
    }
    localStorage.setItem("clubs", JSON.stringify(clubs));
    setRender(true);
  };

  useEffect(() => {
    localStorage.setItem(
      "clubs",
      JSON.stringify([
        "Driver",
        "Three Wood",
        "2 Iron",
        "4 Iron",
        "5 Iron",
        "6 Iron ",
        "7 Iron",
        "8 Iron",
        "9 Iron",
        "Pitching Wedge",
        "50 Degree",
        "54 Degree",
        "58 Degree",
      ])
    );
  }, []);

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
