import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/WorkExperience.css";
import headstarterLogo from "../images/headstarter.jpeg";
import favoriteFlyerLogo from "../images/favorite.jpg";
import schulichIgniteLogo from "../images/schulich.jpg";

const WorkExperience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);

  return (
    <div className="work-experience-container">
      <h2 className="work-experience-header" data-aos="fade-up">
        Work Experience
      </h2>
      <div className="work-experience-item" data-aos="fade-up">
        <div className="work-experience-dates">July 2024 – September 2024</div>
        <div className="work-experience-content">
          <div className="company-header">
            <img
              src={headstarterLogo}
              alt="Headstarter AI Logo"
              className="company-logo"
            />
            <h3>Headstarter AI</h3>
          </div>
          <p>Software Engineering Fellow</p>
          <ul>
            <li>
              Constructed and established 5 AI projects using frameworks such as
              Python and Docker, improving machine learning and deployment
              skills.
            </li>
            <li>
              Competed in 5-weekend hackathons, decoding real-world problems
              through innovative solutions and teamwork.
            </li>
            <li>
              Completed a final project with 1000+ users, utilizing React.js,
              Angular, HTML, CSS, and TypeScript for development and
              scalability.
            </li>
          </ul>
        </div>
      </div>
      <div className="work-experience-item" data-aos="fade-up">
        <div className="work-experience-dates">May 2023 – December 2023</div>
        <div className="work-experience-content">
          <div className="company-header">
            <img
              src={favoriteFlyerLogo}
              alt="Favorite Flyer Inc. Logo"
              className="company-logo"
            />
            <h3>Favorite Flyer Inc.</h3>
          </div>
          <p>Software Developer Intern</p>
          <ul>
            <li>
              Spearheaded development of a comprehensive app and website
              employing React.js and Node.js, reducing development time by 30%
              through efficient collaboration and communication among team
              members.
            </li>
            <li>
              Enhanced SQL databases, boosting data retrieval speed by 25% and
              strengthening security protocols.
            </li>
            <li>
              Designed an intuitive UI/UX for both app and website, increasing
              user engagement by 45% and satisfaction by 50%.
            </li>
          </ul>
        </div>
      </div>
      <div className="work-experience-item" data-aos="fade-up">
        <div className="work-experience-dates">
          September 2023 – December 2023
        </div>
        <div className="work-experience-content">
          <div className="company-header">
            <img
              src={schulichIgniteLogo}
              alt="Schulich Ignite Logo"
              className="company-logo"
            />
            <h3>Schulich Ignite</h3>
          </div>
          <p>Programming Intern</p>
          <ul>
            <li>
              Led 8-week Python programming sessions for high school students,
              culminating in individual game projects.
            </li>
            <li>
              Adapted teaching methods to accommodate diverse learning styles,
              resulting in a 100% student satisfaction rate.
            </li>
            <li>
              Guided and motivated 4-6 students per session, emphasizing
              practical applications of coding principles, leading to a 40%
              improvement in coding skills.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
