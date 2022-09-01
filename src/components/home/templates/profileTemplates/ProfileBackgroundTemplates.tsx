import { ProfilePictureTemplates } from '../../../navigation/templates/ProfilePictureTemplates'
import { RecommendCardInterface } from '../../../server/credential/Interface'
import './ProfileBackgroundTemplates.scss'

export const ProfileBackgroundTemplates =(prop:any)=>{
    return  <div className="profile-image-container">
                <div className="profile-background-image-container">
                    <img src={prop.UserDetail.photoBanner} alt="my background"/>
                </div>
                <div className="profile-container">
                    <ProfilePictureTemplates src={prop.UserDetail.photoProfile} width='4rem' height='4rem'/>
                </div>
            </div>
}