import { useNavigate } from "react-router-dom"
import { JobMenuIconTemplatesInterface } from "../../../server/credential/Interface"
import './JobMenuIconTemplates.scss'

export const JobMenuIconTemplates =(prop:JobMenuIconTemplatesInterface)=>{
    const navigate = useNavigate()
    return  <div className="job-menu-icon-templates-container feed-hover" onClick={()=>navigate(prop.navigate)}>
                <div className={`${prop.icon} job-menu-icon-component`}></div>
                <div className="job-menu-text-component">{prop.text}</div>
            </div>
}