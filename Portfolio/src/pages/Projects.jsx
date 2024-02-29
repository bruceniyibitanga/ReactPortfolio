import React from 'react'
import SectionHeaders from '../components/SectionHeaders'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <>
      <div className="projects-section-container wrapper">
        <div className="section-header-container">
          <SectionHeaders section="Recent Project" subheading="My masterpiece collection" paragraph="Here is a collection of my most recent works. Each is uniquely designed and hand coded by yours truly." />
        </div>  

        <div className="project-container">
          <ProjectCard image="/img/ndis-website.webp" alt="Image of old lady talking with a younger lady" title="NDIS Provider" description="In building this website, I employed a range of cutting-edge technologies to ensure a seamless user experience and robust functionality. Here are some of the key technologies utilized: HTML CSS JS and SCSS" github="https://github.com/bruceniyibitanga/Dedicated-Community-Care" website="https://dedicatedcommunitycare.com.au/" />
          <ProjectCard image="/img/farm-boy.webp" alt="Image of fruit and vegetable isle in the shops" title="Sams Warehouse" description="Experience the synergy of full-stack mastery: C#, ASP .NET, MS SQL Server, HTML, CSS, JS. Elevate your expectations—click to unveil the artistry behind my creations." github="https://github.com/bruceniyibitanga/SamsWarehouse" website="https://samswarehouseprod.azurewebsites.net/" />
          <ProjectCard image="/img/botani.webp" alt="Image of plant" title="Botani" description="Rooted in HTML, CSS, and JS, our Botani website blossoms with simplicity and elegance. Explore the tranquil world of plants with us, where technology meets nature seamlessly." github="https://github.com/bruceniyibitanga/Botani" website="https://botani.netlify.app/" />
        </div>
      </div>
    </>
  )
}

export default Projects