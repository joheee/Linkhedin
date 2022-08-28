import { dummyUser } from '../../server/dummy/Data'
import { BoxInnerTemplates } from '../../utils/BoxInnerTemplates'
import { PeopleRecommendCard } from '../card/PeopleRecommendCard'
import './PeopleAlsoView.scss'

export const PeopleAlsoView =()=>{
    return  <BoxInnerTemplates>
                <div className="people-also-view-parent-container">
                    <div className="people-also-view-header">people also viewed</div>
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