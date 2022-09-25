import { useSubscription } from "@apollo/client"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FooterAttributeTemplates } from "../../footer/templates/FooterAttributeTemplates"
import { PostFirstMapCard } from "../../home/card/post/PostFirstMapCard"
import { NewPostTemplates } from "../../home/templates/postTemplates/NewPostTemplates"
import { HomeContainerTemplates } from "../../home/templates/profileTemplates/HomeContainerTemplates"
import { NavbarHomeMobile } from "../../navigation/components/NavbarHomeMobile"
import { GET_ALL_POST, GET_LOGIN_USER } from "../../server/query/QueryList"
import { BackgroundManager, HandleBackground } from "../../utils/BackgroundManager"
import { BoxInnerTemplates } from "../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../utils/BoxTemplates"
import { LoadingAnimation } from "../../utils/LoadingAnimation"
import { MyAbout } from "../assign/MyAbout"
import { MyActivity } from "../assign/MyActivity"
import { MyEducation } from "../assign/MyEducation"
import { MyExperience } from "../assign/MyExperience"
import { MyLicenses } from "../assign/MyLicenses"
import { MyProfile } from "../assign/MyProfile"
import { PeopleAlsoView } from "../assign/PeopleAlsoView"
import { PeopleYouMayKnow } from "../assign/PeopleYouMayKnow"
import './ProfilePage.scss'
 
export const ProfilePage =({username}:any)=>{
    const navigate = useNavigate()
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser

    useEffect(()=>{
        if(getUser === null) {
            navigate('/')
        }
    },[])
    if(getUser === null) return <div className=""></div>
    if(username === null){
        navigate('/')
    }

    const [isActivity, setIsActivity] = useState(false)

    if(username === undefined) username = getUser.username    

    const getCurrentPost = useSubscription(GET_LOGIN_USER,{
        variables:{
            username:username!
        }
    })

    const saveProfileRef = useRef<HTMLDivElement>(null)

    return  <div ref={saveProfileRef}>

                <BackgroundManager className="home-page" colorCode={HandleBackground('--secondaryColor')}>

                    <NavbarHomeMobile/>
                    {
                        getCurrentPost.loading === true ?
                        <div className="loading-animation-container">
                            <LoadingAnimation height="50" width="100"/>
                        </div>
                        :
                        <HomeContainerTemplates>
                        <BoxTemplates>
                                <div className="profile-page-core-container">
                                    <MyProfile user={getCurrentPost.data.User[0]}/>
                                    {
                                        username === getUser.username ?
                                        <BoxInnerTemplates>
                                            <NewPostTemplates/>
                                        </BoxInnerTemplates>
                                        :null
                                    }
                                    <MyActivity prop={{isActivity,setIsActivity}} user={getCurrentPost.data.User[0]}/>
                                    {
                                        isActivity === true ?
                                        <>
                                        {
                                            <PostFirstMapCard prop={getCurrentPost.data.User}/>
                                        }
                                        </>
                                        : null
                                    }
                                    <MyAbout user={getCurrentPost.data.User[0]}/>
                                    <MyExperience user={getCurrentPost.data.User[0]}/>
                                    <MyEducation user={getCurrentPost.data.User[0]}/>
                                    <MyLicenses user={getCurrentPost.data.User[0]}/>
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
                    }
                </BackgroundManager>
            </div>
}