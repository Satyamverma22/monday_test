import { Link } from "react-router";
import Data from "../../data/Data.js";
import "./About.css";
import Skillcard from "./Skillcard.jsx";
import ProjectCard from "./ProjectCard.jsx";

const About = () => {
  return (
    <>
      <nav className="nav">
        <h1>{Data.name}</h1>

        <Link to="/about" className="navbar-link">
          About Me
        </Link>

        <Link to="/contact" className="navbar-link">
          Contact
        </Link>
      </nav>

      <div className="hero">
        <h1>{Data.fullBio}</h1>
      </div>

      <div className="skill-section">
        {Data.skills.map((skill, index) => (
          <Skillcard key={index} skill={skill} />
        ))}
      </div>

      <div className="project-section">
        <div className="project-section">
            <h1 className="project-heading">My Projects</h1>

            <div className="project-list">
            {Data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
            ))}
            </div>
        </div>
      </div>
    </>
  );
};

export default About;