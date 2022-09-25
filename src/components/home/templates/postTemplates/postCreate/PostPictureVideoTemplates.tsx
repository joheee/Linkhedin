import { useMutation } from '@apollo/client'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { storage } from '../../../../server/firebase/FirebaseHelper'
import { CREATE_POST, CREATE_POST_NOTIFICATION, UPDATE_POST } from '../../../../server/mutation/MutationList'
import './PostPictureVideoTemplates.scss'

export const PostPictureVideoTemplates =({text,setIsPost}:any)=>{
    const [pictureInput, setPictureInput] = useState(null)
    const [previewPictureInput, setPreviewPictureInput] = useState('')
    const [videoInput, setVideoInput] = useState(null)
    const [videoPictureInput, setPreviewVideoInput] = useState('')

    const handleResetImageInput =()=>{
        setPictureInput(null)
        setPreviewPictureInput('')
    }
    const handleResetVideoInput =()=>{
        setVideoInput(null)
        setPreviewVideoInput('')
    }
    const handleImageInput =(e:any)=>{
        handleResetVideoInput()
        handleResetImageInput()
        setPreviewPictureInput(URL.createObjectURL(e.target.files[0]))
    }
    const handleVideoInput =(e:any)=>{
        handleResetImageInput()
        handleResetVideoInput()
        setPreviewVideoInput(URL.createObjectURL(e.target.files[0]))
    }

    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const [createPost] = useMutation(CREATE_POST)
    const [updatePost] = useMutation(UPDATE_POST)
    const [createPostNotification] = useMutation(CREATE_POST_NOTIFICATION)
    const handlePost =()=>{
        if(text === '') {
            toast.error('desc must be filled')
        }else {
            createPost({
                variables:{
                    username:getUser.username!,
                    description:text!
                }
            }).then((e)=>{
                if(previewPictureInput !== ''){
                    const userRef = ref(storage, `/posts/${getUser.username}/photo/${e.data.insert_Post_one.post_id}`)
                    const metadata = {contentType : 'profile pic'}
                    uploadBytes(userRef, pictureInput!, metadata)
                    .then(()=>{
                    getDownloadURL(userRef).then((url) => {
                        updatePost({
                            variables:{
                                post_id:e.data.insert_Post_one.post_id!,
                                photo:url!,
                                video:null
                            }
                        }).then(()=>{
                            createPostNotification({
                                variables:{
                                    post_id:e.data.insert_Post_one.post_id!,
                                    username:getUser.username!
                                }
                            }).then(()=>{
                                toast.success('success create new post')
                                setIsPost(false)
                            })
                        })
                        })
                    })
                    return
                } else if(videoPictureInput !== '') {
                    const userRef = ref(storage, `/posts/${getUser.username}/video/${e.data.insert_Post_one.post_id}`)
                    const metadata = {contentType : 'profile pic'}
                    uploadBytes(userRef, videoInput!, metadata)
                    .then(()=>{
                    getDownloadURL(userRef).then((url) => {
                        updatePost({
                            variables:{
                                post_id:e.data.insert_Post_one.post_id!,
                                video:url!,
                                photo:null
                            }
                        }).then(()=>{
                            createPostNotification({
                                variables:{
                                    post_id:e.data.insert_Post_one.post_id!,
                                    username:getUser.username!
                                }
                            }).then(()=>{
                                toast.success('success create new post')
                                setIsPost(false)
                            })
                        })
                        })
                    })
                    return
                } else {
                    createPostNotification({
                        variables:{
                            post_id:e.data.insert_Post_one.post_id!,
                            username:getUser.username!
                        }
                    }).then(()=>{
                        toast.success('success create new post')
                        setIsPost(false)
                    })
                }
            })
        }
    }

    return  <div className="">
                {
                    previewPictureInput==='' && videoPictureInput === '' ?
                    null:
                    <div className="post-picture-image-video-container">
                        {
                            previewPictureInput!=='' ? 
                            <img src={previewPictureInput} alt="" />
                            :
                            <video src={videoPictureInput} controls></video>
                        }
                        <div className="follow-button-effect" onClick={()=>{
                            handleResetImageInput()
                            handleResetVideoInput()
                        }}>cancel</div>
                    </div>
                }
                <div className="post-picture-video-templates-container">
                    <div className="post-picture-video-container">
                    <label className="file">
                        <div className="fa-solid fa-image feed-hover"></div>
                        <input onChange={(e:any)=>handleImageInput(e)} type="file" id="file" aria-label="File browser example"/>
                    </label>
                    <label className="file">
                        <div className="fa-brands fa-youtube feed-hover"></div>
                        <input onChange={(e:any)=>handleVideoInput(e)} type="file" id="file" aria-label="File browser example"/>
                    </label>
                    </div>
                    <div className="post-button" onClick={()=>handlePost()}>post</div>
                </div>
            </div>
}