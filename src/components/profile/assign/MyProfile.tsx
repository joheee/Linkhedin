import { useMutation, useQuery } from '@apollo/client'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { storage } from '../../server/firebase/FirebaseHelper'
import { UPDATE_USER_BY_PK_NEW_DESCRIPTION, UPDATE_USER_BY_PK_NEW_PHOTO_BANNER, UPDATE_USER_BY_PK_NEW_PHOTO_PROFILE, UPDATE_USER_BY_PK_NEW_USERNAME } from '../../server/mutation/MutationList'
import { GET_CURRENT_USER, GET_LOGIN_USER, GET_USER } from '../../server/query/QueryList'
import { BoxInnerTemplates } from '../../utils/BoxInnerTemplates'
import './MyProfile.scss'
export const MyProfile =()=>{
    const [isButton,setIsButton] = useState(false)
    const navigate = useNavigate()

    const handleLogout =()=>{
        localStorage.removeItem('current_login')
        navigate('/')
    }

    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser.username
    const {loading,error,data,refetch} = useQuery(GET_LOGIN_USER,{
        variables: {
            username:getUser.username
        },
    })

    const [customProfile,setCustomProfile] = useState(false)
    const [usernameInput,setUsernameInput] = useState('')
    const [descInput,setDescInput] = useState('')
    const all_user = useQuery(GET_USER)
    const [updateUsername, {}] = useMutation(UPDATE_USER_BY_PK_NEW_USERNAME)
    const [updateDescription, {}] = useMutation(UPDATE_USER_BY_PK_NEW_DESCRIPTION)
    const handleSave =()=>{
        if(usernameInput === '' && descInput === '') {
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
                        user_id:data.User[0].user_id!
                    }
                }).then(()=>{
                    refetch()
                    localStorage.setItem('current_login', JSON.stringify({user_id:data.User[0].user_id!, username:usernameInput!,email:data.User[0].email,password:data.User[0].password}))
                    toast.success('success update username')
                })
            } 
            if(descInput !== '') {
                updateDescription({
                    variables:{
                        description:descInput!,
                        username:data.User[0].username!
                    }
                }).then(()=>{
                    refetch()
                    toast.success('success update description')
                })
            }
        }
    }

    const [updatePhotoProfile] = useMutation(UPDATE_USER_BY_PK_NEW_PHOTO_PROFILE)
    const handleProfileImage = (e:any) => {
        const userRef = ref(storage, `${data.User[0].username}/profile/profile-picture`)
        const metadata = {contentType : 'profile pic'}
        uploadBytes(userRef, e.target.files[0], metadata)
        .then(()=>{
            getDownloadURL(userRef).then((url) => {
                updatePhotoProfile({
                    variables:{
                        photoProfile:url!,
                        username:data.User[0].username!
                    }
                }).then(()=>{
                    refetch()
                    toast.success('success update picture')
                })
            })
        })
    }

    const [customBanner, setCustomBanner] = useState(false)
    const [updatePhotoBanner] = useMutation(UPDATE_USER_BY_PK_NEW_PHOTO_BANNER)
    const handleBannerImage = (e:any) => {
        const userRef = ref(storage, `${data.User[0].username}/banner/banner-picture`)
        const metadata = {contentType : 'profile pic'}
        uploadBytes(userRef, e.target.files[0], metadata)
        .then(()=>{
            getDownloadURL(userRef).then((url) => {
                updatePhotoBanner({
                    variables:{
                        photoBanner:url!,
                        username:data.User[0].username!
                    }
                }).then(()=>{
                    refetch()
                    toast.success('success update banner')
                })
            })
        })
    }

    

    if(loading || all_user.loading) return <div className=""></div>
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
                                <img src={data.User[0].UserDetail.photoProfile} alt={data.User[0].username} />
                            </div>
                            <label className="file">
                                <div className="fa-solid fa-camera feed-hover"></div>
                                <input onChange={(e:any)=>handleProfileImage(e)} type="file" id="file" aria-label="File browser example"/>
                            </label>
                            <textarea onChange={(e:any)=>setUsernameInput(e.target.value)} placeholder={data.User[0].username}/>
                            <textarea onChange={(e:any)=>setDescInput(e.target.value)} placeholder={data.User[0].UserDetail.description}/>
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
                                <img src={data.User[0].UserDetail.photoBanner} alt={data.User[0].username} />
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
                        <div className="fa-solid fa-camera camera-placement feed-hover" onClick={()=>setCustomBanner(!customBanner)}></div>
                        <div className="fa-solid fa-pen pen-placement feed-hover" onClick={()=>setCustomProfile(!customProfile)}></div>
                        <img src={data.User[0].UserDetail.photoBanner} alt={data.User[0].username} />
                        <div className="my-profile-picture" onClick={()=>setCustomProfile(!customProfile)}>
                            <img src={data.User[0].UserDetail.photoProfile} alt={data.User[0].username} />
                        </div>
                    </div>

                    <div className="my-profile-info-container">
                        <div className="my-profile-full-name">
                            {data.User[0].username}
                        </div>
                        <div className="">
                            {data.User[0].UserDetail.description}
                        </div>
                        <div className="my-profile-follower-connections">
                            <div className="hover">{423} followers</div>
                            <div className="hover">{123} connections</div>
                        </div>
                        <div className="my-profile-button-container">
                            <div className="fa-solid fa-ellipsis feed-hover" onClick={()=>setIsButton(!isButton)}></div>
                            {
                                isButton === true ? 
                                <div className="my-profile-pop-up-button">
                                    <div className="pop-up-button feed-hover">open to</div>
                                    <div className="pop-up-button feed-hover">add profile section</div>
                                    <div className="pop-up-button feed-hover">more</div>
                                </div>
                                : null
                            }
                        </div>
                        <div className="my-profile-logout follow-button-effect" onClick={()=>handleLogout()}>logout</div>
                    </div>
                </div>
            </BoxInnerTemplates>
}