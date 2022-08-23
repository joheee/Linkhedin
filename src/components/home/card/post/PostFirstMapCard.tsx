import { RecommendCardInterface, SearchPopUpInterface } from "../../../server/credential/Interface";
import { PostSecondMapCard } from "./PostSecondMapCard";
import './PostFirstMapCard.scss'



export const PostFirstMapCard =({prop}:SearchPopUpInterface)=>{
    return  <div className="post-first-map-card-container">
                {
                    prop.map((item:RecommendCardInterface,i)=>(
                        <div key={i}>
                            <PostSecondMapCard {...item} />
                        </div>
                    ))
                }
            </div>  
}