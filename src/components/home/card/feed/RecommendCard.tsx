import { RecommendCardInterface } from "../../../server/credential/Interface";
import { RecommendPersonTemplates } from "../../templates/feedTemplates/RecommendPersonTemplates";
import './RecommendCard.scss'

export const RecommendCard =(prop:RecommendCardInterface, {...attr}:any)=>{
    return  <div className="recommend-card-container" {...attr}>
                <div className="recommend-card-hover-effect">
                    <RecommendPersonTemplates {...prop}/>
                </div>
                <div className="recommend-card-follow-button">+ follow</div>
            </div>
}