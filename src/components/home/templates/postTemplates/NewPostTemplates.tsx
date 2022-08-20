import { PicturePostTemplates } from "./PicturePostTemplates"
import { PostFooterTemplates } from "./PostFooterTemplates"
import './NewPostTemplates.scss'

export const NewPostTemplates =()=>{
    return  <div className="new-post-container">
                <PicturePostTemplates/>
                <PostFooterTemplates/>
            </div>
}