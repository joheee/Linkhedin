import './HeaderTemplates.scss'

export const HeaderTemplates = ({text, ...attr}:any) => {
    return <div id='header-templates-component' {...attr}>{text}</div>
}