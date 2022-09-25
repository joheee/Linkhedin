import { useMutation, useSubscription } from "@apollo/client"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ProfilePage } from "../../profile/page/ProfilePage"
import { CREATE_PROFILE_VISITOR } from "../../server/mutation/MutationList"
import { GET_VISITOR_VALIDATION } from "../../server/query/QueryList"

export const OthersPage =()=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const navigate = useNavigate()
    useEffect(()=>{
        if(getUser === null) {
            navigate('/')
        }
    },[])
    const {username} = useParams()
    const [CreateVisitor] = useMutation(CREATE_PROFILE_VISITOR)
    const getVisitorValidation = useSubscription(GET_VISITOR_VALIDATION,{
        variables:{
            visitor:getUser.username!,
            target:atob(username!)
        }
    })
    useEffect(()=>{
        if(getVisitorValidation.loading === false) {
            if(getVisitorValidation.data.UserVisitor.length === 0){
                CreateVisitor({
                    variables:{
                        visitor:getUser.username,
                        target: atob(username!)!
                    }
                })
            }
        }
    },[getVisitorValidation.loading])
    return <ProfilePage username={atob(username!)}/>
}