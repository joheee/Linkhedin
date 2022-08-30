import { gapi } from "gapi-script"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AllUserContext, LoginRegisterContext } from "../../../server/credential/Context"
import { ButtonTemplates } from "../../../utils/ButtonTemplates"
import { HeaderTemplates } from "../../../utils/HeaderTemplates"
import { InputTemplates } from "../../../utils/InputTemplates"
import { SignTemplates } from "../../../utils/SignTemplates"
import { AuthTemplates } from "../../templates/AuthTemplates"
import GoogleButton from 'react-google-button'
import { UserAuth } from "../../../utils/AuthContextProvider"
import { Auth } from "../../../server/firebase/FirebaseHelper"
import { onAuthStateChanged } from 'firebase/auth'
import toast from 'react-hot-toast';
import { useQuery } from "@apollo/client"
import { GET_USER } from "../../../server/query/QueryList"
import { LoadingAnimation } from "../../../utils/LoadingAnimation"
import { sendEmail } from "../register/Register"

export const Login = () => {
    const loginRegisterContext = useContext(LoginRegisterContext)
    const [userEmailInput, setUserEmailInput] = useState('')
    const [passInput, setPassInput] = useState('')
    const navigate = useNavigate()
    const handleAuth = UserAuth()
    const { loading, error, data } = useQuery(GET_USER);

    const handleGoogleSignIn =()=>{
        console.log('here')
        handleAuth!.googleSignIn()
        onAuthStateChanged(Auth, (user) => {
            console.log(user)
            for(let i = 0; i < data.User.length; i++) {
                if(data.User[i].email === user!.email) {
                    localStorage.setItem('current_login', JSON.stringify({username:data.User[i].username,email:data.User[i].email,password:data.User[i].password}))
                    toast(
                        `welcome ${data.User[i].username}`,
                        {
                            duration: 3000,
                        }
                        )
                    navigate(`/home`)
                } 
            }
        })
    }    

    const handleButtonLogin =()=>{
        if(userEmailInput === '' || passInput === '') {
            toast.error('all field must be filled')
            return
        } else {
            data.User.forEach((item:any) => {
                if(item.email === userEmailInput && item.password === passInput) {
                    localStorage.setItem('current_login', JSON.stringify({username:item.username,email:item.email,password:item.password}))
                    navigate('/home')
                } else {
                    toast.error('invalid email or password')
                }
            })
        }
    }

    if(loading) return <LoadingAnimation height="50" width="100"/>
    return <AuthTemplates>

            <HeaderTemplates text='login'/>

            <InputTemplates onChange={(e:any)=>setUserEmailInput(e.target.value)} type='username' placeholder='email'/>
            <InputTemplates onChange={(e:any)=>setPassInput(e.target.value)} type='password' placeholder='password'/>
            
            <Link to='/auth/reset-password'>
                <SignTemplates text='forgot password?'/>
            </Link>

            <ButtonTemplates
                onClick={()=>handleButtonLogin()}
            text='login'/>

            <HeaderTemplates text='or' style={{fontSize:"1.2rem", fontWeight:"100"}}/>

            <GoogleButton onClick={() => {handleGoogleSignIn()}}/>

            <SignTemplates onClick={() => loginRegisterContext?.setIsLogin(!loginRegisterContext.isLogin)} text='sign up'/>

        </AuthTemplates>
}