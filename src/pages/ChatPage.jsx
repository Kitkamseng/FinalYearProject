import React from "react";
import './ChatPage.css';
import Header from "../components/Header";
import femaleIcon from '../images/femaleIcon.png';
import maleIcon from '../images/maleIcon.png';
import maleIconTwo from '../images/male2Icon.png';
import femaleIconTwo from '../images/female2Icon.png';
import phoneCall from '../images/phoneCall.png';
import videoCall from '../images/videoCall.png';
import info from '../images/info.png';
import WebDevImage from '../images/WebDevImage.png';

function ChatPage() {

    return(
        <>
            <Header />
            <div className="chatbox-container"> 
                <div className="chatbox-left">
                    <div className="chatbox-title">
                        Chats:  
                    </div>
                    <div className="chatbox-chats">
                        <div className="chatbox-profile-icon">
                            <img src={femaleIcon} />
                        </div>
                        <div className="chatbox-profile-name">
                            <div className="profile-name">
                                June Salamanca
                            </div>
                            <div className="profile-status">
                                Active 5 mins ago...
                            </div>
                        </div>
                    </div>
                    <div className="chatbox-chats">
                        <div className="chatbox-profile-icon">
                            <img src={maleIcon} />
                        </div>
                        <div className="chatbox-profile-name">
                            <div className="profile-name">
                                Viktor Bout
                            </div>
                            <div className="profile-status">
                                <span className="Active-status">Active</span> 
                            </div>
                        </div>
                    </div>
                    <div className="chatbox-chats">
                        <div className="chatbox-profile-icon">
                            <img src={maleIconTwo} />
                        </div>
                        <div className="chatbox-profile-name">
                            <div className="profile-name">
                                Russell Price
                            </div>
                            <div className="profile-status">
                                Active 5 mins ago...
                            </div>
                        </div>
                    </div>
                    <div className="chatbox-chats-annie">
                        <div className="chatbox-profile-icon">
                            <img src={femaleIconTwo} />
                        </div>
                        <div className="chatbox-profile-name">
                            <div className="profile-name">
                                Annie Bailey
                            </div>
                            <div className="profile-status">
                                <span className="Active-status">Active</span> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chatbox-right">
                    <div className="chatbox-header">
                        <div className="chatbox-header-profile">
                            <img src={femaleIconTwo} />
                        </div>
                        <div className="chatbox-header-name">
                            <div className="profile-name">
                                Annie Bailey
                            </div>
                            <div className="profile-status">
                                <span className="Active-status">Active</span> 
                            </div>
                        </div>
                        <div className="chatbox-header-info">
                            <div className="info-phonecall">
                                <img src={phoneCall} />
                            </div>
                            <div className="info-videocall">
                                <img src={videoCall} />
                            </div>
                            <div className="info-info">
                                <img src={info} />
                            </div>
                        </div>
                    </div>

                    <div className="chat-interaction-box">
                        <div className="first-interaction">
                            <div className="profile-icon">
                                <img src={femaleIconTwo} />
                            </div>
                            <div className="first-chat">
                                Hello, look at the latest project done by Kit!
                            </div>
                        </div>  

                        <div className="first-interaction">
                            <div className="profile-icon">
                                <img src={femaleIconTwo} />
                            </div>
                            <div className="second-chat">
                               <div className="share-project-box">
                                    <div className="share-project-title">
                                        Web Dev Project
                                    </div>
                                    <div className="share-project-content">
                                        <img src={WebDevImage} />
                                    </div>
                                    <div className="share-project-info">
                                        <div className="project-info-likes">
                                            2.3k Likes
                                        </div>
                                        <div className="project-info-share">
                                            500 Shares
                                        </div>
                                        <div className="project-info-open">
                                            Open
                                        </div>
                                    </div>
                               </div>
                            </div>
                        </div> 
                        
                        <div className="second-interaction">
                            <div className="white-space"></div>
                            <div className="third-chat">Sure, I will check it out!</div>
                            <img src={maleIcon} />
                        </div> 
                    </div>
                    
                    <div className="chat-box-input">
                        <input type="text" className="chat-input" placeholder="Type your message..."/>
                        <button className="send-button">Send</button>
                    </div>
                </div>


            </div>
        </>
    )

}

export default ChatPage; 