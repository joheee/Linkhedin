import { ProfilePictureTemplates } from "../../../navigation/templates/ProfilePictureTemplates"
import './PicturePostTemplates.scss'

export const PicturePostTemplates =()=>{
    return  <div className="picture-post-container">
                <ProfilePictureTemplates src='/default-profile.png' width='3rem' height='3rem'/>
                <div className="picture-post-button">start a post</div>
            </div>
}