import { useMutation, useQuery } from '@apollo/client'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { MyExperienceCardInterface } from '../../server/credential/Interface'
import { storage } from '../../server/firebase/FirebaseHelper'
import { DELETE_CARD_EDUCATION, DELETE_CARD_EXPERIENCE, UPDATE_CARD_EDUCATION, UPDATE_CARD_EXPERIENCE, UPDATE_PICTURE_EDUCATION, UPDATE_PICTURE_EXPERIENCE } from '../../server/mutation/MutationList'
import { GET_CURRENT_USER } from '../../server/query/QueryList'
import { InputTemplates } from '../../utils/InputTemplates'
import './MyExperienceCard.scss'
export const MyEducationCard =(prop:any)=>{
    const [popUpUpdate, setPopUpUpdate] = useState(false)
    const [pictureInput, setPictureInput] = useState(null)
    const [previewPictureInput, setPreviewPictureInput] = useState('')
    const [titleInput, setTitleInput] = useState(null)
    const [companyInput, setCompanyInput] = useState(null)
    const [locationInput, setLocationInput] = useState(null)
    const [updateCardeducation] = useMutation(UPDATE_CARD_EDUCATION)
    const [updatePhotoeducation] = useMutation(UPDATE_PICTURE_EDUCATION)
    const [deletePhotoeducation] = useMutation(DELETE_CARD_EDUCATION)
    const {refetch,loading} = useQuery(GET_CURRENT_USER)

    const handleeducationImage =(e:any)=>{
        setPictureInput(e.target.files[0])
        setPreviewPictureInput(URL.createObjectURL(e.target.files[0]))
    }
    const handleCreateeducation =()=>{
        if(pictureInput !== null && titleInput !== null && companyInput !== null && locationInput !== null) {
            updateCardeducation({
                variables:{
                    username:prop.username!,
                    education_id:prop.education_id!,
                    education:titleInput!,
                    institute:companyInput!,
                    location:locationInput!,
                }
            }).then(()=>{
                const userRef = ref(storage, `${prop.username}/education/${prop.education_id}`)
                const metadata = {contentType : 'profile pic'}
                uploadBytes(userRef, pictureInput, metadata)
                .then(()=>{
                    getDownloadURL(userRef).then((url) => {
                        updatePhotoeducation({
                            variables:{
                                education_id:prop.education_id!,
                                educationImage:url!
                            }
                        }).then(()=>{
                            refetch()
                            toast.success('success update ' + prop.education)
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
        deletePhotoeducation({
            variables: {
                education_id:prop.education_id!,
            }
        }).then(()=>{
            toast.success('success delete ' + prop.education)
            setPopUpUpdate(!popUpUpdate)
            refetch()

        })
    }
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
                            <img src={previewPictureInput === '' ? prop.educationImage : previewPictureInput}/>
                            <label className="file">
                                <div className="fa-solid fa-camera feed-hover"></div>
                                <input onChange={(e:any)=>handleeducationImage(e)} type="file" id="file" aria-label="File browser example"/>
                            </label>
                            <InputTemplates onChange={(e:any)=>setTitleInput(e.target.value)} type='text' placeholder={prop.education}/>
                            <InputTemplates onChange={(e:any)=>setCompanyInput(e.target.value)} type='text' placeholder={prop.institute}/>
                            <InputTemplates onChange={(e:any)=>setLocationInput(e.target.value)} type='text' placeholder={prop.location}/>
                            <div className="follow-button-effect" onClick={()=>handleCreateeducation()}>edit</div>
                        </div>
                    </div>
                }
                <div className="my-experience-card-inner-container">
                    <div className="my-experience-card-image-container">
                        <img src={prop.educationImage} alt={prop.education} />
                    </div>
                    <div className="">
                        <div className="my-experience-card-title">{prop.institute}</div>
                        <div className="my-experience-card-external">{prop.education}</div>
                        <div className="my-experience-card-external">{new Date(prop.createdAt!).toDateString()}</div>
                    </div>
                </div>
                <div className="fa-solid fa-pen feed-hover" onClick={()=>setPopUpUpdate(!popUpUpdate)}></div>
            </div>
}