import { useEffect, useState } from "react"
import { SearchPopUpInterface } from "../../../server/credential/Interface"
import { InvitationUserCard } from "../../card/InvitationUserCard"
import './MyNetworkInvitation.scss'

export const MyNetworkInvitation =({prop}:SearchPopUpInterface)=>{
    const [seeAll, setSeeAll] = useState(false)
    const [offset, setOffset] = useState(4)
    useEffect(()=>{
        if(seeAll === true) setOffset(prop.length)
        else setOffset(4)
    },[seeAll])
    return  <div className="my-network-invitation-container">
                <div className="my-network-invitation-header-container">
                    <div className="my-network-invitation-header-text">invitations</div>
                    <div className="my-network-invitation-see-all-button feed-hover" onClick={()=>setSeeAll(!seeAll)}>see all {prop.length}</div>
                </div>
                <div className="my-network-invitation-card-container">
                {
                    prop.slice(0,offset).map((item,i) => (
                            <InvitationUserCard prop={item} key={i}/>
                            ))
                        }
                </div>
            </div>
}