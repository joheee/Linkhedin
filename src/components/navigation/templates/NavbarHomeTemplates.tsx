import './NavbarHomeTemplates.scss'

export const NavbarHomeTemplates =({children, ...attr}:any)=>{
    return <div {...attr} id='navbar-home-templates-component'>{children}</div>
}