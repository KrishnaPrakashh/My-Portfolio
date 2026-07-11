import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h2>Krishna Prakash</h2>

      <p>
        Full-Stack Developer • AI Enthusiast • Cybersecurity Enthusiast
      </p>

      <div className="footer-icons">
        <a href="https://github.com/KrishnaPrakashh" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/krishna-prakash-8a14b62a1" target="_blank">
          <FaLinkedin />
        </a>

        <a href="mailto:krishnaprakashalpy@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Krishna Prakash. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;