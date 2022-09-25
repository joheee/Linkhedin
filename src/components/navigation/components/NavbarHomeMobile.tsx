import { useEffect } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { Additional } from "../assign/additional/Additional"
import { Search } from "../assign/search/Search"
import { NavbarHomeTemplates } from "../templates/NavbarHomeTemplates"

export const NavbarHomeMobile =()=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const navigate = useNavigate()

    useEffect(()=>{
        const getCurrentUser = localStorage.getItem('current_login')!
        if(getCurrentUser === null) {
            navigate(`/`)
        }
    })
    
    if(getUser === null) return <div className=""></div>
    return  <NavbarHomeTemplates>
                
                    <Search/>

                    <Additional/>

            </NavbarHomeTemplates>
}