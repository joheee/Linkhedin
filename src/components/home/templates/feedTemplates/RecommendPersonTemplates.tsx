import { useQuery } from "@apollo/client"
import { ProfilePictureTemplates } from "../../../navigation/templates/ProfilePictureTemplates"
import { GET_LOGIN_USER } from "../../../server/query/QueryList"
import './RecommendPersonTemplates.scss'

export const RecommendPersonTemplates =(prop:any) =>{
    const {loading,data,error} = useQuery(GET_LOGIN_USER, {
        variables: {
            username:prop.username
        }
    })
    if(loading || data.User[0] === undefined) return <div className=""></div>
    return  <div className='recommend-card-inner-container'>
                <ProfilePictureTemplates src={data.User[0].UserDetail.photoProfile} width='3rem' height='3rem'/>
                <div className="recommend-card-username-description-container">
                    <div className="recommend-card-username-text">{data.User[0].username}</div>
                    <div className="recommend-card-description-text">{data.User[0].UserDetail.description}</div>
                </div>
            </div>
}