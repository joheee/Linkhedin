import { useSubscription } from "@apollo/client"
import { ProfilePictureTemplates } from "../../../navigation/templates/ProfilePictureTemplates"
import { GET_LOGIN_USER } from "../../../server/query/QueryList"
import './PicturePostTemplates.scss'

export const PicturePostTemplates =(prop:any)=>{
    if(prop.isPost === true) document.querySelector('body')!.style.overflow = 'hidden'
    else document.querySelector('body')!.style.overflow = 'auto'
    
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const getCurrentUser = useSubscription(GET_LOGIN_USER,{
        variables:{
            username:getUser.username!
        }
    })
    return  <div className="picture-post-container">
                <ProfilePictureTemplates src={getCurrentUser.loading === true ? '/default-profile.png' : getCurrentUser.data.User[0].UserDetail.photoProfile} width='3rem' height='3rem'/>
                <div onClick={()=>prop.setIsPost(!prop.isPost)} className="picture-post-button">start a post</div>
            </div>
}