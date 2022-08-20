import { FooterAuth } from "../../footer/assign/FooterAuth"
import { NavbarTemplates } from "../../navigation/templates/NavbarTemplates"
import { Forgot } from "../assign/forgot/Forgot"
import { AuthMiddleTemplates } from "../templates/AuthMiddleTemplates"
import { AuthPageTemplates } from "../templates/AuthPageTemplates"

export const ForgotPage =()=>{
    return  <div>
                <NavbarTemplates/>
                <AuthPageTemplates>
                    <AuthMiddleTemplates>
                        <Forgot/>
                    </AuthMiddleTemplates>
                </AuthPageTemplates>      
                <FooterAuth/>
            </div>
}