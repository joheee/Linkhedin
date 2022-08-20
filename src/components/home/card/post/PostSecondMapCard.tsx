import { PostInterface, RecommendCardInterface } from "../../../server/credential/Interface"
import { BoxInnerTemplates } from "../../../utils/BoxInnerTemplates"
import { RecommendPersonTemplates } from "../../templates/feedTemplates/RecommendPersonTemplates"
import { PostCardItemTemplates } from "../../templates/postTemplates/postCard/PostCardItemTemplates"

export const PostSecondMapCard =(prop:RecommendCardInterface)=>{
    if (prop.posts === undefined) return null
    return <div className="">
            {
                prop.posts?.map((post:PostInterface, j) => (
                    <BoxInnerTemplates key={j}>
                        <RecommendPersonTemplates {...prop}/>
                        <PostCardItemTemplates {...post}/>
                    </BoxInnerTemplates>
                ))
            }
    </div>  
}