import React from 'react'
import SectionHeaders from '../components/SectionHeaders'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <>
      <div className="projects-section-container wrapper">
        <div className="section-header-container">
          <SectionHeaders
            section="Recent Project"
            subheading="My masterpiece collection"
            paragraph="Here is a collection of my most recent works. Each is uniquely designed and hand coded by yours truly."
          />
        </div>

        <div className="projects-container">
          {/* Colored circles behind project cards */}
          <div className="colored-circles-container">
            <div className="colored-circle blue-circle"></div>
            <div className="colored-circle red-circle"></div>
            <div className="colored-circle yellow-circle"></div>
          </div>

          <ProjectCard
            image="/img/ndis.jpeg"
            alt="Image of old lady talking with a younger lady"
            title="NDIS Provider"
            description="In building this website, I employed a range of cutting-edge technologies to ensure a seamless user experience and robust functionality. Here are some of the key technologies utilized: HTML CSS JS and SCSS"
            github="https://github.com/bruceniyibitanga/Dedicated-Community-Care"
            website="https://dedicatedcommunitycare.com.au/"
          />

          <ProjectCard
            image="/img/cafe.jpg"
            alt="Image of a cafe"
            title="Gautex Bakery"
            description="E-commerce website for a cake cafe"
            // github="https://github.com/bruceniyibitanga/Botani"
            website=""
          />

          <ProjectCard
            image="/img/farm-boy.jpg"
            alt="Image of fruit and vegetable isle in the shops"
            title="Sams Warehouse"
            description="Experience the synergy of full-stack mastery: C#, ASP .NET, MS SQL Server, HTML, CSS, JS. Elevate your expectations—click to unveil the artistry behind my creations."
            github="https://github.com/bruceniyibitanga/SamsWarehouse"
            website="https://samswarehouseprod.azurewebsites.net/"
          />
        </div>
      </div>
    </>
  );
}

export default Projects