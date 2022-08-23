import { Link } from "react-router-dom"
import { RecommendPersonTemplates } from "../../../home/templates/feedTemplates/RecommendPersonTemplates"
import { RecommendCardInterface, SearchPopUpInterface } from "../../../server/credential/Interface"
import { BoxInnerTemplates } from "../../../utils/BoxInnerTemplates"
import './PeopleSearchTemplates.scss'

export const PeopleSearchTemplates =({prop}:SearchPopUpInterface)=>{
    return  <div className="people-search-templates-container">
                {
                    prop.map((item:RecommendCardInterface,i)=>(
                        <Link to={`/profile/${item.username}`} key={i} className='search-pop-out-link-to-templates'>
                            <BoxInnerTemplates>
                                <RecommendPersonTemplates {...item}/>
                            </BoxInnerTemplates>
                        </Link>
                    ))
                }
            </div>
}