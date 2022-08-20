import { PostAttributeTemplates } from "./PostAttributeTemplates"
import './PostFooterTemplates.scss'
export const PostFooterTemplates =()=>{
    return  <div className="post-footer-container">
                <PostAttributeTemplates className='fa-solid fa-image' text='photo' style={{color:"#378fe9"}}/>
                <PostAttributeTemplates className='fa-brands fa-youtube' text='video' style={{color:"#5f9b41"}}/>
                <PostAttributeTemplates className='fa-solid fa-calendar' text='event' style={{color:"#a872e8"}}/>
                <PostAttributeTemplates className='fa-solid fa-newspaper' text='article' style={{color:"#e16745"}}/>
            </div>

}