import { gapi } from "gapi-script"
import { useEffect } from "react"
import { googleClientID } from "../server/credential/Credential"

export const useGoogleLoginCustom =()=>{
    useEffect(()=>{
        const start =()=>{
            gapi.client.init({
                clientId: googleClientID,
                scope:""
            })
        }
        gapi.load('client:auth2', start)
    })
}