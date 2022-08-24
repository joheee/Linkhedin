import { ProfilePictureTemplates } from '../../../navigation/templates/ProfilePictureTemplates'
import { RecommendCardInterface } from '../../../server/credential/Interface'
import './ProfileBackgroundTemplates.scss'

export const ProfileBackgroundTemplates =(prop:RecommendCardInterface)=>{
    return  <div className="profile-image-container">
                <div className="profile-background-image-container">
                    <img src={prop.banner} alt="my background"/>
                </div>
                <div className="profile-container">
                    <ProfilePictureTemplates src={prop.profile} width='4rem' height='4rem'/>
                </div>
            </div>
}