import './Navigation.css';
import githubLogo from '../../assets/githubLogo.png';
import linkedInlogoSS from '../../assets/linkedInlogoSS.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUser,
  faFolderOpen,
  faLink,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="navigation-links">
        <div className="navigation-profile-pic">placeHolder</div>
        <div className="navigation-link">
          <div className="navigation-link-item">
            <FontAwesomeIcon className="fa-sm" icon={faHouse} />
          </div>
          <div className="navigation-link-item">Home</div>
        </div>
        <div className="navigation-link">
          <div className="navigation-link-item">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="navigation-link-item">About</div>
        </div>
        <div className="navigation-link">
          <div className="navigation-link-item">
            <FontAwesomeIcon icon={faFolderOpen} />
          </div>
          <div className="navigation-link-item">Projects</div>
        </div>
        <div className="navigation-link">
          <div className="navigation-link-item">
            <FontAwesomeIcon icon={faLink} />
          </div>
          <div className="navigation-link-item">Resume</div>
        </div>
      </div>
      <div className="navigation-profile-links">
        <div className="navigation-contact">
          <div className="navigation-link-item">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="navigation-link-item">Contact</div>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
