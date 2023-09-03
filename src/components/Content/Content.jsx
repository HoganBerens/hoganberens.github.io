import AboutMe from "./AboutMe";
import Projects from "./Projects";
import "./Content.css";

const Content = () => {
  return (
    <div className="content-wrapper">
      <div className="content-description-wrapper">
        <div>Hi, my name is</div>
        <div className="content-name">Hogan Berens</div>
        <div className="content-title">A Full-Stack Engineer</div>
        <div className="content-description">
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
          desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
