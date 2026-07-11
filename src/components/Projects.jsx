import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Secure Login System",
    description:
      "Developed a secure authentication system with JWT authentication, password hashing, email verification, and Two-Factor Authentication.",
    tech: ["Node.js", "Express.js", "SQLite", "JWT"],
    github: "https://github.com/KrishnaPrakashh/Secure-login-system.git",
    demo: "https://secure-login-system-1-yv1h.onrender.com/",
  },

  {
    title: "Personal Finance Tracker",
    description:
      "Full-stack expense tracking application to manage income and expenses with CRUD operations.",
    tech: ["Angular", "Node.js", "Express.js", "SQLite"],
    github: "https://github.com/KrishnaPrakashh/ExpenseTracker.git",
    demo: "https://task-3-krishna-prakash-expensetracker-1.onrender.com/",
  },

  {
    title: "Recruitment Management System",
    description:
      "Interview and recruitment management system with applicant and HR portals.",
    tech: ["Node.js", "Express.js", "HTML", "CSS"],
    github: "https://github.com/KrishnaPrakashh/Task-2-Krishna_Prakash-RecruitmentMangementSystem.git",
    demo: "https://task-2-krishna-prakash.onrender.com/index.html",
  },

  {
    title: "E-Commerce Website",
    description:
      "Responsive shopping website integrated with Fake Store API.",
    tech: ["Angular", "TypeScript", "Bootstrap"],
    github: "https://task-2-krishna-prakash.onrender.com/index.html",
    demo: "https://task-1-krishna-prakash-e-commerce-w.vercel.app/",
  },

  {
    title: "Phishing Email Detector",
    description:
      "Machine Learning model that detects phishing emails using Natural Language Processing.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/KrishnaPrakashh/Phishing-Email-Detector.git",
    demo: "https://phishing-email-detector-4pkzan4rprtwhce3vhrouv.streamlit.app/",
  },

  {
    title: "Indian Sign Language Interpreter",
    description:
      "Real-time sign language recognition system using deep learning and computer vision.Academic Group Project",
    tech: ["Python", "TensorFlow", "MediaPipe", "OpenCV"],
    github: "https://github.com/Krishnaveni6080/Realtime-Indian-Sign-Language-Interpreter-System.git",
    
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-title">
        <h2>Featured Work</h2>
        <p>Projects that showcase my skills and learning journey.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>

            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>

              {project.demo !== "#" && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;