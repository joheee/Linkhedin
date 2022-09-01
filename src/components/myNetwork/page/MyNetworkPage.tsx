import { RecommendPersonTemplates } from "../../home/templates/feedTemplates/RecommendPersonTemplates"
import { HomeContainerTemplates } from "../../home/templates/profileTemplates/HomeContainerTemplates"
import { NavbarHomeMobile } from "../../navigation/components/NavbarHomeMobile"
import { dummyUser } from "../../server/dummy/Data"
import { BackgroundManager, HandleBackground } from "../../utils/BackgroundManager"
import { BoxInnerTemplates } from "../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../utils/BoxTemplates"
import { MyNetworkInvitation } from "../assign/invitation/MyNetworkInvitation"
import { MyNetworkComponent } from "../assign/manageMyNetwork/MyNetworkComponent"
import { UserYouMightKnow } from "../assign/userYouMightKnow/UserYouMightKnow"
import { BoxCustomInnerTemplates } from "../templates/BoxCustomInnerTemplates"

export const MyNetworkPage =()=>{
    return  <BackgroundManager className="home-page" colorCode={HandleBackground('--secondaryColor')}>
                <NavbarHomeMobile/>
                    <HomeContainerTemplates>
                        <MyNetworkComponent/>
                        <BoxTemplates>
                            <BoxCustomInnerTemplates>

                                <BoxInnerTemplates>
                                <MyNetworkInvitation/>
                                </BoxInnerTemplates>
                                
                                <UserYouMightKnow/>
                            </BoxCustomInnerTemplates>
                        </BoxTemplates>
                    </HomeContainerTemplates>
            </BackgroundManager>
}