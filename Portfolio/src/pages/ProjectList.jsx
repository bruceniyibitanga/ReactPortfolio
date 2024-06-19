import React from "react";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import { useParams } from "react-router-dom";

function ProjectList() {
  const { projectId } = useParams();
  console.log(projectId);
  return (
    <>
      <Navbar />
      {projectId ? (
        <Project projectId={projectId} />
      ) : (
        <div className="project-list">
          <h1>Projects</h1>
          <p>Project Id provided</p>
        </div>
      )}
    </>
  );
}

export default ProjectList;
