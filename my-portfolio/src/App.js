import React, { useEffect } from "react";
import "./App.css";
import profileImage from "./images/profile_pic.jpg";
import HomeButton from "./HomeButton";
import linkedinLogo from "./images/linkedin.png";
import emailLogo from "./images/email.png";
import githubLogo from "./images/github.png";
import nameLogo from "./images/profile.png";
import phoneLogo from "./images/phone-call.png";
import emailIcon from "./images/email.png"; // Assuming you have an email icon as well
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
      easing: "ease-in-out", // Easing function for animation
      offset: 200, // Offset (in pixels) from the original trigger point
      once: true, // Animation should happen only once
    });
  }, []);

  return (
    <div className="App">
      <nav>
        <ul className="navbar">
          <li className="home-button-container">
            <HomeButton />
          </li>
          <div className="nav-items-container">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">SKILLS</a>
            </li>
            <li>
              <a href="#">EXPERIENCE</a>
            </li>
            <li>
              <a href="#">PORTFOLIO</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </div>
          <div className="nav-icons-container">
            <li>
              <a
                href="https://www.linkedin.com/in/talhawarraich/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinLogo} alt="LinkedIn" className="nav-icon" />
              </a>
            </li>
            <li>
              <a href="mailto:talhawarraich.business@gmail.com">
                <img src={emailLogo} alt="Email" className="nav-icon" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/talhawarraichhh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubLogo} alt="GitHub" className="nav-icon" />
              </a>
            </li>
          </div>
        </ul>
      </nav>
      <div className="intro-container">
        <h1 className="intro-text">
          Hi, I am <span className="highlight">Talha Warraich</span>
        </h1>
        <div className="image-and-buttons">
          <button className="custom-button front-end">Front-End</button>
          <img src={profileImage} alt="Profile" className="profile-pic" />
          <button className="custom-button back-end">Back-End</button>
        </div>
        <div className="full-stack-container">
          <button className="custom-button full-stack">Full-Stack</button>
        </div>
        <h2 className="highlight2"> Software Developer Intern</h2>
        <p className="intro-paragraph">
          Passionate about software development, I thrive on building innovative
          applications, solving complex problems, and continually enhancing my
          skills.
        </p>
      </div>
      <div className="about-container" data-aos="fade-up">
        <h2 className="about-header">About Me</h2>
        <p className="about-paragraph">
          Hello! I'm a passionate and dedicated software developer currently
          pursuing a Bachelor of Science in Computer Science with a minor in
          Data Science at the University of Calgary. My journey in tech has been
          fueled by a love for creating innovative applications and solving
          complex problems. With a strong foundation in various programming
          languages and technologies, I continuously strive to enhance my skills
          and stay updated with the latest industry trends. I'm enthusiastic
          about leveraging technology to make a positive impact and am always
          eager to take on new challenges.
        </p>
      </div>
      <div className="contact-container" data-aos="fade-up">
        <div className="contact-item">
          <img src={nameLogo} alt="Name" className="contact-icon" />
          <div>
            <h3>Name</h3>
            <p>Talha Warraich</p>
          </div>
        </div>
        <div className="contact-item">
          <img src={phoneLogo} alt="Phone" className="contact-icon" />
          <div>
            <h3>Phone</h3>
            <p>(587) 284-4669</p>
          </div>
        </div>
        <div className="contact-item">
          <img src={emailIcon} alt="Email" className="contact-icon" />
          <div>
            <h3>Email</h3>
            <p>talhawarraich.business@gmail.com</p>
          </div>
        </div>
        <div className="contact-item">
          <a
            href="/resume.pdf"
            className="custom-button resume-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>

      
    </div>
  );
}

export default App;
