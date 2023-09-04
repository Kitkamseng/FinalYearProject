import React, { useEffect, useState } from "react";
import './ProfilePage.css';
import defaultProfilePicture from './../images/ProfilePicture.png';
import Header from './../components/Header';
import ProjectCard from "../components/ProjectCard";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProfilePage(){

    const userId = localStorage.getItem("userId");

    console.log(userId)

    const[user, setUser] = useState({
        email: "", 
        username: "",
        password: ""
    });

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${userId}`)
        console.log(result.data)
        setUser(result.data);
    }


    useEffect(() => {
        loadUser();
    }, []);

    return (
        <>
            <Header />
            <div className="profile-container">
                <div className="profile-display-container">
                    <div className="profile-image">
                        <img src={defaultProfilePicture} alt="Profile"/>
                    </div>
                    <div className="profile-details">
                        <div className="profile-username">
                            {user.username}
                        </div>
                        <div className="profile-id-tag">
                            @{user.username}
                        </div>
                        <button 
                            className="edit-profile"
                        >
                            Edit Profile
                        </button>
                    </div>
                </div>
                <div className="profile-project-container">
                    <div className="profile-project-title">
                        To Do: 
                    </div>
                    <div className="project-space-container">
                        <ProjectCard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;