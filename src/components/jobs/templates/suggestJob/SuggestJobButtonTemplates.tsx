
import { useNavigate } from 'react-router-dom'
import { JobMenuIconTemplatesInterface } from '../../../server/credential/Interface'
import './SuggestJobButtonTemplates.scss'

export const SuggestJobButtonTemplates =(prop:JobMenuIconTemplatesInterface)=>{
    const navigate = useNavigate()
    return  <div className="suggest-job-button-templates-container follow-button-effect" onClick={()=>navigate(prop.navigate as string)}>
                <div className="fa-solid fa-magnifying-glass fa-sm"></div>
                <div className="suggest-job-button-text-component">{prop.text}</div>
            </div>
}