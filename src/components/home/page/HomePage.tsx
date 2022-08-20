import { NavbarHomeMobile } from "../../navigation/components/NavbarHomeMobile"
import { BackgroundManager, HandleBackground } from "../../utils/BackgroundManager"
import { Feed } from "../assign/feed/Feed"
import { Post } from "../assign/post/Post"
import { Profile } from "../assign/profile/Profile"
import { HomeContainerTemplates } from "../templates/profileTemplates/HomeContainerTemplates"
import './HomePage.scss'

export const HomePage =()=>{
    return  <BackgroundManager className="home-page" colorCode={HandleBackground('--secondaryColor')}>
                <NavbarHomeMobile/>
                
                <HomeContainerTemplates>

                    <Profile/>
                    <Post/>
                    <Feed/>

                </HomeContainerTemplates>
            
            </BackgroundManager>
}