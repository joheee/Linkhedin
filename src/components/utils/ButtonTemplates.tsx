import './ButtonTemplates.scss'

export const ButtonTemplates = ({text, ...attr}:any) => {
    return <div id="button-templates-component" {...attr}>{text}</div>
} 