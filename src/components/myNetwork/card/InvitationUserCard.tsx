import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";
import { RecommendPersonTemplates } from "../../home/templates/feedTemplates/RecommendPersonTemplates";
import { CONNECT_ACCEPT, CONNECT_REJECT, CREATE_CHAT_ROOM, FOLLOW_MECHANISM } from "../../server/mutation/MutationList";
import './InvitationUserCard.scss'

export const InvitationUserCard =({prop}:any)=>{
    const [acceptConnect] = useMutation(CONNECT_ACCEPT)
    const [handleFollow] = useMutation(FOLLOW_MECHANISM)
    const [createChatRoom] = useMutation(CREATE_CHAT_ROOM)
    const handleAccept =()=>{
        acceptConnect({
            variables:{
                connect_id:prop.connect_id!
            }
        }).then(()=>{
            handleFollow({
                variables:{
                    sender:prop.receiverConnect,
                    target:prop.senderConnect
                }
            }).then(()=>{
                handleFollow({
                    variables:{
                        target:prop.receiverConnect,
                        sender:prop.senderConnect
                    }
                }).then(()=>{
                    createChatRoom({
                        variables:{
                            sender:prop.senderConnect,
                            receiver:prop.receiverConnect
                        }
                    }).then(()=>{
                        toast.success('accept ' + prop.senderConnect)
                    })
                })
            })
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
        })
    }
    return  <div className="invitation-user-card-container">
                <div className="invitation-user-card-info-user-container">
                    <RecommendPersonTemplates {...prop.User}/>
                </div>
                <div className="invitation-user-card-ignore-accept-container">
                    <div className="ignore-button-effect" onClick={()=>handleReject()}>ignore</div>
                    <div className="follow-button-effect" onClick={()=>handleAccept()}>accept</div>
                </div>
            </div>
} 