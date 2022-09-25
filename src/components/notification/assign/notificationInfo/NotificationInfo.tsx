import { useQuery, useSubscription } from "@apollo/client"
import { GET_FOLLOWER_NOTIFICATION, GET_FOLLOW_ACCOUNT_POST, GET_REQUEST_CONNECT, GET_TOTAL_FOLLOW, GET_TOTAL_VISITOR } from "../../../server/query/QueryList"
import { BoxInnerTemplates } from "../../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../../utils/BoxTemplates"
import { LoadingAnimation } from "../../../utils/LoadingAnimation"
import { NotificationInfoConnectCard } from "../../card/NotificationInfoCard"
import { NotificationCreatePost } from "./NotificationCreatePost"
import { NotificationFollowerRequest } from "./NotificationFollowerRequest"
import './NotificationInfo.scss'
import { NotificationProfileVisit } from "./NotificationProfileVisit"

export const NotificationInfo =()=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const getRequest = useSubscription(GET_REQUEST_CONNECT, {
        variables:{
            username:getUser.username!
        }
    })
    const getFollower = useSubscription(GET_FOLLOW_ACCOUNT_POST, {
        variables:{
            send:getUser.username!
        }
    })
    const getFollowerNotif = useSubscription(GET_TOTAL_FOLLOW, {
        variables:{
            target:getUser.username!
        }
    })
    const getFollowerRequest = useSubscription(GET_FOLLOWER_NOTIFICATION, {
        variables:{
            username:getUser.username!
        }
    })
    const getVisitorNotif = useSubscription(GET_TOTAL_VISITOR, {
        variables:{
            target:getUser.username!
        }
    })

return  <BoxTemplates>
                <BoxInnerTemplates>
                    <div className="set-width"></div>
                    {
                        getRequest.loading === true || getFollower.loading === true || getFollowerNotif.loading === true || getFollowerRequest.loading === true || getVisitorNotif.loading === true ? 
                        <LoadingAnimation height="50" width="100"/>
                        :
                        <>
                            <div className="notification-info-container">
                                <div className="notification-info-card-container">
                                    <b>{getUser.username!}'s connect request</b>
                                </div>
                                {getRequest.data.UserConnect.map((notif:any,i:any) => (
                                    <div className="" key={i}>
                                        {
                                            notif.isConnected === true ? null:
                                            <NotificationInfoConnectCard {...notif}/>
                                        }
                                    </div>
                                ))}
                            </div>

                            <div className="notification-info-container">
                                <div className="notification-info-card-container">
                                    <b>{getUser.username!}'s new follower!</b>
                                </div>
                                {getFollowerRequest.data.UserFollowerNotification.map((item:any,i:any) => (
                                    <div className="" key={i}>
                                        {
                                            <NotificationFollowerRequest folls={item}/>
                                        }
                                    </div>
                                ))}
                            </div>
                            
                            <div className="notification-info-container">
                                <div className="notification-info-card-container">
                                    <b>{getUser.username!}'s others post!</b>
                                </div>
                                {getFollower.data.UserFollower.map((item:any,i:any) => (
                                    <div className="" key={i}>
                                        {
                                            <NotificationCreatePost folls={item}/>
                                        }
                                    </div>
                                ))}
                            </div>

                            <div className="notification-info-container">
                                <div className="notification-info-card-container">
                                    <b>{getUser.username!}'s profile visit!</b>
                                </div>
                                {getFollowerRequest.data.UserFollowerNotification.map((item:any,i:any) => (
                                    <div className="" key={i}>
                                        {
                                            <NotificationProfileVisit folls={item}/>
                                        }
                                    </div>
                                ))}
                            </div>
                        </>
                    }

                </BoxInnerTemplates>
            </BoxTemplates>
}