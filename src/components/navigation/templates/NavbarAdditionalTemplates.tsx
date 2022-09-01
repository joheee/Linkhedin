import { NavbarIconTemplates } from "./NavbarIconTemplates"
import { ProfilePictureTemplates } from "./ProfilePictureTemplates"
import './NavbarAdditionalTemplates.scss'
import { useNavigate } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_LOGIN_USER } from "../../server/query/QueryList"

export const NavbarAdditionalTemplates =({...attr}:any)=>{
    const navigate = useNavigate()
    let getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const prop = useQuery(GET_LOGIN_USER, {
        variables:{
            username:getUser.username
        }
    })
    return  <div id="navbar-home-component-container" {...attr}>
                <NavbarIconTemplates type='fa-solid fa-house-chimney' text='home' onClick={()=> navigate('/home')}/>
                <NavbarIconTemplates type='fa-solid fa-user-group' text='my network' onClick={()=> navigate('/mynetwork')}/>
                <NavbarIconTemplates type='fa-solid fa-briefcase' text='jobs'  onClick={()=> navigate('/jobs')}/>
                <NavbarIconTemplates type='fa-solid fa-comment-dots' text='messaging' onClick={()=> navigate('/messages')}/>
                <NavbarIconTemplates type='fa-solid fa-bell' text='notifications'  onClick={()=> navigate('/notifications')}/>
                <NavbarIconTemplates text='me' onClick={()=> navigate('/myprofile')}>
                    <ProfilePictureTemplates src={prop.loading === true ? '/default-profile.png':prop.data.User[0].UserDetail.photoProfile} width='2rem' height='2rem'/>
                </NavbarIconTemplates>
            </div>
}