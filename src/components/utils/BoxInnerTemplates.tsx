import './BoxInnerTemplates.scss'
export const BoxInnerTemplates =({children,...attr}:any)=>{
    return <div {...attr} id='box-inner-templates-component'>{children}</div>
}