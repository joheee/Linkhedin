import { PostSecondMapCard } from "./PostSecondMapCard";
import './PostFirstMapCard.scss'

export const PostFirstMapCard =({prop}:any)=>{
    
    return prop.map((item:any,i:any)=>(
        item.Posts.length === 0 ?
        null :
        <div key={i}>
            <PostSecondMapCard {...item} />
        </div>
    ))
}