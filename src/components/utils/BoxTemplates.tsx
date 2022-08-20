import './BoxTemplates.scss'

export const BoxTemplates =({children,...attr}:any)=>{
    return <div {...attr} id='box-template-container'>{children}</div>
}