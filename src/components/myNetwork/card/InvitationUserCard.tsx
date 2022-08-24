import { RecommendPersonTemplates } from "../../home/templates/feedTemplates/RecommendPersonTemplates";
import { PropRecommendCardInterface } from "../../server/credential/Interface";
import './InvitationUserCard.scss'

export const InvitationUserCard =({prop}:PropRecommendCardInterface)=>{
    return  <div className="invitation-user-card-container">
                <div className="invitation-user-card-info-user-container">
                    <RecommendPersonTemplates {...prop}/>
                </div>
                <div className="invitation-user-card-ignore-accept-container">
                    <div className="ignore-button-effect">ignore</div>
                    <div className="follow-button-effect">accept</div>
                </div>
            </div>
} 