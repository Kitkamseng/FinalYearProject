import React from "react";
import './SelectionPage.css';
import agileBoardImage from './../images/agile-board.jpg'; 
import postCreationPlus from './../images/Post-creation.png';
import Header from './../components/Header';
import { useNavigate } from "react-router-dom";

function SelectionPage() {

    let navigate = useNavigate();

    const handleAgileBoard = () => {
        navigate('/agileboardcreation')
    }

    const handlePostCreate = () => {
        navigate('/postcreation');
    }

    return(
        <>
            <Header />
            <div className="selection-container">
                <div className="selection-box">
                    <div 
                        className="agile-board-box"
                        onClick={handleAgileBoard}
                    >
                        <div className="board-title">
                        Agile Board
                        </div>
                        <img src={agileBoardImage} alt="agile-board-image" />
                        <button>
                            Create Agile Board
                        </button>
                    </div>
                    <div 
                        className="post-card"
                        onClick={handlePostCreate}
                    >
                        <div className="board-title">
                        Post Creation
                        </div>
                        <img src={postCreationPlus} alt='post-creation-plus' />
                        <button>
                            Create Post
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};


export default SelectionPage;