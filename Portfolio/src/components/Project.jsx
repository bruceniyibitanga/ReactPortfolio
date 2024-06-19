import { React, useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import BentoGrid from "./BentoGrid";
import Data from "../data/projectdata.json";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Quote from "./Quote";

function Project() {
  const { projectId } = useParams();
  const [currentProject, setCurrentProject] = useState({});
  const [nextProject, setNextProject] = useState({});

  let nextProjectGrid = [];
  useEffect(() => {
    window.scrollTo({
      top: document.body,
      behavior: "smooth",
    });

    const currentIndex = Data.projects.findIndex(
      (project) => project.id === projectId
    );

    if (currentIndex) {
      const currentProject = Data.projects[currentIndex];
      const nextProject =
        currentIndex < Data.projects.length - 1
          ? Data.projects[currentIndex + 1]
          : Data.projects[0];

      setCurrentProject(currentProject);
      setNextProject(nextProject);
    }

    console.log("NEXT PROJECT: ", nextProject);

    nextProjectGrid = [
      {
        showLabel: true,
        id: nextProject.id,
        label: nextProject.name,
        src: nextProject.imageSrc,
        alt: nextProject.imageAlt,
      },
    ];

    console.log(nextProjectGrid);
  }, [projectId]);
  return (
    <>
      <Navbar />
      <div className="project-wrapper">
        <header className="project-header-container">
          <img
            src={currentProject.imageSrc}
            alt="Header Background Image"
            className="project-img"
          />
          <div className="project-header-text-container">
            <h1>{currentProject.name}</h1>
            <p>{currentProject.type}</p>
          </div>
        </header>
        <div className="project-information-container">
          <div className="project-information-left">
            <h2>{currentProject.projectObjective}</h2>

            <span>Project Focus</span>
            <ul>
              <li>Brand Identity</li>
              <li>UX Research</li>
              <li>UI / UX Design</li>
              <li>Development</li>
            </ul>
          </div>
          <div className="project-information-right">
            {/* <a href={project.websiteUrl} target="_blank" className="btn">
                Visit Website
              </a> */}
            <em>{currentProject.description}</em>
            {/* <p>{currentProject.details[0]}</p>
            <p>{currentProject.details[1]}</p>
            <p>{currentProject.details[2]}</p> */}
          </div>
        </div>

        {/* Bento Grid */}
        <BentoGrid
          gridItems={currentProject.gridItems}
          removeLinkWrapper={true}
        />

        <Quote quote={currentProject.review} />

        <BentoGrid gridItems={nextProjectGrid} />
      </div>

      <Footer />
    </>
  );
}

export default Project;
