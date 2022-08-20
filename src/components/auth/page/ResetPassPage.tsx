import { FooterAuth } from "../../footer/assign/FooterAuth"
import { NavbarTemplates } from "../../navigation/templates/NavbarTemplates"
import { Reset } from "../assign/reset/Reset"
import { AuthMiddleTemplates } from "../templates/AuthMiddleTemplates"
import { AuthPageTemplates } from "../templates/AuthPageTemplates"

export const ResetPassPage =()=>{
    return  <div>
                <NavbarTemplates/>
                <AuthPageTemplates>
                    <AuthMiddleTemplates>
                        <Reset/>
                    </AuthMiddleTemplates>
                </AuthPageTemplates>     
                <FooterAuth/>
            </div>
}
