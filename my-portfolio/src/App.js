import React, { useEffect } from "react";
import "./css/App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";
import TechnicalSkills from "./components/TechnicalSkills";
import WorkExperience from "./components/WorkExperience";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 200,
      once: true,
    });
    AOS.refresh(); // Ensure AOS refreshes after initializing
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About />
      <Contact />
      <TechnicalSkills />
      <WorkExperience />
    </div>
  );
}

export default App;
