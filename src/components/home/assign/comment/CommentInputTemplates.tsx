import { useMutation, useSubscription } from "@apollo/client"
import { useState } from "react"
import toast from "react-hot-toast"
import { CREATE_POST_COMMENT } from "../../../server/mutation/MutationList"
import { GET_LOGIN_USER } from "../../../server/query/QueryList"
import { InputTemplates } from "../../../utils/InputTemplates"
import './CommentInputTemplates.scss'

export const CommentInputTemplates =({comment}:any)=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const getLoginUser = useSubscription(GET_LOGIN_USER,{
        variables:{
            username:getUser.username!
        }
    })
    const [message,setMessage] = useState('')
    const [createPostComment] = useMutation(CREATE_POST_COMMENT)
    const handleComment =()=>{
        if(message === ''){
            toast.error('cannot input an empty comment!')
        }else {
            createPostComment({
                variables:{
                    username:getUser.username!,
                    reply_id:null,
                    post_id:comment.post_id,
                    message:message!
                }
            }).then(()=>{
                toast.success('success add comment')
            })
        }
    }

    return  <div className="comment-input-container">
                <div className="comment-input-image-profile">
                    <img src={
                        getLoginUser.loading === true ? '/default-profile.png':
                        getLoginUser.data.User[0].UserDetail.photoProfile} alt="" />
                </div>
                <InputTemplates onChange={(e:any)=>setMessage(e.target.value)} type='username' placeholder='add your comment'/>
                <div className="feed-hover" onClick={()=>handleComment()}>send</div>
            </div>
}