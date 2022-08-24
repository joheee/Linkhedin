import { BoxInnerTemplates } from "../../../utils/BoxInnerTemplates"
import { UserYouMightKnowTemplates } from "../../templates/userYouMightKnow/UserYouMightKnowTemplates"
import './UserYouMightKnow.scss'

export const UserYouMightKnow =()=>{
    return  <BoxInnerTemplates>
                <div className="user-you-might-know-header-container">
                    <div className="user-you-might-know-label">
                        user you might know
                    </div>
                    <div className="user-you-might-know-button-see-all feed-hover">
                        see all
                    </div>
                </div>
                <UserYouMightKnowTemplates/>
            </BoxInnerTemplates>

}