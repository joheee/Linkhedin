import { RecommendPersonTemplates } from '../../../home/templates/feedTemplates/RecommendPersonTemplates'
import { RecommendCardInterface } from '../../../server/credential/Interface'
import { dummyUser } from '../../../server/dummy/Data'
import './SearchPopUpOutlineTemplates.scss'

interface SearchPopUpInterface {
    prop: Array<RecommendCardInterface>
}

export const SearchPopUpOutlineTemplates =({prop}:SearchPopUpInterface)=>{
    console.log(prop.length)
    return  <div className="search-pop-out-line-templates">
                {
                    prop.length === 0 ? 
                    dummyUser.map((item:RecommendCardInterface,i)=>(
                        <div key={i}>
                            <RecommendPersonTemplates {...item}/>
                        </div>
                    ))
                    :
                    prop.map((item:RecommendCardInterface,i)=>(
                        <div key={i}>
                            <RecommendPersonTemplates {...item}/>
                        </div>
                    ))
                }
            </div>
}