import { useMutation, useSubscription } from '@apollo/client'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { RichTextRenderTemplates } from '../../home/templates/postTemplates/postCreate/RichTextRenderTemplates'
import { UPDATE_USER_BY_PK_NEW_DESCRIPTION } from '../../server/mutation/MutationList'
import { BoxInnerTemplates } from '../../utils/BoxInnerTemplates'
import './MyAbout.scss'

export const MyAbout =({user}:any)=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const [aboutInput,setAboutInput] = useState('')
    const [isInput, setIsInput] = useState(false)
    const [updateDescription] = useMutation(UPDATE_USER_BY_PK_NEW_DESCRIPTION)
    
    const handleAbout =()=>{
        if(aboutInput === '') {
            toast.success('no update was applied')
            setIsInput(!isInput)
        } else {
            updateDescription({
                variables:{
                    username:user.username,
                    description:aboutInput!
                }
            }).then(()=>{
                toast.success('success update about me')
                setIsInput(!isInput)
            })
        }
    }
    
    useEffect(()=>{
        setAboutInput(user.UserDetail.description)
    },[user.UserDetail.description])

    return  <BoxInnerTemplates>
                <div className="my-about-parent-container">
                    <div className="my-about-parent-header">
                    <div className="my-about-text">about</div>
                    {
                        getUser.username === user.username ? 
                        <div className="fa-solid fa-pen feed-hover" onClick={() => setIsInput(!isInput)} ></div>
                        : null
                    }
                    </div>
                    {
                        isInput === false ? null :
                        <div className="my-about-pop-up-input">
                            <textarea onChange={(e) => setAboutInput(e.target.value)} className='autoresizing' placeholder={user.UserDetail.about} value={aboutInput}></textarea>
                            <div className="follow-button-effect" onClick={()=>handleAbout()}>save</div>
                        </div>
                    }
                    <div className="my-about-core">
                        <RichTextRenderTemplates content={aboutInput === '' ? user.UserDetail.description : aboutInput}/>
                    </div>
                </div>
            </BoxInnerTemplates>
}