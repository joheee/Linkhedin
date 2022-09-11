import { useMutation, useQuery, useSubscription } from '@apollo/client'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { MyExperienceCardInterface } from '../../server/credential/Interface'
import { storage } from '../../server/firebase/FirebaseHelper'
import { CREATE_NEW_EXPERIENCE, DELETE_CARD_EXPERIENCE, UPDATE_CARD_EXPERIENCE, UPDATE_PICTURE_EXPERIENCE } from '../../server/mutation/MutationList'
import { GET_CURRENT_USER } from '../../server/query/QueryList'
import { InputTemplates } from '../../utils/InputTemplates'
import './MyExperienceCard.scss'

export const MyExperienceCard =(prop:any)=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser.username
    const [popUpUpdate, setPopUpUpdate] = useState(false)
    const [pictureInput, setPictureInput] = useState(null)
    const [previewPictureInput, setPreviewPictureInput] = useState('')
    const [titleInput, setTitleInput] = useState(null)
    const [companyInput, setCompanyInput] = useState(null)
    const [locationInput, setLocationInput] = useState(null)
    const [updateCardExperience] = useMutation(UPDATE_CARD_EXPERIENCE)
    const [updatePhotoExperience] = useMutation(UPDATE_PICTURE_EXPERIENCE)
    const [deletePhotoExperience] = useMutation(DELETE_CARD_EXPERIENCE)
    const {loading} = useSubscription(GET_CURRENT_USER)

    const handleExperienceImage =(e:any)=>{
        setPictureInput(e.target.files[0])
        setPreviewPictureInput(URL.createObjectURL(e.target.files[0]))
    }
    const handleCreateExperience =()=>{
        if(pictureInput !== null && titleInput !== null && companyInput !== null && locationInput !== null) {
            updateCardExperience({
                variables:{
                    username:prop.username!,
                    experience_id:prop.experience_id!,
                    experience:titleInput!,
                    company:companyInput!,
                    location:locationInput!,
                }
            }).then(()=>{
                const userRef = ref(storage, `${prop.username}/experience/${prop.experience_id}`)
                const metadata = {contentType : 'profile pic'}
                uploadBytes(userRef, pictureInput, metadata)
                .then(()=>{
                    getDownloadURL(userRef).then((url) => {
                        updatePhotoExperience({
                            variables:{
                                experience_id:prop.experience_id!,
                                username:prop.username!,
                                experienceImage:url!
                            }
                        }).then(()=>{
                            toast.success('success update ' + prop.experience)
                            setPopUpUpdate(!popUpUpdate)
                        })
                    })
                })
            })
        }else {
            toast.error('all field must be filled!')
        }
    }

    const handleDeleteExperience =()=>{
        deletePhotoExperience({
            variables: {
                experience_id:prop.experience_id!,
                username:prop.username!,
            }
        }).then(()=>{
            toast.success('success delete ' + prop.experience)
            setPopUpUpdate(!popUpUpdate)

        })
    }
    if(loading) return <div className=""></div>
    return  <div className="my-experience-card-container">

                {
                    popUpUpdate === false ? null :
                    <div className="pop-up-create-new-experience">
                        <div className="pop-up-create-new-experience-box">
                            <div className="pop-up-create-header">
                                <div className="">{prop.experience}</div>
                                <div className="">
                                   <div className="fa-solid fa-trash feed-hover" onClick={()=>handleDeleteExperience()}></div>
                                   <div className="fa-solid fa-x feed-hover" onClick={()=>setPopUpUpdate(!popUpUpdate)}></div>
                                </div>
                            </div>
                            <img src={previewPictureInput === '' ? prop.experienceImage : previewPictureInput}/>
                            <label className="file">
                                <div className="fa-solid fa-camera feed-hover"></div>
                                <input onChange={(e:any)=>handleExperienceImage(e)} type="file" id="file" aria-label="File browser example"/>
                            </label>
                            <InputTemplates onChange={(e:any)=>setTitleInput(e.target.value)} type='text' placeholder={prop.experience}/>
                            <InputTemplates onChange={(e:any)=>setCompanyInput(e.target.value)} type='text' placeholder={prop.company}/>
                            <InputTemplates onChange={(e:any)=>setLocationInput(e.target.value)} type='text' placeholder={prop.location}/>
                            <div className="follow-button-effect" onClick={()=>handleCreateExperience()}>edit</div>
                        </div>
                    </div>
                }

                <div className="my-experience-card-inner-container">
                    <div className="my-experience-card-image-container">
                        <img src={prop.experienceImage} alt={prop.company} />
                    </div>
                    <div className="">
                        <div className="my-experience-card-title">{prop.company}</div>
                        <div className="my-experience-card-external">{prop.experience}</div>
                        <div className="my-experience-card-external">{new Date(prop.createdAt!).toDateString()}</div>
                        <div className="my-experience-card-external">{prop.location}</div>
                    </div>
                </div>
                {
                    prop.username === getUser.username ?
                    <div className="fa-solid fa-pen feed-hover" onClick={()=>setPopUpUpdate(!popUpUpdate)}></div>
                    : null
                }
            </div>
}