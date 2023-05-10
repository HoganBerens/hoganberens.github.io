import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "./header.css";

const Header = () => {
  return (
    <div className="my-golf-game-header">
      <div className="d-flex container">
        <div className="flex-auto">
          <Link className="golf-header-link" to="/my-golf-game">
            Back
          </Link>
        </div>
        <h1 className="flex-auto header-title">My Golf Game</h1>
        <div className="flex-auto header-profile-wrapper">
          <FontAwesomeIcon
            onClick={() => {
              window.location = "/profile";
            }}
            className="fa-xl golf-header-link-header-profile"
            icon={faUser}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
