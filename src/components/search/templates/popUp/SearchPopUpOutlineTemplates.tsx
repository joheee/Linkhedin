import { Link } from 'react-router-dom'
import { RecommendPersonTemplates } from '../../../home/templates/feedTemplates/RecommendPersonTemplates'
import { RecommendCardInterface, SearchPopUpInterface } from '../../../server/credential/Interface'
import './SearchPopUpOutlineTemplates.scss'

export const SearchPopUpOutlineTemplates =({prop}:SearchPopUpInterface)=>{
    return  <div className="search-pop-out-line-templates">
                {
                    prop.map((item:RecommendCardInterface,i)=>(
                        <Link to={`/search/${item.username}`} key={i} className='search-pop-out-link-to-templates'>
                            <RecommendPersonTemplates {...item}/>
                        </Link>
                    ))
                }
            </div>
}