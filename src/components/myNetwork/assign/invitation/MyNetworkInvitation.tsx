import { useQuery, useSubscription } from "@apollo/client"
import { GET_REQUEST_CONNECT } from "../../../server/query/QueryList"
import { LoadingAnimation } from "../../../utils/LoadingAnimation"
import { InvitationUserCard } from "../../card/InvitationUserCard"
import './MyNetworkInvitation.scss'

export const MyNetworkInvitation =()=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const getRequest = useSubscription(GET_REQUEST_CONNECT, {
        variables:{
            username:getUser.username!
        }
    }) 
    return  <div className="my-network-invitation-container">
                <div className="my-network-invitation-header-container">
                    <div className="my-network-invitation-header-text">invitations</div>
                </div>
                <div className="my-network-invitation-card-container">
                    {
                        getRequest.loading === true ? 
                        <LoadingAnimation height="50" width="100"/>
                        :
                        getRequest.data.UserConnect.map((item:any,i:any) => (
                        <>
                            {item.isConnected === true ? null : 
                                <InvitationUserCard prop={item} key={i}/>
                            }
                        </>
                        ))
                    }
                </div>
            </div>
}