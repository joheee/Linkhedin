import './PostAttributeTemplates.scss'
export const PostAttributeTemplates =({text, ...attr}:any)=>{
    return  <div className="post-attribute-container">
                <div {...attr}></div>
                <div className="post-attribute-text">{text}</div>
            </div>
}