import React from "react";
import "./Projects.css";
import Cards from "./Cards";
function Projects() {
  return (
    <section className='projects container' id='projects'>
      <div className='projects-heading'>
        <h2 className='heading-title'>Projects/Experience</h2>
        <p>Things I’ve built so far</p>
      </div>
      <div className='projects-cards'>
        <Cards />
      </div>
    </section>
  );
}

export default Projects;
