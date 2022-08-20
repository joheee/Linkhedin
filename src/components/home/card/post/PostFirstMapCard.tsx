import { PostInterface, RecommendCardInterface } from "../../../server/credential/Interface";
import { BoxInnerTemplates } from "../../../utils/BoxInnerTemplates";
import { RecommendPersonTemplates } from "../../templates/feedTemplates/RecommendPersonTemplates";

export const PostFirstMapCard =(prop:RecommendCardInterface)=>{
    if (prop.posts === undefined) return null
    console.log(prop.posts)
    return  prop.posts?.map((post:PostInterface, j) => (
                <BoxInnerTemplates key={j}>
                    <RecommendPersonTemplates {...prop}/>
                </BoxInnerTemplates>
            ))
}