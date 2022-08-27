import { FooterResponsive } from "../../footer/assign/FooterResponsive"
import { Feed } from "../../home/assign/feed/Feed"
import { HomeContainerTemplates } from "../../home/templates/profileTemplates/HomeContainerTemplates"
import { NavbarHomeMobile } from "../../navigation/components/NavbarHomeMobile"
import { BackgroundManager, HandleBackground } from "../../utils/BackgroundManager"
import { BoxInnerTemplates } from "../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../utils/BoxTemplates"
import { NotificationSetting } from "../assign/notificationSetting/NotificationSetting"

export const NotificationPage =()=>{
    return  <BackgroundManager className="home-page" colorCode={HandleBackground('--secondaryColor')}>
                <NavbarHomeMobile/>
                <HomeContainerTemplates>
                    <NotificationSetting/>

                    <BoxTemplates>
                        <BoxInnerTemplates>
                            dfgdfg
                        </BoxInnerTemplates>
                    </BoxTemplates>
                    
                    <FooterResponsive/>
                </HomeContainerTemplates>
            </BackgroundManager>
}
