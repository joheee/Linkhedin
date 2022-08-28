import { useParams } from "react-router-dom"

import './ChatBox.scss'
export const ChatBox =()=>{
    const {messageIndex} = useParams()
    const dummyMessage = [
        {
            profile:"/default-profile.png",
            sender: messageIndex,
            receiver: 'us',
            message: 'haii hai hai hai hai hai hai apa kabs monyeet asdf asdf asdf asdf asd asdf sadf asdf'
        },{
            profile:"/default-profile.png",
            sender: 'lorem',
            receiver: 'us',
            message: 'baikz asdf asdf asdf asdf asdf asdf asdf sd asd'
        },{
            profile:"/default-profile.png",
            sender: messageIndex,
            receiver: 'us',
            message: 'oh yaa'
        },{
            profile:"/default-profile.png",
            sender: 'lorem',
            receiver: 'us',
            message: 'iyaaaaaa'
        },
    ]
    return  <div className="chat-box-container">
                {
                    dummyMessage.map((message, i) => 
                        <div key={i} className={message.sender === messageIndex ? "chat-bubble-sender":"chat-bubble-receiver"}>
                            <div className="chat-box-profile-image-container">
                                <img src={message.profile} alt="" />
                            </div>
                            <div className={message.sender === messageIndex ? "chat-bubble-inner-sender":"chat-bubble-inner-receiver"}>
                                {message.message}
                            </div>
                        </div>
                    )
                }
            </div>
}