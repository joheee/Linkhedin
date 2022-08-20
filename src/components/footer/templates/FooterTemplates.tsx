import './FooterTemplates.scss'

export const FooterTemplates=({children,...attr}:any)=>{
    return <footer {...attr} id='footer-component'>{children}</footer>
}