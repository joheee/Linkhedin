import { NavbarSearchTemplates } from "../../templates/NavbarSearchTemplates"
import './Search.scss'

export const Search =()=>{
    return  <div className="search-component">
                <img src="/logo.ico" alt="logos" />
                <NavbarSearchTemplates type='fa-solid fa-search'/>
            </div>
}