import { useQuery } from "@apollo/client"
import { GET_REQUEST_CONNECT } from "../../../server/query/QueryList"
import { BoxInnerTemplates } from "../../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../../utils/BoxTemplates"
import { NotificationInfoConnectCard } from "../../card/NotificationInfoCard"
import './NotificationInfo.scss'

export const NotificationInfo =()=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const getRequest = useQuery(GET_REQUEST_CONNECT, {
        variables:{
            username:getUser.username!
        }
    })
    getRequest.refetch()
    if(getRequest.loading) return <div className=""></div>
    return  <BoxTemplates>
                <BoxInnerTemplates>
                    <div className="set-width"></div>
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
                </BoxInnerTemplates>
            </BoxTemplates>
}