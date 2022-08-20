import { RecommendCardInterface } from "../../../server/credential/Interface";
import { dummyUser } from "../../../server/dummy/Data";
import { PostSecondMapCard } from "./PostSecondMapCard";
import './PostFirstMapCard.scss'

export const PostFirstMapCard =()=>{
    return  <div className="post-first-map-card-container">
                {
                    dummyUser.map((item:RecommendCardInterface,i)=>(
                        <div key={i}>
                            <PostSecondMapCard {...item} />
                        </div>
                    ))
                }
            </div>  
}