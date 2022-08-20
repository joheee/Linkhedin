import "./NavbarTemplates.scss"

export const NavbarTemplates=({children, ...attr}:any)=>{
    return  <nav id='navbar-templates-component' {...attr}>
                <img src="/linkhedin.png" alt="linkhead in logo" /> 
                {children}
            </nav>
}