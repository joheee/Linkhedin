import { useSubscription } from '@apollo/client'
import { Link } from 'react-router-dom'
import { GET_POST_NOTIFICATION } from '../../../server/query/QueryList'

export const NotificationCreatePost =({folls}:any)=>{

    const getPostNotification = useSubscription(GET_POST_NOTIFICATION,{
        variables:{
            username:folls.targetFollow
        }
    })

    return  <>
                {
                    getPostNotification.loading === true ?
                    null :
                    getPostNotification.data.PostCreateNotification.length === 0 ?
                    null :
                    getPostNotification.data.PostCreateNotification.map((item:any)=>(
                        <div className="notification-info-card-container">
                            <Link to={`/post-detail/${item.post_id}`} className="notification-info-card-picture-info-container feed-hover">
                                <div className="notification-info-card-picture-container">
                                    <img src={item.User.UserDetail.photoProfile}/>
                                </div>
                                <div className="">
                                    <div className=""><b>{item.User.username}</b> create a new post!</div>
                                </div>
                            </Link>
                        </div>
                    ))
                        
                }
            </>
}