import React from "react";
import './StickyNote.css';

function StickyNote (props){

    const { backgroundColor } = props;


    return(
        <>
            <div className="sticky-note" >   
                <div className="sticky-note-container" style={{ backgroundColor }}>
                    Project in note
                </div>
                <div className="sticky-note-add">
                    +
                </div>
            </div>
        </>
    )
}

export default StickyNote;