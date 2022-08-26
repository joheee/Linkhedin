import { FooterResponsive } from "../../footer/assign/FooterResponsive"
import { HomeContainerTemplates } from "../../home/templates/profileTemplates/HomeContainerTemplates"
import { NavbarHomeMobile } from "../../navigation/components/NavbarHomeMobile"
import { BackgroundManager, HandleBackground } from "../../utils/BackgroundManager"
import { BoxInnerTemplates } from "../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../utils/BoxTemplates"
import { JobMenu } from "../assign/jobMenu/JobMenu"

export const JobPage =()=>{
    return  <BackgroundManager className="home-page" colorCode={HandleBackground('--secondaryColor')}>
                <NavbarHomeMobile/>
                
                <HomeContainerTemplates>

                    <JobMenu/>
                    
                    <BoxTemplates>
                        <BoxInnerTemplates>
                            first component
                        </BoxInnerTemplates>
                    </BoxTemplates>

                    <FooterResponsive/>

                </HomeContainerTemplates>

            </BackgroundManager>
}