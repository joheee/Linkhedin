import { Link } from 'react-router-dom'
import './ProfileStatTemplates.scss'

export const ProfileStatTemplates =({label, number, linkTo}:any)=>{
    return  <Link className="profile-connection-container" to={linkTo === undefined ? '/myprofile' : linkTo}>
                <div className="profile-connection-label">{label}</div>
                <div className="profile-connection-number">{number}</div>
            </Link>
}