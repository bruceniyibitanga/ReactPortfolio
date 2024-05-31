import { React, useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import BentoGrid from "./BentoGrid";
import Data from "../data/projectdata.json";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Project() {
  const { projectId } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    window.scrollTo({
      top: document.body,
      behavior: "smooth",
    });

    const project = Data.projects.find((project) => project.id === projectId);
    console.log(project);
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
              <h1>{project.name}</h1>
              <p>{project.type}</p>
            </div>
          </header>
          <div className="project-information-container">
            <div className="project-information-left">
              <h2>{project.projectObjective}</h2>

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
              <em>{project.description}</em>
              <p>{project.details[0]}</p>
              <p>{project.details[1]}</p>
              <p>{project.details[2]}</p>
            </div>
          </div>

          {/* Bento Grid */}
          <BentoGrid
            gridItems={project.gridItems}
            x={project.gridDimensions.x}
            y={project.gridDimensions.y}
          />

          <div className="project-review-container">
            <blockquote className="review">{project.review}</blockquote>
          </div>
        </div>
      ) : (
        <div className="project-list">
          <h1>Projects</h1>
          <p>Project Id provided</p>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Project;
