import { Link, useParams } from "react-router-dom"
import { RichTextTemplates } from "../../home/templates/postTemplates/postCreate/RichTextTemplates"
import { ChatBox } from "./ChatBox"
import './PopUpChat.scss'

export const PopUpChat =()=> {
    const {messageIndex} = useParams()
    return  <div className="pop-up-chat-message-container">
                <Link to={'/messages'}>
                    <div className="pop-up-chat-message-black-screen"></div>
                </Link>
                <div className="pop-up-chat-container">
                    <div className="pop-up-chat-username-delete-video-container">
                        <div className="pop-up-chat-back-username-container">
                            <Link to={'/messages'}>
                                <div className="fa-solid fa-arrow-left feed-hover"></div>
                            </Link>
                            <div className="">{messageIndex}</div>
                        </div>
                        <div className="pop-up-chat-trash-video-container">
                            <div className="fa-solid fa-trash feed-hover"></div>
                            <div className="fa-solid fa-video feed-hover"></div>
                        </div>
                    </div>

                    <div className="set-width-pop-up"></div>
                    
                    <ChatBox/>

                    <RichTextTemplates content="type your message"/>
                    
                    <div className="pop-up-chat-image-send-container">
                        <div className="fa-solid fa-image feed-hover"></div>
                        <div className="feed-hover send-button">send</div>
                    </div>
                </div>
            </div>
}