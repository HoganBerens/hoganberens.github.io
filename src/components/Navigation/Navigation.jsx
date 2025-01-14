import "./Navigation.css";
import Headshot from "../../assets/Headshot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faFolderOpen, faLink, faFileExport } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="navigation-links">
        <div className="navigation-profile-pic">
          <img className="navigation-headshot" src={Headshot} />
        </div>
        <div className="navigation-link">
          <div className="navigation-link-item">
            <FontAwesomeIcon className="fa-sm" icon={faHouse} />
          </div>
          <a href="/" className="navigation-link-item">
            <span className="navigation-link-item">Home</span>
          </a>
        </div>
        <div className="navigation-link">
          <div className="navigation-link-item">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <a href="#aboutMe" className="navigation-link-item">
            <span className="navigation-link-item">About</span>
          </a>
        </div>
        <div className="navigation-link">
          <div className="navigation-link-item">
            <FontAwesomeIcon icon={faFolderOpen} />
          </div>
          <a href="#projects" className="navigation-link-item">
            <span className="navigation-link-item">Projects</span>
          </a>
        </div>
        <div className="navigation-link">
          <div className="navigation-link-item">
            <FontAwesomeIcon icon={faLink} />
          </div>
          <a href="#contact">
            <span className="navigation-link-item">Contact</span>
          </a>
        </div>
      </div>
      <div className="navigation-profile-links">
        <div className="navigation-link">
          <div className="navigation-link-item">
            <FontAwesomeIcon icon={faFileExport} />
          </div>
          <a href="https://docs.google.com/document/d/1fiQrOVl4DGPVJx6pKBlQ87OsSM6rn5od/edit?usp=sharing&ouid=100137496040470646803&rtpof=true&sd=true" target="_blank">
            <span className="navigation-link-item">Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
