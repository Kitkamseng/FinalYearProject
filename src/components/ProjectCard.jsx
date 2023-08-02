import React from "react";
import './ProjectCard.css';


function ProjectCard(){
    return(
        <>
            <div className="project-card-container">
                <div className="project-card-title">
                    Project Title:
                </div>
                <div className="project-card-image">
                    image here
                </div>
                <div className="project-card-description">
                    Project description
                </div>
            </div>
        </>
    )
}

export default ProjectCard;