import { useMutation } from "@apollo/client";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import toast from "react-hot-toast";
import { storage } from "../../../server/firebase/FirebaseHelper";
import { CREATE_JOB, UPDATE_ALL_FIELD_JOB, UPDATE_JOB_PICTURE } from "../../../server/mutation/MutationList";
import { InputTemplates } from "../../../utils/InputTemplates";
import './RecommendJobCard.scss'

export const RecommendJobCard =(prop:any)=>{
    const [isBook, setIsBook] = useState(false)
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const [freeJob,setFreeJob] = useState(false)

    const [titleInput,setTitleInput] = useState('')
    const [companyInput,setCompanyInput] = useState('')
    const [workspaceInput,setWorkspaceInput] = useState('')
    const [locationInput,setLocationInput] = useState('')
    const [employmentInput,setEmploymentInput] = useState('')
    const [pictureInput, setPictureInput] = useState(null)

    const [previewInput, setPreviewInput] = useState('')
    const handleJobImage =(e:any)=>{
        setPictureInput(e.target.files[0])
        setPreviewInput(URL.createObjectURL(e.target.files[0]))
    }
    const [updateAllJob] = useMutation(UPDATE_ALL_FIELD_JOB)

    const handleUpdateJob =()=>{
        if(titleInput !== '' && companyInput !== '' && workspaceInput !== '' && locationInput !== '' && employmentInput !== '' && pictureInput !== '') {
            const userRef = ref(storage, `job/${getUser.username}/${prop.job_id}`)
            const metadata = {contentType : 'profile pic'}
            uploadBytes(userRef, pictureInput!, metadata)
            .then(()=>{
                getDownloadURL(userRef).then((url) => {
                    updateAllJob({
                        variables: {
                            title:titleInput!,
                            company:companyInput!,
                            workplace:workspaceInput!,
                            location:locationInput!,
                            employment:employmentInput!,
                            job_id:prop.job_id!,
                            picture:url,
                            username:getUser.username!
                        }
                    }).then(()=>{
                        toast.success('success update a job')
                        setFreeJob(!freeJob)
                    })
                })
            })
        } else {
            toast.error('all field must be filled!')
        }
    }

    return  <div className="recommend-job-card-container">

                {
                    freeJob === false ? 
                    null :
                    <div className="pop-up-create-new-experience">
                        <div className="pop-up-create-new-experience-box">
                            <div className="pop-up-create-header">
                                <div className="">{prop.title}</div>
                                <div className="fa-solid fa-x feed-hover" onClick={()=>setFreeJob(!freeJob)}></div>
                            </div>
                            <img src={previewInput === '' ? prop.picture : previewInput}/>
                            <label className="file">
                                <div className="fa-solid fa-camera feed-hover"></div>
                                <input onChange={(e:any)=>handleJobImage(e)} type="file" id="file" aria-label="File browser example"/>
                            </label>
                            <InputTemplates onChange={(e:any)=>setTitleInput(e.target.value)} type='text' placeholder={prop.title}/>
                            <InputTemplates onChange={(e:any)=>setCompanyInput(e.target.value)} type='text' placeholder={prop.company}/>
                            <InputTemplates onChange={(e:any)=>setWorkspaceInput(e.target.value)} type='text' placeholder={prop.workplaceType}/>
                            <InputTemplates onChange={(e:any)=>setLocationInput(e.target.value)} type='text' placeholder={prop.location}/>
                            <InputTemplates onChange={(e:any)=>setEmploymentInput(e.target.value)} type='text' placeholder={prop.employmentType}/>
                            <div className="follow-button-effect" onClick={()=>handleUpdateJob()}>create</div>
                        </div>
                    </div>
                }

                <div className="recommend-job-pic-title-company-location-container">
                    <img src={prop.picture} alt={prop.title} />
                    <div className="">
                        <div className="recommend-job-title-card-container">{prop.title}</div>
                        <div className="recommend-job-title-company-container">{prop.company}</div>
                        <div className="recommend-job-title-location-container">{prop.location}</div>
                    </div>
                </div>
                <div className="recommend-job-pic-footer-container">
                    <div className={isBook === true ? "fa-solid fa-box-archive recommend-hover feed-hover":"fa-solid fa-bookmark recommend-hover feed-hover"} onClick={()=>setIsBook(!isBook)}></div>
                    {
                        getUser.username === prop.username ?
                        <div className="fa-solid fa-star feed-hover" onClick={()=>setFreeJob(!freeJob)}></div>
                        : null
                    }
                </div>
            </div>
}