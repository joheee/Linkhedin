import { useMutation, useSubscription } from '@apollo/client'
import { useState } from 'react'
import { CREATE_COMMENT_LIKE, DELETE_COMMENT_LIKE } from '../../../server/mutation/MutationList'
import { GET_COMMENT_LIKE, GET_POST_COMMMENT_EXIST, GET_REPLY_COMMENT } from '../../../server/query/QueryList'
import { CommentInputTemplates } from './CommentInputTemplates'
import { CommentRenderReplyTemplates } from './CommentRenderReplyTemplates'
import './CommentRenderTemplates.scss'

export const CommentRenderTemplates =({comment}:any)=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    
    const getCommentLike = useSubscription(GET_COMMENT_LIKE, {
        variables:{
            comment_id:comment.comment_id!
        }
    })

    const getPostCommentLike = useSubscription(GET_POST_COMMMENT_EXIST, {
        variables:{
            comment_id:comment.comment_id,
            username: getUser.username
        }
    })

    const getReplyComment = useSubscription(GET_REPLY_COMMENT, {
        variables:{
            reply_id:comment.comment_id!
        }
    })

    const [createCommentLike] = useMutation(CREATE_COMMENT_LIKE)
    const [deleteCommentLike] = useMutation(DELETE_COMMENT_LIKE)
    const handleLike =()=>{
        if(getPostCommentLike.loading === false) {
            if(getPostCommentLike.data.PostCommentLike.length === 0){
                createCommentLike({
                    variables:{
                        comment_id:comment.comment_id,
                        username: getUser.username
                    }
                })
            } else {
                deleteCommentLike({
                    variables:{
                        comment_id:comment.comment_id,
                        username: getUser.username
                    }
                })
            }
        }
    }

    const [isReply, setIsReply] = useState(false)
    return <>
                {comment.reply_id === null ?
                    <div className="comment-render-outer-container">
                        <div className="comment-render-container">
                            <div className="comment-render-image">
                                <img src={comment.User.UserDetail.photoProfile} alt="" />
                            </div>
                            <div className="comment-render-info">
                                <div className="comment-render-username">{comment.User.username}</div>
                                <div className="">{comment.message }</div>
                            </div>
                        </div>
                        <div className="comment-render-button-container">
                            <div className="">
                                {
                                    getCommentLike.loading === true || getPostCommentLike.loading === true?
                                    null :
                                    <>
                                    {getCommentLike.data.PostCommentLike.length}
                                    <div className={`fa-solid fa-thumbs-up feed-hover ${
                                        getPostCommentLike.data.PostCommentLike.length === 0 ? '':'is-like'
                                    }`} onClick={()=>handleLike()}></div>
                                    </>
                                }
                            </div>
                            {
                                getReplyComment.loading === true ? 
                                null :
                                <div className="">
                                    {getReplyComment.data.PostComment.length}
                                    <div className="fa-solid fa-reply feed-hover" onClick={()=>setIsReply(!isReply)}></div>
                                </div>
                            }
                        </div>  
                    </div> 
                    :
                    null
                }

                {
                    getReplyComment.loading === true ? null : 

                    isReply === false ? null :
                    <div className="comment-reply-outer-container">
                        <CommentInputTemplates comment={comment} reply_id={comment.comment_id}/>
                        {getReplyComment.data.PostComment.map((comment:any, i:any) =>(
                            <div key={i}>
                                <CommentRenderReplyTemplates comment={comment} />
                            </div>
                        ))}
                    </div>
                }
            </>  
}