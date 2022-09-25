import { createContext, useContext, useEffect } from "react"
import {
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth'
import { Auth } from "../server/firebase/FirebaseHelper"
import { useNavigate } from "react-router-dom"

interface AuthInterface {
    googleSignIn:()=>void
}

const AuthContext = createContext<AuthInterface | null>(null)

export const AuthContextProvider =({children}:any)=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser

    const navigate = useNavigate()
    useEffect(()=>{
        const getRoute = window.location.pathname.split('/')
        if(getUser === null) {
            if(getRoute[2] !== 'verification' && getRoute[2] !== 'reset-password') navigate('/')
        }
    },[])

    const googleSignIn =()=>{
        const provider = new GoogleAuthProvider()
        signInWithPopup(Auth,provider)
    }

    return  <AuthContext.Provider value={{googleSignIn}}>
                {children}
            </AuthContext.Provider>
}
export const UserAuth =()=>{
    return useContext(AuthContext)
}
