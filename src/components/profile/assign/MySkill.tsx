import { dummyExperience } from "../../server/dummy/Data"
import { BoxInnerTemplates } from "../../utils/BoxInnerTemplates"
import { MySkillCard } from "../card/MySkillCard"
import './MyExperience.scss'

export const MySkill =()=>{
    return  <BoxInnerTemplates>
                <div className="my-experience-container">
                    <div className="my-experience-header">
                        <div className="my-experience-text">skills</div>
                        <div className="my-experience-header-button">
                            <div className="fa-solid fa-plus feed-hover"></div>
                            <div className="fa-solid fa-pen feed-hover"></div>
                        </div>
                    </div>
                    <div className="my-experience-card-outer-container">
                        {
                            dummyExperience.map((exp, i)=>
                                <div className="" key={i}>
                                    <MySkillCard {...exp}/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </BoxInnerTemplates>
}