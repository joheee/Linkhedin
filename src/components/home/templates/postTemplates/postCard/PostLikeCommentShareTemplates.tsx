import toast from 'react-hot-toast';
import './PostLikeCommentShareTemplates.scss'

export const PostLikeCommentShareTemplates =(post:any)=>{
    return  <div className="post-card-item-like-comment-share-container">
                <div className="post-card-item-like-container">
                    <div className="fa-solid fa-thumbs-up"></div>
                    <div className="">{post.PostLikes.length}</div>
                </div>
                <div className="post-card-item-comment-share-container">
                    <div className="post-card-item-comment-template-container">
                        <div className="">{post.PostComments.length}</div>
                        <div className="">comments</div>
                    </div>
                    <div className="post-card-item-comment-template-container">
                        <div className="">{post.PostShares.length}</div>
                        <div className="">share</div>
                    </div>
                </div>
            </div>
}