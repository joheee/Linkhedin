import { BoxInnerTemplates } from "../../../utils/BoxInnerTemplates"
import { SuggestJobButtonTemplates } from "../../templates/suggestJob/SuggestJobButtonTemplates"
import './SuggestJob.scss'

export const SuggestJob =({job}:any)=>{
    return  <BoxInnerTemplates>
                <div className="suggest-job-outer-container">
                    <div className="suggest-job-header-container">
                        suggested job searches
                    </div>

                    <div className="suggest-job-container">
                        {
                            job.slice(0,4).map((item:any,i:any) => 
                                <div key={i}>
                                    <SuggestJobButtonTemplates job={item}/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </BoxInnerTemplates>
}