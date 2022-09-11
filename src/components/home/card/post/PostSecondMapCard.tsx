import { BoxInnerTemplates } from "../../../utils/BoxInnerTemplates"
import { PostEachCard } from "./PostEachCard"
import './PostSecondMapCard.scss'

export const PostSecondMapCard =(prop:any)=>{ 
    return <div className="post-second-map-card-container">
            {
                prop.Posts?.map((post:any, j:any) => (
                    <BoxInnerTemplates key={j}>
                        <PostEachCard post={post}/>
                    </BoxInnerTemplates>
                ))
            }
            </div>  
}