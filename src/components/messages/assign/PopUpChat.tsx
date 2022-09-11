import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import "../../home/templates/postTemplates/postCreate/RichTextTemplates.scss"
import { ChatBox } from "./ChatBox"
import './PopUpChat.scss'
import { VideoCall } from "./VideoCall"

export const PopUpChat =({prop}:any)=> {
    const {username} = useParams()
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const [isVideo, setIsVideo] = useState(false)
    
    return  <div className="pop-up-chat-message-container">
    
                {
                    isVideo === true ?
                    <VideoCall setIsVideo={setIsVideo}/> : null
                }

                <Link to={'/messages'}>
                    <div className="pop-up-chat-message-black-screen"></div>
                </Link>
                <div className="pop-up-chat-container">
                    <div className="pop-up-chat-username-delete-video-container">
                        <div className="pop-up-chat-back-username-container">
                            <Link to={'/messages'}>
                                <div className="fa-solid fa-arrow-left feed-hover"></div>
                            </Link>
                            <b className="">{atob(username!)}</b>
                        </div>
                        <div className="pop-up-chat-trash-video-container">
                            <div className="fa-solid fa-trash feed-hover"></div>
                            <div className="fa-solid fa-video feed-hover" onClick={()=>setIsVideo(!isVideo)}></div>
                        </div>
                    </div>

                    <div className="set-width-pop-up"></div>
                    
                    <ChatBox 
                    currentUser={prop.find((user:any) => user.username === getUser.username)} 
                    targetUser={prop.find((user:any) => user.username === atob(username!))}/>
                    
                </div>
            </div>
}