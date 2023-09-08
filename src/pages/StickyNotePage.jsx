import React from "react";
import './StickyNotePage.css';
import Header from "../components/Header";
import WaterfallImage from '../images/Waterfall.png';
import Agile from '../images/Agile.png';
import Like from '../images/Like.png';
import Dislike from '../images/Dislike.png';
import Comment from '../images/Comment.png';
import Save from '../images/Save.png';



function StickyNotePage(){
    
    return(
        <>
            <Header />
            <div className="stickynote-main-container">
                <div className="stickynote-box">
                    <div className="stickynote-title">
                        Best Project Method To Adopt: 
                    </div>
                    <div className="stickynote-project-box">

                        <div className="project-box-one">
                            <div className="box-one-title">
                                Waterfall Methodology
                            </div>
                            <div className="box-one-image">
                                <img src={WaterfallImage} />
                            </div>
                            <div className="box-one-content">
                                <div className="box-one-content-title">
                                    Waterfall Method:
                                </div>
                                <div className="box-one-description">
                                    The waterfall method is a linear and sequential project 
                                    management approach where each phase of a project is completed 
                                    before moving on to the next one, resembling a waterfall 
                                    flowing in one direction. 
                                </div>
                            </div>
                            <div className="box-system-container">
                                <div className="system-like">
                                    <img src={Like} />
                                </div>
                                <div className="system-dislike">
                                    <img src={Dislike} />
                                </div>
                                <div className="system-comment">
                                    <img src={Comment} />
                                </div>
                                <div className="system-save">
                                    <img src={Save} />
                                </div>
                            </div>
                        </div>


                        <div className="project-box-two">
                            <div className="box-two-title">
                                Agile Methodology
                            </div>
                            <div className="box-two-image">
                                <img src={Agile} />
                            </div>
                            <div className="box-two-content">
                                <div className="box-two-content-title">
                                    Waterfall Method:
                                </div>
                                <div className="box-two-description">
                                    Agile is an iterative and flexible project 
                                    management approach that emphasizes collaboration, 
                                    adaptability, and incremental development to deliver 
                                    value in small, frequent increments.
                                </div>
                            </div>
                            <div className="box-system-container">
                                <div className="system-like">
                                    <img src={Like} />
                                </div>
                                <div className="system-dislike">
                                    <img src={Dislike} />
                                </div>
                                <div className="system-comment">
                                    <img src={Comment} />
                                </div>
                                <div className="system-save">
                                    <img src={Save} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-box-comment">
                        <div className="project-box-title">
                            5.1k Comments:
                        </div>
                        <div className="project-comments">
                            <div className="comment-one">
                                <div className="comment-one-name">
                                    Jane Foster: 
                                </div>
                                <div className="comment-one-comment">
                                    The Waterfall method is a traditional 
                                    and linear project management approach. 
                                    It's like building a staircase where each step 
                                    must be completed before moving to the next.
                                    While it offers clarity and structure, it can be less 
                                    adaptable to changing requirements.
                                </div>
                            </div>
                            <div className="comment-two">
                                <div className="comment-two-name">
                                    Peter Parker:
                                </div>
                                <div className="comment-two-comment">
                                    Agile is a modern and iterative 
                                    project management approach. It's akin to 
                                    sculpting a statue from a block of clay, allowing 
                                    for constant adjustments as the project progresses.
                                    It thrives on collaboration and adaptability, making
                                     it well-suited for dynamic environments.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StickyNotePage;