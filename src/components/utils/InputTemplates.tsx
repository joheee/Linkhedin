import './InputTemplates.scss'

export const InputTemplates = ({type,placeholder,...attr}:any) => {
    return <input type={type} id="input-text-component" placeholder={placeholder} {...attr}/>
}