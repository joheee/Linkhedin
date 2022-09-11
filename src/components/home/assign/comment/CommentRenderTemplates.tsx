import './CommentRenderTemplates.scss'

export const CommentRenderTemplates =({comment}:any)=>{
    return  <div className="comment-render-container">
                <div className="comment-render-image">
                    <img src={comment.User.UserDetail.photoProfile} alt="" />
                </div>
                <div className="comment-render-info">
                    <div className="comment-render-username">{comment.User.username}</div>
                    <div className="">{comment.message }</div>
                </div>
            </div>
}