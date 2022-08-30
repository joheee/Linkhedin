import { useEffect } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { Additional } from "../assign/additional/Additional"
import { Search } from "../assign/search/Search"
import { NavbarHomeTemplates } from "../templates/NavbarHomeTemplates"

export const NavbarHomeMobile =()=>{
    const navigate = useNavigate()
    useEffect(()=>{
        const getCurrentUser = localStorage.getItem('current_login')!
        console.log(getCurrentUser)
        if(getCurrentUser === null) {
            navigate(`/`)
        }
    })
    return  <NavbarHomeTemplates>
                
                    <Search/>

                    <Additional/>

            </NavbarHomeTemplates>
}