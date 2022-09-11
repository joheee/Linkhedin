import { useQuery, useSubscription } from "@apollo/client"
import { RecommendCardInterface } from "../../../server/credential/Interface"
import { GET_ALL_CONNECT, GET_OTHER_USER, GET_REQUEST_CONNECT } from "../../../server/query/QueryList"
import { LoadingAnimation } from "../../../utils/LoadingAnimation"
import { RecommendCard } from "../../card/feed/RecommendCard"
import './RecommendTemplates.scss'
export const RecommendTemplates =()=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const otherUser = useSubscription(GET_OTHER_USER,{
        variables:{
            username: getUser.username
        }
    })
    const getRequest = useSubscription(GET_REQUEST_CONNECT, {
        variables:{
            username:getUser.username!
        }
    })
    const getAllConnect = useSubscription(GET_ALL_CONNECT)
    
    if(otherUser.loading || getAllConnect.loading || getRequest.loading) return <div className=""></div>
    return  <div className="recommend-map-container">
                {
                    otherUser.data.User.filter((user:any) => {
                        return !getAllConnect.data.UserConnect.find((el:any) => {
                                return (user.username === el.receiverConnect && el.senderConnect === getUser.username) || (user.username === el.senderConnect && el.receiverConnect === getUser.username)
                            })
                        }).map((item:any, i:any) => (
                        <div key={i}>
                            <RecommendCard {...item}/>
                        </div>
                    ))
                }
            </div>
}