import React from "react";
import profileImage from "../images/profile_pic.jpg";

const Intro = () => {
  return (
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
  );
};

export default Intro;
