import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FooterResponsive } from "../../footer/assign/FooterResponsive"
import { HomeContainerTemplates } from "../../home/templates/profileTemplates/HomeContainerTemplates"
import { NavbarHomeMobile } from "../../navigation/components/NavbarHomeMobile"
import { BackgroundManager, HandleBackground } from "../../utils/BackgroundManager"
import { NotificationInfo } from "../assign/notificationInfo/NotificationInfo"
import { NotificationSetting } from "../assign/notificationSetting/NotificationSetting"

export const NotificationPage =()=>{
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
                        <NotificationSetting/>
                        <NotificationInfo/>
                        <FooterResponsive/>
                    </HomeContainerTemplates>
                }
            </BackgroundManager>
}
