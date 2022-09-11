import { useQuery, useSubscription } from "@apollo/client"
import { GET_ALL_CONNECT, GET_OTHER_USER, GET_REQUEST_CONNECT } from "../../server/query/QueryList"
import { BoxInnerTemplates } from "../../utils/BoxInnerTemplates"
import { LoadingAnimation } from "../../utils/LoadingAnimation"
import { PeopleYouMayKnowCard } from "../card/PeopleYouMayKnowCard"
import './PeopleYouMayKnow.scss'

export const PeopleYouMayKnow =()=>{
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
    return  <BoxInnerTemplates>
                <div className="people-you-may-know-container">
                    <div className="people-you-may-know-header">
                        people you may know
                    </div>
                    {
                        otherUser.loading === true || getRequest.loading === true || getAllConnect.loading === true ?
                        <LoadingAnimation height="50" width="100"/> 
                        :
                        <>
                        {
                            otherUser.data.User.filter((user:any) => {
                                return !getAllConnect.data.UserConnect.find((el:any) => {
                                    return (user.username === el.receiverConnect && el.senderConnect === getUser.username) || (user.username === el.senderConnect && el.receiverConnect === getUser.username)
                                })
                            }).map((user:any, i:any) => 
                            <div className="" key={i}>
                                    <PeopleYouMayKnowCard {...user}/>
                                </div>
                            )
                        }
                        </>
                    }
                </div>
            </BoxInnerTemplates>
}