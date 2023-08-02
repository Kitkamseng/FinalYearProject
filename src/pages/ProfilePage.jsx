import React from "react";
import './ProfilePage.css';
import Header from './../components/Header';

function ProfilePage(){
    return (
        <>
            <Header />
            <div className="profile-container">
                Hello
                <div className="profile-display-container">
                    <div className="profile-image">
                        Image here
                    </div>
                    <div className="profile-details">
                        <div className="profile-username">
                            NAME
                        </div>
                        <div className="profile-id-tag">
                            @NAME
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
                        <div className="temp-project-box">
                            Box 1
                        </div>
                        <div className="temp-project-box">
                            Box 2
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;