import { RichTextRenderTemplates } from "../postCreate/RichTextRenderTemplates"
import { PostCardItemButtonTemplates } from "./PostCardItemButtonTemplates"
import './PostCardItemTemplates.scss'
import { PostLikeCommentShareTemplates } from "./PostLikeCommentShareTemplates"

export const PostCardItemTemplates =(post:any)=>{
    return  <div className="post-card-item-template-container">
                <div className="post-card-description-container">
                    <RichTextRenderTemplates content={post.description}/>
                </div>
                {post.photo === null ? null : 
                    <div className="post-card-item-image-container">
                        <img src={post.photo} alt="" />
                    </div>
                }
                {post.video === null ? null :
                    <div className="post-card-item-video-container">
                        <video src={post.video} controls/>
                    </div>
                }
                <PostLikeCommentShareTemplates {...post}/>
                <PostCardItemButtonTemplates {...post}/>
            </div>
}