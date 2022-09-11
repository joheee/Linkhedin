import { useMutation, useQuery, useSubscription } from "@apollo/client"
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
import { REGISTER_USER } from "../../../server/mutation/MutationList"

export const sendEmail = (url_activation:string,url_world:string) => {
    emailjs.init( 'eor79Xj006WmD6tW_')
    emailjs.send('linkhedin_service_bs', 'new_user_register', {url_activation:url_activation, url_world:url_world})
      .then(() => {
          toast(
            "your verification code are send through email",
            {
              duration: 3000,
            }
          )
      }, (error) => {
      })
  }

export const Register = () => {
    const loginRegisterContext = useContext(LoginRegisterContext)
    const [usernameInput, setUsernameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const navigate = useNavigate()
    const { loading, error, data} = useSubscription(GET_USER)
    const [insert_User_one, {}] = useMutation(REGISTER_USER)
    const handleAuth = UserAuth()

    const handleGoogleSignIn =()=>{
          handleAuth!.googleSignIn()
          onAuthStateChanged(Auth, (user) => {
                for(let i = 0; i < data.User.length; i++) {
                    if(data.User[i].email ===  user!.email){
                        if(data.User[i].verification === true) {
                            localStorage.setItem('current_login', JSON.stringify({user_id:data.User[i].user_id, username:data.User[i].username,email:data.User[i].email,password:data.User[i].password}))
                            navigate('/home')
                            toast(`welcome ${data.User[i].username}`,
                            {duration: 3000,
                            })
                            navigate(`/home`)
                        } else {
                            sendEmail(  `http://localhost:5173/auth/verification/${btoa(data.User[i].email!)}/${btoa('true')}`,
                            `https://linkhedin.vercel.app/auth/verification/${btoa(data.User[i].email!)}/${btoa('true')}`)
                            navigate(`auth/verification/${btoa(data.User[i].email!)}`)
                        }
                        return
                    } 
                }
                const newEmail =  user!.email
                insert_User_one({
                    variables: {
                        Username:newEmail,
                        Email:newEmail,
                        Password:newEmail
                    }
                }).then(()=>{
                    sendEmail(  `http://localhost:5173/auth/verification/${btoa(newEmail!)}/${btoa('true')}`,
                    `https://linkhedin.vercel.app/auth/verification/${btoa(newEmail!)}/${btoa('true')}`)
                    navigate(`auth/verification/${btoa(newEmail!)}`)
                })
        })
    }    
    
    const handleRegister =()=>{
        console.log('here')
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
                } 
            })
        }
        insert_User_one({
            variables: {
                Username:usernameInput!,
                Email:emailInput!,
                Password:passwordInput!
            }
        }).then((e)=>{
            console.log(e)
            sendEmail(  `http://localhost:5173/auth/verification/${btoa(e.data.insert_User_one.email!)}/${btoa('true')}`,
                `https://linkhedin.vercel.app/auth/verification/${btoa(e.data.insert_User_one.email!)}/${btoa('true')}`)
            navigate(`auth/verification/${btoa(e.data.insert_User_one!)}`)
        })
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