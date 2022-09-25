import { Link } from "react-router-dom"

export const NotificationFollowerRequest =({folls}:any)=>{
    return <div className="notification-info-card-container">
            <Link to={`/others/${btoa(folls.User.username!)}`} className="notification-info-card-picture-info-container feed-hover">
                <div className="notification-info-card-picture-container">
                    <img src={folls.User.UserDetail.photoProfile}/>
                </div>
                <div className="">
                    <div className=""><b>{folls.User.username}</b> send you a follow request!</div>
                </div>
            </Link>
        </div>
}