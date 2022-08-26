import { FooterResponsive } from "../../footer/assign/FooterResponsive"
import { HomeContainerTemplates } from "../../home/templates/profileTemplates/HomeContainerTemplates"
import { NavbarHomeMobile } from "../../navigation/components/NavbarHomeMobile"
import { BackgroundManager, HandleBackground } from "../../utils/BackgroundManager"
import { BoxInnerTemplates } from "../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../utils/BoxTemplates"
import { JobMenu } from "../assign/jobMenu/JobMenu"
import { RecommendJob } from "../assign/recommendJob/RecommendJob"
import { SuggestJob } from "../assign/suggestJob/SuggestJob"
import './JobPage.scss'
export const JobPage =()=>{
    return  <BackgroundManager className="home-page" colorCode={HandleBackground('--secondaryColor')}>
                <NavbarHomeMobile/>
                <HomeContainerTemplates>
                    <JobMenu/>
                    <BoxTemplates>
                        <div className="job-page-suggested-recommended-container">
                            <SuggestJob/>
                            <RecommendJob/>
                        </div>
                    </BoxTemplates>
                    <FooterResponsive/>
                </HomeContainerTemplates>
            </BackgroundManager>
}