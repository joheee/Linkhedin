import './NavbarIconTemplates.scss'

export const NavbarIconTemplates =({type, text, children, ...attr}:any)=>{
    return  <div className="navbar-icon-container" {...attr}>
                <div className={type} id='navbar-icon-item'>
                    <div className="navbar-icon-dot"></div>
                    {children}
                </div>
                <div className="navbar-icon-text-component">{text}</div>
            </div>
}