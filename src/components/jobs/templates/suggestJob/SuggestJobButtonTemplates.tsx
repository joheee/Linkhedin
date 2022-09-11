
import { useNavigate } from 'react-router-dom'
import './SuggestJobButtonTemplates.scss'

export const SuggestJobButtonTemplates =({job}:any)=>{
    const navigate = useNavigate()

    return  <div className="suggest-job-button-templates-container follow-button-effect">
                <div className="fa-solid fa-magnifying-glass fa-sm"></div>
                <div className="suggest-job-button-text-component">{job.title}</div>
            </div>
}