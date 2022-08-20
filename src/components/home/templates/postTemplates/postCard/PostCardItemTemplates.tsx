import { PostInterface } from "../../../../server/credential/Interface"

export const PostCardItemTemplates =(post:PostInterface)=>{
    console.log(post)
    return  <div className="">
                {post.description}
            </div>
}