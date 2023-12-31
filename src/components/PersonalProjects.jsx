import React from "react";
import './PersonalProjects.css';
import HomePageCards from './HomePageProject';
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";


function PersonalProjects(){

    let navigate = useNavigate();

    //Redirect to selection page
    const handleCreatePost= () => {
        navigate('/selectionpage');
    }

    return (
        <>
        <div className="personal-container">
            <div className="personal-project-title">
                Personal Projects
                <button
                    className="create-post"
                    onClick={handleCreatePost}
                > 
                    Create A Project
                </button>
            </div>
            <div className="card-containers">
                <ProjectCard />
            </div>
        </div>
        </>
    )
}

export default PersonalProjects;