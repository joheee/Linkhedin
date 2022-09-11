import { useQuery, useSubscription } from "@apollo/client"
import { useNavigate } from "react-router-dom"
import { GET_ALL_CONNECT, GET_LOGIN_USER } from "../../../server/query/QueryList"
import { BoxInnerTemplates } from "../../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../../utils/BoxTemplates"
import { LoadingAnimation } from "../../../utils/LoadingAnimation"
import { NameDescTemplates } from "../../templates/profileTemplates/NameDescTemplates"
import { ProfileBackgroundTemplates } from "../../templates/profileTemplates/ProfileBackgroundTemplates"
import { ProfileStatTemplates } from "../../templates/profileTemplates/ProfileStatTemplates"
import './Profile.scss'

export const Profile =()=>{
    const navigate = useNavigate()
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const {loading,error,data} = useSubscription(GET_LOGIN_USER,{
        variables: {
            username:getUser.username
        }
    })
    const getAllConnect = useSubscription(GET_ALL_CONNECT)

    return  <BoxTemplates>
                <BoxInnerTemplates>
                    {
                        loading === true || getAllConnect.loading === true ?
                        <LoadingAnimation height="50" width="100"/>
                        :
                        <div className='profile-box-profile-container'>
                            <ProfileBackgroundTemplates {...data.User[0]}/>
                            <div className="profile-info-container">
                                <NameDescTemplates {...data.User[0]}/>
                                <div className="profile-stats-container">
                                    <ProfileStatTemplates label='connections' number={
                                        getAllConnect.data.UserConnect.filter((user:any) => {
                                            return (user.senderConnect === getUser.username || user.receiverConnect === getUser.username) && user.isConnected === true}).length
                                    }/>
                                    <ProfileStatTemplates label='invitations' number={
                                        getAllConnect.data.UserConnect.filter((user:any) => {
                                            return (user.receiverConnect === getUser.username) && user.isConnected === false}).length
                                        } linkTo={'/mynetwork'}/>
                                </div>
                            </div>
                        </div>
                    }
                </BoxInnerTemplates>
            </BoxTemplates>
}