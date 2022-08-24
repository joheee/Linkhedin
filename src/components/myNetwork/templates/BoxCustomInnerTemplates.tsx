import './BoxCustomInnerTemplates.scss'
export const BoxCustomInnerTemplates =({children,...attr}:any)=>{
    return <div className="box-custom-inner-templates-container" {...attr}>{children}</div>
}