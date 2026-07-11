import "./Experience.css";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section id="experience" className="experience">

      <div className="section-title">
        <h2>Experience</h2>
        <p>Internships & Professional Journey</p>
      </div>

      <div className="experience-timeline">

        <div className="experience-card">

          <div className="experience-icon">
            <FaBriefcase />
          </div>

          <div className="experience-content">

            <h3>Full Stack Development Intern</h3>

            <h4>DecodeLabs</h4>

            <span>June 2026 – July 2026</span>

            <ul>
              <li>Developed multiple full-stack web applications.</li>
              <li>Built responsive user interfaces using React and Angular.</li>
              <li>Developed REST APIs using Node.js and Express.js.</li>
              <li>Worked with Git, GitHub, SQLite, and deployment platforms.</li>
            </ul>

          </div>

        </div>

        <div className="experience-card">

          <div className="experience-icon">
            <FaBriefcase />
          </div>

          <div className="experience-content">

            <h3>Frontend Development using Angular Intern</h3>

            <h4>NeSt Digital</h4>

            <span>December 2025 – January 2026</span>

            <ul>
              <li>Developed responsive user interfaces using Angular.</li>
              <li>Built reusable components and implemented modern UI designs.</li>
              <li>Integrated frontend components with REST APIs.</li>
              <li>Improved application responsiveness and user experience.</li>
              <li>Collaborated using Git and GitHub for version control.</li>
            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;