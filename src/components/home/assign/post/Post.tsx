import { useSubscription } from "@apollo/client"
import { GET_ALL_POST } from "../../../server/query/QueryList"
import { BoxInnerTemplates } from "../../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../../utils/BoxTemplates"
import { LoadingAnimation } from "../../../utils/LoadingAnimation"
import { PostFirstMapCard } from "../../card/post/PostFirstMapCard"
import { NewPostTemplates } from "../../templates/postTemplates/NewPostTemplates"
import './Post.scss'

export const Post =()=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    
    const getAllPost = useSubscription(GET_ALL_POST)

    return  <BoxTemplates>

                <div className="post-container">
                    <BoxInnerTemplates>
                        <NewPostTemplates/>
                    </BoxInnerTemplates>

                    {
                        getAllPost.loading === true ?
                        <LoadingAnimation height="50" width="100"/>
                        : 
                        <PostFirstMapCard prop={getAllPost.data.User}/>
                    }
                    
                </div>
                
            </BoxTemplates>
}
