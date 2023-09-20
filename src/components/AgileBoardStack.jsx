import React from "react";
import './AgileBoardStack.css';
import StickyNote from "./StickyNote";
import { useNavigate } from "react-router-dom";

function AgileBoardStack (props) {


    let navigate = useNavigate();

    //Navigate to Sticky note page
    const handleStickyNote = () =>{
        navigate('/StickyNotePage');
    }

    return(
        <>
            <div className="agileboard-main-container">
                <div className="ab-first-container">
                    <div className="ab-first-three">
                        {props.content}
                    </div>
                    <div 
                        className="note-container"
                        onClick={handleStickyNote}
                    >
                        <StickyNote 
                            backgroundColor="yellow"
                        />
                    </div>
                    <div className="note-container">
                        <StickyNote 
                            backgroundColor="orange"
                        />
                    </div>
                    <div className="note-container">
                        <StickyNote 
                            backgroundColor="green"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AgileBoardStack;