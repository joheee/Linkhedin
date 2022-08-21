import { BoxInnerTemplates } from "../../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../../utils/BoxTemplates"
import { LoadingAnimation } from "../../../utils/LoadingAnimation"
import { PostFirstMapCard } from "../../card/post/PostFirstMapCard"
import { NewPostTemplates } from "../../templates/postTemplates/NewPostTemplates"
import './Post.scss'

export const Post =()=>{

    
    return  <BoxTemplates>

                <div className="post-container">
                    <BoxInnerTemplates>
                        <NewPostTemplates/>
                    </BoxInnerTemplates>

                    <LoadingAnimation height="50" width="100"/>
                    <PostFirstMapCard/>
                    <LoadingAnimation height="50" width="100"/>
                    
                </div>
                
            </BoxTemplates>
}
