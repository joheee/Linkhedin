import './HomeContainerTemplates.scss'

export const HomeContainerTemplates =({children, ...attr}:any)=>{
    return <div {...attr} id='home-container-templates-component'>{children}</div>
}