import { RecommendCardInterface } from "../../../server/credential/Interface"
import { dummyUser } from "../../../server/dummy/Data"
import { RecommendCard } from "../../card/feed/RecommendCard"
import './RecommendTemplates.scss'
export const RecommendTemplates =()=>{


    return  <div className="recommend-map-container">
                {
                    dummyUser.slice(0,3).map((item, i) => (
                        <div key={i}>
                            <RecommendCard {...item}/>
                        </div>
                    ))
                }
            </div>
}