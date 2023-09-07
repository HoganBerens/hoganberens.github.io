import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="projects-title" id="contact">
        Contact
      </div>
      <div className="contact-links-profile">
        <a
          className="contact-link"
          href="mailto:hoganmberens@gmail.com"
          target="_blank"
        >
          Hoganmberens@gmail.com
        </a>
        <Link
          className="contact-link"
          target="_blank"
          to="https://github.com/HoganBerens"
        >
          GitHub
        </Link>
        <Link
          className="contact-link"
          target="_blank"
          to="https://www.linkedin.com/in/hogan-berens/"
        >
          LinkedIn
        </Link>
        <Link
          className="contact-link contact-resume"
          target="_blank"
          to="https://docs.google.com/document/d/11kGvdQ9orlkMnjX_Ve5cIR5AfOhKXXAgiTvzleVjpUY/edit?usp=sharing"
        >
          Resume
        </Link>
      </div>
    </div>
  );
};
export default Contact;
