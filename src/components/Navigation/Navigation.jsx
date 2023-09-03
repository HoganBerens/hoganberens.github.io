import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="navigation-links">
        <div className="navigation-profile-pic">placeHolder</div>
        <div className="navigation-link">Home</div>
        <div className="navigation-link">About</div>
        <div className="navigation-link">Projects</div>
        <div className="navigation-link">Resume</div>
      </div>
      <div className="navigation-profile-links">
        <div>Github</div>
        <div>LinkedIn</div>
        <div>Email</div>
      </div>
    </div>
  );
};
export default Navigation;
