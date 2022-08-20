import { Link, useNavigate } from "react-router-dom"
import { ButtonTemplates } from "../../../utils/ButtonTemplates"
import { HeaderTemplates } from "../../../utils/HeaderTemplates"
import { InputTemplates } from "../../../utils/InputTemplates"
import { SignTemplates } from "../../../utils/SignTemplates"
import { AuthTemplates } from "../../templates/AuthTemplates"

export const Verification =()=>{
    const navigate = useNavigate()
    
    const handleVerification =()=>{
        navigate('/home')
    }

    return  <AuthTemplates>
                <HeaderTemplates text='verified our account' style={{fontSize:"2rem"}}/>
                <InputTemplates type='text' placeholder='verification code'/>
                <ButtonTemplates 
                    onClick={()=>handleVerification()}
                text='done'/>
            </AuthTemplates>
}