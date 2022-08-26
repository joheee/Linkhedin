import { BoxInnerTemplates } from "../../../utils/BoxInnerTemplates"
import { SuggestJobButtonTemplates } from "../../templates/suggestJob/SuggestJobButtonTemplates"
import './SuggestJob.scss'

export const SuggestJob =()=>{
    const jobList = ['research group','money management','investor handal', 'web freelancer']
    return  <BoxInnerTemplates>
                <div className="suggest-job-outer-container">
                    <div className="suggest-job-header-container">
                        suggested job searches
                    </div>

                    <div className="suggest-job-container">
                        {
                            jobList.map((job,i) => 
                                <div key={i}>
                                    <SuggestJobButtonTemplates text={job} navigate={`job/${job}`}/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </BoxInnerTemplates>
}