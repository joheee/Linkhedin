import { useQuery } from "@apollo/client"
import { dummyUser } from "../../../server/dummy/Data"
import { GET_CURRENT_USER, GET_LOGIN_USER } from "../../../server/query/QueryList"
import { BoxInnerTemplates } from "../../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../../utils/BoxTemplates"
import { LoadingAnimation } from "../../../utils/LoadingAnimation"
import { NameDescTemplates } from "../../templates/profileTemplates/NameDescTemplates"
import { ProfileBackgroundTemplates } from "../../templates/profileTemplates/ProfileBackgroundTemplates"
import { ProfileStatTemplates } from "../../templates/profileTemplates/ProfileStatTemplates"
import './Profile.scss'

export const Profile =()=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const {loading,error,data} = useQuery(GET_LOGIN_USER,{
        variables: {
            username:getUser.username
        }
    })
    console.log(getUser.username)
    if(!loading)console.log(data.User)
    if(loading) return <div className=""></div>
    return  <BoxTemplates>
                <BoxInnerTemplates>
                    <div className='profile-box-profile-container'>
                        <ProfileBackgroundTemplates {...data.User[0].UserDetail}/>
                        <div className="profile-info-container">
                            <NameDescTemplates {...data.User[0]}/>
                            <div className="profile-stats-container">
                                <ProfileStatTemplates label='connections' number={23}/>
                                <ProfileStatTemplates label='invitations' number={6}/>
                            </div>
                        </div>
                    </div>
                </BoxInnerTemplates>
            </BoxTemplates>
}