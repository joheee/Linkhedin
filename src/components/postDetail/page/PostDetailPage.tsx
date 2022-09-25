import { useSubscription } from "@apollo/client"
import { useParams } from "react-router-dom"
import { PostEachCard } from "../../home/card/post/PostEachCard"
import { NavbarHomeMobile } from "../../navigation/components/NavbarHomeMobile"
import { GET_CURRENT_FOLLOW, GET_CURRENT_POST } from "../../server/query/QueryList"
import { BackgroundManager, HandleBackground } from "../../utils/BackgroundManager"
import { LoadingAnimation } from "../../utils/LoadingAnimation"
import './PostDetailPage.scss'
export const PostDetailPage =()=>{
    const {post_id} = useParams()
    const getCurrentPost = useSubscription(GET_CURRENT_POST,{
        variables:{
            post_id:post_id
        }
    })


    return  <BackgroundManager className="home-page" colorCode={HandleBackground('--secondaryColor')}>
                <NavbarHomeMobile/>
                    <div className="post-detail-page-container">
                            {
                                getCurrentPost.loading === true ?
                                <LoadingAnimation height="50" width="100"/>
                                :
                                <div className="post-detail-component">
                                    <PostEachCard post={getCurrentPost.data.Post[0]}/>
                                </div>
                            }
                    </div>

            </BackgroundManager>
}