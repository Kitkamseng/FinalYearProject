import React from "react";
import './PersonalProjects.css';
import HomePageCards from './HomePageProject';


function PersonalProjects(){
    return (
        <>
        <div className="personal-container">
            <div className="personal-project-title">
                Personal Projects
            </div>
            <div className="card-containers">
                <div className="card">
                    <HomePageCards />
                </div>
            </div>
        </div>
        </>
    )
}

export default PersonalProjects;