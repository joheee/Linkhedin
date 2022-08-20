import './FeedHeaderTemplates.scss'

export const FeedHeaderTemplates =({text, ...attr}:any)=>{
    return  <div id='feed-header-templates-component'>
                <div className="feed-header-templates-text">{text}</div>
                <div {...attr}></div>
            </div>
}