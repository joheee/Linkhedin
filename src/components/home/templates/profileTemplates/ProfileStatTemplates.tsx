import { ProfileStatInterface } from '../../../server/credential/Interface'
import './ProfileStatTemplates.scss'

export const ProfileStatTemplates =({label, number}:ProfileStatInterface)=>{
    return  <div className="profile-connection-container">
                <div className="profile-connection-label">{label}</div>
                <div className="profile-connection-number">{number}</div>
            </div>
}