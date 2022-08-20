import './AuthPageTemplates.scss'


export const AuthPageTemplates = ({children, ...attr}: any) => {

    return  <div id="auth-page-templates-container" {...attr}>
                {children}
            </div>
}
