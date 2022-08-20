import {GoogleLogin} from "react-google-login"
import { googleClientID } from "../server/credential/Credential"
import { ButtonGoogleProp } from "../server/credential/Interface"
import "./ButtonGoogleLogin.scss"

export const ButtonGoogleLogin = ({text}:ButtonGoogleProp) => {

    const onSuccess = (res:any) => {
        console.log('success ', res.profileObj)
    }
    const onFailure = (res:any) => {
        console.log('failed ', res)
    }

    return <GoogleLogin
            className="google-login-button-component"
            clientId={googleClientID}
            buttonText={text}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
}