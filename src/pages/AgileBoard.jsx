import React from "react";
import './AgileBoard.css';
import Header from './../components/Header';
import { useNavigate } from "react-router-dom";
import AgileBoardStack from "../components/AgileBoardStack";


function AgileBoard(){

    let navigate = useNavigate();

    const handleCancelButton = () => {
        navigate('/selectionpage');
    }

    return (
        <>
            <Header />
            <div className="agile-big-box">
                <div className="agile-box">
                    <div className="first-square" />
                    <div className="first-square">
                        To Do Section: 
                    </div>
                    <div className="first-square">
                        In Progession: 
                    </div>
                    <div className="first-square">
                        Completed: 
                    </div>
                </div>
            </div>
            <AgileBoardStack content="Desgin Phase" />
            <AgileBoardStack content="Coding Phase" />
            <AgileBoardStack content="Unit Testing Phase" />

        </>
    )
};

export default AgileBoard;