import './AuthTemplates.scss'

export const AuthTemplates = ({children, ...attr}:any) => {
    return <div id='auth-template-container' {...attr}>{children}</div>
}