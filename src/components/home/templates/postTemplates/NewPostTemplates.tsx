import { PicturePostTemplates } from "./PicturePostTemplates"
import { PostFooterTemplates } from "./PostFooterTemplates"
import './NewPostTemplates.scss'
import { useState } from "react"
import { PostCreateOutlineTemplates } from "./postCreate/PostCreateOutlineTemplates"

export const NewPostTemplates =()=>{
    const [isPost, setIsPost] = useState(false)

    return  <div className="new-post-container">
                {isPost === true ? <PostCreateOutlineTemplates setIsPost={setIsPost}/> : null}
                <PicturePostTemplates isPost={isPost} setIsPost={setIsPost}/>
                <PostFooterTemplates isPost={isPost} setIsPost={setIsPost}/>
            </div>
}