import { useMutation, useQuery } from "@apollo/client"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoginRegisterContext,AllUserContext } from "../../../server/credential/Context"
import { ButtonTemplates } from "../../../utils/ButtonTemplates"
import { HeaderTemplates } from "../../../utils/HeaderTemplates"
import { InputTemplates } from "../../../utils/InputTemplates"
import { SignTemplates } from "../../../utils/SignTemplates"
import { AuthTemplates } from "../../templates/AuthTemplates"
import GoogleButton from 'react-google-button'
import {onAuthStateChanged} from 'firebase/auth'
import { UserAuth } from "../../../utils/AuthContextProvider"
import { Auth } from "../../../server/firebase/FirebaseHelper"
import toast from 'react-hot-toast';
import { GET_USER } from "../../../server/query/QueryList"
import { LoadingAnimation } from "../../../utils/LoadingAnimation"
import emailjs from '@emailjs/browser';

export const sendEmail = (email:string, code:number) => {
    emailjs.init( 'eor79Xj006WmD6tW_')
    emailjs.send('linkhedin_service_bs', 'new_user_register', {from_name:email,message:code})
      .then(() => {
          toast(
            "your verification code are send through email",
            {
              duration: 3000,
            }
          )
      }, (error) => {
          console.log(error.text);
      })
  }

export const Register = () => {
    const loginRegisterContext = useContext(LoginRegisterContext)
    const [usernameInput, setUsernameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const navigate = useNavigate()
    const { loading, error, data } = useQuery(GET_USER);
    const handleAuth = UserAuth()
    const randVerif = Math.floor(100000 + Math.random() * 900000)

    
      
      const handleGoogleSignIn =()=>{
          handleAuth!.googleSignIn()
          onAuthStateChanged(Auth, (user) => {
                for(let i = 0; i < data.User.length; i++) {
                    if(data.User[i].email ===  user!.email){
                        console.log(data.User[i].email)
                        console.log(user!.email)
                        localStorage.setItem('current_login', JSON.stringify({username:data.User[i].username,email:data.User[i].email,password:data.User[i].password}))
                        navigate('/home')
                        return
                    } else {
                        const newEmail =  user!.email
                        localStorage.setItem(newEmail!, JSON.stringify({username:newEmail ,email:newEmail, password:newEmail, code:randVerif, isVerif:false}))
                        sendEmail(newEmail!, randVerif)
                        navigate(`auth/verification/${btoa(newEmail!)}`)
                    }
            }
        })
    }    
    
    const handleRegister =()=>{
        if(usernameInput === '' || emailInput === '' || passwordInput === '') {
            toast.error('all field must be filled')
            return
        } else {
            data.User.forEach((item:any) => {
                if(item.email === emailInput){
                    toast.error('email already used')
                    return
                } else if(item.username === usernameInput){
                    toast.error('username already used')
                    return
                } else {
                    localStorage.setItem(emailInput, JSON.stringify({username:usernameInput, email:emailInput, password:passwordInput, code:randVerif, isVerif:false}))
                    sendEmail(usernameInput!, randVerif)
                    navigate(`auth/verification/${btoa(emailInput!)}`)
                }
            })
        }
    }

    if(loading) return <LoadingAnimation height="50" width="100"/>
    return <AuthTemplates>

        <HeaderTemplates text='register'/>
        <InputTemplates onChange={(e:any)=>setUsernameInput(e.target.value)} placeholder='new username' type='text'/>
        <InputTemplates onChange={(e:any)=>setEmailInput(e.target.value)} placeholder='new email' type='text'/>
        <InputTemplates onChange={(e:any)=>setPasswordInput(e.target.value)} placeholder='new password' type='password'/>

        <ButtonTemplates onClick={()=>handleRegister()} text='register'/>
        
        <HeaderTemplates text='or' style={{fontSize:"2rem"}}/>

        <GoogleButton onClick={() => {handleGoogleSignIn()}}/>

        <SignTemplates onClick={() => loginRegisterContext?.setIsLogin(!loginRegisterContext.isLogin)} text='sign in'/>

    </AuthTemplates>
}