import React from "react";
import "../css/Projects.css";

import stockPredictorImage from "../images/stock.png";
import movieLookupImage from "../images/movie.png";
import cryptoTrackerImage from "../images/crypto.png";
import selfCheckoutImage from "../images/selfcheckout.jpg";
import githubLogo from "../images/github.png";

const projects = [
  {
    title: "Stock Predictor",
    description:
      "Created a stock predictor using Python and Flask for backend framework as well as HTML and CSS for frontend, while also handling real-time data retrieval and LLM model integration.",
    image: stockPredictorImage,
    github: "https://github.com/talhawarraichhh/Stock-Predictor",
  },
  {
    title: "Movie Lookup App",
    description:
      "A mobile app to search for movies and get details using the TMDB API.",
    image: movieLookupImage,
    github: "https://github.com/talhawarraichhh/Movie-Lookup-App",
  },
  {
    title: "Crypto Tracker App",
    description:
      "CryptoView, a secure and user-friendly app for buying and organizing digital asset portfolios.",
    image: cryptoTrackerImage,
    github: "https://github.com/talhawarraichhh/Cypto-Tracker-App",
  },
  {
    title: "Self-Checkout Station Software Simulation",
    description:
      "Collaborated with a team of 20 to execute a software simulation for a self-checkout station with Java.",
    image: selfCheckoutImage,
    github:
      "https://github.com/NuNathan/SENG-300-PG-2-Purple-Project-Iteration-3",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-header">My Portfolio</h2>
      <h3 className="projects-subheader">Awesome Projects</h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <img src={githubLogo} alt="GitHub" className="github-icon" />
              </a>
            </div>
            <h4 className="project-title">{project.title}</h4>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
