    import { useMutation, useSubscription } from '@apollo/client'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { storage } from '../../server/firebase/FirebaseHelper'
import { CONNECT_MECHANISM, CREATE_CHAT_ROOM, UPDATE_USER_BY_PK_NEW_DESCRIPTION, UPDATE_USER_BY_PK_NEW_PHOTO_BANNER, UPDATE_USER_BY_PK_NEW_PHOTO_PROFILE, UPDATE_USER_BY_PK_NEW_USERNAME } from '../../server/mutation/MutationList'
import { GET_ALL_CONNECT, GET_OTHER_USER, GET_TOTAL_FOLLOW, GET_TOTAL_VISITOR, GET_USER } from '../../server/query/QueryList'
import { BoxInnerTemplates } from '../../utils/BoxInnerTemplates'
import './MyProfile.scss'

export const MyProfile =({user}:any)=>{
    const [isButton,setIsButton] = useState(false)
    const navigate = useNavigate()
    const handleLogout =()=>{
        localStorage.removeItem('current_login')
        navigate('/')
    }

    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser

    const otherUser = useSubscription(GET_OTHER_USER,{
        variables:{
            username: user.username
        }
    })
    const getTotalFollower = useSubscription(GET_TOTAL_FOLLOW,{
        variables:{
            target:user.username!
        }
    })
    const all_user = useSubscription(GET_USER)
    const [updateUsername, {}] = useMutation(UPDATE_USER_BY_PK_NEW_USERNAME)
    const [updateDescription, {}] = useMutation(UPDATE_USER_BY_PK_NEW_DESCRIPTION)

    const [customProfile,setCustomProfile] = useState(false)
    const [usernameInput,setUsernameInput] = useState('')
    const handleSave =()=>{
        if(usernameInput === '') {
            toast.success('no update was applied')
            setCustomProfile(!customProfile)
        } else {
            if(usernameInput !== '') {
                for(let i = 0; i < all_user.data.User.length; i++){
                    if(all_user.data.User[i].username === usernameInput) {
                        toast.error('username already used')
                        return
                    }
                }
                updateUsername({
                    variables: {
                        username:usernameInput!,
                        user_id:user.user_id!
                    }
                }).then((e)=>{
                    localStorage.setItem('current_login', JSON.stringify({user_id:user.user_id!, username:usernameInput!,email:user.email,password:user.password}))
                    toast.success('success update username')
                    navigate('/myprofile')
                })
            } 
        }
    }

    const [updatePhotoProfile] = useMutation(UPDATE_USER_BY_PK_NEW_PHOTO_PROFILE)
    const handleProfileImage = (e:any) => {
        const userRef = ref(storage, `${user.username}/profile/profile-picture`)
        const metadata = {contentType : 'profile pic'}
        uploadBytes(userRef, e.target.files[0], metadata)
        .then(()=>{
            getDownloadURL(userRef).then((url) => {
                updatePhotoProfile({
                    variables:{
                        photoProfile:url!,
                        username:user.username!
                    }
                }).then(()=>{
                    toast.success('success update picture')
                })
            })
        })
    }

    const [customBanner, setCustomBanner] = useState(false)
    const [updatePhotoBanner] = useMutation(UPDATE_USER_BY_PK_NEW_PHOTO_BANNER)
    const handleBannerImage = (e:any) => {
        const userRef = ref(storage, `${user.username}/banner/banner-picture`)
        const metadata = {contentType : 'profile pic'}
        uploadBytes(userRef, e.target.files[0], metadata)
        .then(()=>{
            getDownloadURL(userRef).then((url) => {
                updatePhotoBanner({
                    variables:{
                        photoBanner:url!,
                        username:user.username!
                    }
                }).then(()=>{
                    toast.success('success update banner')
                    setCustomBanner(!customBanner)
                })
            })
        })
    }

    const [connectMechanism] = useMutation(CONNECT_MECHANISM)
    const handleConnect =()=>{
        connectMechanism({
            variables:{
                sender:getUser.username!,
                receiver:user.username
            }
        }).then(()=>{
            toast.success('send connect request to ' + user.username)
        })
    }
    const getAllConnect = useSubscription(GET_ALL_CONNECT)
    // if(!otherUser.loading && !getAllConnect.loading) {
    //     console.log(otherUser.data.User.filter((user:any) => {
    //         return getAllConnect.data.UserConnect.find((el:any) => {
    //                 return ((user.username === el.receiverConnect && el.senderConnect === getUser.username) || (user.username === el.senderConnect && el.receiverConnect === getUser.username)) && el.isConnected === true
    //             })
    //         }).length)
    // }
    const getAllVisitor = useSubscription(GET_TOTAL_VISITOR,{
        variables:{
            target:user.username!
        }
    })

    const [createChatRoom] = useMutation(CREATE_CHAT_ROOM)
    const handleMessageOther =()=>{
        createChatRoom({
            variables:{
                sender:getUser.username,
                receiver:user.username
            }
        }).then(()=>navigate('/messages'))
    }

    const handleSaveProfile =()=>{
        window.print()
    }

    return  <BoxInnerTemplates>
                    {
                    customProfile === false ? null :
                        <div className="pop-up-custom-profile">
                            <div className="pop-up-custom-profile-box">
                                <div className="pop-up-custom-profile-header">
                                    <div className="pop-up-custom-profile-text">edit profile</div>
                                    <div className="fa-solid fa-x feed-hover" onClick={()=>setCustomProfile(!customProfile)}></div>
                                </div>
                                <div className="my-profile-picture">
                                    <img src={user.UserDetail.photoProfile} alt={user.username} />
                                </div>
                                <label className="file">
                                    <div className="fa-solid fa-camera feed-hover"></div>
                                    <input onChange={(e:any)=>handleProfileImage(e)} type="file" id="file" aria-label="File browser example"/>
                                </label>
                                <textarea onChange={(e:any)=>setUsernameInput(e.target.value)} placeholder={user.username}/>
                                <div onClick={()=>handleSave()} className="follow-button-effect">save</div>
                            </div>
                        </div>
                    }

                    {
                    customBanner === false ? null:
                        <div className="pop-up-custom-profile">
                            <div className="pop-up-banner-customize">
                                <div className="pop-up-custom-profile-header">
                                    <div className="pop-up-custom-profile-text">edit profile</div>
                                    <div className="fa-solid fa-x feed-hover" onClick={()=>setCustomBanner(!customBanner)}></div>
                                </div>
                                <div className="pop-up-banner-photo-container">
                                    <img src={user.UserDetail.photoBanner} alt={user.username} />
                                </div>
                                <label className="file">
                                    <div className="fa-solid fa-camera feed-hover"></div>
                                    <input onChange={(e:any)=>handleBannerImage(e)} type="file" id="file" aria-label="File browser example"/>
                                </label>
                            </div>
                        </div>
                    }

                    <div className="my-profile-parent-container">
                        <div className="my-profile-banner">
                            {
                                user.username === getUser.username ?
                                <div className="fa-solid fa-camera camera-placement feed-hover" onClick={()=>setCustomBanner(!customBanner)}></div>
                                : null
                            }
                            {
                                user.username === getUser.username ?
                                <div className="fa-solid fa-pen pen-placement feed-hover" onClick={()=>setCustomProfile(!customProfile)}></div>
                                : null
                            }
                            <img src={user.UserDetail.photoBanner} alt={user.username} />
                            <div className="my-profile-picture" onClick={()=>setCustomProfile(!customProfile)}>
                                <img src={user.UserDetail.photoProfile} alt={user.username} />
                            </div>
                        </div>

                        <div className="my-profile-info-container">
                            <div className="my-profile-full-name">
                                {user.username}
                            </div>
                            <div className="">
                                {user.UserDetail.description}
                            </div>
                            <div className="my-profile-follower-connections">
                                <div className="hover">{
                                    getTotalFollower.loading === true ? null :
                                    getTotalFollower.data.UserFollower.length
                                } followers</div>   
                                <div className="hover">{
                                    otherUser.loading === true || getAllConnect.loading === true ? 
                                    null :
                                    otherUser.data.User.filter((currentUser:any) => {
                                        return getAllConnect.data.UserConnect.find((el:any) => {
                                                return ((currentUser.username === el.receiverConnect && el.senderConnect === user.username) || (currentUser.username === el.senderConnect && el.receiverConnect === user.username)) && el.isConnected === true
                                            })
                                        }).length

                                } connections</div>
                                <div className="hover">{
                                    getAllVisitor.loading === true ? 
                                    null :
                                    getAllVisitor.data.UserVisitor.length

                                } visitors</div>
                            </div>
                            {
                                getAllConnect.loading === true ? null :
                                user.username === getUser.username ?
                                null :
                                getAllConnect.data.UserConnect.find((userCurr:any) => (userCurr.receiverConnect === user.username && userCurr.senderConnect === getUser.username || userCurr.senderConnect === user.username && userCurr.receiverConnect === getUser.username)) !== undefined ?
                                    <div className="people-recommend-card-message-connect-button set-margin" onClick={()=> handleMessageOther()}>message</div> : 
                                    <div className="follow-button-effect con set-margin"
                                        onClick={()=>handleConnect()}
                                    >connect</div>
                            }
                            <div className="my-profile-button-container">
                                {
                                    user.username === getUser.username ?
                                    <div className="fa-solid fa-ellipsis feed-hover" onClick={()=>setIsButton(!isButton)}></div>
                                    : null
                                }
                                {
                                    isButton === true ? 
                                    <div className="my-profile-pop-up-button">
                                        <div className="pop-up-button feed-hover">open to</div>
                                        <div className="pop-up-button feed-hover" onClick={()=>{
                                            setIsButton(!isButton)
                                            setCustomProfile(!customProfile)
                                        }}>add profile section</div>
                                        <div className="pop-up-button feed-hover">more</div>
                                    </div>
                                    : null
                                }
                            </div>
                            <div className="my-profile-button-bottom-container">

                            {
                                user.username === getUser.username ?
                                <div className="my-profile-logout follow-button-effect" onClick={()=>handleLogout()}>logout</div>
                                : null
                            }
                                <div className="my-profile-logout follow-button-effect" onClick={()=>handleSaveProfile()}>save as pdf</div>
                            </div>
                        </div>
                    </div>
            </BoxInnerTemplates>
}