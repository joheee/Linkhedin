import { CommentInputTemplates } from './CommentInputTemplates'
import './Comment.scss'
import { CommentRenderTemplates } from './CommentRenderTemplates'

export const Comment =({comment}:any)=>{
    return <div className="comment-outer-container">
        <CommentInputTemplates comment={comment}/>
        <div className="each-comment-container">
        {
            comment.PostComments.map((item:any) => {
                return <CommentRenderTemplates comment={item}/>
            })
        }
        </div>
    </div>
}