import React from "react";
import './Header.css';
import VoteIcon from '../images/VoteIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocketchat } from '@fortawesome/free-brands-svg-icons';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';


function Header(){

    let navigate = useNavigate();

    const adminPage = () => {
        navigate('/adminpage');
    }

    return(
        <div className="header-container">
            {/* <img 
                src={VoteIcon} 
                className="header-icon"
            /> */}
            <div className="header-icon"> 
                Logo
            </div>
            <div className="header-name">
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
                        onClick={adminPage}
                    />
                </div>
            </div>


        </div>

    )
}

export default Header;