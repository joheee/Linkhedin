import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AllUserContext, LoginRegisterContext } from "../../../server/credential/Context"
import { ButtonGoogleLogin } from "../../../utils/ButtonGoogleLogin"
import { ButtonTemplates } from "../../../utils/ButtonTemplates"
import { ErrorMessages } from "../../../utils/ErrorMessages"
import { HeaderTemplates } from "../../../utils/HeaderTemplates"
import { InputTemplates } from "../../../utils/InputTemplates"
import { SignTemplates } from "../../../utils/SignTemplates"
import { LoginController } from "../../controller/LoginController"
import { AuthTemplates } from "../../templates/AuthTemplates"

export const Login = () => {
    const loginRegisterContext = useContext(LoginRegisterContext)
    const [userEmailInput, setUserEmailInput] = useState('')
    const [passInput, setPassInput] = useState('')
    const [errorMsg, setError] = useState('')
    const allUserContext = useContext(AllUserContext)
    const navigate = useNavigate()

    return <AuthTemplates>

            <HeaderTemplates text='login'/>

            <InputTemplates onChange={(e:any)=>setUserEmailInput(e.target.value)} type='username' placeholder='email'/>
            <InputTemplates onChange={(e:any)=>setPassInput(e.target.value)} type='password' placeholder='password'/>
            
            <Link to='/auth/reset-password'>
                <SignTemplates text='forgot password?'/>
            </Link>

            {errorMsg === '' ? null: <ErrorMessages text={errorMsg}/>}
            <ButtonTemplates
                onClick={()=>navigate('/home')}
            text='login'/>

            <HeaderTemplates text='or' style={{fontSize:"1.2rem", fontWeight:"100"}}/>
            <ButtonGoogleLogin text='login with google'/>
            <SignTemplates onClick={() => loginRegisterContext?.setIsLogin(!loginRegisterContext.isLogin)} text='sign up'/>

        </AuthTemplates>
}