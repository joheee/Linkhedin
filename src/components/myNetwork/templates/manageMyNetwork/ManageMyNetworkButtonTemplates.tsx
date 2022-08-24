import { useNavigate } from "react-router-dom"
import { MyNetworkButtonInterface } from "../../../server/credential/Interface"
import './ManageMyNetworkButtonTemplates.scss'

export const ManageMyNetworkButtonTemplates =(prop:MyNetworkButtonInterface)=>{
    const navigate = useNavigate()
    return  <div className="manage-my-network-button-component feed-hover" onClick={()=>navigate(prop.navigate)}>
                <div className="manage-my-network-button-header-component">
                    <div className={prop.icon}></div>
                    <div className="">{prop.text}</div>
                </div>
                <div className="">{prop.dummyData}</div>
            </div>
}