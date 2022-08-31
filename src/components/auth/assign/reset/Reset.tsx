import { useMutation } from "@apollo/client"
import { useState } from "react"
import toast from "react-hot-toast"
import { Link, useNavigate, useParams } from "react-router-dom"
import { UPDATE_USER_BY_PK_NEW_PASSWORD } from "../../../server/mutation/MutationList"
import { ButtonTemplates } from "../../../utils/ButtonTemplates"
import { HeaderTemplates } from "../../../utils/HeaderTemplates"
import { InputTemplates } from "../../../utils/InputTemplates"
import { SignTemplates } from "../../../utils/SignTemplates"
import { AuthTemplates } from "../../templates/AuthTemplates"

export const Reset =()=>{
    const {user_id} = useParams()
    const navigate = useNavigate()
    const [update_user_by_pk, {loading,error,data}] = useMutation(UPDATE_USER_BY_PK_NEW_PASSWORD)
    const [passInput,setPassInput] = useState('')
    const [repassInput,setRepassInput] = useState('')
    const handleReset =()=>{
        const getUserID = atob(user_id!)
        if(passInput !== '' && repassInput !== ''){
            if(passInput === repassInput) {
                update_user_by_pk({
                    variables: {
                        password:passInput!,
                        user_id:getUserID!
                    }
                }).then((e)=>{
                    toast.success(`reset password success`)
                    navigate('/')
                })
            } else {
                toast.error('pass and retype must be the same!')
            } 
        }else {
            toast.error('all field must be filled!')
        }
    }

    return  <AuthTemplates>
                <HeaderTemplates text='new pass!!' style={{fontSize:"2rem"}}/>
                <InputTemplates onChange={(e:any)=>setPassInput(e.target.value)} type='password' placeholder='new password'/>
                <InputTemplates onChange={(e:any)=>setRepassInput(e.target.value)} type='password' placeholder='retype new password'/>
                
                <ButtonTemplates 
                    onClick={()=>handleReset()}
                text='done'/>
                
                <Link to='/auth/reset-password'>
                    <SignTemplates text='back'/>
                </Link>
            </AuthTemplates>
}