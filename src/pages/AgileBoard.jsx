import React from "react";
import './AgileBoard.css';
import Header from './../components/Header';
import { useNavigate } from "react-router-dom";


function AgileBoard(){

    let navigate = useNavigate();

    const handleCancelButton = () => {
        navigate('/selectionpage');
    }

    return (
        <>
            <Header />
            <form>
                <div className="agile-board-container">
                    <div className="agile-form-box">
                        <div className="agile-form-title">
                            Agile Board Form
                        </div>
                        <div className="agile-columns">
                            <div className="agile-form-column">
                                <div className="column-title">
                                    Column 1
                                </div>
                                <input></input>
                            </div>
                            <div className="agile-form-column">
                                <div className="column-title">
                                    Column 2
                                </div>
                                <input></input>
                            </div>
                            <div className="agile-form-column">
                                <div className="column-title">
                                    Column 3
                                </div>
                                <input></input>
                            </div>
                        </div>
                        <div className="agile-rows">
                            <div className="agile-form-row">
                                <div className="row-title">
                                    Row 1
                                </div>
                                <input></input>
                            </div>
                            <div className="agile-form-column">
                                <div className="row-title">
                                    Row 2
                                </div>
                                <input></input>
                            </div>
                            <div className="agile-form-column">
                                <div className="row-title">
                                    Row 3
                                </div>
                                <input></input>
                            </div>
                        </div>
                        <div className="submit-box">
                            <button
                                className="create-agile-button"
                            >
                                Create Agile Board
                            </button>
                            <button 
                                className="cancel-button"
                                onClick={handleCancelButton}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
};

export default AgileBoard;