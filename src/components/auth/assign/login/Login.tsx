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
import { useMutation, useQuery, useSubscription } from "@apollo/client"
import { GET_USER } from "../../../server/query/QueryList"
import { LoadingAnimation } from "../../../utils/LoadingAnimation"
import { sendEmail } from "../register/Register"
import { REGISTER_USER } from "../../../server/mutation/MutationList"

export const Login = () => {
    const loginRegisterContext = useContext(LoginRegisterContext)
    const [userEmailInput, setUserEmailInput] = useState('')
    const [passInput, setPassInput] = useState('')
    const navigate = useNavigate()
    const handleAuth = UserAuth()
    const { loading, error, data } = useSubscription(GET_USER)
    const [insert_User_one, {}] = useMutation(REGISTER_USER)
    
    const handleGoogleSignIn =()=>{
        handleAuth!.googleSignIn()
        onAuthStateChanged(Auth, (user) => {
            for(let i = 0; i < data.User.length; i++) {
                if(data.User[i].email ===  user!.email){
                    if(data.User[i].verification === true) {
                        localStorage.setItem('current_login', JSON.stringify({user_id:data.User[i].user_id, username:data.User[i].username,email:data.User[i].email,password:data.User[i].password}))
                        toast(`welcome ${data.User[i].username}`,
                        {duration: 3000,
                        })
                        navigate(`/home`)
                    } 
                    else {
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

    const handleButtonLogin =()=>{
        if(userEmailInput === '' || passInput === '') {
            toast.error('all field must be filled')
            return
        } else {
            for(let i = 0; i < data.User.length; i++) {
                if(data.User[i].email === userEmailInput && data.User[i].password === passInput) {
                    if(data.User[i].verification === false) {
                        sendEmail(  `http://localhost:5173/auth/verification/${btoa(data.User[i].email !)}/${btoa('true')}`,
                        `https://linkhedin.vercel.app/auth/verification/${btoa(data.User[i].email !)}/${btoa('true')}`)
                        navigate(`auth/verification/${btoa(data.User[i].email !)}`)
                    } else {
                        localStorage.setItem('current_login', JSON.stringify({user_id:data.User[i].user_id, username:data.User[i].username,email:data.User[i].email,password:data.User[i].password}))
                        toast(`welcome ${data.User[i].username}`,
                        {duration: 3000,
                        })
                        navigate(`/home`)
                    }
                    return
                } 
            }
            toast.error('invalid email or password')
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