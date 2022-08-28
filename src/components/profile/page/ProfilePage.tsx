import { useState } from "react"
import { FooterAttributeTemplates } from "../../footer/templates/FooterAttributeTemplates"
import { PostFirstMapCard } from "../../home/card/post/PostFirstMapCard"
import { HomeContainerTemplates } from "../../home/templates/profileTemplates/HomeContainerTemplates"
import { NavbarHomeMobile } from "../../navigation/components/NavbarHomeMobile"
import { dummyUser } from "../../server/dummy/Data"
import { BackgroundManager, HandleBackground } from "../../utils/BackgroundManager"
import { BoxInnerTemplates } from "../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../utils/BoxTemplates"
import { MyAbout } from "../assign/MyAbout"
import { MyActivity } from "../assign/MyActivity"
import { MyEducation } from "../assign/MyEducation"
import { MyExperience } from "../assign/MyExperience"
import { MyLicenses } from "../assign/MyLicenses"
import { MyProfile } from "../assign/MyProfile"
import { MySkill } from "../assign/MySkill"
import { PeopleAlsoView } from "../assign/PeopleAlsoView"
import { PeopleYouMayKnow } from "../assign/PeopleYouMayKnow"
import './ProfilePage.scss'
 
export const ProfilePage =()=>{
    const [isActivity, setIsActivity] = useState(false)
    return  <BackgroundManager className="home-page" colorCode={HandleBackground('--secondaryColor')}>
                <NavbarHomeMobile/>
                    <HomeContainerTemplates>

                        <BoxTemplates>
                            <div className="profile-page-core-container">
                                <MyProfile/>
                                <MyActivity prop={{isActivity,setIsActivity}}/>
                                {
                                    isActivity === true ?
                                    <div className="profile-page-my-post">
                                        <PostFirstMapCard prop={dummyUser}/>
                                    </div> : null
                                }
                                <MyAbout/>
                                <MyExperience/>
                                <MyEducation/>
                                <MyLicenses/>
                                <MySkill/>
                            </div>
                        </BoxTemplates>
                        
                        <BoxTemplates>
                            <div className="profile-page-core-container">
                                <PeopleAlsoView/>
                                <PeopleYouMayKnow/>
                            </div>
                            <FooterAttributeTemplates fontSize='.8rem' gap='1rem' maxWidth='fit-content'/>
                        </BoxTemplates>

                    </HomeContainerTemplates>
            </BackgroundManager>
}