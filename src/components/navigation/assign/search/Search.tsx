import { useNavigate } from "react-router-dom"
import { LightDarkComponent } from "../../../server/base/LightDarkComponent"
import { NavbarSearchTemplates } from "../../templates/NavbarSearchTemplates"
import './Search.scss'

export const Search =()=>{
    const navigate = useNavigate()
    return  <div className="search-component">
                <LightDarkComponent/>
                <img src="/logo.ico" alt="logos" onClick={()=>navigate('/home')}/>
                <NavbarSearchTemplates type='fa-solid fa-search'/>
            </div>
}