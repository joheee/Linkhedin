import { RegisterControllerInterface, CreateUserInterface } from "../../server/credential/Interface"

export const RegisterController =(prop:RegisterControllerInterface)=>{
    const findUsername = prop.allUserContext!.filter((e:any)=>{return e.username === prop.usernameInput})
    const findEmail = prop.allUserContext!.filter((e:any)=>{return e.email === prop.emailInput})
    

    if(prop.usernameInput === '' || prop.emailInput === '' || prop.passwordInput === '' || prop.rePasswordInput === ''){
        prop.setError('all field must be filled')
    } else {
        if(prop.passwordInput !== prop.rePasswordInput) prop.setError('password not same')
        else {
            if(findUsername.length === 0 && findEmail.length === 0){
                prop.setError('')
                const  dummyUser: CreateUserInterface = {
                    userID: "",
                    username: prop.usernameInput,
                    email: prop.emailInput,
                    password: prop.passwordInput
                }
                return dummyUser
            } 
        }
    }
    prop.setError('username or email is not available')
    return null
}