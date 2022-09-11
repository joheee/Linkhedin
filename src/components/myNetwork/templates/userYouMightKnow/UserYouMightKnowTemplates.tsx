import { useQuery, useSubscription } from "@apollo/client"
import { GET_OTHER_USER,GET_ALL_CONNECT, GET_REQUEST_CONNECT } from "../../../server/query/QueryList"
import { RecommendUserCard } from "../../card/RecommendUserCard"
import './UserYouMightKnowTemplates.scss'

export const UserYouMightKnowTemplates =()=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const otherUser = useSubscription(GET_OTHER_USER,{
        variables:{
            username: getUser.username
        }
    })
    const getAllConnect = useSubscription(GET_ALL_CONNECT)
    // if(!otherUser.loading && !getAllConnect.loading) {
    //     console.log(otherUser.data.User.filter((user:any) => {
    //         return getAllConnect.data.UserConnect.find((el:any) => {
    //                 return (user.username === el.receiverConnect && el.senderConnect === getUser.username) || (user.username === el.senderConnect && el.receiverConnect === getUser.username)
    //             })
    //         }))
    // }
    return  <div className="user-you-might-know-component-container">
                {
                otherUser.loading === true || getAllConnect.loading === true ?
                <div className=""></div>
                :
                otherUser.data.User.filter((user:any) => {
                    return !getAllConnect.data.UserConnect.find((el:any) => {
                            return (user.username === el.receiverConnect && el.senderConnect === getUser.username) || (user.username === el.senderConnect && el.receiverConnect === getUser.username)
                        })
                    }).map((user:any,i:any) => (
                        <div className="" key={i}>
                            <RecommendUserCard {...user}/>
                        </div>
                ))}
            </div>
}