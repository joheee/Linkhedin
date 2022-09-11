import { PostAttributeTemplates } from "./PostAttributeTemplates"
import './PostFooterTemplates.scss'

export const PostFooterTemplates =(prop:any)=>{
    return  <div className="post-footer-container">
                <div onClick={()=>prop.setIsPost(!prop.isPost)} >
                    <PostAttributeTemplates onClick={()=>prop.setIsPost(!prop.isPost)} className='fa-solid fa-image' text='photo' style={{color:"#378fe9"}}/>
                </div>
                <div onClick={()=>prop.setIsPost(!prop.isPost)} >
                    <PostAttributeTemplates className='fa-brands fa-youtube' text='video' style={{color:"#5f9b41"}}/>
                </div>
                <div onClick={()=>prop.setIsPost(!prop.isPost)} >
                    <PostAttributeTemplates className='fa-solid fa-calendar' text='event' style={{color:"#a872e8"}}/>
                </div>
                <div onClick={()=>prop.setIsPost(!prop.isPost)} >
                    <PostAttributeTemplates className='fa-solid fa-newspaper' text='article' style={{color:"#e16745"}}/>
                </div>
            </div>

}