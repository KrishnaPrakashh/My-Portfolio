import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiExpress,
  SiSqlite,
  SiMysql,
  SiPostman,
 // SiVisualstudiocode,
} from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="skills">

      <div className="section-title">
        <h2>Technical Skills</h2>
        <p>Technologies I work with</p>
      </div>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>Frontend</h3>

          <div className="skill-item"><FaHtml5 /> HTML5</div>
          <div className="skill-item"><FaCss3Alt /> CSS3</div>
          <div className="skill-item"><FaJs /> JavaScript</div>
          <div className="skill-item"><FaReact /> React</div>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>

          <div className="skill-item"><FaNodeJs /> Node.js</div>
          <div className="skill-item"><SiExpress /> Express.js</div>
        </div>

        <div className="skill-card">
          <h3>Database</h3>

          <div className="skill-item"><SiSqlite /> SQLite</div>
          <div className="skill-item"><SiMysql /> MySQL</div>
        </div>

        <div className="skill-card">
          <h3>Programming</h3>

          <div className="skill-item"><FaPython /> Python</div>
          <div className="skill-item"><FaJs /> JavaScript</div>
        </div>

        
        <div className="skill-card">
          <h3>AI / ML </h3>

          <div className="skill-item"><FaPython /> TensorFlow</div>
          <div className="skill-item"><FaJs />Scikit-learn </div>
           <div className="skill-item"><FaPython />MediaPipe </div>
          <div className="skill-item"><FaJs />OpenCV </div>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>

          <div className="skill-item"><FaGitAlt /> Git</div>
          <div className="skill-item"><FaGithub /> GitHub</div>
          <div className="skill-item"><SiPostman /> Postman</div>

        </div>

      </div>

    </section>
  );
}

export default Skills;