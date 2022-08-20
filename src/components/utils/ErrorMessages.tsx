import './ErrorMessages.scss'

export const ErrorMessages =({text,...attr}:any)=>{
    return <div id='error-messages-component' {...attr}>{text}</div>
}