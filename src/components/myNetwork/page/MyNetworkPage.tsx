import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
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

    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const navigate = useNavigate()
    useEffect(()=>{
        if(getUser === null) {
            navigate('/')
        }
    },[])

    return  <BackgroundManager className="home-page" colorCode={HandleBackground('--secondaryColor')}>
                <NavbarHomeMobile/>
                {
                    getUser === null ? null :
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
                }
            </BackgroundManager>
}