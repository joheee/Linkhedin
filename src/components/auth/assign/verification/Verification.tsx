import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { ButtonTemplates } from "../../../utils/ButtonTemplates"
import { HeaderTemplates } from "../../../utils/HeaderTemplates"
import { InputTemplates } from "../../../utils/InputTemplates"
import { SignTemplates } from "../../../utils/SignTemplates"
import { AuthTemplates } from "../../templates/AuthTemplates"
import toast from 'react-hot-toast';
import { REGISTER_USER } from "../../../server/mutation/MutationList"
import { useMutation } from "@apollo/client"

export const Verification =()=>{
    const navigate = useNavigate()
    const {email} = useParams()
    const getUser = JSON.parse(localStorage.getItem(atob(email!))!)
    const [codeInput,setCodeInput] = useState('')

    const [insert_User_one, { data, loading, error }] = useMutation(REGISTER_USER)

    const handleVerification =()=>{
        if(codeInput === getUser.code.toString()){
            getUser.isVerif = true
            localStorage.setItem(atob(email!), JSON.stringify(getUser))
            insert_User_one({
                variables: {
                    Username:getUser.username,
                    Email:getUser.email,
                    Password:getUser.password
                }
            })
            .then(()=>{
                localStorage.setItem('current_login', JSON.stringify({username:getUser.username,email:getUser.email,password:getUser.password}))
                toast(
                    `welcome ${getUser.username}`,
                    {
                      duration: 3000,
                    }
                  )
                navigate('/home')
            })
        } else {
            toast.error('verification invalid')
        }
    }

    return  <AuthTemplates>
                <HeaderTemplates text='verified our account' style={{fontSize:"2rem"}}/>
                <InputTemplates  onChange={(e:any)=>setCodeInput(e.target.value)} type='text' placeholder='verification code'/>
                <ButtonTemplates 
                    onClick={()=>handleVerification()}
                text='done'/>
            </AuthTemplates>
}