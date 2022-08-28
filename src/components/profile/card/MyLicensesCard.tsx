import { MyExperienceCardInterface } from '../../server/credential/Interface'
import './MyExperienceCard.scss'
export const MyLicensesCard =(prop:MyExperienceCardInterface)=>{
    return  <div className="my-experience-card-container">
                <div className="my-experience-card-image-container">
                    <img src={prop.picture} alt={prop.title} />
                </div>
                <div className="">
                    <div className="my-experience-card-title">{prop.company}</div>
                    <div className="my-experience-card-external">{prop.title}</div>
                    <div className="my-experience-card-external">{prop.timestamp}</div>
                </div>
            </div>
}