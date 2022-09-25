import { CommentInputTemplates } from './CommentInputTemplates'
import './Comment.scss'
import { CommentRenderTemplates } from './CommentRenderTemplates'

export const Comment =({comment}:any)=>{
    return <div className="comment-outer-container">
        <CommentInputTemplates comment={comment}/>
        <div className="each-comment-container">
        {
            comment.PostComments.map((item:any, i:any) => {
                return  <div key={i}>
                            <CommentRenderTemplates comment={item} reply_id={null}/>
                        </div>
            })
        }
        </div>
    </div>
}