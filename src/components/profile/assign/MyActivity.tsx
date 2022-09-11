import { useSubscription } from "@apollo/client"
import { GET_TOTAL_FOLLOW } from "../../server/query/QueryList"
import { BoxInnerTemplates } from "../../utils/BoxInnerTemplates"
import './MyActivity.scss'

export const MyActivity =({prop, user}:any)=>{
    const getTotalFollower = useSubscription(GET_TOTAL_FOLLOW,{
        variables:{
            target:user.username!
        }
    })
    
    return  <BoxInnerTemplates>
                <div className="my-activity-container">
                    <div className="my-activity-header">
                        <div className="">
                            <div className="my-activity-text">activity</div>
                            <div className="my-activity-follower">{
                            getTotalFollower.loading === true ? null :
                            getTotalFollower.data.UserFollower.length
                            } followers</div>
                        </div>
                    </div>
                    <div className="my-activity-see-more feed-hover" onClick={()=>prop.setIsActivity(!prop.isActivity)}>see more</div>
                </div>
            </BoxInnerTemplates>
}