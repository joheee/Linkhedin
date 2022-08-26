import { BoxInnerTemplates } from '../../../utils/BoxInnerTemplates'
import { RecommendJobCard } from '../../card/recommendJob/RecommendJobCard'
import './RecommendJob.scss'
export const RecommendJob =()=>{

    const dummyRecommendJob = [
        {
            picture:'https://media-exp1.licdn.com/dms/image/C4D0BAQGISrtgx4-2Hg/company-logo_100_100/0/1603952174119?e=1669852800&v=beta&t=NUNoaOHZlxZfTjHsWTKiUYwPgWYLBIJMfG6JxBTI0II',
            title:'graduate tech analyst',
            company:'accenture southeast asia',
            location:'jakarta, jakarta raya, indonesia',
            savedBy: ['johevin','adam']
        },
        {
            picture:'https://media-exp1.licdn.com/dms/image/C4D0BAQGISrtgx4-2Hg/company-logo_100_100/0/1603952174119?e=1669852800&v=beta&t=NUNoaOHZlxZfTjHsWTKiUYwPgWYLBIJMfG6JxBTI0II',
            title:'graduate tech analyst',
            company:'accenture southeast asia',
            location:'jakarta, jakarta raya, indonesia',
            savedBy: ['johevin','adam']
        },
        {
            picture:'https://media-exp1.licdn.com/dms/image/C4D0BAQGISrtgx4-2Hg/company-logo_100_100/0/1603952174119?e=1669852800&v=beta&t=NUNoaOHZlxZfTjHsWTKiUYwPgWYLBIJMfG6JxBTI0II',
            title:'graduate tech analyst',
            company:'accenture southeast asia',
            location:'jakarta, jakarta raya, indonesia',
            savedBy: ['johevin','adam']
        },
    ]

    return  <BoxInnerTemplates>
                <div className="recommend-job-container">
                    <div className="recommend-job-header-container">
                        recommended for you
                    </div>
                    <div className="recommend-job-etc-container">
                        based on your profile and search history
                    </div>
                   
                    {
                        dummyRecommendJob.map(job => (
                            <div className="">
                                <RecommendJobCard {...job}/>
                            </div>
                        ))
                    }
                </div>
            </BoxInnerTemplates>
}