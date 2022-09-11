import { useQuery, useSubscription } from "@apollo/client"
import { GET_REQUEST_CONNECT } from "../../../server/query/QueryList"
import { BoxInnerTemplates } from "../../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../../utils/BoxTemplates"
import { LoadingAnimation } from "../../../utils/LoadingAnimation"
import { NotificationInfoConnectCard } from "../../card/NotificationInfoCard"
import './NotificationInfo.scss'

export const NotificationInfo =()=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const getRequest = useSubscription(GET_REQUEST_CONNECT, {
        variables:{
            username:getUser.username!
        }
    })
    return  <BoxTemplates>
                <BoxInnerTemplates>
                    <div className="set-width"></div>
                    {
                        getRequest.loading === true ? 
                        <LoadingAnimation height="50" width="100"/>
                        :
                        <div className="notification-info-container">
                        <div className="notification-info-card-container">
                            <b>{getUser.username!}'s notification</b>
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
                    }
                </BoxInnerTemplates>
            </BoxTemplates>
}