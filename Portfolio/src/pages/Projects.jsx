import React from 'react'
import SectionHeaders from '../components/SectionHeaders'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <>
      <div className="projects-section-container wrapper">
        <div className="section-header-container">
          <SectionHeaders section="Recent Project" subheading="My masterpiece collection" paragraph="Here is a collection of my most recent works. Each is uniquely designed and hand coded by yours truly."/>
        </div>

        <div className="project-container">
          <ProjectCard image="/img/ndis-website.png" alt="Image of plant" title="NDIS Provider" description="In building this website, I employed a range of cutting-edge technologies to ensure a seamless user experience and robust functionality. Here are some of the key technologies utilized: HTML CSS JS and SCSS" github="#" website="https://dedicatedcommunitycare.com.au/"/>
          <ProjectCard image="/img/rolex.png" alt="Image of plant" title="E-Commerce" description="Experience the synergy of full-stack mastery: C#, ASP .NET, MS SQL Server, HTML, CSS, JS. Elevate your expectations—click to unveil the artistry behind my creations." github="#" website="#"/>
          <ProjectCard image="/img/botani.png" alt="Image of plant" title="Botani" description="Rooted in HTML, CSS, and JS, our Botani website blossoms with simplicity and elegance. Explore the tranquil world of plants with us, where technology meets nature seamlessly." github="#" website="#"/>
        </div>
      </div>
    </>
  )
}

export default Projects