import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { NavbarHomeMobile } from "../../navigation/components/NavbarHomeMobile"
import { BackgroundManager, HandleBackground } from "../../utils/BackgroundManager"
import { Feed } from "../assign/feed/Feed"
import { Post } from "../assign/post/Post"
import { Profile } from "../assign/profile/Profile"
import { HomeContainerTemplates } from "../templates/profileTemplates/HomeContainerTemplates"
import './HomePage.scss'

export const HomePage =()=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const navigate = useNavigate()
    useEffect(()=>{
        if(getUser === null) {
            navigate('/')
        }
    },[])

    return    <BackgroundManager className="home-page" colorCode={HandleBackground('--secondaryColor')}>
            <NavbarHomeMobile/>
            {
                getUser === null ? null :
                <HomeContainerTemplates>

                    <Profile/>
                    <Post/>
                    <Feed/>

                </HomeContainerTemplates>
            }
        
        </BackgroundManager>
}