import { Link, useParams } from "react-router-dom"
import { RecommendPersonTemplates } from "../../home/templates/feedTemplates/RecommendPersonTemplates"
import { BoxInnerTemplates } from "../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../utils/BoxTemplates"
import { PopUpChat } from "./PopUpChat"
import './MessagePageAssign.scss'
import { useSubscription } from "@apollo/client"
import { GET_USER_CHAT_ROOM,GET_CURRENT_USER } from "../../server/query/QueryList"
import { useState } from "react"
import { VideoCall } from "./VideoCall"

export const MessagePageAssign =()=>{
    const {messageIndex} = useParams()
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser

    const getUserChatRoom = useSubscription(GET_USER_CHAT_ROOM, {
        variables:{
            chatMate:getUser.username!
        }
    })
    const getAllUser = useSubscription(GET_CURRENT_USER)
    let chatMateUsername:any = []
    if(!getUserChatRoom.loading && !getAllUser.loading) {
        getUserChatRoom.data.ChatRoom.forEach((chat:any) => {
            if(chat.sender === getUser.username) {
                chatMateUsername.push({username:chat.receiver, chat_room_id:chat.chat_room_id})
            }
            if(chat.receiver === getUser.username) {
                chatMateUsername.push({username:chat.sender, chat_room_id:chat.chat_room_id})
            }
        })
    }

    const [searchInput, setSearchInput] = useState('')
    const handleSearchInput = (e:any) => {
        let lowerCase = e.target.value.toLowerCase()
        setSearchInput(lowerCase)
    }

    return  <BoxTemplates>
                <BoxInnerTemplates>
                        <div className="message-page-assign-header-search-people-container">
                            <div className="message-page-assign-container">
                                <div className="set-width-message-page-assign"></div>
                                <div className="message-page-assign-header-container">
                                    <div className="">messaging</div>
                                    <div className="fa-solid fa-pen-to-square"></div>
                                </div>
                            </div>
                            <input type="text" placeholder="search messages" onChange={handleSearchInput} />
                            {
                                getUserChatRoom.loading || getAllUser.loading || chatMateUsername.length === 0 ?
                                null :
                                getAllUser.data.User.filter((item:any) => {
                                    return chatMateUsername.find((chat:any) => {
                                        item.chat_room_id = chat.chat_room_id
                                        if(searchInput !== ''){
                                            return chat.username === item.username && chat.username.toLowerCase().includes(searchInput)
                                        } else {
                                            return chat.username === item.username
                                        }})
                                }).map((user:any,i:any) => 
                                <Link to={`/messages/${user.chat_room_id}/${btoa(user.username!)}`} key={i}>
                                    <RecommendPersonTemplates {...user}/>
                                </Link>
                                )
                            }

                            {messageIndex === undefined ? null : 
                            getAllUser.loading ? null :
                            <PopUpChat prop={getAllUser.data.User}/>}
                        </div>
                </BoxInnerTemplates>
            </BoxTemplates>
}