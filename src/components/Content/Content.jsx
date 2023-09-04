import AboutMe from "./AboutMe";
import Projects from "./Projects";
import "./Content.css";

const Content = () => {
  return (
    <div className="content-wrapper">
      <div className="content-description-wrapper">
        <div className="content-name-title">Hi, my name is</div>
        <div className="content-name">Hogan Berens</div>
        <div className="content-title">A Full-Stack Engineer</div>
        <div className="content-description">
          I am a software engineer who thrives on the challenges of crafting elegant, efficient, and innovative solutions. My proficiency in both front-end and back-end technologies such as{" "}
          <strong>JavaScript, React.js, Node.js, HTML, CSS, Python</strong> and database management with
          <strong> MongoDB </strong> & <strong> PostgreSQL </strong>
          allows me to bridge the gap between design and functionality, delivering seamless and impactful solutions.
        </div>
        <div className="content-links-wrapper">
          <div className="content-link2">LinkedIn</div>
          <div className="content-link">Github</div>
        </div>
      </div>
      <AboutMe />
      <Projects />
    </div>
  );
};
export default Content;
