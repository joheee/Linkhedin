import { FooterResponsive } from "../../footer/assign/FooterResponsive"
import { HomeContainerTemplates } from "../../home/templates/profileTemplates/HomeContainerTemplates"
import { NavbarHomeMobile } from "../../navigation/components/NavbarHomeMobile"
import { BackgroundManager, HandleBackground } from "../../utils/BackgroundManager"
import { NotificationInfo } from "../assign/notificationInfo/NotificationInfo"
import { NotificationSetting } from "../assign/notificationSetting/NotificationSetting"

export const NotificationPage =()=>{
    return  <BackgroundManager className="home-page" colorCode={HandleBackground('--secondaryColor')}>
                <NavbarHomeMobile/>
                <HomeContainerTemplates>
                    <NotificationSetting/>
                    <NotificationInfo/>
                    <FooterResponsive/>
                </HomeContainerTemplates>
            </BackgroundManager>
}
