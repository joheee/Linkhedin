import { Additional } from "../assign/additional/Additional"
import { Search } from "../assign/search/Search"
import { NavbarHomeTemplates } from "../templates/NavbarHomeTemplates"

export const NavbarHomeMobile =()=>{

    return  <NavbarHomeTemplates>
                
                    <Search/>

                    <Additional/>

            </NavbarHomeTemplates>
}