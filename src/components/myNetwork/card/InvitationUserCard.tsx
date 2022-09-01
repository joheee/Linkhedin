import { useMutation, useQuery } from "@apollo/client";
import toast from "react-hot-toast";
import { RecommendPersonTemplates } from "../../home/templates/feedTemplates/RecommendPersonTemplates";
import { PropRecommendCardInterface } from "../../server/credential/Interface";
import { CONNECT_ACCEPT, CONNECT_REJECT } from "../../server/mutation/MutationList";
import { GET_LOGIN_USER, GET_REQUEST_CONNECT } from "../../server/query/QueryList";
import './InvitationUserCard.scss'

export const InvitationUserCard =({prop}:any)=>{
    const getRequest = useQuery(GET_REQUEST_CONNECT, {
        variables:{
            username:prop.receiverConnect!
        }
    })
    const [acceptConnect] = useMutation(CONNECT_ACCEPT)
    const handleAccept =()=>{
        acceptConnect({
            variables:{
                connect_id:prop.connect_id!
            }
        }).then(()=>{
            toast.success('accept ' + prop.senderConnect)
            getRequest.refetch()
        })
    }

    const [rejectConnect] = useMutation(CONNECT_REJECT)
    const handleReject =()=>{
        rejectConnect({
            variables:{
                connect_id:prop.connect_id!
            }
        }).then(()=>{
            toast.success('reject ' + prop.senderConnect)
            getRequest.refetch()
        })
    }
    return  <div className="invitation-user-card-container">
                <div className="invitation-user-card-info-user-container">
                    <RecommendPersonTemplates username={prop.senderConnect}/>
                </div>
                <div className="invitation-user-card-ignore-accept-container">
                    <div className="ignore-button-effect" onClick={()=>handleReject()}>ignore</div>
                    <div className="follow-button-effect" onClick={()=>handleAccept()}>accept</div>
                </div>
            </div>
} 