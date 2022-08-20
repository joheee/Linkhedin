import { BoxInnerTemplates } from "../../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../../utils/BoxTemplates"
import { NameDescTemplates } from "../../templates/profileTemplates/NameDescTemplates"
import { ProfileBackgroundTemplates } from "../../templates/profileTemplates/ProfileBackgroundTemplates"
import { ProfileStatTemplates } from "../../templates/profileTemplates/ProfileStatTemplates"
import './Profile.scss'

export const Profile =()=>{
    return  <BoxTemplates>
                <BoxInnerTemplates>
                    <div className='profile-box-profile-container'>
                        <ProfileBackgroundTemplates/>
                        <div className="profile-info-container">
                            <NameDescTemplates/>
                            <div className="profile-stats-container">
                                <ProfileStatTemplates label='connections' number={23}/>
                                <ProfileStatTemplates label='invitations' number={6}/>
                            </div>
                        </div>
                    </div>
                </BoxInnerTemplates>
            </BoxTemplates>
}