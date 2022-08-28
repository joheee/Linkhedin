import { RecommendCardInterface } from "../../../server/credential/Interface";
import { RecommendPersonTemplates } from "../../templates/feedTemplates/RecommendPersonTemplates";
import './RecommendCard.scss'

export const RecommendCard =(prop:RecommendCardInterface)=>{
    return  <div className="recommend-card-container">
                <div className="recommend-card-hover-effect">
                    <RecommendPersonTemplates {...prop}/>
                </div>
                <div className="recommend-card-follow-button">+ follow</div>
            </div>
}