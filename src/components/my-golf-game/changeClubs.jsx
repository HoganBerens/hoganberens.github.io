import React from "react";
import "./changeClubs.css";
import Header from "./header";
import { clubs } from "./utils";

const ChangeClubs = () => {
  return (
    <div className="changeClubs-container">
      <Header />
      <div className="changeClubs-content-wrapper container">
        <div className="changeClubs-map-container row">
          <div className="changeClubs-clubs-wrapper col-md-6">
            {clubs.map((club, clubIndex) => (
              <div className="changeClubs-clubs" key={clubIndex}>
                {club}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeClubs;
