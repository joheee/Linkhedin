interface NotificationInfoCardInterface {
    picture?:string
    info:string
    createBy:string
    receiver:Array<string>
    createdAt:string
}
import './NotificationInfoCard.scss'
export const NotificationInfoCard =(prop:NotificationInfoCardInterface)=>{
    return  <div className="notification-info-card-container">
                <div className="notification-info-card-picture-info-container feed-hover">
                    <div className="notification-info-card-picture-container">
                        <img src={prop.picture} alt={prop.createBy} />
                    </div>
                    <div className="">{prop.info}</div>
                </div>
                <div className="notification-info-card-createdat-delete-container">
                    <div className="">{prop.createdAt}</div>
                    <div className="fa-solid fa-trash-can feed-hover"></div>
                </div>
            </div>
}