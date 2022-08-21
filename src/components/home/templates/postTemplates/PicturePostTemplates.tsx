import { useState } from "react"
import { ProfilePictureTemplates } from "../../../navigation/templates/ProfilePictureTemplates"
import './PicturePostTemplates.scss'
import { PostCreateOutlineTemplates } from "./postCreate/PostCreateOutlineTemplates"

export const PicturePostTemplates =()=>{
    const [isPost, setIsPost] = useState(false)

    if(isPost === true) document.querySelector('body')!.style.overflow = 'hidden'
    else document.querySelector('body')!.style.overflow = 'auto'

    return  <div className="picture-post-container">
                {isPost === true ? <PostCreateOutlineTemplates setIsPost={setIsPost}/> : null}
                <ProfilePictureTemplates src='/default-profile.png' width='3rem' height='3rem'/>
                <div onClick={()=>setIsPost(!isPost)} className="picture-post-button">start a post</div>
            </div>
}