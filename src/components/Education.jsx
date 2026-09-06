import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="education">

      <div className="section-title">
        <h2>Education</h2>
        <p>My academic journey</p>
      </div>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-icon">
            <FaGraduationCap />
          </div>

          <div className="timeline-content">
            <h3>B.Tech in Computer Science & Engineering</h3>

            <h4>Cape College of Engineering Alappuzha ,
                Apj Abdul Kalam Technical University
            </h4>

            <span>2023 - 2027</span>

            <p>
              <h4>CGPA : 7.78</h4>
              Currently pursuing a Bachelor's degree in Computer Science with
              a focus on software development, data structures, web
              technologies, and cybersecurity.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <FaGraduationCap />
          </div>

          <div className="timeline-content">
            <h3>Higher Secondary (12th)</h3>

            <h4>TDHSS Alappuzha</h4>

            <span>2021 - 2023</span>

            <p>
              <h4>Score : 85%</h4>
              Completed higher secondary education
              
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Education;
