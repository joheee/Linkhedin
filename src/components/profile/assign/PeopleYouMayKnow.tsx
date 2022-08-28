import { dummyUser } from "../../server/dummy/Data"
import { BoxInnerTemplates } from "../../utils/BoxInnerTemplates"
import { PeopleRecommendCard } from "../card/PeopleRecommendCard"
import './PeopleYouMayKnow.scss'

export const PeopleYouMayKnow =()=>{
    return  <BoxInnerTemplates>
                <div className="people-you-may-know-container">
                    <div className="people-you-may-know-header">
                        people you may know
                    </div>
                    <div className="">
                    {
                        dummyUser.slice(0,3).map((user, i) => 
                            <div className="" key={i}>
                                <PeopleRecommendCard {...user}/>
                            </div>
                        )
                    }
                    </div>
                </div>
            </BoxInnerTemplates>
}