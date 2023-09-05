import React, { useEffect, useState } from "react";
import './ProjectCard.css';
import axios from "axios";


function ProjectCard(){

    const userId = localStorage.getItem("userId");
    const [projects, setProjects] = useState([]);


    const loadProjects = async () => {
        try{
            const result = await axios.get(`http://localhost:8080/post/${userId}`)
            setProjects(result.data);
            console.log(result.data)
        } catch (error) {
            console.error("Error fetching data: ", error);
        }

    }


    useEffect(() => {
        loadProjects();
    }, [])

    return(
        <>
        <div className="project-stack-container">
            {projects.length > 0 ? (
                projects.map(project => (
                    <div key={project.id} className="project-card-container">
                        <div className="project-card-title">
                            {project.postTitle}
                        </div>
                        <div className="project-card-image">
                            <img src={`http://localhost:8080/images/${project.imageUrl}`} alt={project.postTitle} />
                        </div>
                        <div className="project-card-description">
                            {project.postDescription}
                        </div>
                    </div>
                ))
            ) : (
                <div>No projects found for this user.</div>
            )}
        </div>
        </>
    )
}

export default ProjectCard;