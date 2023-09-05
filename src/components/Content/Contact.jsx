import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="projects-title">Contact</div>
      <div className="contact-links-profile">
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
        <div>Email</div>
      </div>
    </div>
  );
};
export default Contact;
