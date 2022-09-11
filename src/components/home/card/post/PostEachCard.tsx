import { createContext, useState } from "react"
import { Link } from "react-router-dom"
import { Comment } from "../../assign/comment/Comment"
import { RecommendPersonTemplates } from "../../templates/feedTemplates/RecommendPersonTemplates"
import { PostCardItemTemplates } from "../../templates/postTemplates/postCard/PostCardItemTemplates"

export const CommentPopUpContext = createContext<any>({})

export const PostEachCard =({post}:any)=>{
    console.log(post.post_id)
    const [isComment,setIsComment] = useState(false)

    return  <CommentPopUpContext.Provider value={{isComment,setIsComment}}>
                <Link to={`/post-detail/${post.post_id}`}>
                <RecommendPersonTemplates {...post.User}/>
                </Link>
                <PostCardItemTemplates {...post}/>
                {
                    isComment === true ?
                    <Comment comment={post}/> : null
                }
            </CommentPopUpContext.Provider>
}