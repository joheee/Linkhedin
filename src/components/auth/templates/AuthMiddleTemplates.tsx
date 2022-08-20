import './AuthMiddleTemplates.scss'

export const AuthMiddleTemplates=({children,...attr}:any)=>{
    return <div {...attr} id='auth-middle-templates-component'>{children}</div>
}