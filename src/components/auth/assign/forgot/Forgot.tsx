import { useMutation, useQuery } from "@apollo/client"
import { useState } from "react"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import { UPDATE_USER_BY_PK_NEW_PASSWORD } from "../../../server/mutation/MutationList"
import { GET_USER } from "../../../server/query/QueryList"
import { ButtonTemplates } from "../../../utils/ButtonTemplates"
import { HeaderTemplates } from "../../../utils/HeaderTemplates"
import { InputTemplates } from "../../../utils/InputTemplates"
import { LoadingAnimation } from "../../../utils/LoadingAnimation"
import { SignTemplates } from "../../../utils/SignTemplates"
import { AuthTemplates } from "../../templates/AuthTemplates"
import { sendEmail } from "../register/Register"

export const Forgot=()=>{
    const navigate = useNavigate()
    const [emailInput, setEmailInput] = useState('')
    const {loading,error,data} = useQuery(GET_USER)

    const handleResetPassword =()=>{
        if(emailInput!==''){
            for(let i = 0; i < data.User.length; i++){
                if(data.User[i].email === emailInput!){
                    sendEmail(  `http://localhost:5173/auth/reset-password/new-password/${btoa(data.User[i].user_id!)}`,
                    `https://linkhedin.vercel.app/auth/reset-password/new-password/${btoa(data.User[i].user_id!)}`)
                    toast(`reset password link has been send to your email`,
                        {duration: 3000,})
                    return
                }
            }
        }
        toast.error('email is invalid')
    }

    if(loading) return <LoadingAnimation height="50" width="100"/>
    return  <AuthTemplates>
                <HeaderTemplates text='forgot password?' style={{fontSize:"2rem"}}/>
                <InputTemplates onChange={(e:any)=>setEmailInput(e.target.value)} type='text' placeholder='email'/>
                <ButtonTemplates 
                    onClick={()=>handleResetPassword()}
                text='reset password'/>
                
                <Link to='/'>
                    <SignTemplates text='back'/>
                </Link>
            </AuthTemplates>
}