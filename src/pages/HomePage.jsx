import React, { useEffect } from "react";
import './HomePage.css';
import Header from './../components/Header';
import PersonalProjects from "../components/PersonalProjects";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faDesktop, faHeart, faLanguage, faMusic, faFutbol, faPalette, faTv } from '@fortawesome/free-solid-svg-icons';



function HomePage(){

    let navigate = useNavigate();

    const userId = localStorage.getItem("userId");

    const handleCatBox = () => {
        navigate('/signup');
    }

    return(
        <>
        <div className="main-container">
            <Header />
            <div className="cat-container">
                <div className="cat-title">
                    CATEGORIES
                    <div className="cat-boxes">
                        <div className="box" >
                            <div className="box-title">
                                Business
                            </div>
                            <div className="box-icon">
                                <FontAwesomeIcon icon={faBusinessTime} size="2x"/>
                            </div>
                        </div>
                        <div className="box" >
                            <div className="box-title">
                                Programming
                            </div>
                            <div className="box-icon">
                                <FontAwesomeIcon icon={faDesktop}  size="2x" />
                            </div>
                        </div>
                        <div className="box" >
                            <div className="box-title">
                                Lifestyle
                            </div>
                            <div className="box-icon">
                                <FontAwesomeIcon icon={faHeart} size="2x"/>
                            </div>
                        </div>
                        <div className="box" >
                            <div className="box-title">
                                Languages
                            </div>
                            <div className="box-icon">
                                <FontAwesomeIcon icon={faLanguage} size="2x"/>
                            </div>
                        </div>
                    </div>
                    <div className="cat-boxes">
                        <div className="box" >
                            <div className="box-title">
                                Music
                            </div>
                            <div className="box-icon">
                                <FontAwesomeIcon icon={faMusic} size="2x"/>
                            </div>
                        </div>
                        <div className="box" >
                            <div className="box-title">
                                Sports
                            </div>
                            <div className="box-icon">
                                <FontAwesomeIcon icon={faFutbol} size="2x"/>
                            </div>
                        </div>
                        <div className="box" >
                            <div className="box-title">
                                Arts
                            </div>
                            <div className="box-icon">
                                <FontAwesomeIcon icon={faPalette} size="2x" />
                            </div>
                        </div>
                        <div className="box" >
                            <div className="box-title">
                                Tv Shows
                            </div>
                            <div className="box-icon">
                                <FontAwesomeIcon icon={faTv} size="2x" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <br />
            {/* Calling all of your personal project component */}
            <PersonalProjects />

        </div>

        </>

    );
}

export default HomePage;