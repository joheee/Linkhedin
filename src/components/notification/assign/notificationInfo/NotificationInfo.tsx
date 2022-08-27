import { dummyNotification } from "../../../server/dummy/Data"
import { BoxInnerTemplates } from "../../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../../utils/BoxTemplates"
import { NotificationInfoCard } from "../../card/NotificationInfoCard"
import './NotificationInfo.scss'

export const NotificationInfo =()=>{

    return  <BoxTemplates>
                <BoxInnerTemplates>
                    <div className="set-width"></div>
                    <div className="notification-info-container">
                        {dummyNotification.map((notif,i) => (
                            <div className="" key={i}>
                                <NotificationInfoCard {...notif}/>
                            </div>
                        ))}
                    </div>
                </BoxInnerTemplates>
            </BoxTemplates>
}