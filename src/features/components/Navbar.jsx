import { Link } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Satyam</h1>

      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>

        <Link to="/about" className="navbar-link">
          About Me
        </Link>

        <Link to="/contact" className="navbar-link">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;