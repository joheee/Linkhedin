import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { RecommendPersonTemplates } from "../../home/templates/feedTemplates/RecommendPersonTemplates";
import './PeopleRecommendCard.scss'
import { GET_ALL_CONNECT } from '../../server/query/QueryList'
import { CONNECT_ACCEPT, CONNECT_MECHANISM } from "../../server/mutation/MutationList";
import toast from "react-hot-toast";

export const PeopleYouMayKnowCard =(prop:any)=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const getAllConnect = useSubscription(GET_ALL_CONNECT)
    const [connectMechanism] = useMutation(CONNECT_MECHANISM)

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

    if(getAllConnect.loading) return <div className=""></div>
    return  <div className="">
                <RecommendPersonTemplates {...prop}/>
                <div className="follow-button-effect con"
                onClick={()=>handleConnect()}>connect</div>
            </div>  
}