import { useMutation, useSubscription } from "@apollo/client";
import { RecommendPersonTemplates } from "../../home/templates/feedTemplates/RecommendPersonTemplates";
import './PeopleRecommendCard.scss'
import { GET_ALL_CONNECT } from '../../server/query/QueryList'
import { CONNECT_MECHANISM } from "../../server/mutation/MutationList";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const PeopleRecommendCard =(prop:any)=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const getAllConnect = useSubscription(GET_ALL_CONNECT)
    const [connectMechanism] = useMutation(CONNECT_MECHANISM)
    const navigate = useNavigate()
    const handleConnect =()=>{
        connectMechanism({
            variables:{
                sender:getUser.username!,
                receiver:prop.username
            }
        }).then(()=>{
            toast.success('send connect request to ' + prop.username)
        })
    }

    // if(!getAllConnect.loading) {
    //     console.log(getAllConnect.data.UserConnect.find((user:any) => (user.receiverConnect === prop.username && user.senderConnect === getUser.username || user.senderConnect === prop.username && user.receiverConnect === getUser.username)))
    // }
    if(getAllConnect.loading) return <div className=""></div>
    return  <div className="">
                <RecommendPersonTemplates {...prop}/>
                {
                    getAllConnect.data.UserConnect.find((user:any) => (user.receiverConnect === prop.username && user.senderConnect === getUser.username || user.senderConnect === prop.username && user.receiverConnect === getUser.username)) !== undefined ?
                                <div className="people-recommend-card-message-connect-button" onClick={()=> navigate('/messages')}>message</div> : 
                                <div className="follow-button-effect con"
                        onClick={()=>handleConnect()}
                    >connect</div>
                }
            </div>  
}