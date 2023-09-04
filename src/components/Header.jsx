import React, { useEffect } from "react";
import './Header.css';
import VoteIcon from '../images/VoteIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocketchat } from '@fortawesome/free-brands-svg-icons';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
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


    // useEffect(() => {
    //     console.log(id);
    // }, [])

    return(
        <div className="header-container">
            {/* <img 
                src={VoteIcon} 
                className="header-icon"
            /> */}
            <div className="header-icon"> 
                Logo
            </div>
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
                <div className="personal-box">
                    <FontAwesomeIcon 
                        icon={faRocketchat} 
                        size="3x" 
                    />
                </div>
                <div className="personal-box">
                    <FontAwesomeIcon icon={faBell} size="3x"/>
                </div>
                <div className="personal-box">
                    <FontAwesomeIcon 
                        icon={faUser} 
                        size="3x" 
                        onClick={profilePage}
                    />
                </div>
            </div>


        </div>

    )
}

export default Header;