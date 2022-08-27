import { BoxInnerTemplates } from '../../../utils/BoxInnerTemplates'
import { BoxTemplates } from '../../../utils/BoxTemplates'
import './NotificationSetting.scss'

export const NotificationSetting =()=>{
    return  <BoxTemplates>
                <BoxInnerTemplates>
                    <div className="notification-setting-container">
                        <div className="notification-setting-header-container">
                            <div className="fa-solid fa-bell"></div>
                            <div className="notification-setting-header-text-container">improve your notifications</div>
                        </div>
                        <div className="notification-setting-button-view-container">view settings</div>
                    </div>                    
                </BoxInnerTemplates>
            </BoxTemplates>
}