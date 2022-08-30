import { createContext, useContext, useEffect } from "react"
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    onAuthStateChanged
} from 'firebase/auth'
import { Auth } from "../server/firebase/FirebaseHelper"
import { useNavigate } from "react-router-dom"

interface AuthInterface {
    googleSignIn:()=>void
}

const AuthContext = createContext<AuthInterface | null>(null)

export const AuthContextProvider =({children}:any)=>{

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
