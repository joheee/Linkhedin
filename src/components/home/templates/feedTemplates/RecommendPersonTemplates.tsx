import { useState } from "react"
import { Link } from "react-router-dom"
import { ProfilePictureTemplates } from "../../../navigation/templates/ProfilePictureTemplates"
import './RecommendPersonTemplates.scss'

export const RecommendPersonTemplates =(prop:any) =>{
    const [isPopUp,setIsPopUp] = useState(false)
    return  <div className='recommend-card-inner-container'>
                {
                    isPopUp === false ? null
                    :
                    <div className="recommend-card-pop-up-info-container">
                        <div className="recommend-card-pop-up-image">
                            <img src={prop.UserDetail.photoProfile} alt="" />
                        </div>
                        <div className="recommend-card-username-description-container">
                            <div className="recommend-card-username-text">{prop.username}</div>
                            <div className="recommend-card-description-text">{prop.UserDetail.description}</div>
                        </div>
                    </div>
                }

                <ProfilePictureTemplates src={prop.UserDetail.photoProfile} width='3rem' height='3rem'/>
                <div className="recommend-card-username-description-container">
                    <Link to={`/others/${btoa(prop.username!)}`} className="recommend-card-username-text"
                     onMouseEnter={() => setIsPopUp(true)}
                     onMouseLeave={() => setIsPopUp(false)}>{prop.username}</Link>
                    <div className="recommend-card-description-text">{prop.UserDetail.description}</div>
                </div>
            </div>
}