import { useParams } from "react-router-dom"
import { FooterHome } from "../../footer/assign/home/FooterHome"
import { FooterAttributeTemplates } from "../../footer/templates/FooterAttributeTemplates"
import { PostFirstMapCard } from "../../home/card/post/PostFirstMapCard"
import { HomeContainerTemplates } from "../../home/templates/profileTemplates/HomeContainerTemplates"
import { BoxCustomInnerTemplates } from "../../myNetwork/templates/BoxCustomInnerTemplates"
import { NavbarHomeMobile } from "../../navigation/components/NavbarHomeMobile"
import { dummyUser } from "../../server/dummy/Data"
import { BackgroundManager, HandleBackground } from "../../utils/BackgroundManager"
import { BoxInnerTemplates } from "../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../utils/BoxTemplates"
import { LoadingAnimation } from "../../utils/LoadingAnimation"
import { PeopleSearchTemplates } from "../templates/people/PeopleSearchTemplates"

export const SearchPage =()=> {
    const {keyword} = useParams()
    const filterData = dummyUser.filter(el => {return el.username.toLowerCase().includes(keyword!)})
    const filterPost = dummyUser.filter(f => f.posts.some(o => o.description.toLowerCase().includes(keyword!)))

    return  <BackgroundManager className="home-page" colorCode={HandleBackground('--secondaryColor')}>
                <NavbarHomeMobile/>
                
                    <HomeContainerTemplates>

                        <BoxTemplates>
                            <div className="post-container">
                                <LoadingAnimation height="50" width="100"/>
                                <PeopleSearchTemplates prop={filterData}/>
                                <LoadingAnimation height="50" width="100"/>
                                <PostFirstMapCard prop={filterPost}/>
                                <LoadingAnimation height="50" width="100"/>
                            </div>
                        </BoxTemplates>

                        <BoxCustomInnerTemplates>
                            <div className="responsive">
                                <BoxInnerTemplates>
                                    <FooterHome/>
                                </BoxInnerTemplates>
                            </div>
                            <div className="responsive">
                                <FooterAttributeTemplates fontSize='.8rem' gap='1rem' maxWidth='20rem'/>
                            </div>
                        </BoxCustomInnerTemplates>

                    </HomeContainerTemplates>

            </BackgroundManager>

}