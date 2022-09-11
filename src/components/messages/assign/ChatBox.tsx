import { useMutation, useSubscription } from "@apollo/client"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { useState } from "react"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"
import { RichTextRenderTemplates } from "../../home/templates/postTemplates/postCreate/RichTextRenderTemplates"
import { storage } from "../../server/firebase/FirebaseHelper"
import { CREATE_MESSAGE, UPDATE_IMAGE_MESSAGE } from "../../server/mutation/MutationList"
import { GET_CURRENT_MESSAGE } from "../../server/query/QueryList"
import { LoadingAnimation } from "../../utils/LoadingAnimation"

import './ChatBox.scss'
import { VideoCall } from "./VideoCall"
export const ChatBox =({currentUser, targetUser}:any)=>{
    const [text, setText] = useState('')
    const [pictureInput, setPictureInput] = useState(null)
    const [previewInput, setPreviewInput] = useState('')
	const textarea : HTMLElement = document!.querySelector('.autoresizing')!
	textarea?.addEventListener('keyup', (e:any) => {
		textarea.style.height = `auto`
		let scHeight = e.target?.scrollHeight!
		textarea.style.height = `${scHeight}px`
	})

    const {messageIndex,username} = useParams()
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser

    const getCurrentMessage = useSubscription(GET_CURRENT_MESSAGE,{
        variables:{
            chat_room_id:messageIndex
        }
    })
    const [createMessage] = useMutation(CREATE_MESSAGE)
    const [updateImageMessage] = useMutation(UPDATE_IMAGE_MESSAGE)
    const handleSend =()=>{
        if(text === '' && pictureInput === null) toast.error('no message has been sended') 
        else {
            let textContain = text === '' ? null : text
            createMessage({
                variables:{
                    chat_room_id:messageIndex!,
                    receiver:atob(username!)!,
                    sender:getUser.username!,
                    message: textContain
                }
            }).then((e:any) => {
                if(pictureInput !== null) {
                    const userRef = ref(storage, `RoomChat/${messageIndex}/${e.data.insert_ChatMessage_one.chat_message_id}`)
                    const metadata = {contentType : 'profile pic'}
                    uploadBytes(userRef, pictureInput!, metadata)
                    .then(()=>{
                        getDownloadURL(userRef).then((url) => {
                            updateImageMessage({
                                variables:{
                                    image:url!,
                                    chat_message_id:e.data.insert_ChatMessage_one.chat_message_id!,
                                }
                            }).then(()=>{
                                handleCancelImage()
                            })
                        })
                    })
                }
            })
        }
    }

    const handleJobImage =(e:any)=>{
        setPictureInput(e.target.files[0])
        setPreviewInput(URL.createObjectURL(e.target.files[0]))
    }
    const handleCancelImage =()=>{
        setPictureInput(null)
        setPreviewInput('')
    }

    return  <>
                <div className="chat-box-container">
                {
                    getCurrentMessage.loading ? 
                    <LoadingAnimation height="50" width="100"/> : 
                    getCurrentMessage.data.ChatMessage.map((message:any, i:any) => 
                    <div key={i} className={message.sender !== getUser.username ? "chat-bubble-sender":"chat-bubble-receiver"}>
                            <div className="chat-box-profile-image-container">
                                <img src={message.sender === getUser.username ? currentUser.UserDetail.photoProfile:targetUser.UserDetail.photoProfile} alt="" />
                            </div>

                            <div className={message.sender === getUser.username ? "chat-box-message-inner-sender-container":"chat-box-message-inner-receiver-container"}>
                                {
                                    message.message === null ? null : 
                                    <div className={message.sender !== getUser.username ? "chat-bubble-inner-sender":"chat-bubble-inner-receiver"}>
                                        <RichTextRenderTemplates content={message.message} />
                                    </div>
                                }
                                {
                                    message.image === null ? null :
                                    <div className={message.sender !== getUser.username ? "chat-bubble-inner-sender":"chat-bubble-inner-receiver"}>
                                        <img src={message.sender === getUser.username ? message.image:message.image} alt="" />
                                    </div>
                                }
                            </div>
                        </div>
                    )
                }

                </div>
                <div className="rich-text-templates-container">
                        {
                            previewInput === '' ? null : 
                            <div className="rich-text-templates-image">
                                <div className="rich-text-templates-image-header">
                                    <div className="">preview</div>
                                    <div className="fa-solid fa-x feed-hover" onClick={()=>handleCancelImage()}></div>
                                </div>
                                <img src={previewInput} alt="" />
                            </div>
                        }
                        <textarea value={text} onChange={(e) => setText(e.target.value)} className='autoresizing' placeholder='type your message'>
				    </textarea>
                </div>
                <div className="pop-up-chat-image-send-container">
                    <label className="file">
                        <div className="fa-solid fa-camera feed-hover"></div>
                        <input  onChange={(e:any)=>handleJobImage(e)}  type="file" id="file" aria-label="File browser example"/>
                    </label>
                    <div className="feed-hover send-button" onClick={()=>handleSend()}>send</div>
                </div>
                </>
}