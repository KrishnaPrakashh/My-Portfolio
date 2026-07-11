import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Krishna Prakash</div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="education"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            Education
          </Link>
        </li>

        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
        </li>

        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;