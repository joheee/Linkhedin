import { Link, useNavigate } from "react-router-dom"
import { ButtonTemplates } from "../../../utils/ButtonTemplates"
import { HeaderTemplates } from "../../../utils/HeaderTemplates"
import { InputTemplates } from "../../../utils/InputTemplates"
import { SignTemplates } from "../../../utils/SignTemplates"
import { AuthTemplates } from "../../templates/AuthTemplates"

export const Reset =()=>{
    const navigate = useNavigate()
    const handleReset =()=>{
        navigate('/home')
    }

    return  <AuthTemplates>
                <HeaderTemplates text='new pass!!' style={{fontSize:"2rem"}}/>
                <InputTemplates type='password' placeholder='new password'/>
                <InputTemplates type='password' placeholder='retype new password'/>
                
                <ButtonTemplates 
                    onClick={()=>handleReset()}
                text='done'/>
                
                <Link to='/auth/reset-password'>
                    <SignTemplates text='back'/>
                </Link>
            </AuthTemplates>
}