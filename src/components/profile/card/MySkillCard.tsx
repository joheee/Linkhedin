import { MyExperienceCardInterface } from '../../server/credential/Interface'
import './MySkillCard.scss'

export const MySkillCard =(prop:MyExperienceCardInterface)=>{
    return  <div className="my-skill-card-container">
                <div className="my-skill-card-title">{prop.title}</div>
                <div className="my-skill-card-footer">
                    <div className="fa-solid fa-user-group"></div>
                    <div className="my-skill-card-footer-text blue-hover">{1} endorsement</div>
                </div>
            </div>
}