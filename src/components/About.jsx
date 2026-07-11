import "./About.css";
import { FaLaptopCode, FaCode, FaShieldAlt, FaLightbulb } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-title">
        <h2>About Me</h2>
        <p>Get to know me</p>
      </div>

      <div className="about-content">

        <div className="about-text">

          <h3>Who am I?</h3>

          <p>
            I'm <span>Krishna Prakash</span>, a Computer Science Undergraduate
            passionate about building secure, scalable and user-friendly web
            applications. I enjoy transforming ideas into practical software
            using modern technologies while continuously improving my skills.
          </p>

          <p>
            My interests include <span>Full-Stack Development</span>,
            <span> Cybersecurity</span>, and
            <span> AI-powered applications</span>. I enjoy solving real-world
            problems and continuously learning new technologies.
          </p>

        </div>

        <div className="about-cards">

          <div className="card">
            <FaLaptopCode />
            <h3>8+</h3>
            <p>Projects Built</p>
          </div>

          <div className="card">
            <FaCode />
            <h3>15+</h3>
            <p>Technologies</p>
          </div>

          <div className="card">
            <FaShieldAlt />
            <h3>2</h3>
            <p>Internships</p>
          </div>

          <div className="card">
            <FaLightbulb />
            <h3>Always</h3>
            <p>Learning</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;