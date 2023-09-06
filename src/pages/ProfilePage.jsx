import React, { useEffect, useState } from "react";
import './ProfilePage.css';
import defaultProfilePicture from './../images/ProfilePicture.png';
import Header from './../components/Header';
import ProjectCard from "../components/ProjectCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddProjectCard from "../components/AddProjectCard";

function ProfilePage(){

    const userId = localStorage.getItem("userId");

    const[user, setUser] = useState({
        email: "", 
        username: "",
        password: ""
    });

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${userId}`)
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
                    <div className="project-bio-display">
                        <div className="follower-stats-container">
                            <div className="follower-container">
                                <div className="follower-title">
                                    Follower:
                                </div>
                                <div className="follower-count">
                                    1.6m followers
                                </div>
                            </div>
                            <div className="follower-container">
                                <div className="follower-title">
                                    Following:
                                </div>
                                <div className="follower-count">
                                    1m following
                                </div>
                            </div>
                            <div className="follower-container">
                                <div className="follower-title">
                                    Posts:
                                </div>
                                <div className="follower-count">
                                    1 post
                                </div>
                            </div>
                        </div>
                        <div className="bio-display-box">
                            Meet Alex, a passionate creator driven by his love for 
                            coding and building things. With an insatiable curiosity 
                            and a knack for problem-solving, Alex finds his true calling 
                            in the world of programming. From a young age, he was captivated 
                            by the art of coding, and that fascination has only grown stronger 
                            over the years.
                        </div>
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
                <div className="profile-project-container">
                    <div className="profile-project-title">
                        Personal Project: 
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