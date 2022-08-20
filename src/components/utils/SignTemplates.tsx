import './SignTemplates.scss'

export const SignTemplates = ({text,...attr}:any) => {
    return <div id='sign-templates-component'>
            <div {...attr} className="sign-templates-text">{text}</div>
    </div>
}