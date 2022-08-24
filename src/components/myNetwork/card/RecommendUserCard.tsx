import { NameDescTemplates } from '../../home/templates/profileTemplates/NameDescTemplates'
import { ProfileBackgroundTemplates } from '../../home/templates/profileTemplates/ProfileBackgroundTemplates'
import { RecommendCardInterface } from '../../server/credential/Interface'
import './RecommendUserCard.scss'

export const RecommendUserCard =(prop:RecommendCardInterface)=>{
    return  <div className="recommend-user-card-container">
                <ProfileBackgroundTemplates {...prop}/>
                <div className="name-desc-user-card-container">
                    <NameDescTemplates {...prop}/>
                </div>
                <div className="recommend-user-connect-button-container">
                    <div className="recommend-user-connect-button">connect</div>
                </div>
            </div>
}