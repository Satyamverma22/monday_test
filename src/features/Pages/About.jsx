import { Link } from "react-router";
import Data from "../../data/Data.js";
import "./About.css";
import Skillcard from "./Skillcard.jsx";

const About = () => {
  return (
    < >
        <nav className="nav">
            <h1>{Data.name}</h1>
            <Link to="/about" className="navbar-link">About Me</Link>

            <Link to="/contact" className="navbar-link">Contact</Link>
        </nav>

        <div className="hero">
            <h1>{Data.fullBio}</h1>
        </div>

        <div className="skill-section">
            {Data.map((skills, index)=>(
                <Skillcard key={index} skill={skills} />
            ))}
        </div>
    </>
  );
};

export default About;