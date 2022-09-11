import { useState } from "react"
import { BoxCustomInnerTemplates } from "../../../myNetwork/templates/BoxCustomInnerTemplates"
import { BoxInnerTemplates } from "../../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../../utils/BoxTemplates"
import { JobMenuIconTemplates } from "../../templates/jobMenu/JobMenuIconTemplates"
import './JobMenu.scss'
import '../../../profile/assign/MyExperience.scss'
import { InputTemplates } from "../../../utils/InputTemplates"
import toast from "react-hot-toast"
import { useMutation, useQuery,useSubscription } from "@apollo/client"
import { CREATE_JOB,UPDATE_JOB_PICTURE } from "../../../server/mutation/MutationList"
import { storage } from "../../../server/firebase/FirebaseHelper"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { GET_ALL_SUBS_JOB } from "../../../server/query/QueryList"


export const JobMenu =()=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const [isPopUp, setIsPopUp] = useState(false)
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
    const [createNewJob] = useMutation(CREATE_JOB)
    const [updatePictureJob] = useMutation(UPDATE_JOB_PICTURE)

    const handleCreateJob =()=>{
        if(titleInput !== '' && companyInput !== '' && workspaceInput !== '' && locationInput !== '' && employmentInput !== '' && pictureInput !== '') {
            createNewJob({
                variables: {
                    title:titleInput!,
                    company:companyInput!,
                    workplace:workspaceInput!,
                    location:locationInput!,
                    employment:employmentInput!,
                    username:getUser.username!
                }
            }).then((e:any)=>{
                // console.log(e.data.insert_UserJob_one.job_id)
                const userRef = ref(storage, `job/${getUser.username}/${e.data.insert_UserJob_one.job_id}`)
                const metadata = {contentType : 'profile pic'}
                uploadBytes(userRef, pictureInput!, metadata)
                .then(()=>{
                    getDownloadURL(userRef).then((url) => {
                        updatePictureJob({
                            variables:{
                                job_id:e.data.insert_UserJob_one.job_id!,
                                picture:url!
                            }
                        }).then(()=>{
                            toast.success('success create new job')
                            setFreeJob(!freeJob)
                        })
                    })
                })
            })
        } else {
            toast.error('all field must be filled!')
        }
    }

    return  <BoxTemplates>

                {
                    freeJob === false ? 
                    null :
                    <div className="pop-up-create-new-experience">
                        <div className="pop-up-create-new-experience-box">
                            <div className="pop-up-create-header">
                                <div className="">new job</div>
                                <div className="fa-solid fa-x feed-hover" onClick={()=>setFreeJob(!freeJob)}></div>
                            </div>
                            <img src={previewInput === '' ?'https://media-exp1.licdn.com/dms/image/C4D0BAQGISrtgx4-2Hg/company-logo_100_100/0/1603952174119?e=1669852800&v=beta&t=NUNoaOHZlxZfTjHsWTKiUYwPgWYLBIJMfG6JxBTI0II' : previewInput}/>
                            <label className="file">
                                <div className="fa-solid fa-camera feed-hover"></div>
                                <input onChange={(e:any)=>handleJobImage(e)} type="file" id="file" aria-label="File browser example"/>
                            </label>
                            <InputTemplates onChange={(e:any)=>setTitleInput(e.target.value)} type='text' placeholder='new title'/>
                            <InputTemplates onChange={(e:any)=>setCompanyInput(e.target.value)} type='text' placeholder='new company'/>
                            <InputTemplates onChange={(e:any)=>setWorkspaceInput(e.target.value)} type='text' placeholder='workspace type'/>
                            <InputTemplates onChange={(e:any)=>setLocationInput(e.target.value)} type='text' placeholder='location'/>
                            <InputTemplates onChange={(e:any)=>setEmploymentInput(e.target.value)} type='text' placeholder='employment type'/>
                            <div className="follow-button-effect" onClick={()=>handleCreateJob()}>create</div>
                        </div>
                    </div>
                }

                <div className="job-menu-component-container">
                    <BoxInnerTemplates>
                        <BoxCustomInnerTemplates>
                            <div className="job-menu-icon-inner-container">
                                <div className="manage-my-job-header-component">
                                    manage my job
                                </div>
                                <JobMenuIconTemplates text='my jobs' icon='fa-solid fa-bookmark' navigate=''/>
                                {isPopUp === true ? 
                                <div className="">
                                    <JobMenuIconTemplates text='job alerts' icon='fa-solid fa-bell' navigate=''/>
                                    <JobMenuIconTemplates text='salary' icon='fa-solid fa-money-bill' navigate=''/>
                                    <JobMenuIconTemplates text='skill assessments' icon='fa-solid fa-clipboard' navigate=''/>
                                    <JobMenuIconTemplates text='interview prep' icon='fa-solid fa-book' navigate=''/>
                                    <JobMenuIconTemplates text='premium resume insights' icon='fa-solid fa-file' navigate=''/>
                                    <JobMenuIconTemplates text='job seeker guidance' icon='fa-brands fa-youtube' navigate=''/>
                                    <JobMenuIconTemplates text='application settings' icon='fa-solid fa-gear' navigate=''/>
                                </div>
                                : null}
                                <div className="set-width-job"></div>
                                <div className="show-button-job-component feed-hover" onClick={()=>setIsPopUp(!isPopUp)}>{isPopUp === false ? "show more":"show less"}</div>
                            </div>
                        </BoxCustomInnerTemplates>
                    </BoxInnerTemplates>

                    <div className="post-a-job-button-container follow-button-effect" onClick={()=>setFreeJob(!freeJob)}>
                        <div className="fa-solid fa-pen-to-square"></div>
                        <div className="">post a free job</div>
                    </div>
                </div>
            </BoxTemplates>
}