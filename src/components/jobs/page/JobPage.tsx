import { Feed } from "../../home/assign/feed/Feed"
import { Post } from "../../home/assign/post/Post"
import { Profile } from "../../home/assign/profile/Profile"
import { HomeContainerTemplates } from "../../home/templates/profileTemplates/HomeContainerTemplates"
import { NavbarHomeMobile } from "../../navigation/components/NavbarHomeMobile"
import { BackgroundManager, HandleBackground } from "../../utils/BackgroundManager"

export const JobPage =()=>{
    return  <BackgroundManager className="home-page" colorCode={HandleBackground('--secondaryColor')}>
                <NavbarHomeMobile/>
                
                <HomeContainerTemplates>

                    <Profile/>
                    <Post/>
                    <Feed/>

                </HomeContainerTemplates>

            </BackgroundManager>
}