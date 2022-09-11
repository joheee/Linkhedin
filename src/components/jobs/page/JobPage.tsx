import { useSubscription } from "@apollo/client"
import { FooterResponsive } from "../../footer/assign/FooterResponsive"
import { HomeContainerTemplates } from "../../home/templates/profileTemplates/HomeContainerTemplates"
import { NavbarHomeMobile } from "../../navigation/components/NavbarHomeMobile"
import { GET_ALL_SUBS_JOB } from "../../server/query/QueryList"
import { BackgroundManager, HandleBackground } from "../../utils/BackgroundManager"
import { BoxTemplates } from "../../utils/BoxTemplates"
import { LoadingAnimation } from "../../utils/LoadingAnimation"
import { JobMenu } from "../assign/jobMenu/JobMenu"
import { RecommendJob } from "../assign/recommendJob/RecommendJob"
import { SuggestJob } from "../assign/suggestJob/SuggestJob"
import './JobPage.scss'
export const JobPage =()=>{
    const getAllJob = useSubscription(GET_ALL_SUBS_JOB)

    return  <BackgroundManager className="home-page" colorCode={HandleBackground('--secondaryColor')}>
                <NavbarHomeMobile/>

                <HomeContainerTemplates>
                {
                    getAllJob.loading === true ?
                    <div className="job-page-loading-page-container">
                        <LoadingAnimation height="50" width="100"/>
                    </div>
                    :
                    <>
                    <JobMenu/>
                    <BoxTemplates>
                        <div className="job-page-suggested-recommended-container">
                            <SuggestJob job={getAllJob.data.UserJob}/>
                            <RecommendJob job={getAllJob.data.UserJob}/>
                        </div>
                    </BoxTemplates>
                    <FooterResponsive/>
                    </>
                }
                </HomeContainerTemplates>
            </BackgroundManager>
}