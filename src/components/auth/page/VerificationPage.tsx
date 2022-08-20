import { FooterAuth } from "../../footer/assign/FooterAuth"
import { NavbarTemplates } from "../../navigation/templates/NavbarTemplates"
import { Verification } from "../assign/verification/Verification"
import { AuthMiddleTemplates } from "../templates/AuthMiddleTemplates"
import { AuthPageTemplates } from "../templates/AuthPageTemplates"

export const VerificationPage =()=>{
    return  <div>
                <NavbarTemplates/>
                <AuthPageTemplates>
                    <AuthMiddleTemplates>
                        <Verification/>
                    </AuthMiddleTemplates>
                </AuthPageTemplates>       
                <FooterAuth/>
            </div>
}