import { useMutation, useQuery } from "@apollo/client"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { useState } from "react"
import toast from "react-hot-toast"
import { dummyExperience } from "../../server/dummy/Data"
import { storage } from "../../server/firebase/FirebaseHelper"
import { CREATE_NEW_EDUCATION, CREATE_NEW_EXPERIENCE, UPDATE_PICTURE_EDUCATION, UPDATE_PICTURE_EXPERIENCE } from "../../server/mutation/MutationList"
import { GET_CURRENT_USER } from "../../server/query/QueryList"
import { BoxInnerTemplates } from "../../utils/BoxInnerTemplates"
import { InputTemplates } from "../../utils/InputTemplates"
import { MyEducationCard } from "../card/MyEducationCard"
import './MyEducation.scss'
export const MyEducation =()=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const {loading,data,refetch} = useQuery(GET_CURRENT_USER,{
        variables: {
            username:getUser.username
        },
    })
    const [popUpCreate,setPopUpCreate] = useState(false)
    const [pictureInput, setPictureInput] = useState(null)
    const [previewPictureInput, setPreviewPictureInput] = useState('')
    const [titleInput, setTitleInput] = useState(null)
    const [companyInput, setCompanyInput] = useState(null)
    const [locationInput, setLocationInput] = useState(null)
    const [createNewEducation] = useMutation(CREATE_NEW_EDUCATION)
    const [updatePhotoEducation] = useMutation(UPDATE_PICTURE_EDUCATION)

    const handleExperienceImage =(e:any)=>{
        setPictureInput(e.target.files[0])
        setPreviewPictureInput(URL.createObjectURL(e.target.files[0]))
    }
    const handleCreateExperience =()=>{
        if(pictureInput !== null && titleInput !== null && companyInput !== null && locationInput !== null) {
            createNewEducation({
                variables:{
                    username:data.User[0].username!,
                    education:titleInput!,
                    institute:companyInput!,
                    location:locationInput!,
                }
            }).then((e)=>{
                console.log()
                const userRef = ref(storage, `${data.User[0].username}/education/${e.data.insert_UserEducation_one.education_id}`)
                const metadata = {contentType : 'profile pic'}
                uploadBytes(userRef, pictureInput, metadata)
                .then(()=>{
                    getDownloadURL(userRef).then((url) => {
                        updatePhotoEducation({
                            variables:{
                                education_id:e.data.insert_UserEducation_one.education_id!,
                                educationImage:url!
                            }
                        }).then(()=>{
                            refetch()
                            toast.success('success create new education')
                            setPopUpCreate(!popUpCreate)
                        })
                    })
                })
            })
        }else {
            toast.error('all field must be filled!')
        }
    }
    if(loading) return <div className=""></div>
    return  <BoxInnerTemplates>
                {
                    popUpCreate === false ? null :
                    <div className="pop-up-create-new-experience">
                        <div className="pop-up-create-new-experience-box">
                            <div className="pop-up-create-header">
                                <div className="">new education</div>
                                <div className="fa-solid fa-x feed-hover" onClick={()=>setPopUpCreate(!popUpCreate)}></div>
                            </div>
                            <img src={previewPictureInput === '' ?'https://media-exp1.licdn.com/dms/image/C4D0BAQGISrtgx4-2Hg/company-logo_100_100/0/1603952174119?e=1669852800&v=beta&t=NUNoaOHZlxZfTjHsWTKiUYwPgWYLBIJMfG6JxBTI0II' : previewPictureInput}/>
                            <label className="file">
                                <div className="fa-solid fa-camera feed-hover"></div>
                                <input onChange={(e:any)=>handleExperienceImage(e)} type="file" id="file" aria-label="File browser example"/>
                            </label>
                            <InputTemplates onChange={(e:any)=>setTitleInput(e.target.value)} type='text' placeholder='new education title'/>
                            <InputTemplates onChange={(e:any)=>setCompanyInput(e.target.value)} type='text' placeholder='new institute'/>
                            <InputTemplates onChange={(e:any)=>setLocationInput(e.target.value)} type='text' placeholder='new location'/>
                            <div className="follow-button-effect" onClick={()=>handleCreateExperience()}>create</div>
                        </div>
                    </div>
                }
                <div className="my-experience-container">
                    <div className="my-experience-header">
                        <div className="my-experience-text">education</div>
                        <div className="my-experience-header-button">
                            <div className="fa-solid fa-plus feed-hover" onClick={()=>setPopUpCreate(!popUpCreate)}></div>
                        </div>
                    </div>
                    <div className="my-experience-card-outer-container">
                        {
                            data.User[0].UserEducations.map((exp:any, i:any)=>
                                <div className="" key={i}>
                                    <MyEducationCard {...exp}/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </BoxInnerTemplates>
}