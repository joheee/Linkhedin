import { ProfilePictureTemplates } from '../../../navigation/templates/ProfilePictureTemplates'
import './ProfileBackgroundTemplates.scss'

export const ProfileBackgroundTemplates =({...attr}:any)=>{
    return  <div className="profile-image-container">
                <div className="profile-background-image-container">
                    <img src="/default-background.webp" alt="my background"/>
                </div>
                <div className="profile-container">
                    <ProfilePictureTemplates src='/default-profile.png' width='4rem' height='4rem'/>
                </div>
            </div>
}