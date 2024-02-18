import React from "react";

function ProjectCard(props) {
    return (
        <>
        <div className="project-card">
            <div className="project-image">
                <img src={props.image} alt={props.alt} />
            </div>
            <div className="project-info-container">
                <div className="project-info">
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="project-btns">
                <a href={props.github} target="_blank" rel="noreferrer">Github</a>
                <a href={props.website} target="_blank" rel="noreferrer">Website</a>
            </div>
        </div>
        </>
    );
}

export default ProjectCard;