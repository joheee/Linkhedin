import { NavbarIconTemplates } from "./NavbarIconTemplates"
import { ProfilePictureTemplates } from "./ProfilePictureTemplates"
import './NavbarAdditionalTemplates.scss'

export const NavbarAdditionalTemplates =({...attr}:any)=>{
    return  <div id="navbar-home-component-container" {...attr}>
                <NavbarIconTemplates type='fa-solid fa-house-chimney' text='home'/>
                <NavbarIconTemplates type='fa-solid fa-user-group' text='my network'/>
                <NavbarIconTemplates type='fa-solid fa-briefcase' text='jobs'/>
                <NavbarIconTemplates type='fa-solid fa-comment-dots' text='messaging'/>
                <NavbarIconTemplates type='fa-solid fa-bell' text='notifications'/>
                <NavbarIconTemplates text='me'>
                    <ProfilePictureTemplates src='./default-profile.png' width='2rem' height='2rem'/>
                </NavbarIconTemplates>
            </div>
}