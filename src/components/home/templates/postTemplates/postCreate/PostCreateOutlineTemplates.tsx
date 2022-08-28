
import { dummyUser } from '../../../../server/dummy/Data'
import { RecommendPersonTemplates } from '../../feedTemplates/RecommendPersonTemplates'
import './PostCreateOutlineTemplates.scss'
import { PostPictureVideoTemplates } from './PostPictureVideoTemplates'
import { RichTextTemplates } from './RichTextTemplates'
export const PostCreateOutlineTemplates =({setIsPost}:{setIsPost:(active:boolean)=>void})=>{
    return  <div className="post-create-outline-templates-container">
                <div className="post-create-inner-box-container">
                    <div className="post-create-inner-box-header-container">
                        <div className="">create a post</div>
                        <div onClick={()=>setIsPost(false)} className="fa-solid feed-hover">x</div>
                    </div>
                    <RecommendPersonTemplates {...dummyUser[0]}/>
                    <RichTextTemplates content='what do you want to talk about?'/>
                    <PostPictureVideoTemplates/>
                </div>
            </div>
}