import './NavbarSearchTemplates.scss'

export const NavbarSearchTemplates =({...attr}:any)=>{
    return  <input {...attr} type="text"  id='navbar-search-component' placeholder='search'/>
}