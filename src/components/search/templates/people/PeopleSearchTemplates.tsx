import { PeopleRecommendCard } from "../../../profile/card/PeopleRecommendCard"
import { BoxInnerTemplates } from "../../../utils/BoxInnerTemplates"
import './PeopleSearchTemplates.scss'

export const PeopleSearchTemplates =({prop}:any)=>{
    return  <BoxInnerTemplates>
                <div className="people-search-templates-container">
                    {
                        prop.map((item:any,i:any)=>(
                            <div key={i} className='search-pop-out-link-to-templates'>
                                    <PeopleRecommendCard {...item}/>
                            </div>
                        ))
                    }
                </div>
            </BoxInnerTemplates>
}