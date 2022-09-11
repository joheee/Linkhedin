import { useParams } from "react-router-dom"
import { ProfilePage } from "../../profile/page/ProfilePage"

export const OthersPage =()=>{
    const {username} = useParams()
    return <ProfilePage username={atob(username!)}/>
}