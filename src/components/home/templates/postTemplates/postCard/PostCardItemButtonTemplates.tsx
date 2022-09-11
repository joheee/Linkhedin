import { useMutation } from "@apollo/client";
import { useContext } from "react";
import toast from "react-hot-toast";
import { CREATE_SHARE, DELETE_LIKE, DELETE_POST, INSERT_LIKE } from "../../../../server/mutation/MutationList";
import { CommentPopUpContext } from "../../../card/post/PostEachCard";
import './PostCardItemButtonTemplates.scss'

export const PostCardItemButtonTemplates =(post:any)=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser

    const [deletePost] = useMutation(DELETE_POST)
    const handleDelete =()=>{
        console.log("here")
        deletePost({
            variables:{
                post_id:post.post_id!
            }
        }).then(()=>{
            toast.success('delete your post')
        })
    }

    const [deleteLike] = useMutation(DELETE_LIKE)
    const [insertLike] = useMutation(INSERT_LIKE)
    const handleLike =()=>{
        if(post.PostLikes.filter((like:any) => {return like.likedBy === getUser.username}).length === 0) {
            insertLike({
                variables:{
                    post_id:post.post_id!,
                    likedBy:getUser.username!
                }
            })
        }else {
            deleteLike({
                variables:{
                    post_like_id:post.PostLikes.filter((like:any) => {return like.likedBy === getUser.username})[0].post_like_id!
                }
            })
        }
    }

    const [createShare] = useMutation(CREATE_SHARE)
    const copyTextToClipboard =()=> {
        createShare({
            variables: {
                post_id:post.post_id!,
                username:getUser.username
            }
        }).then((e)=>{
            navigator.clipboard.writeText(`http://localhost:5173/post-detail/${e.data.insert_PostShare_one.Post.post_id}`).then(()=> {
                toast.success('copying to clipboard was successful!')
            })
        })
    }

    const CommentContext = useContext(CommentPopUpContext!)
    const queryString = window.location.search;
    console.log(queryString);

    return  <div className="post-card-item-button-container">
                <div className={`post-card-item-button-each feed-hover ${
                    post.PostLikes.filter((like:any) => {return like.likedBy === getUser.username}).length !== 0 ? 'is-like':null
                }`} onClick={()=>handleLike()}>
                    <div className="fa-solid fa-thumbs-up"></div>
                    <div className="">like</div>
                </div>
                <div className="post-card-item-button-each feed-hover" onClick={()=> CommentContext.setIsComment(!CommentContext.isComment!)}>
                    <div className="fa-solid fa-comment-dots"></div>
                    <div className="">comment</div>
                </div>
                <div className="post-card-item-button-each feed-hover"  onClick={()=>copyTextToClipboard()}>
                    <div className="fa-solid fa-share"></div>
                    <div className="">share</div>
                </div>
                {
                    post.username === getUser.username ?
                    <div className="post-card-item-button-each feed-hover" onClick={()=>handleDelete()}>
                        <div className="fa-solid fa-trash"></div>
                        <div className="">delete</div>
                    </div>
                    : null
                }
            </div>
    }