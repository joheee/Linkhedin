import { dummyRecommendJob } from '../../../server/dummy/Data'
import { BoxInnerTemplates } from '../../../utils/BoxInnerTemplates'
import { RecommendJobCard } from '../../card/recommendJob/RecommendJobCard'
import './RecommendJob.scss'
export const RecommendJob =()=>{

    return  <BoxInnerTemplates>
                <div className="recommend-job-container">
                    <div className="recommend-job-header-container">
                        recommended for you
                    </div>
                    <div className="recommend-job-etc-container">
                        based on your profile and search history
                    </div>
                   
                    {
                        dummyRecommendJob.map((job,i) => (
                            <div className="" key={i}>
                                <RecommendJobCard {...job}/>
                            </div>
                        ))
                    }
                </div>
            </BoxInnerTemplates>
}