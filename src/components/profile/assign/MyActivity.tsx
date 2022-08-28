import { BoxInnerTemplates } from "../../utils/BoxInnerTemplates"
import './MyActivity.scss'

interface MyActivityInterface {
    prop: {
        isActivity: boolean
        setIsActivity: (activate:boolean) => void
    }
}

export const MyActivity =({prop}:MyActivityInterface)=>{
    return  <BoxInnerTemplates>
                <div className="my-activity-container">
                    <div className="my-activity-header">
                        <div className="">
                            <div className="my-activity-text">activity</div>
                            <div className="my-activity-follower">{423} followers</div>
                        </div>
                        <div className="follow-button-effect">start a post</div>
                    </div>
                    <div className="my-activity-see-more feed-hover" onClick={()=>prop.setIsActivity(!prop.isActivity)}>see more</div>
                </div>
            </BoxInnerTemplates>
}