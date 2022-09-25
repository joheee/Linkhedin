import { useSubscription } from "@apollo/client"
import { GET_ALL_POST, GET_FOLLOW_ACCOUNT_POST, GET_TOTAL_FOLLOW } from "../../../server/query/QueryList"
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
    const getTotalFollow = useSubscription(GET_FOLLOW_ACCOUNT_POST,{
        variables:{
            send:getUser.username
        }
    })

    // if(!getTotalFollow.loading && !getAllPost.loading) {
    //     console.log(Array.from((new Set([...getAllPost.data.User.filter((user:any) => {
    //         return user.username == getUser.username
    //         }),
    //         ...getAllPost.data.User.filter((user:any) => {
    //             return getTotalFollow.data.UserFollower.find((folls:any) => {
    //                 return user.username == folls.targetFollow
    //             })
    //     })]))))
    // }

    return  <BoxTemplates>

                <div className="post-container">
                    <BoxInnerTemplates>
                        <NewPostTemplates/>
                    </BoxInnerTemplates>

                    {
                        getAllPost.loading === true || getTotalFollow.loading === true ?
                        <LoadingAnimation height="50" width="100"/>
                        : 
                        <PostFirstMapCard prop={Array.from((new Set([...getAllPost.data.User.filter((user:any) => {
                            return user.username == getUser.username
                            }),
                            ...getAllPost.data.User.filter((user:any) => {
                                return getTotalFollow.data.UserFollower.find((folls:any) => {
                                    return user.username == folls.targetFollow
                                })
                        })])))}/>
                    }
                    
                </div>
                
            </BoxTemplates>
}
