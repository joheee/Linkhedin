import { MyExperienceCardInterface } from '../../server/credential/Interface'
import './MyExperienceCard.scss'

export const MyExperienceCard =(prop:MyExperienceCardInterface)=>{
    return  <div className="my-experience-card-container">
                <div className="my-experience-card-image-container">
                    <img src={prop.picture} alt={prop.title} />
                </div>
                <div className="">
                    <div className="my-experience-card-title">{prop.title}</div>
                    <div className="my-experience-card-external">{prop.company}</div>
                    <div className="my-experience-card-external">{prop.timestamp}</div>
                    <div className="my-experience-card-external">{prop.location}</div>
                </div>
            </div>
}