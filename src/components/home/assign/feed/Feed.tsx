import { FooterHome } from "../../../footer/assign/home/FooterHome"
import { FooterAttributeTemplates } from "../../../footer/templates/FooterAttributeTemplates"
import { BoxInnerTemplates } from "../../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../../utils/BoxTemplates"
import { FeedHeaderTemplates } from "../../templates/feedTemplates/FeedHeaderTemplates"
import { RecommendTemplates } from "../../templates/feedTemplates/RecommendTemplates"
import { ViewAllTemplates } from "../../templates/feedTemplates/ViewAllTemplates"

import './Feed.scss'
export const Feed =()=>{
    return  <BoxTemplates>
                <div className="feed-outer-container">
                    <BoxInnerTemplates>
                        <div className="feed-container responsive">
                            <FeedHeaderTemplates text='add to your feed' className='fa-solid fa-circle-info'/>
                            <RecommendTemplates/>
                            <ViewAllTemplates text='view all recomendations ->'/>
                        </div>
                    </BoxInnerTemplates>

                    <BoxInnerTemplates>
                        <div className="responsive">
                            <FooterHome/>
                        </div>
                    </BoxInnerTemplates>
                    
                    <div className="responsive">
                        <FooterAttributeTemplates fontSize='.8rem' gap='1rem' maxWidth='20rem'/>
                    </div>
                </div>
            </BoxTemplates>
}