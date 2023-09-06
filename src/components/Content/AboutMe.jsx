import "./AboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  let tech = ["JavaScript", "React", "Jest", "Node.js", "HTML", "CSS", "Express", "Python", "MongoDB", "PostgreSQL"];

  return (
    <div className="aboutMe-wrapper">
      <div className="aboutMe-title" id="aboutMe">
        About Me
      </div>
      <div className="aboutMe-content">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
        <br />
        <br />
        "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
        comes from a line in section 1.10.32.
        <br />
        <br /> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied
        by English versions from the 1914 translation by H. Rackham.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      </div>
      <br />
      <div className="aboutMe-title">Current Tech</div>
      <ul className="aboutMe-currentTech">
        {tech.map((t, index) => (
          <div className="aboutMe-tech-item" key={index}>
            <FontAwesomeIcon className="aboutMeIcon fa-sm" icon={faAngleRight} />
            {t}
          </div>
        ))}
      </ul>
    </div>
  );
};
export default AboutMe;
