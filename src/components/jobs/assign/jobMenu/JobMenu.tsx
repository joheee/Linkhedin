import { useState } from "react"
import { BoxCustomInnerTemplates } from "../../../myNetwork/templates/BoxCustomInnerTemplates"
import { BoxInnerTemplates } from "../../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../../utils/BoxTemplates"
import { JobMenuIconTemplates } from "../../templates/jobMenu/JobMenuIconTemplates"
import './JobMenu.scss'


export const JobMenu =()=>{
    const [isPopUp, setIsPopUp] = useState(false)

    return  <BoxTemplates>
                <div className="job-menu-component-container">
                    <BoxInnerTemplates>
                        <BoxCustomInnerTemplates>
                            <div className="job-menu-icon-inner-container">
                                <div className="manage-my-job-header-component">
                                    manage my job
                                </div>
                                <JobMenuIconTemplates text='my jobs' icon='fa-solid fa-bookmark' navigate=''/>
                                {isPopUp === true ? 
                                <div className="">
                                    <JobMenuIconTemplates text='job alerts' icon='fa-solid fa-bell' navigate=''/>
                                    <JobMenuIconTemplates text='salary' icon='fa-solid fa-money-bill' navigate=''/>
                                    <JobMenuIconTemplates text='skill assessments' icon='fa-solid fa-clipboard' navigate=''/>
                                    <JobMenuIconTemplates text='interview prep' icon='fa-solid fa-book' navigate=''/>
                                    <JobMenuIconTemplates text='premium resume insights' icon='fa-solid fa-file' navigate=''/>
                                    <JobMenuIconTemplates text='job seeker guidance' icon='fa-brands fa-youtube' navigate=''/>
                                    <JobMenuIconTemplates text='application settings' icon='fa-solid fa-gear' navigate=''/>
                                </div>
                                : null}
                                <div className="set-width"></div>
                                <div className="show-button-job-component feed-hover" onClick={()=>setIsPopUp(!isPopUp)}>{isPopUp === false ? "show more":"show less"}</div>
                            </div>
                        </BoxCustomInnerTemplates>
                    </BoxInnerTemplates>

                    <div className="post-a-job-button-container follow-button-effect">
                        <div className="fa-solid fa-pen-to-square"></div>
                        <div className="">post a free job</div>
                    </div>
                </div>
            </BoxTemplates>
}