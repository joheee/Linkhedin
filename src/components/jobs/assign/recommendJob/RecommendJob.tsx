import { BoxInnerTemplates } from '../../../utils/BoxInnerTemplates'
import { RecommendJobCard } from '../../card/recommendJob/RecommendJobCard'
import './RecommendJob.scss'

export const RecommendJob =({job}:any)=>{

    return  <BoxInnerTemplates>
                <div className="recommend-job-container">
                    <div className="recommend-job-header-container">
                        recommended for you
                    </div>
                    <div className="recommend-job-etc-container">
                        based on your profile and search history
                    </div>
                   
                    <div className="recommend-job-card-very-outer-container">
                    {
                        job.map((job:any,i:any) => (
                                <div className="" key={i}>
                                    <RecommendJobCard {...job}/>
                                </div>
                                ))
                            }
                    </div>
                </div>
            </BoxInnerTemplates>
}