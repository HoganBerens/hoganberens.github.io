import './Navigation.css';
import githubLogo from '../../assets/githubLogo.png';
import linkedInlogoSS from '../../assets/linkedInlogoSS.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUser,
  faFolderOpen,
  faLink,
  faFileExport,
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
          <a href="" className="navigation-link-item">
            <span className="navigation-link-item">Home</span>
          </a>
        </div>
        <div className="navigation-link">
          <div className="navigation-link-item">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <a href="" className="navigation-link-item">
            <span className="navigation-link-item">About</span>
          </a>
        </div>
        <div className="navigation-link">
          <div className="navigation-link-item">
            <FontAwesomeIcon icon={faFolderOpen} />
          </div>
          <a href="" className="navigation-link-item">
            <span className="navigation-link-item">Projects</span>
          </a>
        </div>
        <div className="navigation-contact">
          <div className="navigation-link-item">
            <FontAwesomeIcon icon={faLink} />
          </div>
          <a href="">
            <span className="navigation-link-item">Contact</span>
          </a>
        </div>
      </div>
      <div className="navigation-profile-links">
        <div className="navigation-link">
          <div className="navigation-link-item">
            <FontAwesomeIcon icon={faFileExport} />
          </div>
          <div className="navigation-link-item">Resume</div>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
