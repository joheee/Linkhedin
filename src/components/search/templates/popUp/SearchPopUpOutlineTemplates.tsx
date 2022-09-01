import { Link } from 'react-router-dom'
import { RecommendPersonTemplates } from '../../../home/templates/feedTemplates/RecommendPersonTemplates'
import './SearchPopUpOutlineTemplates.scss'

export const SearchPopUpOutlineTemplates =({prop}:any)=>{
    return  <div className="search-pop-out-line-templates">
                {
                    prop.map((item:any,i:any)=>(
                        <Link to={`/search/${item.username}`} key={i} className='search-pop-out-link-to-templates'>
                            <RecommendPersonTemplates {...item}/>
                        </Link>
                    ))
                }
            </div>
}