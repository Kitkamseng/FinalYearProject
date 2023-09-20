import React from "react";
import './AddProjectCard.css';
import PostCreation from './../images/Post-creation.png'
import { useNavigate } from "react-router-dom";


function AddProjectCard () {

    let navigate = useNavigate();

    //If users want to add more project or post
    //Redirect to selection page
    const handleAddCard = () =>{
        navigate('/selectionpage')
    }

    return(
        <>
            <div className="add-project-container">
                <div 
                    className="add-card-container"
                    onClick={handleAddCard}
                >
                    <div className="project-add-icon">
                        <img src={PostCreation} />
                    </div>
                </div>
            </div>
        </>
    );


}

export default AddProjectCard;