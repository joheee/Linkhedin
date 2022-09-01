import { useQuery } from "@apollo/client"
import { dummyUser } from "../../../server/dummy/Data"
import { GET_REQUEST_CONNECT } from "../../../server/query/QueryList"
import { InvitationUserCard } from "../../card/InvitationUserCard"
import './MyNetworkInvitation.scss'

export const MyNetworkInvitation =()=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const getRequest = useQuery(GET_REQUEST_CONNECT, {
        variables:{
            username:getUser.username!
        }
    })
    getRequest.refetch()
    if(getRequest.loading) return <div className=""></div>
    return  <div className="my-network-invitation-container">
                <div className="my-network-invitation-header-container">
                    <div className="my-network-invitation-header-text">invitations</div>
                </div>
                <div className="my-network-invitation-card-container">
                    {
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