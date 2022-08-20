import { useMutation } from "@apollo/client"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoginRegisterContext,AllUserContext } from "../../../server/credential/Context"
import { CreateUser } from "../../../server/mutation/CreateUser"
import { ButtonGoogleLogin } from "../../../utils/ButtonGoogleLogin"
import { ButtonTemplates } from "../../../utils/ButtonTemplates"
import { ErrorMessages } from "../../../utils/ErrorMessages"
import { HeaderTemplates } from "../../../utils/HeaderTemplates"
import { InputTemplates } from "../../../utils/InputTemplates"
import { SignTemplates } from "../../../utils/SignTemplates"
import { RegisterController } from "../../controller/RegisterController"
import { AuthTemplates } from "../../templates/AuthTemplates"

export const Register = () => {
    const loginRegisterContext = useContext(LoginRegisterContext)
    const allUserContext = useContext(AllUserContext)
    const [usernameInput, setUsernameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [rePasswordInput, setRePasswordInput] = useState('')
    const [errorMsg, setError] = useState('')
    const navigate = useNavigate()
    // const [mutateFunction, {data,loading,error}] = useMutation(CreateUser())

    const handleRegister =()=>{
        navigate('auth/verification')
        // const newUser = RegisterController({usernameInput,emailInput,passwordInput,rePasswordInput,setError, allUserContext})
        // console.log(newUser)
        // if(newUser !== null){
            // mutateFunction({
            //     variables: {
            //         "userID": "",
            //         "Username": newUser?.username,
            //         "Email": newUser?.email,
            //         "Password": newUser?.password
            //     }
            // }).then((e)=>console.log(e.data.createUser.username))
            // .catch((e)=>console.log(typeof e.message))
        // }
    }

    return <AuthTemplates>

            <HeaderTemplates text='register'/>
            <InputTemplates placeholder='new email' type='text'/>
            <InputTemplates placeholder='new password' type='password'/>
            
            {errorMsg === '' ? null: <ErrorMessages text={errorMsg} />}

            <ButtonTemplates onClick={()=>handleRegister()} text='register'/>
            
            <HeaderTemplates text='or' style={{fontSize:"2rem"}}/>
            <ButtonGoogleLogin text='login with google'/>
            <SignTemplates onClick={() => loginRegisterContext?.setIsLogin(!loginRegisterContext.isLogin)} text='sign in'/>

        </AuthTemplates>
}