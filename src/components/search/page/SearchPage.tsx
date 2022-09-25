import { useQuery, useSubscription } from "@apollo/client"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { FooterHome } from "../../footer/assign/home/FooterHome"
import { FooterAttributeTemplates } from "../../footer/templates/FooterAttributeTemplates"
import { PostFirstMapCard } from "../../home/card/post/PostFirstMapCard"
import { HomeContainerTemplates } from "../../home/templates/profileTemplates/HomeContainerTemplates"
import { BoxCustomInnerTemplates } from "../../myNetwork/templates/BoxCustomInnerTemplates"
import { NavbarHomeMobile } from "../../navigation/components/NavbarHomeMobile"
import { GET_ALL_POST, GET_CURRENT_USER, SEARCH_USER } from "../../server/query/QueryList"
import { BackgroundManager, HandleBackground } from "../../utils/BackgroundManager"
import { BoxInnerTemplates } from "../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../utils/BoxTemplates"
import { LoadingAnimation } from "../../utils/LoadingAnimation"
import { PeopleSearchTemplates } from "../templates/people/PeopleSearchTemplates"
import './SearchPage.scss'

export const SearchPage =()=> {
    const {keyword} = useParams()
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const navigate = useNavigate()
    useEffect(()=>{
        if(getUser === null) {
            navigate('/')
        }
    },[])
    if(getUser === null) return <div className=""></div>

    const searchUser = useSubscription(SEARCH_USER,{
        variables:{
            username:keyword!,
            currentUser:getUser.username!
        }
    })
    const getAllPost = useSubscription(GET_ALL_POST)
    // if(!getAllPost.loading) console.log(getAllPost.data.User.filter((f:any) => f.Posts.some((o:any) => o.description.toLowerCase().includes(keyword!)))) 

    return  <BackgroundManager className="home-page" colorCode={HandleBackground('--secondaryColor')}>
                <NavbarHomeMobile/>
                
                    <HomeContainerTemplates>

                        {
                            searchUser.loading === true || getAllPost.loading === true ?
                            <LoadingAnimation height="50" width="100"/>
                            :
                            <BoxTemplates>
                                <div className="post-container">
                                    {searchUser.data.User.filter((el:any) => {return el.username.toLowerCase().includes(keyword!)}).length === 0 ? 
                                        <BoxInnerTemplates>
                                            <div className="search-keyword-container">
                                                "{keyword}" is not found in user :)
                                            </div>
                                        </BoxInnerTemplates> :
                                        <PeopleSearchTemplates prop={searchUser.data.User.filter((el:any) => {return el.username.toLowerCase().includes(keyword!)})}/>
                                    }
                                    <PostFirstMapCard prop={getAllPost.data.User.filter((f:any) => f.Posts.some((o:any) => o.description.toLowerCase().includes(keyword!)))
}/>
                                </div>
                            </BoxTemplates>
                        }

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