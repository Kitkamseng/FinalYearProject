import React, { useEffect, useState } from "react";
import './EditPostPage.css';
import Header from "../components/Header";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import profileIcon from '../images/male2Icon.png';
import Like from '../images/Like.png';
import Dislike from '../images/Dislike.png';
import Share from '../images/Share.png';

function EditPostCreation(){

    const location = useLocation();
    const { projectId } = useParams();
    const { project } = location.state || {};

    const [user, setUser] = useState(null);


    const loadUser = async () => {
        try{
            const result = await axios.get(`http://localhost:8080/user/${project.userId}`);
            setUser(result.data);
        } catch (error) {
            console.error("Error fetching user: ", error);
        }
    };

    useEffect(() => {
        loadUser();
    }, [])


    return(
        <>
            <Header />
            <div className="edit-post-container">
                <div className="post-card-box">
                    <div className="post-card-title">
                        <img src={profileIcon} /> 
                        <div className="post-title-name">
                            {project ? project.postTitle : "Loading...."}
                        </div>
                    </div>
                    <div className="post-card-image-box">
                        {project ? (
                            <img src={`http://localhost:8080/images/${project.imageUrl}`} alt={project.postTitle} />
                        ) : (
                            "Loading..."
                        )}
                    </div>
                    <div className="post-card-user-box">
                        <div className="post-card-voting">
                            <img src={Like} className="like-system"/>
                            <img src={Dislike} className="dislike-system"/>
                            <img src={Share} className="share-system" />
                        </div>
                    </div>
                    <div className="post-card-description-box">
                        {project ? project.postDescription : "Loading...."}
                    </div>
                </div>
                <div className="comment-box">
                    <div className="comment-box-title">
                        Comment as {user ? <span className="username-highlight">{user.username}</span> : "Loading..."}:
                    </div>
                    <input className="comment-box-description" placeholder="Comment your thoughts"/>
                </div>
                <div className="discussion-container">
                    <div className="filter-box">
                        Sort by: <span className="filter-comment">Best</span> ▼
                    </div>
                    <div className="discussion-box">
                        <div className="discussion-username">
                            TheAmazingKong has commented:
                        </div>
                        <div className="discussion-comment">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            Nullam eget justo id justo luctus iaculis. 
                            Sed vel urna vel mi euismod pellentesque eu vitae lorem. 
                            Vivamus auctor elit eu nunc dignissim, 
                            ac varius elit iaculis. 
                            Fusce tristique ultrices ante, at feugiat dui tristique ut. 
                            Nullam bibendum cursus elit, nec feugiat nulla iaculis at. 
                            Sed euismod nisl ut elit malesuada, a posuere dolor feugiat. 
                            Sed ut tincidunt tortor, nec laoreet libero. 
                            Maecenas a nunc eros. Vivamus auctor, odio a sc
                        </div>
                    </div>
                    <div className="discussion-box">
                        <div className="discussion-username">
                            TheDaintyRose has commented:
                        </div>
                        <div className="discussion-comment">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            Nullam eget justo id justo luctus iaculis. 
                            Sed vel urna vel mi euismod pellentesque eu vitae lorem. 
                            Vivamus auctor elit eu nunc dignissim, 
                            ac varius elit iaculis. 
                            Fusce tristique ultrices ante, at feugiat dui tristique ut. 
                            Nullam bibendum cursus elit, nec feugiat nulla iaculis at. 
                            Sed euismod nisl ut elit malesuada, a posuere dolor feugiat. 
                            Sed ut tincidunt tortor, nec laoreet libero. 
                            Maecenas a nunc eros. Vivamus auctor, odio a sc
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default EditPostCreation;