import { NavbarIconTemplates } from "./NavbarIconTemplates"
import { ProfilePictureTemplates } from "./ProfilePictureTemplates"
import './NavbarAdditionalTemplates.scss'
import { Link, useNavigate } from "react-router-dom"

export const NavbarAdditionalTemplates =({...attr}:any)=>{
    const navigate = useNavigate()

    return  <div id="navbar-home-component-container" {...attr}>
                <NavbarIconTemplates type='fa-solid fa-house-chimney' text='home' onClick={()=> navigate('/home')}/>
                <NavbarIconTemplates type='fa-solid fa-user-group' text='my network' onClick={()=> navigate('/mynetwork')}/>
                <NavbarIconTemplates type='fa-solid fa-briefcase' text='jobs'  onClick={()=> navigate('/jobs')}/>
                <NavbarIconTemplates type='fa-solid fa-comment-dots' text='messaging' onClick={()=> navigate('/messages')}/>
                <NavbarIconTemplates type='fa-solid fa-bell' text='notifications'  onClick={()=> navigate('/notifications')}/>
                <NavbarIconTemplates text='me' onClick={()=> navigate('/myprofile')}>
                    <ProfilePictureTemplates src='/default-profile.png' width='2rem' height='2rem'/>
                </NavbarIconTemplates>
            </div>
}