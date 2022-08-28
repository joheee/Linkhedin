import { RecommendPersonTemplates } from "../../home/templates/feedTemplates/RecommendPersonTemplates";
import { RecommendCardInterface } from "../../server/credential/Interface";
import './PeopleRecommendCard.scss'
export const PeopleRecommendCard =(prop:RecommendCardInterface)=>{
    const isConnect = true
    return  <div className="">
                <RecommendPersonTemplates {...prop}/>
                {
                    isConnect === true ?
                    <div className="people-recommend-card-message-connect-button">message</div> : <div className="">connect</div>
                }
            </div>  
}