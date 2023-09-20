import React, { useEffect } from "react";
import './Header.css';
import LogoIcon from '../images/LogoImage.png';
import ProfileIcon from '../images/Profile.png';
import NotiIcon from '../images/Notification.png';
import ChatIcon from '../images/Chat.png';
import { useNavigate, useParams } from 'react-router-dom';


function Header(){

    const {id} = useParams();

    const userId = localStorage.getItem("userId");

    let navigate = useNavigate();

    const adminPage = () => {
        navigate('/adminpage');
    }

    const homePage = () =>{
        navigate('/homepage');
    }

    const profilePage = () => {
        navigate(`/profilepage/${userId}`);
    }

    const chatPage = () => {
        navigate('/chatpage');
    }

    //Handles all Header inputs
    return(
        <div className="header-container">
            <img 
                src={LogoIcon} 
                className="header-icon"
                onClick={homePage}
            />
            <div 
                className="header-name"
                onClick={homePage}
            >
                VOTE
            </div>
            
            <div className="search-bar-container">
                <input 
                    className="search-bar"
                    placeholder="Search..."
                />
            </div>

            <div className="personal-setting">
                <div 
                    className="personal-box"
                    onClick={chatPage}
                >
                    <img src={ChatIcon} className="NavIcons" />
                </div>
                <div className="personal-box">
                    <img src={NotiIcon} className="NavIcons" />
                </div>
                <div 
                    className="personal-box"
                    onClick={profilePage}
                >
                    <img src={ProfileIcon} className="NavIcons" />
                </div>
            </div>


        </div>

    )
}

export default Header;