import { RecommendCardInterface } from "../../../server/credential/Interface"
import { dummyUser } from "../../../server/dummy/Data"
import { BoxInnerTemplates } from "../../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../../utils/BoxTemplates"
import { LoadingAnimation } from "../../../utils/LoadingAnimation"
import { PostFirstMapCard } from "../../card/post/PostFirstMapCard"
import { RecommendPersonTemplates } from "../../templates/feedTemplates/RecommendPersonTemplates"
import { NewPostTemplates } from "../../templates/postTemplates/NewPostTemplates"
import './Post.scss'

export const Post =()=>{

    
    return  <BoxTemplates>

                <div className="post-container">
                    <BoxInnerTemplates>
                        <NewPostTemplates/>
                    </BoxInnerTemplates>

                    <LoadingAnimation height="50" width="100"/>

                        {
                            dummyUser.map((item:RecommendCardInterface,i)=>(
                                <PostFirstMapCard {...item} />
                            ))
                        }
                </div>
                
            </BoxTemplates>
}
