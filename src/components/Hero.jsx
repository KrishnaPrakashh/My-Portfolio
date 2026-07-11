import "./Hero.css";
import profile from "../assets/images/profile.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
function Hero() {
  return (
    <section id="home" className="hero">

    <motion.div
    className="hero-left"
    initial={{ opacity: 0, x: -80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >

        <p className="hello">Hello, I'm</p>

        <h1>Krishna Prakash</h1>

       <TypeAnimation
  sequence={[
    "Full-Stack Developer",
    2000,
    "Angular Developer",
    2000,
    "AI Enthusiast",
    2000,
    "Cybersecurity Enthusiast",
    2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  className="typing"
/>

        <p className="description">
          Passionate about building secure, responsive and modern web
          applications. Interested in Full-Stack Development,
          Cybersecurity and AI.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a href="/resume.pdf" className="btn-primary">
            Download Resume
          </a>
        </div>

        <div className="socials">
          <a href="https://github.com/KrishnaPrakashh"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/krishna-prakash-8a14b62a1"><FaLinkedin /></a>
          <a href="mailto:krishnaprakashalpy@gmail.com"><FaEnvelope /></a>
        </div>

      </motion.div>
      <div className="scroll-down">

↓

</div>
      <motion.div
  className="hero-right"
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
        <img src={profile} alt="Krishna Prakash" />
      </motion.div>

    </section>
  );
}

export default Hero;