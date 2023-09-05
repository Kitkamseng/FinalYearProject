import React, { useEffect, useState } from "react";
import './EditPostPage.css';
import Header from "../components/Header";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

function EditPostCreation(){

    const location = useLocation();
    const { projectId } = useParams();
    const { project } = location.state || {};

    console.log(project)


    // useEffect(() => {
    //     console.log("projectId here: " , projectId);
    //     const fetchProject = async() => {
    //         try{
    //             const response = await axios.get(`http://localhost:8080/post/${projectId}`);
    //             setProject(response.data);
    //             console.log("Fetched project data:", response.data); // Debugging line
    //         } catch(error){
    //             console.error("Error fetching project data: ", error);
    //         }
    //     }

    //     if(projectId){
    //         fetchProject();
    //     }
    // }, [projectId]);

    return(
        <>
            <Header />
            <div className="edit-post-container">
                <div className="post-card-box">
                    <div className="post-card-title">
                        {project ? project.postTitle : "Loading...."}
                    </div>
                    <div className="post-card-image-box">
                        {project ? (
                            <img src={`http://localhost:8080/images/${project.imageUrl}`} alt={project.postTitle} />
                        ) : (
                            "Loading..."
                        )}
                    </div>
                    <div className="post-card-description-box">
                        {project ? project.postDescription : "Loading...."}
                    </div>
                </div>
            </div>
        </>
    )

}

export default EditPostCreation;