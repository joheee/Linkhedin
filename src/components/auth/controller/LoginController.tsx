import { LoginControllerInterface } from "../../server/credential/Interface";

export const LoginController =(prop:LoginControllerInterface)=>{
    const findUsername = prop.allUserContext!.filter((e:any)=>{return e.username === prop.userEmailInput})
    const findEmail = prop.allUserContext!.filter((e:any)=>{return e.email === prop.userEmailInput})
    const findPassword = prop.allUserContext!.filter((e:any)=>{return e.password === prop.passInput})

    if(findUsername.length !== 0) {
        if(findUsername[0].userID === findPassword[0].userID){
            return
        } 
    } else if(findEmail.length !== 0) {
        if(findEmail[0].userID === findPassword[0].userID){
            return
        }
    } 
    prop.setError('invalid credentials')
}