import { PostInterface } from "../../../../server/credential/Interface";
import './PostCardItemButtonTemplates.scss'

export const PostCardItemButtonTemplates =(post:PostInterface)=>{
    return  <div className="post-card-item-button-container">
                <div className="post-card-item-button-each feed-hover">
                    <div className="fa-solid fa-thumbs-up"></div>
                    <div className="">like</div>
                </div>
                <div className="post-card-item-button-each feed-hover">
                    <div className="fa-solid fa-comment-dots"></div>
                    <div className="">comment</div>
                </div>
                <div className="post-card-item-button-each feed-hover">
                    <div className="fa-solid fa-share"></div>
                    <div className="">share</div>
                </div>
                <div className="post-card-item-button-each feed-hover">
                    <div className="fa-solid fa-paper-plane"></div>
                    <div className="">send</div>
                </div>
            </div>
}