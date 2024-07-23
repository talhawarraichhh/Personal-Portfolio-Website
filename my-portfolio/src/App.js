import React from "react";
import "./App.css";
import profileImage from "./images/profile_pic.jpg";
import HomeButton from "./HomeButton";
import linkedinLogo from "./images/linkedin.png";
import emailLogo from "./images/email.png";
import githubLogo from "./images/github.png";

function App() {
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
        <img src={profileImage} alt="Profile" className="profile-pic" />
        <h2 className="highlight2"> Software Developer Intern</h2>
        <p className="intro-paragraph">
          Passionate about software development, I thrive on building innovative
          applications, solving complex problems, and continually enhancing my
          skills.
        </p>
      </div>
    </div>
  );
}

export default App;
