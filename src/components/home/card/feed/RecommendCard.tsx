import { useMutation, useQuery, useSubscription } from "@apollo/client";
import toast from "react-hot-toast";
import { FOLLOW_MECHANISM, UNFOLLOW_MECHANISM } from "../../../server/mutation/MutationList";
import { GET_ALL_FOLLOW, GET_CURRENT_FOLLOW } from "../../../server/query/QueryList";
import { RecommendPersonTemplates } from "../../templates/feedTemplates/RecommendPersonTemplates";
import './RecommendCard.scss'

export const RecommendCard =(prop:any)=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    
    const [followMechanism] = useMutation(FOLLOW_MECHANISM)
    const [handleUnfollowMechanism] = useMutation(UNFOLLOW_MECHANISM)
    const getAllFollow = useSubscription(GET_ALL_FOLLOW)
    const unfollowMechanism = useSubscription(GET_CURRENT_FOLLOW,{
        variables:{
            sender:getUser.username,
            target:prop.username
        }
    })
    const handleFollow =()=> {
        followMechanism({
            variables:{
                sender:getUser.username,
                target:prop.username
            }
        }).then(()=>{
            toast.success('follow ' + prop.username)
        })
    }
    const handleUnfollow =()=>{
        handleUnfollowMechanism({
            variables: {
                follower_id: unfollowMechanism.data.UserFollower[0].follower_id!
            }
        }).then(()=>{
            toast.error('unfollow ' + prop.username)
        })
    }

    // if(!getAllFollow.loading) {
    //     console.log(getAllFollow.data.UserFollower.filter((item:any) => {
    //         return item.sendFollow === getUser.username && item.targetFollow === prop.username
    //     })[0] !== undefined)
    // }


    if(getAllFollow.loading || unfollowMechanism.loading) return <div className=""></div>
    return  <div className="recommend-card-container">
                <div className="recommend-card-hover-effect">
                    <RecommendPersonTemplates {...prop}/>
                </div>
                {
                    getAllFollow.data.UserFollower.filter((item:any) => {
                        return item.sendFollow === getUser.username && item.targetFollow === prop.username
                    })[0] === undefined ? 
                    <div className="recommend-card-follow-button" onClick={()=>handleFollow()}>+ follow</div>
                    : 
                    <div className="recommend-card-follow-button" onClick={()=>handleUnfollow()}>- unfollow</div>
                }
            </div>
}