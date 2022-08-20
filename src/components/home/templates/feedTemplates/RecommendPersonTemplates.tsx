import { ProfilePictureTemplates } from "../../../navigation/templates/ProfilePictureTemplates"
import { RecommendCardInterface } from "../../../server/credential/Interface"
import './RecommendPersonTemplates.scss'

export const RecommendPersonTemplates =(prop:RecommendCardInterface) =>{
    console.log(prop)
    return  <div className={`recommend-card-inner-container`}>
                <ProfilePictureTemplates src={prop.profile} width='3rem' height='3rem'/>
                <div className="recommend-card-username-description-container">
                    <div className="recommend-card-username-text">{prop.username}</div>
                    <div className="recommend-card-description-text">{prop.description}</div>
                </div>
            </div>
}