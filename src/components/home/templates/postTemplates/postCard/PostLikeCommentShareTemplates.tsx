import { PostInterface } from "../../../../server/credential/Interface";
import './PostLikeCommentShareTemplates.scss'

export const PostLikeCommentShareTemplates =({like,comment,share}:PostInterface)=>{
    return  <div className="post-card-item-like-comment-share-container">
                <div className="post-card-item-like-container">
                    <div className="fa-solid fa-thumbs-up"></div>
                    <div className="">{like}</div>
                </div>
                <div className="post-card-item-comment-share-container">
                    <div className="post-card-item-comment-template-container">
                        <div className="">{comment}</div>
                        <div className="">comments</div>
                    </div>
                    <div className="post-card-item-comment-template-container">
                        <div className="">{share}</div>
                        <div className="">share</div>
                    </div>
                </div>
            </div>
}