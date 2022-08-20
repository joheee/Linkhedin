import { PostInterface } from "../../../../server/credential/Interface"
import { PostCardItemButtonTemplates } from "./PostCardItemButtonTemplates"
import './PostCardItemTemplates.scss'
import { PostLikeCommentShareTemplates } from "./PostLikeCommentShareTemplates"

export const PostCardItemTemplates =(post:PostInterface)=>{
    return  <div className="post-card-item-template-container">
                <div className="post-card-description-container">
                    {post.description}
                </div>
                {post.picture === undefined ? null : 
                    <div className="post-card-item-image-container">
                        <img src={post.picture} alt="" />
                    </div>
                }
                {post.video === undefined ? null :
                    <div className="post-card-item-video-container">
                        <video src={post.video} autoPlay controls/>
                    </div>
                }
                <PostLikeCommentShareTemplates {...post}/>
                <PostCardItemButtonTemplates {...post}/>
            </div>
}