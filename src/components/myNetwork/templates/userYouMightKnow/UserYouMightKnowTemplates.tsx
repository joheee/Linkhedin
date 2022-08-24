import { RecommendCardInterface } from "../../../server/credential/Interface"
import { dummyUser } from "../../../server/dummy/Data"
import { RecommendUserCard } from "../../card/RecommendUserCard"
import './UserYouMightKnowTemplates.scss'

export const UserYouMightKnowTemplates =()=>{

    return  <div className="user-you-might-know-component-container">
                {dummyUser.slice(0,6).map((user:RecommendCardInterface,i) => (
                    <div className="" key={i}>
                        <RecommendUserCard {...user}/>
                    </div>
                ))}
            </div>
}