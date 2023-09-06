import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="projects-title" id="contact">
        Contact
      </div>
      <div className="contact-links-profile">
        <div className="contact-email">Email: hoganmberens@gmail.com</div>
        <Link className="contact-link" target="_blank" to="https://github.com/HoganBerens">
          GitHub
        </Link>
        <Link className="contact-link" target="_blank" to="https://www.linkedin.com/in/hogan-berens/">
          LinkedIn
        </Link>
      </div>
    </div>
  );
};
export default Contact;
