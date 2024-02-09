import './AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => {
  let tech = [
    'JavaScript',
    'React',
    'React Native',
    'Python',
    'Django',
    'Jest',
    'React Testing Library',
    'Node.js',
    'HTML',
    'CSS',
    'Express',
    'Mongoose',
    'PostgreSQL',
    'MongoDB',
  ];

  return (
    <div className="aboutMe-wrapper">
      <div className="aboutMe-title" id="aboutMe">
        About Me
      </div>
      <div className="aboutMe-content">
        My web development journey began as an after-work hobby. I completed
        online courses through Udemy and started down the self-taught route. I
        realized my passion for web development and enrolled in the General
        Assembly bootcamp. This is a three month bootcamp where we were taught
        frontend, backend, design and agile methodologies. I created several
        full-stack projects using JavaScript and Python. Now, as a gradute of
        General Assembly, my love for web development is still growing as I
        continue to create personal projects. I look forward to gaining
        professional experience and being able to significantly contribute on a
        team among developers who share my passion.
      </div>
      <br />
      <div className="aboutMe-title">Current Tech</div>
      <ul className="aboutMe-currentTech">
        {tech.map((t, index) => (
          <div className="aboutMe-tech-item" key={index}>
            <FontAwesomeIcon
              className="aboutMeIcon fa-sm"
              icon={faAngleRight}
            />
            {t}
          </div>
        ))}
      </ul>
    </div>
  );
};
export default AboutMe;
