import { Link } from "react-router";
import Data from "../../data/Data.js";
import "./About.css";
import Navbar from "../components/Navbar.jsx";

const About = () => {
  return (
    < >
        <Navbar />
        <div className="about">

      <h1 className="name">{Data.name}</h1>

      <Link to="/contact" className="about-link">
        Contact Me
      </Link>

      <p className="tag">I am a Full-Stack developer</p>


      
    </div>
    </>
  );
};

export default About;