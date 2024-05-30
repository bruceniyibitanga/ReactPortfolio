import { React, useState, useEffect, useRef } from "react";
import BentoGrid from "./BentoGrid";
import Button from "./Button";
import Data from "../data/projectdata.json";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

function Project() {
  const { projectId } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    window.scrollTo({
      top: document.body, // Adjust based on your header's height
      behavior: "smooth",
    });

    const project = Data.projects.find((project) => project.id === projectId);
    setProject(project);
  }, [projectId]);
  return (
    <>
      <Navbar />
      {project.details ? (
        <div className="project-wrapper">
          <header className="project-header-container">
            <img
              src={project.imageSrc}
              alt="Header Background Image"
              className="project-img"
            />
            <div className="project-header-text-container">
              <h2>{project.name}</h2>
              <p>{project.type}</p>
            </div>
          </header>
          <div className="project-information-container">
            <a href={project.websiteUrl} target="_blank" className="btn">
              Visit Website
            </a>
            <em>{project.description}</em>
            <p>{project.details[0]}</p>
            <p>{project.details[1]}</p>
            <p>{project.details[2]}</p>
          </div>

          {/* Bento Grid */}
          <BentoGrid
            x={project.gridDimensions.x}
            y={project.gridDimensions.y}
          />

          <div className="project-review-container">
            <div className="review">
              Working with Bruce has been phenomenol.
            </div>
          </div>
        </div>
      ) : (
        <div className="project-list">
          <h1>Projects</h1>
          <p>Project Id provided</p>
        </div>
      )}
    </>
  );
}

export default Project;
