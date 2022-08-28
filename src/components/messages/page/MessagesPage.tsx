import { FooterResponsive } from "../../footer/assign/FooterResponsive"
import { HomeContainerTemplates } from "../../home/templates/profileTemplates/HomeContainerTemplates"
import { NavbarHomeMobile } from "../../navigation/components/NavbarHomeMobile"
import { BackgroundManager, HandleBackground } from "../../utils/BackgroundManager"
import { MessagePageAssign } from "../assign/MessagePageAssign"

export const MessagesPage =()=>{
    return  <BackgroundManager className="home-page" colorCode={HandleBackground('--secondaryColor')}>
    <NavbarHomeMobile/>
        <HomeContainerTemplates>
            <MessagePageAssign/>
            <FooterResponsive/>
        </HomeContainerTemplates>
</BackgroundManager>
} 