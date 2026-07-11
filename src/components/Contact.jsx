import "./Contact.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="section-title">
        <h2>Get In Touch</h2>
        <p>I'm open to internships and full-time opportunities.</p>
      </div>

      <div className="contact-container">

        <div className="contact-card">
          <FaEnvelope />
          <h3>Email</h3>
          <a href="mailto:yourmail@gmail.com">
           krishnaprakashalpy@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <FaGithub />
          <h3>GitHub</h3>
          <a
            href="https://github.com/KrishnaPrakashh"
            target="_blank"
            rel="noreferrer"
          >
            github.com/KrishnaPrakashh
          </a>
        </div>

        <div className="contact-card">
          <FaLinkedin />
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/krishna-prakash-8a14b62a1"
            target="_blank"
          >
            View Profile
          </a>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt />
          <h3>Location</h3>
          <p>Alappuzha, Kerala, India</p>
        </div>

      </div>

      <div className="resume-btn">
        <a href="/resume.pdf" download>
          <FaDownload /> Download Resume
        </a>
      </div>

    </section>
  );
}

export default Contact;