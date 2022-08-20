import { Link, useNavigate } from "react-router-dom"
import { ButtonTemplates } from "../../../utils/ButtonTemplates"
import { HeaderTemplates } from "../../../utils/HeaderTemplates"
import { InputTemplates } from "../../../utils/InputTemplates"
import { SignTemplates } from "../../../utils/SignTemplates"
import { AuthTemplates } from "../../templates/AuthTemplates"

export const Forgot=()=>{
    const navigate = useNavigate()
    
    const handleResetPassword =()=>{
        navigate('/auth/reset-password/new-password')
    }

    return  <AuthTemplates>
                <HeaderTemplates text='forgot password?' style={{fontSize:"2rem"}}/>
                <InputTemplates type='text' placeholder='email'/>
                <ButtonTemplates 
                    onClick={()=>handleResetPassword()}
                text='reset password'/>
                
                <Link to='/'>
                    <SignTemplates text='back'/>
                </Link>
            </AuthTemplates>
}