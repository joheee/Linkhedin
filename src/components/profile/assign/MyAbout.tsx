import { useMutation, useQuery } from '@apollo/client'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { RichTextRenderTemplates } from '../../home/templates/postTemplates/postCreate/RichTextRenderTemplates'
import { UPDATE_USER_BY_PK_NEW_PHOTO_ABOUT } from '../../server/mutation/MutationList'
import { GET_CURRENT_USER } from '../../server/query/QueryList'
import { BoxInnerTemplates } from '../../utils/BoxInnerTemplates'
import './MyAbout.scss'
export const MyAbout =()=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const {loading,data,refetch} = useQuery(GET_CURRENT_USER,{
        variables: {
            username:getUser.username
        },
    })
    const [aboutInput,setAboutInput] = useState('')
    const [isInput, setIsInput] = useState(false)
    const [updateAbout] = useMutation(UPDATE_USER_BY_PK_NEW_PHOTO_ABOUT)
    const handleAbout =()=>{
        if(aboutInput === '') {
            toast.success('no update was applied')
            setIsInput(!isInput)
        } else {
            updateAbout({
                variables:{
                    username:data.User[0].username,
                    about:aboutInput!
                }
            }).then(()=>{
                refetch()
                toast.success('success update about me')
                setIsInput(!isInput)
            })
        }
    }
    if(loading) return <div className=""></div>
    return  <BoxInnerTemplates>
                <div className="my-about-parent-container">
                    <div className="my-about-parent-header">
                        <div className="my-about-text">about</div>
                        <div className="fa-solid fa-pen feed-hover" onClick={() => setIsInput(!isInput)} ></div>
                    </div>
                    {
                        isInput === false ? null :
                        <div className="my-about-pop-up-input">
                            <textarea onChange={(e) => setAboutInput(e.target.value)} className='autoresizing' placeholder={data.User[0].UserDetail.about}></textarea>
                            <div className="follow-button-effect" onClick={()=>handleAbout()}>save</div>
                        </div>
                    }
                    <div className="my-about-core">
			    	    <RichTextRenderTemplates content={aboutInput === '' ? data.User[0].UserDetail.about : aboutInput}/>
                    </div>
                </div>
            </BoxInnerTemplates>
}