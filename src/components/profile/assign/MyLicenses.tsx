import { useMutation, useQuery } from '@apollo/client'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { dummyExperience } from '../../server/dummy/Data'
import { storage } from '../../server/firebase/FirebaseHelper'
import { CREATE_NEW_EDUCATION, CREATE_NEW_LICENSE, UPDATE_PICTURE_EDUCATION, UPDATE_PICTURE_LICENSE } from '../../server/mutation/MutationList'
import { GET_CURRENT_USER } from '../../server/query/QueryList'
import { BoxInnerTemplates } from '../../utils/BoxInnerTemplates'
import { InputTemplates } from '../../utils/InputTemplates'
import { MyLicensesCard } from '../card/MyLicensesCard'
import './MyExperience.scss'
export const MyLicenses =()=>{
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
    const [createNewLicense] = useMutation(CREATE_NEW_LICENSE)
    const [updatePhotoLicense] = useMutation(UPDATE_PICTURE_LICENSE)

    const handleExperienceImage =(e:any)=>{
        setPictureInput(e.target.files[0])
        setPreviewPictureInput(URL.createObjectURL(e.target.files[0]))
    }
    const handleCreateExperience =()=>{
        if(pictureInput !== null && titleInput !== null && companyInput !== null) {
            createNewLicense({
                variables:{
                    username:data.User[0].username!,
                    license:titleInput!,
                    institute:companyInput!,
                }
            }).then((e)=>{
                console.log()
                const userRef = ref(storage, `${data.User[0].username}/license/${e.data.insert_UserLicenses_one.license_id}`)
                const metadata = {contentType : 'profile pic'}
                uploadBytes(userRef, pictureInput, metadata)
                .then(()=>{
                    getDownloadURL(userRef).then((url) => {
                        updatePhotoLicense({
                            variables:{
                                license_id:e.data.insert_UserLicenses_one.license_id!,
                                educationImage:url!
                            }
                        }).then(()=>{
                            refetch()
                            toast.success('success create new license')
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
                                <div className="">new licenses</div>
                                <div className="fa-solid fa-x feed-hover" onClick={()=>setPopUpCreate(!popUpCreate)}></div>
                            </div>
                            <img src={previewPictureInput === '' ?'https://media-exp1.licdn.com/dms/image/C4D0BAQGISrtgx4-2Hg/company-logo_100_100/0/1603952174119?e=1669852800&v=beta&t=NUNoaOHZlxZfTjHsWTKiUYwPgWYLBIJMfG6JxBTI0II' : previewPictureInput}/>
                            <label className="file">
                                <div className="fa-solid fa-camera feed-hover"></div>
                                <input onChange={(e:any)=>handleExperienceImage(e)} type="file" id="file" aria-label="File browser example"/>
                            </label>
                            <InputTemplates onChange={(e:any)=>setTitleInput(e.target.value)} type='text' placeholder='new license title'/>
                            <InputTemplates onChange={(e:any)=>setCompanyInput(e.target.value)} type='text' placeholder='new institute'/>
                            <div className="follow-button-effect" onClick={()=>handleCreateExperience()}>create</div>
                        </div>
                    </div>
                }

                <div className="my-experience-container">
                    <div className="my-experience-header">
                        <div className="my-experience-text">licenses & certifications</div>
                        <div className="my-experience-header-button">
                            <div className="fa-solid fa-plus feed-hover" onClick={()=>setPopUpCreate(!popUpCreate)}></div>
                        </div>
                    </div>
                    <div className="my-experience-card-outer-container">
                        {
                            data.User[0].UserLicenses.map((exp:any, i:any)=>
                                <div className="" key={i}>
                                    <MyLicensesCard {...exp}/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </BoxInnerTemplates>
}