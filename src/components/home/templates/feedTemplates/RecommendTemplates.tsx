import { RecommendCardInterface } from "../../../server/credential/Interface"
import { dummyUser } from "../../../server/dummy/Data"
import { RecommendCard } from "../../card/feed/RecommendCard"
import './RecommendTemplates.scss'
export const RecommendTemplates =()=>{


    return  <div className="recommend-map-container">
                {
                    dummyUser.map((item:RecommendCardInterface, i) => (
                        <RecommendCard {...item} key={i}/>
                    ))
                }
            </div>
}