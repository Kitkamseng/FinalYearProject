import React, { useEffect, useState } from "react";
import './ProjectCard.css';
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AddProjectCard from "./AddProjectCard";


function ProjectCard(){

    let navigate = useNavigate();
    const userId = localStorage.getItem("userId");
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);


    const loadProjects = async () => {
        try{
            const result = await axios.get(`http://localhost:8080/post/${userId}`)
            setProjects(result.data);
            console.log(result.data)
        } catch (error) {
            console.error("Error fetching data: ", error);
        }

    }

    // const handleCardClick = (projectId) => {
    //     const project = projects.find((project) => project.id === projectId);
    //     if(project) {
    //         setSelectedProject(project);
    //         console.log(project)
    //         navigate(`/editpostcreation/${projectId}`);
    //     }
    // }

    const handleCardClick = (projectId) => {
        const project = projects.find((project) => project.id === projectId);
        if (project) {
            setSelectedProject(project);
            navigate(`/editpostcreation/${projectId}`, { state: {project}}); 
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
                    <div 
                        key={project.id} 
                        className="project-card-container"
                        onClick={() => handleCardClick(project.id)}
                    >
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
            <AddProjectCard />
        </div>
        </>
    )
}

export default ProjectCard;