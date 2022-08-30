import { useState } from "react"
import { LoginRegisterContext } from "../../server/credential/Context"
import { useGoogleLoginCustom } from "../../hooks/useGoogleLoginCustom"
import { Login } from "../assign/login/Login"
import { Register } from "../assign/register/Register"
import { AuthPageTemplates } from "../templates/AuthPageTemplates"
import { AuthMiddleTemplates } from "../templates/AuthMiddleTemplates"
import { NavbarTemplates } from "../../navigation/templates/NavbarTemplates"
import { FooterAuth } from "../../footer/assign/FooterAuth"
import { BackgroundManager, HandleBackground } from "../../utils/BackgroundManager"

export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true)
    useGoogleLoginCustom()
    
    return  <LoginRegisterContext.Provider value={{isLogin, setIsLogin}}>
                <BackgroundManager colorCode={HandleBackground('--primaryColor')}>
                    <AuthPageTemplates>
                        <NavbarTemplates/>
                        <AuthMiddleTemplates>
                        { 
                            isLogin === true ? 
                            <Login/> : <Register/>
                        }
                        </AuthMiddleTemplates>
                        <FooterAuth/>
                    </AuthPageTemplates>
                </BackgroundManager>
            </LoginRegisterContext.Provider> 
}