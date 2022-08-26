import { useState } from "react";
import { RecommendJobCardInterface } from "../../../server/credential/Interface";
import './RecommendJobCard.scss'
export const RecommendJobCard =(prop:RecommendJobCardInterface)=>{
    const [isBook, setIsBook] = useState(false)
    return  <div className="recommend-job-card-container">
                <div className="recommend-job-pic-title-company-location-container">
                    <img src={prop.picture} alt={prop.title} />
                    <div className="">
                        <div className="recommend-job-title-card-container">{prop.title}</div>
                        <div className="recommend-job-title-company-container">{prop.company}</div>
                        <div className="recommend-job-title-location-container">{prop.location}</div>
                    </div>
                </div>
                <div className={isBook === true ? "fa-solid fa-box-archive recommend-hover feed-hover":"fa-solid fa-bookmark recommend-hover  feed-hover"} onClick={()=>setIsBook(!isBook)}></div>
            </div>
}