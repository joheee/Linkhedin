import { useParams } from "react-router-dom"

import './ChatBox.scss'
export const ChatBox =()=>{
    const {messageIndex} = useParams()
    return  <div className="chat-box-container">
                this is chat box
            </div>
}