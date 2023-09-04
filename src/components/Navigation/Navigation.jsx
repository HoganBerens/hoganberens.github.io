import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faFolderOpen, faLink, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="navigation-links">
        <div className="navigation-profile-pic">placeHolder</div>
        <div className="navigation-link">
          <FontAwesomeIcon icon={faHouse} />
          Home
        </div>
        <div className="navigation-link">
          <FontAwesomeIcon icon={faUser} />
          About
        </div>
        <div className="navigation-link">
          <FontAwesomeIcon icon={faFolderOpen} />
          Projects
        </div>
        <div className="navigation-link">
          <FontAwesomeIcon icon={faLink} />
          Resume
        </div>
      </div>
      <div className="navigation-profile-links">
        <div>Github</div>
        <div>LinkedIn</div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
    </div>
  );
};
export default Navigation;
